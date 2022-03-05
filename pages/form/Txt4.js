export default function Step4({ currentStep, name, address, zip, city, telephone, email, frequency, amount, deduction }) {
    
    if (currentStep !== 4) { return null }
    
    return (
        <div className='summary'>
            <h1>Oppsummering</h1>
            <div>
                <p>{name} <i>&#60;{email}&#62;</i></p>
                <p>{amount} kr {frequency}</p>
                <p>{telephone}</p>
                <p>{address} </p>
                <p>{zip} {city}</p>
                <p>{deduction}</p>
            </div>
        </div>
    )
}