// this empty JavaScript file can be filled with code later
// now it is just two comment examples in JavaScript

//This is the input and button part from the parsing page. need to repeat it with different IDs below for the clues page.

const btn = document.getElementById("button")
const input = document.getElementById('clue1')
const label = document.getElementById('label1')
  btn.addEventListener("click", function() {
    if (document.getElementById("clue1").value === "zephyr" || document.getElementById("clue1").value === "Zephyr") {
      alert("That's right - nice job!") 
      label.innerHTML = 'Now try another one below!'
      input.value = '';
    } else {
      alert("Not quite; let's try again")
      label.innerHTML = 'let\'s think about this again'
      input.value = '';
    }
  })

//Need to include JS for buttons on the clue page
