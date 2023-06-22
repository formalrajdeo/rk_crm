import { Label } from '@/components/ui'
import React from 'react'
import CreateDynamicElement from './CreateDynamicElement'
import { CONSTANTS } from '../constants'

const BasicInformation = () => {
    return (
        <div className="w-full p-4">
            <form className="">
                {CONSTANTS.BASIC_INFO_INPUT.map((basic_info_input, idx) => {
                    return (
                        <div key={idx} className="">
                            <div className='font-bold' style={{ margin: '1rem 0' }}>
                                {basic_info_input.headline}
                            </div>
                            <div style={{ display: 'grid', gap: "1rem", gridTemplateColumns: 'repeat(4, 1fr)' }}>
                                {basic_info_input.content.map((data, index) => {
                                    return (
                                        <div key={index} className='flex flex-col'
                                            style={data.style}
                                        >
                                            <Label
                                                htmlFor={data.htmlFor}
                                                label={data.label}
                                            />
                                            <CreateDynamicElement
                                                type={data.type}
                                                id={data.id}
                                                placeholder={data.placeholder}
                                                required={data.required}
                                                options={data.options}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
                <div className="flex justify-start items-center" style={{ marginTop: "4rem" }}>
                    <button type="button"
                        style={{ backgroundColor: '#A1BBCF', color: "white", padding: "1rem 3rem" }}>
                        SAVE
                    </button>
                </div>
            </form >
        </div >
    )
}

export default BasicInformation