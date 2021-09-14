const pickWord = document.querySelector('.pick-word')
const table = document.querySelector('.center')
const wordSubmit = document.querySelector('.word-submit')
const err = document.getElementById('err')

const pitchC = document.querySelectorAll('.C')
const pitchD = document.querySelectorAll('.D')
const pitchE = document.querySelectorAll('.E')
const pitchF = document.querySelectorAll('.F')
const pitchG = document.querySelectorAll('.G')
const pitchA = document.querySelectorAll('.A')
const pitchB = document.querySelectorAll('.B')

const notes = {
  "C": 261.63,
  "D": 293.66,
  "E": 329.63,
  "F": 349.23,
  "G": 392.0,
  "A": 440.0,
  "B": 493.88
};

function displayWord() {
  const word = document.getElementById('word').value
  const letters = /^[A-Za-z]+$/;
  const check = word.match(letters)

  if (!check) {
    err.innerText = "Only letters allowed!"
    return
  }

  pickWord.innerHTML = `
    <span>You word you picked was <b>${word}</b></span>
    <button id="reset">New word</button>`
  // TODO: Clear the div and display the message 'Your word is ___'
}

function resetWord() {
  pickWord.innerHTML = `
    <label for="word">Type a word to turn into a melody</label>
    <input name="word" id="word">
    <button class="word-submit">Submit</button>
    <span id="err"></span>
  `
}

function playPitch(e) {
  const note = e.target.className
  const frequency = notes[note]
  console.log(note, frequency)

  // TODO: Attach pitches to cells
}

table.addEventListener('click', playPitch)
wordSubmit.addEventListener('click', displayWord)
