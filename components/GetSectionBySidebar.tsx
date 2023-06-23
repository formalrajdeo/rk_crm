import React from 'react'
import Header from './Header'
import { Section } from '@/containers'
import { CONSTANTS } from '@/constants'

type getSectionBySidebarPropsType = {
    sidebar: string,
    section: number,
    setSection: any,
    notify: any
}

const GetSectionBySidebar = (getSectionBySidebarProps: getSectionBySidebarPropsType) => {
    const { sidebar, section, setSection, notify } = getSectionBySidebarProps
    if (sidebar === "create") {
        return (
            <>
                <Header
                    section={section}
                />
                <Section
                    SECTION_NAME={CONSTANTS.GROUP_SETTINGS[section].SECTION_NAME}
                    SECTION_DATA={CONSTANTS.GROUP_SETTINGS[section].SECTION}
                    section={section}
                    setSection={setSection}
                    initialState={CONSTANTS.GROUP_SETTINGS[section].INITIAL_STATE}
                    notify={notify}
                />
            </>
        )
    }

    if (CONSTANTS.DASHBOARD_ITEMS.includes(sidebar)) {
        return (
            <div className='h-screen flex justify-center items-center text-center'>
                <div className="flex flex-col items-center space-y-2">
                    <h1 className="text-4xl font-bold">{sidebar}</h1>
                </div>
            </div>
        )
    }
}

export default GetSectionBySidebar