export default function Step3(props) {

    if (props.currentStep !== 3) { return null }

    if (props.paymentType === 'vipps') {
        return (
            <div className='vipps-page'>
                <img id='vipps-orange' src='/vipps.svg' alt='vipps logo' />
                <h2>pay with Vipps</h2>
                <h3>{props.amount} kr {props.frequency}</h3>
                <div className='input-group'>
                    <label htmlFor='telephone'>+47</label>
                    <input className='form-control' id='telephone' name='telephone' type='tel' value={props.telephone} onChange={props.handleChange} pattern='[0-9]{8,}' required />
                </div>
            </div>
        );
    }

    return (
        <div className='form-group'>
            <div className='txt-input-wrapper'>
                <label htmlFor='name'>name</label>
                <input className='form-control' id='name' name='name' type='text' value={props.name} onChange={props.handleChange} pattern='{4,}' required />
            </div>
            <div className='row'>
                <div className='txt-input-wrapper'>
                    <label htmlFor='telephone'>phone number</label>
                    <input className='form-control' id='telephone' name='telephone' type='tel' value={props.telephone} onChange={props.handleChange} pattern='[0-9]{8,}' required />
                </div>
                <div className='txt-input-wrapper'>
                    <label htmlFor='email'>e-mail</label>
                    <input className='form-control' id='email' name='email' type='email' value={props.email} onChange={props.handleChange} pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' required />
                </div>
            </div>
            <div className='txt-input-wrapper'>
                <label htmlFor='address'>address</label>
                <input className='form-control' id='address' name='address' type='text' value={props.address} onChange={props.handleChange} required />
            </div>
            <div className='row'>
                <div className='txt-input-wrapper'>
                    <label htmlFor='zip'>zip code</label>
                    <input id='zip' name='zip' type='number' value={props.zip} onChange={props.handleChange} required />
                </div>
                <div className='txt-input-wrapper'>
                    <label htmlFor='city'>city</label>
                    <input id='city' name='city' type='text' value={props.city} onChange={props.handleChange} required />
                </div>
            </div>
        </div>
    );
}