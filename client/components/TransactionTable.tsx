import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const TransactionTable: React.FC = (): JSX.Element => {
	const { transactions, transactionCount } = useContext(TransactionContext);

	return (
		<>
			{transactionCount !== 0 ? (
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
							{[...transactions].reverse().map((data: any, key: number) => {
								return (
									<tr key={key}>
										<td className='p-4'>{data.timestamp}</td>
										<td className='p-4' title={data.sender}>
											{data.sender}
										</td>
										<td className='p-4' title={data.receiver}>
											{data.receiver}
										</td>
										<td className='p-4'>{data.amount} ETH</td>
										<td className='p-4 max-w-[25rem] break-words'>
											{data.message}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			) : (
				<div className='text-center text-2xl my-8'>No transactions</div>
			)}
		</>
	);
};

export default TransactionTable;
