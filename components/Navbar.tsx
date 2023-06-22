import { LOGO } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import { BsBell, BsSearch } from 'react-icons/bs'
import { RiSettingsLine } from 'react-icons/ri'

const Navbar = () => {
    return (
        <nav className='flex justify-center'>
            <div className="h-16 flex justify-between items-center w-11/12 ">
                <div className="flex justify-center items-center">
                    <Image src={LOGO} alt={'logo'} height={50} width={100} />
                    <span className='text-red-500 font-bold text-xl pl-2'>
                        D'LittMan
                    </span>
                </div>
                <div className="flex justify-end items-center w-1/2">
                    <div className="p-4 hover:text-blue-600">
                        <BsSearch fontSize={'1.3em'} />
                    </div>
                    <div className="p-4 hover:text-blue-600">
                        <RiSettingsLine fontSize={'1.3em'} />
                    </div>
                    <div className="p-4 hover:text-blue-600">
                        <BsBell fontSize={'1.3em'} />
                    </div>
                    <div className="bg-burgundy px-3 py-1.5 text-white rounded-md 
                    hover:bg-blue-400 hover:text-white">
                        <span className='font-bold'>A</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar