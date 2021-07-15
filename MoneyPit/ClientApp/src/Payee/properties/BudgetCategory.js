import React from "react";
import { BUDGET_CATEGORIES } from "constants/budget-categories";
import { GridCellWithSelect } from "layout/Grid";
import { usePayees } from "../__.provider";
import { LOCAL_STRINGS } from "../__.strings";

export default function BudgetCategory() {
	const { budgetCategories:value, transactionType, onChange } = usePayees();

	return transactionType === '1'
		? <GridCellWithSelect {...{
			label: LOCAL_STRINGS['Budget_Category'],
			property: 'budgetCategory',
			optionsConstant: BUDGET_CATEGORIES,
			value,
			onChange,
		}} />
		: null
}