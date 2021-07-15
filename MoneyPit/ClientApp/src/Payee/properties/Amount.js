import React from 'react';
import { GridCellWithInput } from "layout/Grid";
import { usePayees } from '../__.provider';
import { LOCAL_STRINGS } from '../__.strings';

export default function Amount() {
	const { amount: value, onChange } = usePayees()

	return <>
		<GridCellWithInput {...{
			label: LOCAL_STRINGS['Amount'],
			property: 'amount',
			value,
			onChange,
		}} />
	</>
}