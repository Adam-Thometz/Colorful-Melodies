const pickWord = document.querySelector('.pick-word')
const table = document.querySelector('.center')
const wordSubmit = document.getElementById('word-submit')
const err = document.getElementById('err')
const wordContainer = document.getElementById('wordContainer')

// const pitchC = document.querySelectorAll('.C')
// const pitchD = document.querySelectorAll('.D')
// const pitchE = document.querySelectorAll('.E')
// const pitchF = document.querySelectorAll('.F')
// const pitchG = document.querySelectorAll('.G')
// const pitchA = document.querySelectorAll('.A')
// const pitchB = document.querySelectorAll('.B')

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
  wordContainer.innerHTML = ''
  
  const word = document.getElementById('word').value
  const letters = /^[A-Za-z]+$/;
  const check = word.match(letters)

  if (!check) {
    err.innerText = "Only letters allowed!"
    return
  }

  document.getElementById('word').value = ''
  
  for (let letter of word) {
    const letterDiv = document.createElement('div')
    letterDiv.classList.add('letter')
    letterDiv.innerText = letter.toUpperCase()
    wordContainer.append(letterDiv)
  }
}

function playPitch(e) {  
  const note = e.target.className
  const letter = e.target.textContent
  // Redo the following if statement, it doesn't work
  if (wordContainer.contains(document.querySelectorAll('.letter'))) {
    fillLetter(note, letter)
  }
  const frequency = notes[note]
  console.log(note, frequency)

  // TODO: Attach pitches to cells
}

function fillLetter(note, letter) {
  for (let div of document.querySelectorAll('.letter')) {
    if (div.value === letter) {
      div.classList.add(note)
    }
  }
}

table.addEventListener('click', playPitch)
wordSubmit.addEventListener('click', displayWord)
