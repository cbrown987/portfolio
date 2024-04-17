function Header() {
    return (
        <>
            <div
                className="hero-image-container bg-dark text-white d-flex justify-content-center align-items-center masthead"
                style={{width: '100vw', height: '100vh', overflow: 'hidden'}}>
                <img src={"img/frontImage.jpg"} alt={"Hero Image"} className="img-fluid"
                     style={{minWidth: '100%', minHeight: '100%', objectFit: 'cover'}}/>
                <div className="position-absolute" style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <h1 style={{fontSize: '4vw'}}>
                        {"Cooper Brown"}
                    </h1>
                </div>
            </div>
        </>
    )
}

export {Header}