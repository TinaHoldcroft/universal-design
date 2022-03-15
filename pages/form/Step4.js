export default function Step4(props) {
    if (props.currentStep !== 4) { return null }

    return (
        <>
            <div className='complete'>
                <h2>Thank you</h2>
                <div className='checkmark-circle'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='-263.5 236.5 26 26'>
                        <g className='checkmark'>
                            <path d='M-256.46 249.65l3.9 3.74 8.02-7.8' />
                        </g>
                    </svg>
                </div>
            </div>
        </>
    );
}