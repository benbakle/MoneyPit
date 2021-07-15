export const appendClassName = (name, className) =>
    `${className ? `${className} ` : ''}${name || ''}`