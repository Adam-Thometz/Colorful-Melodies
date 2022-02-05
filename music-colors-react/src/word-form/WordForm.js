import React, { useContext, useState } from "react";
import WordContext from "../utils/WordContext";

const WordForm = () => {
  const [wordInput, setWordInput] = useState('');
  const [error, setError] = useState(null)

  const {setWordDisplay} = useContext(WordContext)

  const handleChange = e => {
    setWordInput(e.target.value);
  };

  const handleEvent = () => {
    if (wordInput.length > 45) {
      setError("Word should be no longer than 45 characters");
      return;
    } else if (!wordInput.match(/^[A-Za-z]+$/)) {
      setError("Only letters and words allowed");
      return;
    } else {
      const res = wordInput.toUpperCase().split('').map(letter => {
        return {
          letter,
          note: null
        }
      });
      setWordDisplay(res);
      setWordInput('');
    }
  };

  return (
    <div className="WordForm">
      <div className="WordForm-form-group">
        <label className="WordForm-input" htmlFor="word">Type a word to turn into a melody</label>
        <input
          name="word"
          id="word"
          value={wordInput}
          onChange={handleChange}
        />
        <button onClick={handleEvent}>Generate word</button>
      </div>
      <div className="WordForm-error">
        {error ? <span>{error}</span> : null}
      </div>
    </div>
  )
}

export default WordForm