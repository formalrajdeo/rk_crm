import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { RiCalendar2Line } from 'react-icons/ri'
import { TbLayoutDashboard, TbReport } from 'react-icons/tb'

const Sidebar = () => {
    return (
        <div className="bg-sidebar-black w-28 text-white flex flex-col justify-start items-center">
            <div className="flex flex-col items-center p-4 w-full hover:bg-blue-400 hover:text-white">
                <TbLayoutDashboard size={'1.5em'} />
                <span className='text-sm pt-2'>Dashboard</span>
            </div>
            <div className="flex flex-col items-center p-4 w-full hover:bg-blue-400 hover:text-white">
                <RiCalendar2Line size={'1.5em'} />
                <span className='text-sm pt-2'>Calendar</span>
            </div>
            <div className="flex flex-col items-center p-4 w-full hover:bg-blue-400 hover:text-white">
                <AiOutlinePlusCircle size={'1.5em'} />
                <span className='text-sm pt-2'>Create</span>
            </div>
            <div className="flex flex-col items-center p-4 w-full hover:bg-blue-400 hover:text-white">
                <TbReport size={'1.5em'} />
                <span className='text-sm pt-2'>Report</span>
            </div>
        </div>
    )
}

export default Sidebar

