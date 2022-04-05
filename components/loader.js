function Loader(props) {

    return (
        <>
            <div className={`loader-wrapper ${props.class}`}>
                <div className="loader-eye"></div>
            </div>
        </>
    )
}

export default Loader;