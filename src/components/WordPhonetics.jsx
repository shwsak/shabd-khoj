function WordPhonetics(props) {
    return ( 
        <div>
            <h2 className="">{props.word}</h2>
            <p>{props.phonectics}</p>
            <hr/>
        </div>
     );
}

export default WordPhonetics;