import React from 'react'

const Radio = (radioProps: radioPropsType) => {
    const { radioOptions } = radioProps;
    return (
        <div className="flex" style={{ marginLeft: '1rem' }}>
            {radioOptions.map((radio, radioIndex) => {
                return (
                    <div key={radioIndex} className="flex items-center">
                        <input type="radio"
                            id={radio.value}
                            style={{ height: '1.2rem', width: '1.2rem', marginLeft: '1rem' }}
                            name={radio.name}
                            value={radio.value}
                        />
                        <label htmlFor={radio.value} style={{ marginLeft: '1rem' }}>
                            {radio.label}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}

export default Radio