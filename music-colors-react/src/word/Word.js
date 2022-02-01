import React from "react";
import './Word.css'

const Word = ({ word }) => {
  const wordToDisplay = word.split('')
  return (
    <div className="Word">
      {wordToDisplay.map(char => (
        <div className="Word-letter">
          {char.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Word;