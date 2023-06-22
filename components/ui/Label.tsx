import React from 'react'

type labelPropsType = {
    htmlFor: string,
    label: string
}

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