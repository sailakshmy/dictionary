import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { TextField, MenuItem } from '@material-ui/core';
import languages from '../../assets/languages';
import './Header.css';

const Header = ({language, setLanguage, word, setWord}) => {
  const darkTheme = createTheme({
    palette: {
      primary:{
        main:'#fff'
      },
      type: 'dark',
    },
  });
  // console.log("language", language);
  return (
    <div className='header'>
      <span className='title'>Word-Search</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField 
          className='search' 
          label="Search the word" 
          variant="outlined" 
          value={word}
          onChange={(e)=>setWord(e.target.value)} />
          <TextField
          id="outlined-select-language"
          select
          value={language}
          onChange={(e)=>setLanguage(e.target.value)}
          label='Language'
          variant="outlined"
        >
          {languages.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Header
