export default function Step4({ currentStep, name, address, zip, city, telephone, email, frequency, amount, deduction }) {
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var dt = (h + ':' + m);
    var dd = new Date().toDateString();

    if (currentStep !== 4) { return null }

    return (
        <div className='summary'>
            <h1>summary</h1>
            <p>{dd} {dt}</p>
            <div>
                <h5>{name} &#60;{email}&#62;</h5>
                <p>{amount} kr ({frequency})</p>
                <p>+47 {telephone}</p>
                <p>{address} </p>
                <p>{zip} {city}</p>
            </div>
        </div>
    )
}