import React from 'react';
import './Definitions.css';

const Definitions = ({word, definitions, language, theme}) => {
  return (
    <div className='meanings'>
        {word && language==='en' && definitions[0] && definitions[0].phonetics[0] && (
            <audio 
              style={{
                  backgroundColor:theme?'#000':'#fff', 
                  borderRadius: 10
                }} 
              src={definitions[0].phonetics[0].audio}
              controls 
              type="audio/mp3">
                Sorry. Your browser does not support audio.
            </audio>
        )}
     {word ===''
     ?<span className='noWord'>Start by typing a word in the Search bar</span>
    : definitions.map(definition=>(
        definition.meanings.map(meaning=>(
            meaning.definitions.map(def=>(
                <div className="singleDefinition" 
                    style={{
                        backgroundColor:theme?'#3b5360':'white', 
                        color:theme?'white':'black',
                    }}>
                    <b>{def.definition}</b>
                    <hr style={{
                        backgroundColor:theme?'white':'black',
                        width:'100%'
                    }}/>
                    <br/>
                    {def.example && <span>
                        <b><u>Example:</u> {def.example}</b>
                        </span>}
                        <br/>
                    {def.synonyms?.length>0 && <span>
                        <b><u>Synonyms:</u>{def.synonyms.join(',')}</b>
                        </span>}
                </div>
            ))
        ))
    ))}
    </div>
  )
}

export default Definitions
