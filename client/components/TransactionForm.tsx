import { useContext, useEffect } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { FaSpinner } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const TransactionForm: React.FC = (): JSX.Element => {
	const { currentAccount, formData, handleChange, sendTransaction, isLoading } =
		useContext(TransactionContext);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		const { receiver, amount, message } = formData;

		e.preventDefault();

		if (!receiver || !amount || !message) {
			return;
		} else {
			sendTransaction();
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='bg-gray-800 p-8 rounded-xl border-2 border-gray-600 border-opacity-50 backdrop-blur bg-opacity-25'>
				<h1 className='text-center text-xl font-semibold tracking-wide'>
					Send
				</h1>
				<div className='flex items-center justify-center gap-12 md:gap-20 xl:gap-24 '>
					<div className='flex-1'>
						<span>From</span>
						<input
							name='sender'
							placeholder='Address From'
							type='text'
							className='my-2 w-full rounded-sm p-4 outline-2 outline outline-gray-700 bg-transparent border-none text-sm'
							value={currentAccount}
							readOnly
							disabled
						/>
					</div>
					<BsArrowRight size='2rem' />
					<div className='flex-1'>
						<span>To</span>
						<input
							name='receiver'
							placeholder='Address To'
							type='text'
							className='my-2 w-full rounded-sm p-4 outline-2 outline outline-gray-700 bg-transparent border-none text-sm '
							onBlur={handleChange}
						/>
					</div>
				</div>
				<div className='text-center my-2'>
					<input
						name='amount'
						placeholder='Amount'
						type='number'
						step={0.0001}
						min={0.0001}
						className='my-2 w-full rounded-sm p-4 outline-2 outline outline-gray-700  bg-transparent border-none text-sm '
						onBlur={handleChange}
					/>
				</div>
				<div className='text-center my-2'>
					<input
						name='message'
						placeholder='Message'
						type='text'
						className='my-2 w-full rounded-sm p-4 outline-2 outline outline-gray-700 bg-transparent border-none text-sm'
						onBlur={handleChange}
					/>
				</div>
				<div className='text-center my-2'>
					{isLoading ? (
						<button
							disabled
							className='mt-2 border-[1px] py-2 px-16 border-[#3d4f7c] rounded-full cursor-pointer'>
							<FaSpinner className='animate-spin' size='1.5rem' />
						</button>
					) : (
						<button
							type='submit'
							className='mt-2 border-[1px] py-2 px-16 border-[#3d4f7c] rounded-full cursor-pointer'>
							Send
						</button>
					)}
				</div>
			</div>
		</form>
	);
};

export default TransactionForm;
