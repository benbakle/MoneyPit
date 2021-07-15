import React from 'react';
import { Label } from '.';
import { objectToLabelValueArray } from 'utilities/objects-arrays';
import { classNameFor } from 'utilities/components';

export default function Select({
	label = property,
	className,
	optionsConstant,
	options,
	property,
	...rest }) {

	const _name = classNameFor('select', property);

	const _options =
		optionsConstant
			? objectToLabelValueArray(optionsConstant)
			: options

	return (
		<>
			<Label {...{ label, htmlFor: _name }} />
			<select {...{
				className: _name,
				name: _name,
				...rest,
			}}>
				{_options?.map(({ value, label }, key) =>
					<option {...{
						className: classNameFor('select', property, 'option'),
						children: label,
						value,
						key,
					}} />
				)}
			</select>
		</>
	)
}