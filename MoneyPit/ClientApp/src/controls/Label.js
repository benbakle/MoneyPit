import React from 'react';

const Label = ({ htmlFor, label, ...rest }) =>
	<label {...{
		className: `${htmlFor}--label`,
		children: label,
		htmlFor,
		...rest,
	}} />


export default Label;