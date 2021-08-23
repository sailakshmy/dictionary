import {useEffect, useState} from 'react';
import axios from 'axios';
import {Container} from '@material-ui/core';
import Header from './components/Header/Header';

function App() {
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [language, setLanguage]= useState('en');
  const dictionaryApiCall = async()=>{
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${language}/bible`);
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log("meanings: ",meanings);
  useEffect(()=>{
    dictionaryApiCall();
  },[])
  return (
    <div className="App" style={{height: '100vh', backgroundColor:'#282c34', color:'white'}}>
      <Container maxWidth='sm' style={{display:'flex', flexDirection: 'column', height:'100vh'}}>
        <Header language={language} setLanguage={setLanguage} word={word} setWord={setWord}/>
      </Container>
    </div>
  );
}

export default App;
