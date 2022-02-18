import React, { useContext } from "react";
import WordContext from "../../utils/WordContext";
import './Word.css'
import WordPlayer from "./WordPlayer";

const Word = ({ wordDisplay }) => {
  const { showPlayer } = useContext(WordContext)
  return (
    <div className="Word">
      {wordDisplay.map(char => (
        <div className={`Word-letter ${char.note}`}>
          {char.letter}
        </div>
      ))}
      {showPlayer ? <WordPlayer /> : null}
    </div>
  );
};

export default Word;