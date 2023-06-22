import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'

const Header = () => {
    return (
        <header className='text-sm'>
            <div className="flex justify-start items-center">
                <span>Group Settings</span>
                <span className='px-3'><FaGreaterThan fontSize={'0.6em'} /></span>
                <span className='font-bold'>Account/Group Details</span>
            </div>
            <div className="flex justify-start items-center my-4 flex-wrap gap-2 max-sm:justify-center">
                <div className="border border-blue-500 w-52 h-14 flex justify-start items-center">
                    <span className='pl-4 font-bold'>Basic info</span>
                </div>
                <div className="border border-blue-500 w-52 h-14 flex justify-start items-center mx-2">
                    <span className='pl-4'>Client Access</span>
                </div>
                <div className="border border-blue-500 w-52 h-14 flex justify-start items-center">
                    <span className='pl-4'>Firm Access</span>
                </div>
            </div>
        </header>
    )
}

export default Header