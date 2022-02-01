import React, {useState} from 'react';
import './App.css';
import WordForm from './word-form/WordForm';
import AlphabetTable from './alphabet-table/AlphabetTable';
import Word from './word/Word';

function App() {
  const [word, setWord] = useState('')

  return (
    <div className="App">
      <WordForm setWord={setWord} />
      <AlphabetTable />
      {word ? <Word word={word} /> : null}
    </div>
  );
}

export default App;
