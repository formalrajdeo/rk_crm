import React from 'react'

type selectPropsType = {
    type: string,
    id: string,
    placeholder: string,
    required: boolean,
    options: Array<{ option: string, value: string }>
}

const Select = (selectProps: selectPropsType) => {
    const {
        type,
        id,
        placeholder,
        required,
        options
    } = selectProps;
    return (
        <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 text-base font-bold p-4 w-72">
            {options.map((option, idx) => {
                return (
                    <option key={idx} value={option.value}>{option.option}</option>
                )
            })}
        </select>
    )
}

export default Select