import React, { useContext, useState } from "react";
import WordContext from "../utils/WordContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
import synth from "../utils/synth";
import { now } from 'tone'

const WordPlayer = () => {
  const { wordDisplay } = useContext(WordContext)
  const [playLoop, setPlayLoop] = useState(false)

  const toggleLoop = () => {
    setPlayLoop(loop => !loop)
  }

  const playMelody = () => {
    const start = now();
    for (let i = 0; i < wordDisplay.length; i++) {
      const note = wordDisplay[i].note;
      const seconds = i * 0.5;
      synth.triggerAttackRelease(`${note}4`, "8n", start + seconds);
    }
  }

  return (
    <div className="WordPlayer">
      <button onClick={playMelody} className="WordPlayer-button"><FontAwesomeIcon icon={faPlay} /></button>
      <button onClick={toggleLoop} className={`WordPlayer-button ${playLoop ? 'on' : 'off'}`}><FontAwesomeIcon icon={faArrowRotateRight} /></button>
    </div>
  );
};

export default WordPlayer;