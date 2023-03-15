
//These are the inputs for the parsing page. Need to fix the thing.

const btnParsing1= document.getElementById("button1-parsing")
const inputParsing1 = document.getElementById('clue1-parsing')
const labelParsing1 = document.getElementById('label1-parsing')
  btnParsing1.addEventListener("click", function() {
    if (document.getElementById("clue1-parsing").value === "pish" || document.getElementById("clue1-parsing").value === "Pish") {
      alert("That's right - nice job!") 
      labelParsing1.innerHTML = 'Now try more <a href=../clues.html#clue1-gc>Great Clues!</a>'
      inputParsing1.value = '';
    } else {
      alert("Not quite; let's try again")
      inputParsing1.value = '';
      btnParsing1.innerText = 'let\'s try again'
    }
  })

  const label = document.getElementById('hint');

  function myTextChange() {
    document.getElementById('btn2').innerHTML = 'You got it!'
    label.innerHTML='Sometimes, cues are within a word and act on the other part of the word. Given that, which of the syllables below corresponds to one of the cue word categories above?'
    ;
  }

//These are the inputs for the Clues page.

const btnClues1= document.getElementById("button1-gc")
const inputClues1 = document.getElementById('clue1-gc')
const labelClues1 = document.getElementById('label1-gc')
  btnClues1.addEventListener("click", function() {
    if (document.getElementById("clue1-gc").value === "agent provocateur") {
      alert("That's right - nice job!") 
      labelClues1.innerHTML = 'Now try another one!'
      inputClues1.value = '';
    } else {
      alert("Not quite; let's try again")
      inputClues1.value = '';
      btnClues1.innerText = 'let\'s try again'
    }
  })

  const btnClues2= document.getElementById("button2-gc")
const inputClues2 = document.getElementById('clue2-gc')
const labelClues2 = document.getElementById('label2-gc')
  btnClues2.addEventListener("click", function() {
    if (document.getElementById("clue2-gc").value === "oftentimes") {
      alert("That's right - nice job!") 
      labelClues2.innerHTML = 'Now try another one!'
      inputClues2.value = '';
    } else {
      alert("Not quite; let's try again")
      inputClues2.value = '';
      btnClues2.innerText = 'let\'s try again'
    }
  })

  const btnClues3= document.getElementById("button3-gc")
  const inputClues3 = document.getElementById('clue3-gc')
  const labelClues3 = document.getElementById('label3-gc')
    btnClues3.addEventListener("click", function() {
      if (document.getElementById("clue3-gc").value === "a recipe for disaster") {
        alert("That's right - nice job!") 
        labelClues3.innerHTML = 'Now try another one!'
        inputClues3.value = '';
      } else {
        alert("Not quite; let's try again")
        inputClues3.value = '';
        btnClues3.innerText = 'let\'s try again'
      }
    })