// ----------- COMPONENTS ----------- 

type getSectionBySidebarPropsType = {
    sidebar: string,
    section: number,
    setSection: any,
    hideModal: boolean,
    setHideModal: any
}

type headerPropsType = {
    section: number
}

type sidebarPropsType = {
    setSidebar: any,
    sidebar: string,
    section: number,
    setHideModal: any
}

// ----------- UI TYPES ----------- 

type buttonPropsType = {
    customStyle: any,
    type: string,
    value: string
}

type inputPropsType = {
    type: string,
    id: string,
    placeholder: string,
    required: boolean,
    state: any,
    handleChange: any
}

type labelPropsType = {
    htmlFor: string,
    label: string
}

type radioPropsType = {
    radioOptions: Array<{
        name: string,
        value: string,
        label: string
    }>
}

type selectPropsType = {
    type: string,
    id: string,
    placeholder: string,
    required: boolean,
    options: Array<{ option: string, value: string }>,
    handleChange: any,
    state: any
}