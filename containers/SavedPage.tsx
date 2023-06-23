import React from 'react'
import { BiCheckCircle } from 'react-icons/bi'

const SavedPage = () => {
    return (
        <div className='h-screen flex justify-center items-center text-center'>
            <div className="flex flex-col items-center space-y-2">
                <BiCheckCircle fontSize={'7em'} />
                <h1 className="text-4xl font-bold">Saved successfully !</h1>
            </div>
        </div>
    )
}

export default SavedPage