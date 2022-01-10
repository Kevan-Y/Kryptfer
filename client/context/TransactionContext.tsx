import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';

interface TransactionContextInterface {
	[key: string]: any;
}

const initialState = { connectWallet: async () => {}, currentAccount: '' };

declare const window: any;

export const TransactionContext =
	React.createContext<TransactionContextInterface>(initialState);

let ethereum: any;

export const TransactionProvider = ({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element => {
	const [currentAccount, setCurrentAccount] = useState('');
	const [currentAccountBalance, setCurrentAccountBalance] = useState('');
	const [transactions, setTransactions] = useState([]);

	const [formData, setFormData] = useState({
		receiver: '',
		amount: '',
		message: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [transactionCount, setTransactionCount] = useState(0);

	const handleChange = (e: Event) => {
		setFormData((prevState) => ({
			...prevState,
			[(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
				.value,
		}));
	};

	const getAllTransactions = async () => {
		try {
			if (!ethereum) return alert('Please Install Metamask');
			const transactionContract = getEthereumContract();
			const availableTransactions =
				await transactionContract!.getAllTransactions();
			const structureTransactions = availableTransactions.map(
				(transaction: any) => ({
					receiver: transaction.receiver,
					sender: transaction.sender,
					message: transaction.message,
					timestamp: new Date(
						transaction.timestamp.toNumber() * 1000,
					).toLocaleString(),
					amount: parseInt(transaction.amount._hex) / 10 ** 18,
				}),
			);
			setTransactions(structureTransactions);
		} catch (error) {}
	};

	const getEthereumContract = () => {
		try {
			const provider = new ethers.providers.Web3Provider(ethereum);

			const signer = provider.getSigner();
			const transactionContract = new ethers.Contract(
				contractAddress,
				contractABI,
				signer,
			);
			return transactionContract;
		} catch (e) {
			console.log('Error getting contract');
			return;
		}
	};

	const checkIfWalletIsConnected = async () => {
		try {
			if (!ethereum) return alert('Please Install Metamask');

			const accounts = await ethereum.request({ method: 'eth_accounts' });
			const provider = new ethers.providers.Web3Provider(ethereum);
			if (accounts.length) {
				setCurrentAccount(accounts[0]);
				setCurrentAccountBalance(
					ethers.utils.formatEther(
						await provider.getBalance(accounts.toString()),
					),
				);
				await checkIfTransactionsExist();
				await getAllTransactions();
			} else {
				console.log('No Account Found');
			}
		} catch (error) {
			console.error(error);
		}
	};

	const checkIfTransactionsExist = async () => {
		try {
			const transactionContract = getEthereumContract();
			const transactionCount = await transactionContract!.getTransactionCount();
			setTransactionCount(transactionCount);
		} catch (error) {
			setTransactionCount(0);
		}
	};

	const connectWallet = async () => {
		try {
			if (!ethereum) return alert('Please Install Metamask');
			const accounts = await ethereum.request({
				method: 'eth_requestAccounts',
			});
			const provider = new ethers.providers.Web3Provider(ethereum);

			setCurrentAccount(accounts[0]);
			setCurrentAccountBalance(
				ethers.utils.formatEther(
					await provider.getBalance(accounts.toString()),
				),
			);
			await checkIfTransactionsExist();
			await getAllTransactions();
		} catch (error) {
			console.error(error);
		}
	};

	const sendTransaction = async () => {
		try {
			if (!ethereum) return alert('Please Install Metamask');

			const { receiver, amount, message } = formData;
			const parsedAmount = ethers.utils.parseEther(amount);
			const transactionContract = getEthereumContract();

			await ethereum.request({
				method: 'eth_sendTransaction',
				params: [
					{
						from: currentAccount,
						to: receiver,
						gas: '0x5208',
						value: parsedAmount._hex,
					},
				],
			});

			const transactionHash = await transactionContract!.addToBockchain(
				receiver,
				parsedAmount,
				message,
			);

			setIsLoading(true);
			await transactionHash.wait();

			setIsLoading(false);

			const transactionCount = await transactionContract!.getTransactionCount();

			setTransactionCount(transactionCount.toNumber());
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			ethereum = window.ethereum;
		}

		checkIfWalletIsConnected();
		checkIfTransactionsExist();
	}, []);

	return (
		<TransactionContext.Provider
			value={{
				connectWallet,
				currentAccount,
				formData,
				setFormData,
				handleChange,
				sendTransaction,
				currentAccountBalance,
				transactions,
				isLoading,
				transactionCount,
			}}>
			{children}
		</TransactionContext.Provider>
	);
};
