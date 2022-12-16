import React, { useState } from 'react';
import { createContext } from 'react';

const IncomesContext = createContext();

export const IncomesProvider = ({ children }) => {
	const [incomes, setIncomes] = useState([{ netIncome: 0, grossIncome: 0 }]);

	return (
		<IncomesContext.Provider value={{ incomes, setIncomes }}>
			{children}
		</IncomesContext.Provider>
	);
};

export default IncomesContext;
