import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<div className='px-4 sm:px-20 text-gray-100 min-h-screen'>{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
