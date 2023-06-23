import React, { useReducer, useState } from 'react'
import Headline from './Headline'
import Content from './Content'
import { Button, Radio } from '@/components/ui'

// Reducer function
const formReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.field]: action.value
            };
        case 'RESET':
            return action.initialState;
        default:
            return state;
    }
}

const Section = (sectionProps: sectionPropsType) => {
    const { SECTION_DATA, SECTION_NAME, section, setSection, initialState, notify, SECTION_RADIO_OPTION } = sectionProps;


    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        dispatch({ type: 'CHANGE', field: name, value });
    };

    const onSubmit = (e: any) => {
        e.preventDefault()
        console.log('state.client_group_name.length >> ', state.client_group_name.length)
        if (state.client_group_name.length < 6) {
            notify()
        } else {
            alert(JSON.stringify(state))
            setSection(section + 1)
        }
    }

    // TODO : AXIOS CALL - For each page
    console.log('state >> ', state)

    return (
        <section id={SECTION_NAME} className='bg-white'>
            <div className="w-full p-4">
                <form className="" onSubmit={(e) => onSubmit(e)}>
                    {SECTION_RADIO_OPTION.length > 0
                        &&
                        <div className="flex flex-col">
                            <div className="text-xs flex gap-2" style={{ margin: '1rem 0' }}>
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
                    }
                    {SECTION_DATA.map((basic_info_input, idx) => {
                        return (
                            <div key={idx} className="">
                                <Headline
                                    headline={basic_info_input.headline}
                                />
                                <Content
                                    content={basic_info_input.content}
                                    state={state}
                                    handleChange={handleChange}
                                />
                            </div>
                        )
                    })}
                    <Button
                        section={section}
                        setSection={setSection}
                    />
                </form>
            </div >
        </section>
    )
}

export default Section