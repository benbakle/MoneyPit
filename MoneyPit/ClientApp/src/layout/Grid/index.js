import React from 'react';
import Div from 'layout/Div';
import { Input, Select } from 'controls';
import { UpdateWithProps, classNameFor } from 'utilities/components';
import './__.css';

const Grid = ({ name, columns, children, ...rest }) =>
	<Div {...{
		name: classNameFor('grid', name),
		'data-columns': columns || 'auto-fit',
		children: <UpdateWithProps {...{ name, children }} />,
		...rest,
	}} />

export const GridCell = ({ name, modifier, ...rest }) =>
	<Div {...{
		...rest,
		name: `${classNameFor('grid-cell', name)}${modifier ? `--${modifier}` : ''}`,
	}} />

export const GridCellHeader = props =>
	<GridCell {...{
		...props,
		modifier: 'header',
	}} />

export const GridCellWithInput = props =>
	<GridCell {...{
		name: props.property,
		modifier: 'input',
		children: <Input {...props} />,
	}} />

export const GridCellWithSelect = props =>
	<GridCell {...{
		modifier: 'select',
		name: props.property,
		children: <Select {...props} />,
	}} />

export default Grid