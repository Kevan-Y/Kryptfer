import { FaEthereum } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
const wallet = () => {
	return (
		<>
			<div className='flex flex-col xl:flex-row gap-y-12 mt-12'>
				<div className='flex-[0.5] flex justify-center items-center '>
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
							0xEFB901EA050B47615D1E44EDED4B1551015A820A
						</div>
						<div className='flex justify-between'>
							<p className='te'>Panda Nox</p>
							<p className='text-xs'>
								0.0032 <span className='text-sm font-semibold'>ETH</span>
							</p>
						</div>
					</div>
				</div>
				<div className='flex-1 break-words flex justify-center'>
					<div className='bg-gray-800 p-8 rounded-xl border-2 border-gray-600 border-opacity-50 backdrop-blur bg-opacity-25'>
						<h1 className='text-center text-xl font-semibold tracking-wide'>
							Send
						</h1>
						<div className='flex items-center justify-center gap-12 md:gap-20 xl:gap-24 '>
							<div className='flex-1'>
								<span>From</span>
								<input
									placeholder='Address From'
									type='text'
									className='my-2 w-full rounded-sm p-4 outline-2 outline outline-gray-700 bg-transparent border-none text-sm'
									value='0xEFB901EA050B47615D1E44EDED4B1551015A820A'
									readOnly
									disabled
								/>
							</div>
							<BsArrowRight size='2rem' />
							<div className='flex-1'>
								<span>To</span>
								<input
									placeholder='Address To'
									type='text'
									className='my-2 w-full rounded-sm p-4 outline-2 outline outline-gray-700 bg-transparent border-none text-sm '
									value=''
								/>
							</div>
						</div>
						<div className='text-center my-2'>
							<input
								placeholder='Amount'
								type='number'
								step={0.000001}
								min={0.000001}
								className='my-2 w-full rounded-sm p-4 outline-2 outline outline-gray-700  bg-transparent border-none text-sm '
							/>
						</div>
						<div className='text-center my-2'>
							<input
								placeholder='Message'
								type='text'
								className='my-2 w-full rounded-sm p-4 outline-2 outline outline-gray-700 bg-transparent border-none text-sm'
								value=''
							/>
						</div>
						<div className='text-center my-2'>
							<button className='mt-2 border-[1px] py-2 px-16 border-[#3d4f7c] rounded-full cursor-pointer'>
								Send
							</button>
						</div>
					</div>
				</div>
			</div>
			<hr className='my-16 border-0' />
			<div>
				<h1 className='text-2xl font-semibold my-4'>History Transactions</h1>
				<div className='overflow-x-auto'>
					<table className='table border-separate w-full'>
						<thead className='bg-gray-400 backdrop-blur bg-opacity-25'>
							<tr>
								<th className='p-4 text-left w-[10rem]'>Date</th>
								<th className='p-4 text-left'>From</th>
								<th className='p-4 text-left'>To</th>
								<th className='p-4 text-left'>Amount</th>
								<th className='p-4 text-left w-[10rem]'>Message</th>
							</tr>
						</thead>
						<tbody className='bg-gray-400 backdrop-blur bg-opacity-25'>
							<tr>
								<td className='p-4'>{new Date().toISOString()}</td>
								<td className='p-4'>
									0xEFB901EA050B47615D1E44EDED4B1551015A820A
								</td>
								<td className='p-4'>
									0xEFB901EA050B47615D1E44EDED4B1551015A820A
								</td>
								<td className='p-4'>2.032023 ETH</td>
								<td className='p-4 max-w-[25rem] break-words'>
									DSAAAAAAAAAAAAAAAASSSSSdsaaaaaaaaaaaSSSSSSSSSSSS
								</td>
							</tr>
							<tr>
								<td className='p-4'>{new Date().toISOString()}</td>
								<td className='p-4'>
									0xEFB901EA050B47615D1E44EDED4B1551015A820A
								</td>
								<td className='p-4'>
									0xEFB901EA050B47615D1E44EDED4B1551015A820A
								</td>
								<td className='p-4'>2.032023 ETH</td>
								<td className='p-4 max-w-[25rem] break-words'>
									DSAAAAAAAAAAAAAAAASSSSSdsaaaaaaaaaaaSSSSSSSSSSSS
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default wallet;
