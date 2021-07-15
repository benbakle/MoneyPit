
import React from 'react';
import { appendClassName } from 'utilities/strings';

export const typeIsFragment = element => element?.type === React.Fragment

export const customComponentProps = ({ name, className, ...rest }) => ({
    className: appendClassName(name, className),
    ...rest,
})

export const classNameFor = (type, name, modifier) =>
	`${type}__${name || 'default'}${modifier ? `--${modifier}`: ''}`

export const UpdateWithProps = ({ children, ...rest }) =>
    React.Children.map(children,
        child =>
            <> {typeIsFragment(child)
                ? <UpdateWithProps {...{
                    children: child.props.children,
                    ...rest
                }} />
                : React.cloneElement(child || <></>, { ...rest })}
            </>)

