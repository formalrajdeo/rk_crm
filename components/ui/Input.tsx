import React from 'react'

type inputPropsType = {
    type: string,
    id: string,
    placeholder: string,
    required: boolean
}

const InputText = (inputProps: inputPropsType) => {
    const {
        type,
        id,
        placeholder,
        required,
    } = inputProps;

    return (
        <input
            type={type}
            id={id}
            className="border border-blue-400 rounded-lg text-base font-bold p-4"
            placeholder={placeholder}
            required={required}
        />
    )
}

export default InputText