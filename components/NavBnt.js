import Link from 'next/link';

function NavBtn(props) {

    return (
        <li className='menuitem' role='none' onClick={props.click}>
            <Link role='menuitem' href= {`/${props.page}`}>
                <a>
                    <span>{props.page}</span>
                    <i className='fas fa-arrow-right' />
                </a>
            </Link>
        </li>
    );
}

export default NavBtn;