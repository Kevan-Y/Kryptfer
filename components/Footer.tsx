import React from 'react';
import Link from 'next/Link';

const Footer = () => {
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
						<li>
							<Link href='/wallet'>
								<a>Wallet</a>
							</Link>
						</li>
						<li>
							<Link href='/transaction'>
								<a>Contact us</a>
							</Link>
						</li>
						<li>
							<Link href='/transaction'>
								<a>Login</a>
							</Link>
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
