import toast, {Toaster} from 'react-hot-toast'

function SearchCards(props) {

   
    let phonecticsArray = props.data.phonetics || "";
    let getAudio = phonecticsArray[0];
    let audio = getAudio ? getAudio.audio : "";     

    function handleProunciation() {        
        if(!audio){
            notify()
        }
        else{

            let playAudio = new Audio(audio);  
            playAudio.play()
        }
       
    }
    

    const notify = () => toast('Sorry no prounciation is found',{
        icon: '😔',
    });

    let phonetic = props.data.phonetic;

    let meanings;
    if (props.data.meanings) {
        meanings = props.data.meanings.map((m,index) => {
            const pos = m.partOfSpeech;
            const definitions = m.definitions.map((d, dIndex) => {
                const definition = d.definition;
                return <li key={`${index}${dIndex}`}>{definition}</li>
            })
            return <div key={"meaning"+index} className='text-dark'>
                <h4 className='fst-italic card-pos'>{pos}</h4>
                <ol key={m.definitions}>{definitions}</ol>
            </div>
        })
    }

    return (

        <>  
            <Toaster />
            {meanings ?
                <div className="container my-5">
                     
                    <div className="card text-light m-auto">
                        <div className="card-body text-start p-4">
                            <div className="lh-1">
                                <div className="d-flex">
                                    <div className="mt-3" onClick={handleProunciation}>
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
                                                <p className="text-dark">{phonetic}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="text-dark" />
                            </div>
                            {meanings}
                        </div>
                    </div>
                </div>
                :
                <div className='container w-50 m-auto'>
                <div className="alert alert-danger mt-5 mx-4 text-center" role="alert">
                    {props.word} meaning not found
                </div>
                </div>
            }
        </>

    );
}

export default SearchCards;