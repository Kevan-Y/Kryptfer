import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../utils/shortenAddress';
import { FaEthereum } from 'react-icons/fa';

const AccountCard: React.FC = (): JSX.Element => {
	const { currentAccount, currentAccountBalance } =
		useContext(TransactionContext);
	return (
		<div className='backdrop-blur bg-gradient-to-r from-[#3b82f675] to-[#9f123975] w-full max-w-[25rem] p-8 rounded-2xl'>
			<div className='flex justify-between'>
				<img
					src='/image/kryptofer_logo.png'
					alt=''
					className='h-9 opacity-75'
				/>
				<div className='border-2 self-center rounded-full p-2 opacity-75'>
					<FaEthereum size='1.5rem' />
				</div>
			</div>
			<div className='my-9 text-xs truncate'>
				{shortenAddress(currentAccount)}
			</div>
			<div className='flex justify-end'>
				<p className='text-xs'>
					{Number(currentAccountBalance).toFixed(4)}
					<span className='text-sm font-semibold'> ETH</span>
				</p>
			</div>
		</div>
	);
};

export default AccountCard;
