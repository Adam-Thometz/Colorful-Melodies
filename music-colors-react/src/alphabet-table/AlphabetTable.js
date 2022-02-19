import React, { useContext } from "react";
import AlphabetCell from "./AlphabetCell";
import { rows, notes } from '../utils/musicAlphabetData'
import './AlphabetTable.css'
import WordContext from "../utils/WordContext";

const AlphabetTable = () => {
  const { colorLetter } = useContext(WordContext)
  return (
    <table className="AlphabetTable">
      <tbody onClick={colorLetter}>
        {rows.map(row => (
          <tr>
            {row.map((char, i) => (
              <AlphabetCell letter={char} note={notes[i]} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AlphabetTable;