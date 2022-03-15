export default function PaymentBtn(props) {

    return (
        <div>
            <input
                onChange={props.handleChange}
                type='radio'
                id={props.value}
                name='paymentType'
                value={props.value}
                checked={props.payment === props.value}
            />
            <label
                className={props.value + ' btn'}
                htmlFor={props.value}
            >
                continue with
                <img src={'/' + props.value + '.svg'} alt={props.value} />
            </label>
        </div>
    );
}