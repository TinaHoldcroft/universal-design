import BTN from '../../components/btn';

export default function Txt3(props) {

    if (props.currentStep !== 3) { return null }

    if (props.paymentType === 'vipps') {
        return (
            <>
                <h1>Lorem ipsum dolor</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra.</p>
            </>
        );
    }

    return (
        <>
            <h1>Lorem ipsum dolor</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra.</p>
            <div className='action-group'>
                <BTN value='Button' link='/' />
            </div>
        </>
    );
}