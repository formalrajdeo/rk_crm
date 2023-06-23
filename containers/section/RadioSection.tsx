import { Radio } from '@/components/ui'
import React from 'react'

const RadioSection = (radioSectionProps: radioSectionPropsType) => {
    const { SECTION_RADIO_OPTION } = radioSectionProps;

    return (
        <div className="flex flex-col">
            <div className="text-xs flex gap-2"
                style={{ margin: '1rem 0' }}
            >
                <div className="">
                    <span className='font-bold'>
                        Client Access
                    </span>
                </div>
                <Radio
                    radioOptions={SECTION_RADIO_OPTION}
                />
            </div>
            <div className='text-xs font-bold'>Client Admin Users</div>
        </div>
    )
}

export default RadioSection