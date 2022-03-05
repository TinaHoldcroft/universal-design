import BTN from '../components/btn'
import ArrowLink from '../components/ArrowLink'

function Campaign(props) {

    return (
        <section className='campaign'>
            <div>
                <img src={props.img} alt={props.alt}/>
            </div>
            <div className='txt'>
                <h5>{props.heading}</h5>
                <p>{props.txt}</p>
                <div className='action-group'>
                    <BTN value={props.btnValue} link={props.btnLink} />
                    <div>
                        <ArrowLink txt='lær mer' link={props.ArrowLink} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Campaign;