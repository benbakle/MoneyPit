import React from "react";
import { TRANSACTION_TYPES } from "constants/transaction-types";
import { GridCellWithSelect } from "layout/Grid";
import { usePayees } from "../__.provider";
import { LOCAL_STRINGS } from "../__.strings";

export default function TransactionType() {
	const { transactionType: value, onChange } = usePayees()

	return (<GridCellWithSelect {...{
		label: LOCAL_STRINGS['Transaction_Type'],
		property: 'transactionType',
		optionsConstant: TRANSACTION_TYPES,
		value,
		onChange,
	}} />)
}