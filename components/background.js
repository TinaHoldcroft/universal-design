function Background(props) {

    const n = 10;

    return (
        <div className={"particle-container " + props.class}>
            {[...Array(n)].map((_e, i) => {
                return <div key={i} className="particle" />;
            })}
        </div>
    )
}

export default Background;