import { Input, Select } from '@/components/ui';
import { CONSTANTS } from '@/constants';
import React from 'react'

const checkHtmlType = (dynamicProps: dynamicPropsType) => {
    const {
        type,
        id,
        placeholder,
        required,
        options,
        state,
        handleChange
    } = dynamicProps;

    if (CONSTANTS.HTML_INPUT_ELEMENTS.includes(type)) {
        return (
            <Input
                type={type}
                id={id}
                placeholder={placeholder}
                required={required}
                state={state}
                handleChange={handleChange}
            />
        )
    }

    if (type === "select") {
        return (
            <Select
                type={type}
                id={id}
                placeholder={placeholder}
                required={required}
                options={options}
                state={state}
                handleChange={handleChange}
            />
        )
    }
}

const CreateDynamicElement = (dynamicProps: dynamicPropsType) => {
    return (
        checkHtmlType(dynamicProps)
    )
}

export default CreateDynamicElement