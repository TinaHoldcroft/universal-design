import ArrowLink from '../../components/ArrowLink';

export default function Txt2(props) {
    
    if (props.currentStep !== 2) { return null }

    return (
        <>
            <h1>Lorem ipsum dolor</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra.</p>         
            <ArrowLink target='_blank' txt='learn more' link='/' />
        </>
    );
}