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
    setSection: any,
    initialState: any,
    SECTION_RADIO_OPTION: any,
    hideModal: boolean,
    setHideModal: any
}

type contentPropsType = {
    content: contentType,
    state: string,
    handleChange: any
}

type dynamicPropsType = {
    type: string,
    id: string,
    placeholder: string,
    required: boolean,
    options: Array<{ option: string, value: string }>,
    state: string,
    handleChange: any
}

type headlinePropsType = {
    headline: string
}

type modalPropsType = {
    setHideModal: any
}

type radioSectionPropsType = {
    SECTION_RADIO_OPTION: any
}