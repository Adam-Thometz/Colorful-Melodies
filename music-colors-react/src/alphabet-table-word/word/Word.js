import React from "react";
import './Word.css'

const Word = ({ wordDisplay }) => {
  return (
    <div className="Word">
      {wordDisplay.map(block => (
        <div className={`Word-letter ${block.note}`}>
          {block.letter}
        </div>
      ))}
    </div>
  );
};

export default Word;