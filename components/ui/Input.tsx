import React from 'react'

type inputPropsType = {
    type: string,
    id: string,
    placeholder: string,
    required: boolean,
    state: any,
    handleChange: any
}

const InputText = (inputProps: inputPropsType) => {
    const {
        type,
        id,
        placeholder,
        required,
        state,
        handleChange
    } = inputProps;
    console.log('state[id] >> ', id, state[id])
    return (
        <>
            {type !== undefined && <input
                type={type}
                id={id}
                className="border border-blue-400 rounded-lg text-base font-bold p-2"
                placeholder={placeholder}
                required={required}
                name={id}
                value={state[id] !== undefined ? state[id] : ""}
                onChange={(e) => handleChange(e)}
            />}
        </>
    )
}

export default InputText