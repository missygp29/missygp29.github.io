
//These are the inputs for the parsing page. Need to fix the thing.

const btnParsing1= document.getElementById("button1-parsing")
const inputParsing1 = document.getElementById('clue1-parsing')
const labelParsing1 = document.getElementById('label-parsing')
  btnParsing1.addEventListener("click", function() {
    if (document.getElementById("clue1-parsing").value === "pish" || document.getElementById("clue1-parsing").value === "Pish") {
      alert("That's right - nice job!") 
      labelParsing1.innerHTML = 'Now try another one below!'
      inputParsing1.value = '';
    } else {
      alert("Not quite; let's try again")
      labelParsing1.innerHTML = 'let\'s try again'
      inputParsing1.value = '';
    }
  })

//These are the inputs for the Clues page.

const btn1 = document.getElementById("button1")
const input1 = document.getElementById('clue1')
const label1 = document.getElementById('label1')
  btn1.addEventListener("click", function() {
    if (document.getElementById("clue1").value === "pish" || document.getElementById("clue1").value === "Pish") {
      alert("That's right - nice job!") 
      label1.innerHTML = 'Now try another one below!'
      input1.value = '';
    } else {
      alert("Not quite; let's try again")
      label1.innerHTML = 'let\'s try again'
      input1.value = '';
    }
  })

  const btn2 = document.getElementById("button2")
const input2 = document.getElementById('clue2')
const label2 = document.getElementById('label2')
  btn2.addEventListener("click", function() {
    if (document.getElementById("clue1").value === "oftentimes" || document.getElementById("clue2").value === "Oftentimes") {
      alert("That's right - nice job!") 
      label2.innerHTML = 'Now try another one below!'
      input2.value = '';
    } else {
      alert("Not quite; let's try again")
      label2.innerHTML = 'let\'s try again'
      input2.value = '';
    }
  })

//Need to include JS for buttons on the clue page
