

function SearchCards(props) {

    return (
        <div className="card text-light m-4 ">
            <div className="card-body text-start p-4">
                {/* word and phonectic part*/}
                <div className="lh-1">
                    <div className="d-flex">
                        <div className="mt-3" onClick={props.audio}>
                            <span className="card-icon">
                                <i className="fas fa-volume-up "></i>
                            </span>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="card-word">{props.word}</p>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="text-dark">{props.phonectics}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="text-dark" />
                </div>
                {/* meanings */}
                {props.meanings}



            </div>
        </div>

    );
}

export default SearchCards;