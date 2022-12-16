import React from 'react';
import IncomesContext from '../../context/incomes';

const IncomeDetails = () => {
	const { incomes } = React.useContext(IncomesContext);

	if (!incomes || incomes.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center">
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-3xl font-bold">Incomes History</h1>
					<p className="text-lg">You have no incomes history</p>
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-3xl font-bold">Income Details</h1>
			</div>

			<div className="flex flex-col items-center justify-center">
				<table className="table-auto">
					<thead>
						<tr>
							<th className="px-4 py-2">Gross Income</th>
							<th className="px-4 py-2">Net Income</th>
						</tr>
					</thead>
					<tbody>
						{incomes.map((income, index) => (
							<tr key={index}>
								<td className="border px-4 py-2">{income.grossIncome}</td>
								<td className="border px-4 py-2">{income.netIncome}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default IncomeDetails;
