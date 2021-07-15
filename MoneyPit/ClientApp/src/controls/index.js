import React from 'react';
import Div from 'layout/Div';
import Input from './Input';
import Label from './Label';
import Select from './Select';

export const Loading = () =>
    <Div {...{ className: 'loading', children: "Loading..." }} />

export const Percent = ({ value }) =>
    <Div {...{ className: 'percent', children: `${value * 100}%` }} />

export const Currency = ({ value }) =>
    <Div {...{ className: 'dollars', children: `$${parseInt(value)?.toFixed(2)}` }} />

export {
    Label,
    Input,
    Select,
}