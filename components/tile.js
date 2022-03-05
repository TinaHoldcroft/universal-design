import Link from 'next/link';

function Tile(props) {

    return (
        <Link
            passHref
            href={props.link}
            target={props.target}
        >
            <a className='tile'>
                <h3>
                    <span>{props.heading}</span>
                </h3>

                <p>{props.txt}</p>
            </a>
        </Link>
    );
}

export default Tile;