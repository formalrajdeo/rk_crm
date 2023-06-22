import { Input, Select } from '@/components/ui';
import React from 'react'

type dynamicPropsType = {
    type: string,
    id: string,
    placeholder: string,
    required: boolean,
    options: Array<{ option: string, value: string }>
}

const checkHtmlType = (dynamicProps: dynamicPropsType) => {
    const {
        type,
        id,
        placeholder,
        required,
        options
    } = dynamicProps;

    if (["email", "text"].includes(type)) {
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