// JS for clues take whatever

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
      btnClues1.innerText = 'Let\'s try again'
      labelClues1.innerHTML = 'Maybe double check your spelling of the second word?'
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
      btnClues2.innerText = 'Let\'s try again'
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
        btnClues3.innerText = 'Let\'s try again'
      }
    })

    const btnClues4= document.getElementById("button4-gc")
    const inputClues4 = document.getElementById('clue4-gc')
    const labelClues4 = document.getElementById('label4-gc')
      btnClues4.addEventListener("click", function() {
        if (document.getElementById("clue4-gc").value === "bolt from the blue") {
          alert("That's right - nice job!") 
          labelClues4.innerHTML = 'Now try another one!'
          inputClues4.value = '';
        } else {
          alert("Not quite; let's try again")
          inputClues4.value = '';
          btnClues4.innerText = 'Let\'s try again'
        }
      })