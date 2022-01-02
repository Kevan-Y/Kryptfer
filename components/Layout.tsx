import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<div className='px-4 sm:px-20'>{children}</div>
		</>
	);
};

export default Layout;
