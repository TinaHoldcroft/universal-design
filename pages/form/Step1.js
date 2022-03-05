import React, { useState, useEffect } from 'react';

export default function Step1(props) {
    const handleToggle = () => { setActive(!isActive); };
    const [isActive, setActive] = useState('false');

    const closeFeild = () => { //close custom field if open
        if (isActive === false) { setActive(!isActive); }
    }

    if (props.currentStep !== 1) { return null }

    return (
        <div className='form-group'>
            <fieldset className='fieldset-btn-group'>
                <legend>Velg Frekvens</legend>
                <div>
                    <input onChange={props.handleChange} type='radio' id='once' name='frequency' value='en gang' checked={props.frequency === 'en gang'} />
                    <label className='checkBtn float-left' htmlFor='once'><span className='sr-only'>velg frekvens </span>en gang</label>
                </div>
                <div>
                    <input onChange={props.handleChange} type='radio' id='monthly' name='frequency' value='månedlig' checked={props.frequency === 'månedlig'} />
                    <label className='checkBtn  float-right' htmlFor='monthly'><span className='sr-only'>velg frekvens </span>månedlig</label>
                </div>
            </fieldset>

            <fieldset className='fieldset-btn-group'>
                <legend>Velg beløp</legend>
                <div>
                    <input onClick={closeFeild} onChange={props.handleChange} type='radio' id='175' name='amount' value='175' checked={props.amount === '175'} />
                    <label className='checkBtn float-left' htmlFor='175'><span className='sr-only'>velg beløp </span>175</label>
                </div>
                <div>
                    <input onClick={closeFeild} onChange={props.handleChange} type='radio' id='300' name='amount' value='300' checked={props.amount === '300'} />
                    <label className='checkBtn float-right' htmlFor='300'><span className='sr-only'>velg beløp </span>300</label>
                </div>
                <div>
                    <input onClick={closeFeild} onChange={props.handleChange} type='radio' id='425' name='amount' value='425' checked={props.amount === '425'} />
                    <label className='checkBtn float-left' htmlFor='425'><span className='sr-only'>velg beløp </span>425</label>
                </div>
                <div>
                    <input onChange={handleToggle} type='radio' id='annet' name='amount' value='Annet'/>
                    <label className='checkBtn float-right' htmlFor='annet'><span className='sr-only'>velg beløp </span>annet</label>
                </div>
                {isActive ? '' :
                    <div className='txt-input-wrapper'>
                        <label htmlFor='custom'>Skriv inn ønsket beløp</label>
                        <input id='custom' name='amount' type='number' placeholder={props.amount} onChange={props.handleChange} />
                    </div>
                }
            </fieldset>
        </div>
    );
}