import React from "react";
import AlphabetCell from "./AlphabetCell";

const AlphabetTable = () => {
  const rows = [
    ["A", "B", "C", "D", "E", "F", "G"],
    ["H", "I", "J", "K", "L", "M", "N"],
    ["O", "P", "Q", "R", "S", "T", "U"],
    ["V", "W", "X", "Y", "Z"]
  ]
  const notes = ["A", "B", "C", "D", "E", "F", "G"];

  return (
    <table className="AlphabetTable">
      <tbody>
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