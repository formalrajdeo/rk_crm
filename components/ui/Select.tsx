import React from 'react'

const Select = (selectProps: selectPropsType) => {
    const {
        type,
        id,
        placeholder,
        required,
        options,
        handleChange,
        state
    } = selectProps;
    return (
        <select
            id={id}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 text-base font-bold p-2 w-72"
            name={id}
            onChange={(e) => handleChange(e)}
            defaultValue={state[id]}
        >
            {options.length > 0 && options.map((option, idx) => {
                return (
                    <option key={idx} value={option.value}>{option.option}</option>
                )
            })}
        </select>
    )
}

export default Select