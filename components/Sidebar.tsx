import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { RiCalendar2Line } from 'react-icons/ri'
import { TbLayoutDashboard, TbReport } from 'react-icons/tb'

const SIDEBAR_ITEMS = [
    {
        icon: <TbLayoutDashboard size={'1.5em'} />,
        item: "Dashboard",
        sidebarValue: "dashboard"
    },
    {
        icon: <RiCalendar2Line size={'1.5em'} />,
        item: "Calendar",
        sidebarValue: "calendar"
    },
    {
        icon: <AiOutlinePlusCircle size={'1.5em'} />,
        item: "Create",
        sidebarValue: "create"
    },
    {
        icon: <TbReport size={'1.5em'} />,
        item: "Report",
        sidebarValue: "report"
    },
]

const sidebarHandler = ({ setSidebar, sidebarValue, section, setHideModal }: any) => {
    if (sidebarValue !== "create" && section > 0 && section <= 2) {
        setHideModal(true)
    } else {
        setSidebar(sidebarValue)
    }
}

const Sidebar = (sidebarProps: sidebarPropsType) => {
    const { setSidebar, sidebar, section, setHideModal } = sidebarProps;

    return (
        <div className="bg-sidebar-black w-24 text-white flex flex-col justify-start items-center max-sm:hidden">
            {SIDEBAR_ITEMS.map((sidebarItem, sidebarItemIndex) => {
                return (
                    <button
                        key={sidebarItemIndex}
                        onClick={() => sidebarHandler(
                            { setSidebar, sidebarValue: sidebarItem.sidebarValue, section, setHideModal }
                        )}
                        className={`flex flex-col items-center p-4 w-full 
                        hover:bg-blue-400 hover:text-white 
                        ${sidebar === sidebarItem.sidebarValue ? 'bg-blue-400' : ''}`}>
                        {sidebarItem.icon}
                        <span className='text-sm pt-2'>{sidebarItem.item}</span>
                    </button>
                )
            })}
        </div>
    )
}

export default Sidebar

