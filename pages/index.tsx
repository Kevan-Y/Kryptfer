import type { NextPage } from 'next';
import { BsShieldCheck, BsSearch } from 'react-icons/bs';
import { BiTransferAlt } from 'react-icons/bi';
import Footer from '../components/Footer';

const urls = [
	'/image/binance-logo.png',
	'/image/ethereum-logo.png',
	'/image/hardhat-logo.png',
	'/image/metamask-logo.png',
];

const Home: NextPage = () => {
	return (
		<>
			<div className='flex flex-col mt-32 lg:flex-row xl:mx-24 2xl:mx-56 gap-12'>
				<div className='flex-1'>
					<h1 className='font-semibold text-4xl leading-relaxed'>
						Send Crypto <br /> across the world
					</h1>
					<p className='py-6 text-base leading-relaxed'>
						Explore the crypto world.
						<br />
						Buy and sell cryptocurrencies easily on Krypto.
					</p>
					<button
						type='button'
						className='text-base font-semibold w-full py-3 bg-blue-700 rounded-full'>
						Connect Wallet
					</button>
				</div>
				<div className='flex-1 perspective'>
					<div className='flex flex-col mt-10 justify-items-center place-items-center text-xs xs:text-base rotation'>
						<div className='w-full flex text-center border-t-2 border-b border-x-2 rounded-t-3xl bg-gray-800 border-gray-900 backdrop-blur bg-opacity-20 border-opacity-25'>
							<div className='w-full py-8 px-4 border-r-2 border-opacity-10 border-gray-900 '>
								Reliability
							</div>
							<div className='w-full py-8 px-4 border-r-2 border-opacity-10 border-gray-900 '>
								Security
							</div>
							<div className='w-full py-8 px-4 '>Ethereum</div>
						</div>
						<div className='w-full flex text-center border-b-2 border-t border-x-2 rounded-b-3xl bg-gray-800 border-gray-900 shadow-lg backdrop-blur bg-opacity-20  border-opacity-25'>
							<div className='w-full py-8 px-4 border-r-2 border-opacity-10 border-gray-900 '>
								Web 3.0
							</div>
							<div className='w-full py-8 px-4 border-r-2 border-opacity-10 border-gray-900 '>
								Low fees
							</div>
							<div className='w-full py-8 px-4 '>Blockchain</div>
						</div>
					</div>
				</div>
			</div>

			<hr className='my-16 border-0 h-[2px] bg-gradient-to-r from-[#6b728000] via-[#6b728075] to-[#6b728000]' />

			<div className='flex flex-col lg:flex-row xl:mx-24 gap-12'>
				<div className='flex-1 self-center'>
					<h1 className='font-semibold text-4xl leading-relaxed'>
						Services that we
						<br /> continue to improve
					</h1>
				</div>
				<div className='flex-1 flex flex-col gap-y-4 perspective'>
					<div className='flex py-8 px-4 bg-gray-800 rounded-3xl backdrop-blur bg-opacity-25 rotationServiceCard shadow-lg'>
						<div className='self-center mx-8 text-green-500'>
							<BsShieldCheck size='2.5rem' />
						</div>
						<div>
							<h2 className='text-lg mb-4'>Security Guaranteed</h2>
							<p className='text-sm'>
								Security is guaranteed. We always maintain privacy and
								maintaining the quality of our products.
							</p>
						</div>
					</div>
					<div className='flex py-8 px-4 bg-gray-800 rounded-3xl backdrop-blur bg-opacity-25 rotationServiceCard shadow-lg'>
						<div className='self-center mx-8 text-indigo-500'>
							<BsSearch size='2.5rem' />
						</div>
						<div>
							<h2 className='text-lg mb-4'>Best exchange rates</h2>
							<p className='text-sm'>Offer a competitive exchange rates.</p>
						</div>
					</div>
					<div className='flex py-8 px-4 bg-gray-800 rounded-3xl backdrop-blur bg-opacity-25 rotationServiceCard shadow-lg'>
						<div className='self-center mx-8 text-red-500'>
							<BiTransferAlt size='2.5rem' />
						</div>
						<div>
							<h2 className='text-lg mb-4'>Fastest transactions</h2>
							<p className='text-sm'>
								Fastest transactions is guaranteed. We provide the best server
								for better and faster transactions.
							</p>
						</div>
					</div>
				</div>
			</div>

			<hr className='my-16 border-0 h-[2px] bg-gradient-to-r from-[#6b728000] via-[#6b728075] to-[#6b728000]' />

			<div>
				<h1 className='font-semibold text-4xl leading-relaxed text-center'>
					Our Sponsors
				</h1>
				<div className='flex gap-24 content-center items-center place-content-center mt-12 '>
					{urls.map((url, key) => {
						return (
							<img
								src={url}
								key={key}
								className='w-[12rem] opacity-50 hover:opacity-100 transition duration-300 ease-in'
							/>
						);
					})}
				</div>
			</div>

			<hr className='mt-16 border-0 h-[2px] bg-gradient-to-r from-[#6b728000] via-[#6b728075] to-[#6b728000]' />
		</>
	);
};

export default Home;
