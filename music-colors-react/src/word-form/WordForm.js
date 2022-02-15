import React, { useContext, useState } from "react";
import WordContext from "../utils/WordContext";

const WordForm = () => {
  const [wordInput, setWordInput] = useState('');
  const [error, setError] = useState([])

  const { setWordDisplay } = useContext(WordContext)

  const checkValidWord = wordInput => {
    const resObject = { errors: [] }
    if (wordInput.length > 45) resObject.errors.push('Word should be no longer than 45 characters');
    if (!wordInput.match(/^[A-Za-z]+$/)) resObject.errors.push('Only letters are allowed')

    resObject.errors.length ? resObject.isValid = false : resObject.isValid = true;
    return resObject;
  }

  const createOutput = wordInput => {
    return wordInput.toUpperCase().split('').map(letter => {
      return {
        letter,
        note: null
      }
    });
  }

  const handleChange = e => {
    setWordInput(e.target.value);
  };

  const handleSubmit = () => {
    const check = checkValidWord(wordInput);
    if (!check.isValid) {
      setError(check.errors);
    } else {
      const output = createOutput(wordInput)
      setWordDisplay(output);
      setWordInput('');
      if (error.length) setError([])
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
        <button onClick={handleSubmit}>Generate word</button>
      </div>
      <div className="WordForm-error">
        {error.length ? <span>{error}</span> : null}
      </div>
    </div>
  )
}

export default WordForm