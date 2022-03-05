export default function FlatBnt(props) {

    return (
        <button 
            className={'flat-btn float-' + props.direction}
            type={props.type}
            onClick={props.click}
            value={props.value}
            disabled={props.disabled}
            form='masterform'
        >
            {props.value}
        </button>
    );
}