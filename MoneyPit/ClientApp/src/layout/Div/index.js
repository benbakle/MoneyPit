import React from 'react';
import { customComponentProps } from 'utilities/components';

const Div = props =>
    <div {...customComponentProps(props)} />

export default Div;