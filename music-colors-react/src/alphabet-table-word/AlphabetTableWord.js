import React, { useContext } from "react";
import AlphabetTable from "./alphabet-table/AlphabetTable";
import Word from "./word/Word";
import WordContext from "../utils/WordContext";

const AlphabetTableWord = () => {
  const { wordDisplay } = useContext(WordContext)
  return (
    <div>
      <AlphabetTable />
      {wordDisplay.length ? <Word wordDisplay={wordDisplay} /> : null}
    </div>
  )
}

export default AlphabetTableWord;