import React from "react";

const AlphabetCell = ({ letter, note }) => {
  return <td className={`AlphabetCell ${note}`}>{letter}</td>;
};

export default AlphabetCell;