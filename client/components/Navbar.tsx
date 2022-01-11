import React, { useContext } from 'react';
import Link from 'next/link';
import { TransactionContext } from '../context/TransactionContext';

const Navbar = (): JSX.Element => {
	const { connectWallet, currentAccount } = useContext(TransactionContext);
	return (
		<nav className='w-full text-gray-100 transparent flex px-12 lg:px-32 py-4 items-center justify-between'>
			<Link href='/'>
				<img
					src={'/image/kryptofer_logo.png'}
					alt='Hero image'
					className='h-12 cursor-pointer'
				/>
			</Link>

			<div className='mr-16 overflow-hidden'>
				<ul className='font-spartan-sans flex gap-12 items-center'>
					<li>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					{currentAccount ? (
						<li>
							<Link href='/wallet'>
								<a>Wallet</a>
							</Link>
						</li>
					) : null}
					{!currentAccount ? (
						<li className='border px-4 py-2 rounded-full'>
							<button onClick={connectWallet}>Login</button>
						</li>
					) : null}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
