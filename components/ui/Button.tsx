import React from 'react'

type buttonPropsType = {
    customStyle: any,
    type: string,
    value: string
}

const Button = (buttonProps: buttonPropsType) => {
    const { type, value, customStyle } = buttonProps;

    return (
        <input
            type={type}
            value={value}
            style={customStyle}
        />
    )
}

export default Button