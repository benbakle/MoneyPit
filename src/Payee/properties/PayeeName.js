import React from "react";
import { LOCAL_STRINGS } from "../__.strings";
import { GridCellWithInput } from "layout/Grid";
import { usePayees } from "../__.provider";

export default function PayeeName() {
	const { payeeName, onChange } = usePayees();

	return (<GridCellWithInput {...{
		label: LOCAL_STRINGS['Payee_Name'],
		property: 'payeeName',
		value: payeeName,
		onChange,
	}} />)
}