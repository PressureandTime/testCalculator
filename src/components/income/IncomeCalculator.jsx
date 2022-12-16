import React, { useState } from 'react';
import IncomesContext from '../../context/incomes';

const IncomeCalculator = () => {
	const [grossIncome, setGrossIncome] = useState(0);
	const [netIncome, setNetIncome] = useState(0);
	const { setIncomes, incomes } = React.useContext(IncomesContext);

	const calculateNetIncome = (grossIncome) => {
		if (!grossIncome || Number(grossIncome) === 0) {
			return;
		}

		const taxRate = 0.2;
		const netIncome = grossIncome - grossIncome * taxRate;
		setNetIncome(netIncome);
		setIncomes([...incomes, { grossIncome, netIncome }]);
	};

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-3xl font-bold">Income Calculator</h1>
				<p className="text-lg">
					Enter your gross income to calculate your net income
				</p>
			</div>
			<div className="flex flex-col items-center justify-center my-5">
				<label className="text-xl font-bold">Gross Income</label>
				<input
					type="number"
					className="border-2 border-gray-300 p-2 rounded-md"
					value={grossIncome}
					onChange={(e) => setGrossIncome(e.target.value)}
				/>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
					onClick={() => calculateNetIncome(grossIncome)}
				>
					Calculate
				</button>
			</div>
			<div className="flex flex-col items-center justify-center">
				<label className="text-xl font-bold">Net Income</label>
				<input
					type="number"
					className="border-2 border-gray-300 p-2 rounded-md"
					value={netIncome}
					disabled
				/>
			</div>
		</div>
	);
};

export default IncomeCalculator;
