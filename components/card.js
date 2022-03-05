import BTN from './btn';

function Card(props) {

    return (
        <div className='card'>
            <h2>{props.heading}</h2>
            <p>{props.txt}</p>
            <BTN link={props.link} value={props.value} target='_blank' />
        </div>
    );
}

export default Card;