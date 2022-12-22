function Meanings(props) {
    return (  
        <div>
            <h4 className="mb-3 fst-italic">{props.partOfSpeech}</h4>                            
                <div className="mx-2">
                    <p></p>
                     <p className="mx-3">
                        <i className="fa-solid fa-square card-sq pe-2"></i>a particular stage in someone's life.
                        <br/>
                        <i className="fa-solid fa-square card-sq pe-2"></i>the state of being old.
                    </p>
                </div>
        </div>
    );
}

export default Meanings;