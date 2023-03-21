
//These are the inputs for the parsing page.
const btnParsing1= document.getElementById("button1-parsing")
const inputParsing1 = document.getElementById('clue1-parsing')
const labelParsing1 = document.getElementById('label1-parsing')
  btnParsing1.addEventListener("click", function() {
    if (document.getElementById("clue1-parsing").value === "pish" || document.getElementById("clue1-parsing").value === "Pish") {
      alert("That's right - nice job!") 
      labelParsing1.innerHTML = 'Now try more parsing below or other <a href=../clues.html#clue1-gc>Great Clues!</a>'
      inputParsing1.value = '';
    } else {
      alert("Not quite; let's try again")
      inputParsing1.value = '';
      btnParsing1.innerText = 'let\'s try again'
    }
  })

  const labelHint1 = document.getElementById('hint1');

  function myTextChange1() {
    document.getElementById('btnhint1').innerHTML = 'You got it!'
    labelHint1.innerHTML='Sometimes, cues are a syllable or recognized word within a word in the clue. The cue often then acts on the other part of the word in the clue. Now that you know that, which of the syllables in the clue above corresponds to one of the cue word categories above? And what should it act upon?'
    ;
  } 

const btnParsing2 = document.getElementById("button2-parsing")
const inputParsing2 = document.getElementById('clue2-parsing')
const labelParsing2 = document.getElementById('label2-parsing')
  btnParsing2.addEventListener("click", function() {
    if (document.getElementById("clue2-parsing").value === "pish" || document.getElementById("clue2-parsing").value === "Pish") {
      alert("That's right - nice job!") 
      labelParsing2.innerHTML = 'Now try more <a href=../clues.html#clue1-gc>Great Clues!</a>'
      inputParsing2.value = '';
    } else {
      alert("Not quite; let's try again")
      inputParsing2.value = '';
      btnParsing2.innerText = 'let\'s try again'
    }
  })

  const labelHint2 = document.getElementById('hint2');

  function myTextChange2() {
    document.getElementById('btnhint2').innerHTML = 'You got it!'
    labelHint2.innerHTML='Sometimes, cues are a syllable or recognized word within a word in the clue. The cue often then acts on the other part of the word in the clue. Now that you know that, which of the syllables in the clue above corresponds to one of the cue word categories above? And what should it act upon?'
    ;
  }

  
  //Need to put in the second parsing clue script and update HTML

//These are the inputs for the Clues page.

const btnClues1= document.getElementById("button1-gc")
const inputClues1 = document.getElementById('clue1-gc')
const labelClues1 = document.getElementById('label1-gc')
  btnClues1.addEventListener("click", function() {
    if (document.getElementById("clue1-gc").value === "agent provocateur") {
      alert("That's right - nice job!") 
      labelClues1.innerHTML = 'Now try another one'
      inputClues1.value = '';
      btnClues1.innerText = 'Good work!'
    } else {
      alert("Not quite; let's try again")
      inputClues1.value = '';
      btnClues1.innerText = 'let\'s try again'
      labelClues1.innerHTML = 'Maybe double check your spelling of the second word?'
    }
  })

  const btnClues2= document.getElementById("button2-gc")
const inputClues2 = document.getElementById('clue2-gc')
const labelClues2 = document.getElementById('label2-gc')
  btnClues2.addEventListener("click", function() {
    if (document.getElementById("clue2-gc").value === "oftentimes") {
      alert("That's right - nice job!") 
      labelClues2.innerHTML = 'Now try another one'
      inputClues2.value = '';
      btnClues2.innerText = 'Good work!'
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
        labelClues3.innerHTML = 'Now try another one'
        btnClues3.innerText = 'Good work!'
        inputClues3.value = '';
      } else {
        alert("Not quite; let's try again")
        inputClues3.value = '';
        btnClues3.innerText = 'let\'s try again'
      }
    })

    const btnClues4= document.getElementById("button4-gc")
    const inputClues4 = document.getElementById('clue4-gc')
    const labelClues4 = document.getElementById('label4-gc')
      btnClues4.addEventListener("click", function() {
        if (document.getElementById("clue4-gc").value === "bolt from the blue") {
          alert("That's right - nice job!") 
          labelClues4.innerHTML = 'Now try another one'
          btnClues4.innerText = 'Good work!'
          inputClues4.value = '';
        } else {
          alert("Not quite; let's try again")
          inputClues4.value = '';
          btnClues4.innerText = 'let\'s try again'
        }
      })