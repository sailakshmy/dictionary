import React from 'react';
import './Definitions.css';

const Definitions = ({word, definitions, language}) => {
  return (
    <div className='meanings'>
     {word===''
     ?<span className='noWord'>Start by typing a word in the Search bar</span>
    : definitions.map(definition=>(
        definition.meanings.map(meaning=>(
            meaning.definitions.map(def=>(
                <div className="singleDefinition" style={{backgroundColor:'white', color:'black'}}>
                    <b>{def.definition}</b>
                    <br/>
                    {def.example && <span>
                        <b><u>Example:</u> {def.example}</b>
                        </span>}
                        <br/>
                    {def.synonyms && <span>
                        <b><u>Synonyms:</u>{def.synonyms.join(',')}</b>
                        </span>}
                    <hr style={{backgroundColor:'black', width:'100%'}}/>
                </div>
            ))
        ))
    ))}
    </div>
  )
}

export default Definitions
