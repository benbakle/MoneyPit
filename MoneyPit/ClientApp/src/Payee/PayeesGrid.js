import { usePayees } from './__.provider';
import React, { Fragment, useEffect } from 'react';
import { BUDGET_CATEGORIES } from 'constants/budget-categories';
import Grid, { GridCell } from 'layout/Grid';
import { Currency } from 'controls';

export default function PayeesGrid() {
	const { payees, getPayees } = usePayees()

	useEffect(() => {
		if (!payees)
			getPayees();
	}, [payees])

	return payees
		? <Grid {...{ columns: 3 }}  >
			{payees.map(({ amount, payeeName, budgetCategory }, key) =>
				<Fragment {...{ key }}>
					<GridCell>{payeeName}</GridCell>
					<GridCell>{BUDGET_CATEGORIES[budgetCategory]}</GridCell>
					<GridCell><Currency {...{ value: amount }} /></GridCell>
				</Fragment>
			)}
		</Grid>
		: null
}