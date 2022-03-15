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
                <legend>Choose frequency</legend>
                <div>
                    <input onChange={props.handleChange} type='radio' id='once' name='frequency' value='one time' checked={props.frequency === 'one time'} />
                    <label className='checkBtn float-left' htmlFor='once'><span className='sr-only'>choose frequency </span>one time</label>
                </div>
                <div>
                    <input onChange={props.handleChange} type='radio' id='monthly' name='frequency' value='montly' checked={props.frequency === 'montly'} />
                    <label className='checkBtn  float-right' htmlFor='monthly'><span className='sr-only'>choose frequency </span>montly</label>
                </div>
            </fieldset>

            <fieldset className='fieldset-btn-group'>
                <legend>choose amount</legend>
                <div>
                    <input onChange={props.handleChange} type='radio' id='100' name='amount' value='100' checked={props.amount === '100'} />
                    <label className='checkBtn float-left' htmlFor='100'><span className='sr-only'>choose amount </span>100</label>
                </div>
                <div>
                    <input onChange={props.handleChange} type='radio' id='300' name='amount' value='300' checked={props.amount === '300'} />
                    <label className='checkBtn float-right' htmlFor='300'><span className='sr-only'>choose amount </span>300</label>
                </div>
                <div>
                    <input onChange={props.handleChange} type='radio' id='500' name='amount' value='500' checked={props.amount === '500'} />
                    <label className='checkBtn float-left' htmlFor='500'><span className='sr-only'>choose amount </span>500</label>
                </div>
                <div>
                    <input onChange={props.handleChange} type='radio' id='1000' name='amount' value='1000' />
                    <label className='checkBtn float-right' htmlFor='1000'><span className='sr-only'>choose amount </span>1000</label>
                </div>
                <div className='txt-input-wrapper'>
                    <label htmlFor='custom'>write in custom amount</label>
                    <input id='custom' name='amount' type='number' placeholder={props.amount} onChange={props.handleChange} />
                </div>
            </fieldset>
        </div>
    );
}