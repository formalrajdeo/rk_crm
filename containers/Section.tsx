import React, { useReducer } from 'react'
import { Button } from '@/components/ui'
import { FormReducer, TOAST } from '@/utils'
import { Content, Headline, RadioSection, Modal } from './section'

const Section = (sectionProps: sectionPropsType) => {
    const {
        SECTION_DATA,
        SECTION_NAME,
        section,
        setSection,
        initialState,
        SECTION_RADIO_OPTION,
        hideModal,
        setHideModal
    } = sectionProps;

    const [state, dispatch] = useReducer(FormReducer, initialState);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        dispatch({ type: 'CHANGE', field: name, value });
    };

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (state.client_group_name.length < 6) {
            TOAST({
                TOAST_TYPE: 'ERROR',
                TOAST_MESSAGE: "Fields validation failed!"
            })

        } else {
            TOAST({
                TOAST_TYPE: 'SUCCESS',
                TOAST_MESSAGE: "Saved"
            })

            setSection(section + 1)
        }
    }

    return (
        <section id={SECTION_NAME} className='bg-white'>
            <div className="w-full h-full p-4">
                <form className="" onSubmit={(e) => onSubmit(e)}>
                    {hideModal &&
                        <Modal
                            setHideModal={setHideModal}
                        />
                    }
                    {SECTION_RADIO_OPTION.length > 0
                        &&
                        <RadioSection
                            SECTION_RADIO_OPTION={SECTION_RADIO_OPTION}
                        />
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