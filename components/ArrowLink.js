import Link from 'next/link';

function ArrowLink(props) {

    return (
        <span className='arrow-link'>
            <Link passHref href={props.link} target={props.target}>
                <a title={props.txt}>
                    <span>{props.txt}</span>
                    <i>&rarr;</i>
                </a>
            </Link>
        </span>
    );
}

export default ArrowLink;