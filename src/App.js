import {useEffect, useState, useCallback} from 'react';
import axios from 'axios';
import {Container,Switch} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';

function App() {
  const [word, setWord] = useState('');
  const [definitions, setDefinitions] = useState([]);
  const [language, setLanguage]= useState('en');
  const [theme, setTheme]=useState(false);

  const ThemeSwitch = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);
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
    <div className="App" 
      style={{
        height: '100vh', 
        backgroundColor:theme?'#fff':'#282c34',
        color:theme?'black':'white',
        transition:'all 2s linear'
      }}>
      <Container maxWidth='md' 
        style={{
          display:'flex', 
          flexDirection: 'column', 
          height:'100vh', 
          justifyContent:'space-evenly'
        }}>
        <div 
          style={{
            position:'absolute', 
            top:0, 
            right:15, 
            paddingTop:10
        }}>
            <span>{theme?'Dark':'Light'} Mode</span>
            <ThemeSwitch checked={theme} onChange={()=>setTheme(!theme)}/>
        </div>
        <Header 
          language={language} 
          setLanguage={setLanguage} 
          word={word} 
          setWord={setWord}
          theme={theme}/>
        {definitions 
        && <Definitions word={word} definitions={definitions} language={language} theme={theme}/>}        
      </Container>
    </div>
  );
}

export default App;
