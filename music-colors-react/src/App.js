import React, {useState } from 'react';
import './App.css';
import WordForm from './word-form/WordForm';
import AlphabetTableWord from './alphabet-table-word/AlphabetTableWord';
import WordContext from './utils/WordContext';
import { synth } from './utils/synth';

function App() {
  const [wordDisplay, setWordDisplay] = useState([])

  const colorLetter = e => {
    if (wordDisplay.length) {
      const letter = e.target.innerText
      const letterIdx = wordDisplay.findIndex(block => !block.note && (block.letter === letter))
      if (letterIdx !== -1) {
        const note = e.target.classList[1];
        setWordDisplay(d => [...d.slice(0, letterIdx), {letter, note}, ...d.slice(letterIdx+1)])
        synth.triggerAttackRelease(`${note}4`, '4n');
      }
    }
  }

  return (
    <WordContext.Provider value={{wordDisplay, setWordDisplay, colorLetter}}>
      <div className="App">
        <WordForm />
        <AlphabetTableWord wordDisplay={wordDisplay} />
      </div>
    </WordContext.Provider>
  );
}

export default App;
