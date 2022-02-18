import React, { useContext } from "react";
import WordContext from "../../utils/WordContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { synth } from "../../utils/synth";
import { now } from 'tone'

const WordPlayer = () => {
  const { wordDisplay } = useContext(WordContext)

  const playMelody = () => {
    for (let i = 0; i < wordDisplay.length; i++) {
      const note = wordDisplay[i].note;
      const seconds = i * 0.5;
      synth.triggerAttackRelease(`${note}4`, "8n", now() + seconds);
    }
  }

  return (
    <div className="WordPlayer">
      <button onClick={playMelody}><FontAwesomeIcon icon={faPlay} /></button>
    </div>
  );
};

export default WordPlayer;