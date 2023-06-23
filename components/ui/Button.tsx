import React from 'react'

type buttonPropsType = {
    section: number,
    setSection: any
}

const Button = (buttonProps: buttonPropsType) => {
    const { section, setSection } = buttonProps;

    return (
        <div
            className="flex justify-start items-center"
            style={{ marginTop: "4rem" }}
        >
            <input
                type="submit"
                value="SAVE"
                style={{
                    backgroundColor: '#A1BBCF',
                    color: "white",
                    padding: "1rem 3rem"
                }}
            />
        </div>
    )
}

export default Button