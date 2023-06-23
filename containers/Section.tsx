import React, { useReducer, useState } from 'react'
import Headline from './Headline'
import Content from './Content'
import { Button, Radio } from '@/components/ui'
import { GrFormClose } from 'react-icons/gr'
import Image from 'next/image'
import { MODAL_BG_IMAGE } from '@/assets/images'
import styles from './page.module.css'

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
    const { SECTION_DATA, SECTION_NAME, section, setSection, initialState, notify, SECTION_RADIO_OPTION, hideModal, setHideModal } = sectionProps;


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
            <div className="w-full h-full p-4">
                <form className="" onSubmit={(e) => onSubmit(e)}>
                    {hideModal &&
                        <div
                            className={styles.modal__container}
                        >
                            <div className="flex justify-center items-center w-full">
                                <div>
                                    <span className='text-xl font-bold'>Unsaved Changes</span>
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: '1rem', right: '2rem' }}>
                                <button
                                    onClick={() => setHideModal(false)}
                                    type="button"><GrFormClose fontSize={'2em'} /></button>
                            </div>
                            <div className="">
                                <Image
                                    src={MODAL_BG_IMAGE}
                                    alt={"modal"}
                                    height={300}
                                    width={400}
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className='text-lg font-bold'>There are Unsaved Changes</span>
                                <span className='text-sm'>Are you sure you want to cancel?</span>
                            </div>
                            <div className="text-white font-bold flex w-full justify-center items-center">
                                <div
                                    className="pr-4"
                                >
                                    <input
                                        onClick={() => setHideModal(false)}
                                        type='text'
                                        value='Cancel'
                                        style={{
                                            backgroundColor: 'white',
                                            border: "1px solid #02A5E2",
                                            color: "#02A5E2",
                                            padding: "1rem",
                                            textAlign: 'center',
                                            width: "10rem",
                                            height: "3.4rem",
                                            cursor: "pointer"
                                        }}
                                    />
                                </div>
                                <div
                                    className=""
                                    style={{ paddingLeft: '1rem' }}
                                >
                                    <Button
                                        type='submit'
                                        value='Save Changes'
                                        customStyle={{
                                            backgroundColor: '#02A5E2',
                                            color: "white",
                                            padding: "1rem",
                                            textAlign: 'center',
                                            width: "10rem",
                                            height: "3.4rem",
                                            cursor: "pointer"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                    {SECTION_RADIO_OPTION.length > 0
                        &&
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
                    <div
                        className="flex justify-start items-center"
                        style={{ marginTop: "4rem" }}
                    >
                        <Button
                            type='submit'
                            value='SAVE'
                            customStyle={{
                                backgroundColor: '#A1BBCF',
                                color: "white",
                                padding: "1rem 3rem"
                            }}
                        />
                    </div>

                </form>
            </div >
        </section>
    )
}

export default Section