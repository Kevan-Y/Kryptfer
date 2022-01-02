import React from 'react';
import Link from 'next/Link';
const Navbar = () => {
	return (
		<div className='w-full text-gray-100 transparent flex  px-12 py-4 items-center justify-between'>
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
					<li>
						<Link href='/transaction'>
							<a>Transaction</a>
						</Link>
					</li>
					<li className='bg-blue-700 px-4 py-2 rounded-full'>
						<Link href='/login'>
							<a>Login</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
