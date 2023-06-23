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
    } = dynamicProps;

    if (CONSTANTS.HTML_INPUT_ELEMENTS.includes(type)) {
        return (
            <Input
                type={type}
                id={id}
                placeholder={placeholder}
                required={required}
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