export default function Step4({ currentStep, name, address, zip, city, telephone, email, frequency, amount, deduction }) {
    
    if (currentStep !== 4) { return null }
    
    return (
        <div className='summary'>
            <h1>summary</h1>
            <div>
                <h2>{name} <i>&#60;{email}&#62;</i></h2>
                <p>{amount} kr <i>({frequency})</i></p>
                <p>+47 {telephone}</p>
                <p>{address} </p>
                <p>{zip} {city}</p>
            </div>
        </div>
    )
}