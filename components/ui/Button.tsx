import React from 'react'

const Button = (buttonProps: buttonPropsType) => {
    const { type, value, customStyle } = buttonProps;

    return (
        <input
            type={type}
            defaultValue={value}
            style={customStyle}
        />
    )
}

export default Button