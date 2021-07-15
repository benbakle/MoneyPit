import React from 'react';
import Grid from 'layout/Grid';
import { PayeeContextProvider } from './__.provider';
import BudgetCategory from './properties/BudgetCategory';
import PayeeName from './properties/PayeeName';
import TransactionType from './properties/TransactionType';
import Amount from './properties/Amount';
import AddPayeeButton from './AddPayeeButton';
import PayeesGrid from './PayeesGrid';

export default function AddPayee() {
	return <PayeeContextProvider>
		<Grid {...{ name: 'add-payee', columns: 'auto-fit', }}>
			<PayeeName />
			<TransactionType />
			<BudgetCategory />
			<Amount />
		</Grid>
		<AddPayeeButton />
		<PayeesGrid />
	</PayeeContextProvider>
}