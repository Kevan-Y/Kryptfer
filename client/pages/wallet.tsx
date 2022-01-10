import TransactionForm from '../components/TransactionForm';
import AccountCard from '../components/AccountCard';
import TransactionTable from '../components/TransactionTable';
import type { NextPage } from 'next';

const wallet: NextPage = (): JSX.Element  => {
	return (
		<>
			<div className='flex flex-col xl:flex-row gap-y-12 mt-12'>
				<div className='flex-[0.5] flex justify-center items-center '>
					<AccountCard />
				</div>
				<div className='flex-1 break-words flex justify-center'>
					<TransactionForm />
				</div>
			</div>
			<hr className='my-16 border-0' />
			<div>
				<h1 className='text-2xl font-semibold my-4'>History Transactions</h1>
				<TransactionTable />
			</div>
		</>
	);
};

export default wallet;
