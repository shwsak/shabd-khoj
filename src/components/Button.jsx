function Button(props) {
    function clickMe(){
        console.log("hehe")
    }
    return ( 
        <button onClick ={clickMe} className="btn" style={{backgroundColor: props.color}}>{props.text} </button>
     );
}

export default Button;