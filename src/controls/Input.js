
import React from 'react';
import { classNameFor } from 'utilities/components';
import Label from './Label';

export default function Input({ label, property, ...rest }) {
	const _name = classNameFor('input', property);

	return (
		<>
			<Label {...{ htmlFor: _name, label }} />
			<input {...{ name: _name, ...rest }} />
		</>
	)
}