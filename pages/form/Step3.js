export default function Step3(props) {

    if (props.currentStep !== 3) { return null }

    if (props.paymentType === 'vipps') {
        return (
            <div className='vipps-page'>
                <img id='vipps-orange' src='/vipps-orange.svg' alt='vipps logo' />
                <h2>Betal med Vipps</h2>
                <h3>{props.amount} kr til Norges Blindeforbund</h3>
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
                <label htmlFor='name'>fullt navn</label>
                <input className='form-control' id='name' name='name' type='text' value={props.name} onChange={props.handleChange} pattern='{4,}' required />
            </div>
            <div className='row'>
                <div className='txt-input-wrapper'>
                    <label htmlFor='telephone'>telefon</label>
                    <input className='form-control' id='telephone' name='telephone' type='tel' value={props.telephone} onChange={props.handleChange} pattern='[0-9]{8,}' required />
                </div>
                <div className='txt-input-wrapper'>
                    <label htmlFor='email'>e-post</label>
                    <input className='form-control' id='email' name='email' type='email' value={props.email} onChange={props.handleChange} pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' required />
                </div>
            </div>
            <div className='txt-input-wrapper'>
                <label htmlFor='address'>adresse</label>
                <input className='form-control' id='address' name='address' type='text' value={props.address} onChange={props.handleChange} required />
            </div>
            <div className='row'>
                <div className='txt-input-wrapper'>
                    <label htmlFor='zip'>postnummer</label>
                    <input id='zip' name='zip' type='number' value={props.zip} onChange={props.handleChange} required />
                </div>
                <div className='txt-input-wrapper'>
                    <label htmlFor='city'>poststed</label>
                    <input id='city' name='city' type='text' value={props.city} onChange={props.handleChange} required />
                </div>
            </div>
        </div>
    );
}