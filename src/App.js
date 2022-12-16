import React from 'react';
import './app.css';
import { Tabs, Tab } from './components/tabs';
import IncomeCalculator from './components/income/IncomeCalculator';
import { IncomesProvider } from './context/incomes';
import IncomeDetails from './components/income-details/IncomeDetails';

const App = () => {
	return (
		<IncomesProvider>
			<Tabs>
				<Tab component={<IncomeCalculator />} active>
					Income
				</Tab>
				<Tab component={<IncomeDetails />}>Income Details</Tab>
			</Tabs>
		</IncomesProvider>
	);
};

export default App;
