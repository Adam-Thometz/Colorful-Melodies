import React, { useState } from "react";

const WordForm = ({ setWord }) => {
  const [wordInput, setWordInput] = useState('');
  const [error, setError] = useState([])

  const handleChange = e => {
    setWordInput(e.target.value);
  };

  const handleEvent = () => {
    const check = wordInput.match(/^[A-Za-z]+$/);
    if (!check) {
      setError("Only letters allowed for now!")
    } else {
      setWord(wordInput);
      setWordInput('');
    };
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
      <div>
        {error ? <span>{error}</span> : null}
      </div>
    </div>
  )
}

export default WordForm