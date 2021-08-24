import {useEffect, useState, useCallback} from 'react';
import axios from 'axios';
import {Container} from '@material-ui/core';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';

function App() {
  const [word, setWord] = useState('');
  const [definitions, setDefinitions] = useState([]);
  const [language, setLanguage]= useState('en');
  const dictionaryApiCall = useCallback(async()=>{
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`);
      setDefinitions(data.data);
    } catch (error) {
      console.log(error);
    }
  },[language, word]);
  // console.log("definitions: ",definitions);
  useEffect(()=>{
    dictionaryApiCall();
  },[dictionaryApiCall])
  return (
    <div className="App" style={{height: '100vh', backgroundColor:'#282c34', color:'white'}}>
      <Container maxWidth='md' style={{display:'flex', flexDirection: 'column', height:'100vh'}}>
        <Header language={language} setLanguage={setLanguage} word={word} setWord={setWord}/>
        {definitions && <Definitions word={word} definitions={definitions} language={language}/>}
        
      </Container>
    </div>
  );
}

export default App;
