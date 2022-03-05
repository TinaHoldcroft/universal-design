import Link from 'next/link';

function BTN(props) {

    return (
        <div className={`btn ${props.className}`}>
            <Link passHref href={props.link}>
                <a target={props.target}>
                    <button type='button' value={props.value} onClick={props.onClick}>
                        {props.value}
                    </button>
                </a>
            </Link>
        </div>
    );
}

export default BTN;