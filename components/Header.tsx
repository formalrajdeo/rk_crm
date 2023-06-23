import { BASIC_INFO, CLIENT_ACCESS, FIRM_ACCESS } from '@/assets/images'
import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'

type headerPropsType = {
    section: number
}

const HEADER_ITEMS = [
    {
        header: 'Basic info',
        image: BASIC_INFO,
        style: { clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)" },
        styleChild: { width: "12.8rem", height: "3.4rem", clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)" }
    },
    {
        header: 'Client Access',
        image: CLIENT_ACCESS,
        style: { clipPath: "polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%, 0% 0%)" },
        styleChild: { width: "12.8rem", height: "3.4rem", clipPath: "polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%, 0% 0%)" }
    },
    {
        header: 'Firm Access',
        image: FIRM_ACCESS,
        style: { clipPath: "polygon(100% 0%, 100% 50%, 100% 100%, 0% 100%, 10% 50%, 0% 0%)" },
        styleChild: { width: "12.8rem", height: "3.4rem", clipPath: "polygon(100% 0%, 100% 50%, 100% 100%, 0% 100%, 10% 50%, 0% 0%)" }
    }
]

const GroupSetting = () => {
    return (
        <div className="flex justify-start items-center">
            <span>Group Settings</span>
            <span className='px-3'><FaGreaterThan fontSize={'0.6em'} /></span>
            <span className='font-bold'>Account/Group Details</span>
        </div>
    )
}

const Header = (headerProps: headerPropsType) => {
    const { section } = headerProps;
    return (
        <header className='text-sm'>
            <GroupSetting />
            <div className="flex justify-start items-center my-4 flex-wrap max-sm:justify-center relative">
                {HEADER_ITEMS.map((headerItemData, headerItemIndex) => {
                    return (
                        <div
                            key={headerItemIndex}
                            className={`bg-blue-400 w-52 h-14 
                            flex justify-center items-center rounded-md
                            ${section >= headerItemIndex ? 'bg-blue-500' : ''}`}
                            style={headerItemData.style}
                        >
                            <div
                                className={`py-4 pl-8 rounded-md
                                ${section >= headerItemIndex ? 'font-bold bg-header-bg' : 'bg-white'}`}
                                style={headerItemData.styleChild}
                            >
                                {headerItemData.header}
                            </div>
                        </div>
                    )
                })}
            </div>
        </header>
    )
}

export default Header