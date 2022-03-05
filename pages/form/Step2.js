export default function Step2(props) {

    if (props.currentStep !== 2) { return null }

    return (
        <div className='form-group'>
            <p>Jeg ønsker skattefradrag:</p>
            <div>
                <input onChange={props.handleChange} type='radio' id='yes' name='deduction' value='ja' checked={props.deduction === 'ja'} />
                <label id='yesLabel' className='checkBtn float-left' htmlFor='yes'><span className='sr-only'>ønsker å rapportere gavebeløpet på mitt fødselsnummer</span>ja</label>
            </div>
            <div>
                <input onChange={props.handleChange} type='radio' id='no' name='deduction' value='nei' checked={props.deduction === 'nei'} />
                <label className='checkBtn float-right' htmlFor='no'><span className='sr-only'>ønsker å rapportere gavebeløpet på mitt fødselsnummer</span>nei</label>
            </div>
        </div>
    );
}