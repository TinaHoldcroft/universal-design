function CampaignMini(props) {

    return (
        <section className='campaign'>
            <div>
                <img src={props.img} alt={props.alt}/>
            </div>
            <div className='txt'>
                <h5>{props.heading}</h5>
                {props.txt}
            </div>
        </section>
    );
}

export default CampaignMini;