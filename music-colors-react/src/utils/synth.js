import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination()

const now = Tone.now()

export { synth, now };