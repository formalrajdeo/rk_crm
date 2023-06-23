import React from 'react'
import Headline from './Headline'
import Content from './Content'
import { Button } from '@/components/ui'

const Section = (sectionProps: sectionPropsType) => {
    const { SECTION_DATA, SECTION_NAME, section, setSection } = sectionProps;

    const onSubmit = (d: any) => {
        alert(JSON.stringify(d))
        setSection(section + 1)
    }

    return (
        <section id={SECTION_NAME} className='bg-white'>
            <div className="w-full p-4">
                <form className="" onSubmit={onSubmit}>
                    {SECTION_DATA.map((basic_info_input, idx) => {
                        return (
                            <div key={idx} className="">
                                <Headline
                                    headline={basic_info_input.headline}
                                />
                                <Content
                                    content={basic_info_input.content}
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