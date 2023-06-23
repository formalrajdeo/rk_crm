type contentType = Array<{
    htmlFor: string,
    label: string
    type: string,
    id: string,
    placeholder: string,
    required: boolean,
    options: Array<{ option: string, value: string }>
    style: object
}>

type sectionPropsType = {
    SECTION_NAME: string,
    SECTION_DATA: Array<{
        headline: string,
        content: contentType
    }>,
    section: number,
    setSection: any
}

type contentPropsType = {
    content: contentType
}

type dynamicPropsType = {
    type: string,
    id: string,
    placeholder: string,
    required: boolean,
    options: Array<{ option: string, value: string }>
}

type headlinePropsType = {
    headline: string
}