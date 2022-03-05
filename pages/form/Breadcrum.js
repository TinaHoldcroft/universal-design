export default function BreadcrumBnt(props) {

    return (
        <>
            <button
                className={'button' + props.nr}
                type='button'
                value={props.value}
                name={props.value}
                title={props.value}
                onClick={props.click}>
                <i className={'icon ' + props.icon}></i>
                <svg className='svg' xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='-263.5 236.5 26 26'>
                    <g className='checkmark'>
                        <path d='M-256.46 249.65l3.9 3.74 8.02-7.8' />
                    </g>
                </svg>
            </button>
            <div className={'line line' + props.nr}></div>
        </>
    );
}