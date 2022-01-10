import { useContext } from 'react';
import Link from 'next/Link';
import { TransactionContext } from '../context/TransactionContext';

const Footer: React.FC = (): JSX.Element => {
	const { connectWallet, currentAccount } = useContext(TransactionContext);

	return (
		<footer className='text-gray-100'>
			<div className='py-16 flex justify-evenly flex-col md:flex-row gap-y-12'>
				<div className='self-center'>
					<img
						src={'/image/kryptofer_logo.png'}
						alt='Hero image'
						className='h-12 cursor-pointer'
					/>
				</div>
				<div className='self-center'>
					<ul className='font-spartan-sans flex gap-12 flex-col xs:flex-row text-center'>
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
						<li>
							<Link href='#'>
								<a>Contact us</a>
							</Link>
						</li>
						<li>
							{!currentAccount ? (
								<button onClick={connectWallet}>Login</button>
							) : null}
						</li>
					</ul>
				</div>
			</div>
			<p className='text-xs mb-4 text-center'>
				&copy; 2022 Kevan-Y | All rights reserved
			</p>
		</footer>
	);
};

export default Footer;
