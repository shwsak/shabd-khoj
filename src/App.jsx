import { useRef, useState } from 'react';
import './App.css'
import SearchCard from './components/SearchCard'
import SearchContainer from './components/SearchContainer'
import logo from './assets/logo.png'
import MoonLoader from "react-spinners/MoonLoader ";
import { useEffect } from 'react';
import Footer from './components/Footer';



const defaultVal = "welcome"
function App() {

  const [dictionary, setDictionary] = useState([""])
  const [isLoading, setIsLoading] = useState(false);


  const inputRef = useRef("");
  const searchWord = inputRef.current.value || defaultVal;

  useEffect(() => {
    getDictionary()
  }, [])


  async function getDictionary() {
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

  const dictionaryData = dictionary[0];


  

  return (
    <>
      <SearchContainer logo={logo} handleClick={getDictionary} getRef={inputRef} />
      {isLoading ?
        <div className='loader'>
          <MoonLoader color="#f79256" size={38} />
        </div>
        :
        <SearchCard data={dictionaryData} word={searchWord} />
      }
      <Footer/>
    </>

  )
}

export default App


