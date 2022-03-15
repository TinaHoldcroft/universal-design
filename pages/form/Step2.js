export default function Step2(props) {

    if (props.currentStep !== 2) { return null }

    return (
        <div className='form-group'>
            <p>I want a tax deduction:</p>
            <div>
                <input onChange={props.handleChange} type='radio' id='yes' name='deduction' value='yes' checked={props.deduction === 'yes'} />
                <label id='yesLabel' className='checkBtn float-left' htmlFor='yes'>yes</label>
            </div>
            <div>
                <input onChange={props.handleChange} type='radio' id='no' name='deduction' value='no' checked={props.deduction === 'no'} />
                <label className='checkBtn float-right' htmlFor='no'>no</label>
            </div>
        </div>
    );
}