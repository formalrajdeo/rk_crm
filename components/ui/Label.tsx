import React from 'react'

const Label = (labelProps: labelPropsType) => {
    const { htmlFor, label } = labelProps;
    return (
        <label
            htmlFor={htmlFor}
            className="text-sm"
        >
            {label}
        </label>
    )
}

export default Label