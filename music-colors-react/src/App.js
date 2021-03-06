import React, {useEffect, useState } from 'react';
import './App.css';
import WordForm from './word-form/WordForm';
import WordContext from './utils/WordContext';
import synth from './utils/synth';
import Word from './word/Word';
import AlphabetTable from './alphabet-table/AlphabetTable'

function App() {
  const [wordDisplay, setWordDisplay] = useState([])
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    const check = wordDisplay.every(char => char.note !== null);
    check ? setShowPlayer(true) : setShowPlayer(false);
  }, [wordDisplay])

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
    <WordContext.Provider value={{wordDisplay, setWordDisplay, showPlayer, colorLetter}}>
      <div className="App">
        <WordForm />
        <AlphabetTable />
        {wordDisplay.length ? <Word /> : null}
      </div>
    </WordContext.Provider>
  );
}

export default App;
