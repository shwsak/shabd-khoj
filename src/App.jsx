import { useRef, useState } from 'react';
import './App.css'
import SearchCard from './components/SearchCard'
import SearchContainer from './components/SearchContainer'
import logo from './assets/logo.png'
import MoonLoader from "react-spinners/MoonLoader ";
import { useEffect } from 'react';



const defaultVal = "welcome"
function App() {

  const [dictionary, setDictionary] = useState([""])
  const [isLoading, setIsLoading] = useState(false);

  console.log(dictionary)


  const inputRef = useRef("");
  const searchWord = inputRef.current.value || defaultVal;

  useEffect(() => {
    getDictionary()
  }, [])


  async function getDictionary(defaultWord = "") {

    let word = inputRef.current.value;

    setIsLoading(true);

    if (!word) {
      word = defaultVal
    }
    const url = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word);
    const json = await url.json();



    if (url.status != 200) {
      setDictionary([() => []])
    }
    else {
      setDictionary(() => [...json])
    }
    setIsLoading(false);

  }

  const dictFirst = dictionary[0];

  let phonetic = dictFirst.phonetic || "";


  let meanings;

  if (dictFirst.meanings) {


    meanings = dictFirst.meanings.map((m) => {
      const pos = m.partOfSpeech;
      const definitions = m.definitions.map((d) => {
        const definition = d.definition;
        return <li>{definition}</li>
      })
      return <div className='text-dark'>
        <h4 className='fst-italic card-pos'>{pos}</h4>
        <ol key={m.definitions}>{definitions}</ol>
      </div>

    })
  }

  let phonecticsArray = dictFirst.phonetics || "";
  let getAudio = phonecticsArray[0];


  let audio = getAudio ? getAudio.audio : "";


  function soundClick() {
    let playAudio = new Audio(audio);
    playAudio.play();
  }




  return (
    <>
      <SearchContainer logo={logo} handleClick={getDictionary} getRef={inputRef} />
      {isLoading ?
        <div className='loader'>
          <MoonLoader color="#f79256" size={38} />
        </div>
        : (meanings ?
          <SearchCard word={searchWord} phonectics={phonetic} meanings={meanings} audio={soundClick} />
          : <div className="alert alert-danger mt-5 mx-4" role="alert">
            "{searchWord}" meaning not found
          </div>)

      }
    </>

  )
}

export default App


