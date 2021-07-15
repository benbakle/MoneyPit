import { usePayees } from './__.provider';
import React from 'react';

export default function AddPayeeButton(props) {
	const { addPayee } = usePayees()

	return <>
		<button {...{
			onClick: addPayee,
			children: 'Add Payee',
			...props,
		}} />
	</>
}