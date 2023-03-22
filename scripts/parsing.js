//Parsing javascript

const btnParsing1= document.getElementById("button1-parsing")
const iptParsing1 = document.getElementById('clue1-parsing')
const lblParsing1 = document.getElementById('label1-parsing')
  btnParsing1.addEventListener("click", function() {
    if (document.getElementById("clue1-parsing").value === "pish" || document.getElementById("clue1-parsing").value === "Pish") {
      alert("That's right - nice job!") 
      lblParsing1.innerHTML = 'Now try more <a href=../clues.html#clue1-gc>Great Clues!</a>'
      iptParsing1.value = '';
      btnParsing1.innerHTML = 'Nice work!'
    } else {
      alert("Not quite; let's try again")
      iptParsing1.value = '';
      btnParsing1.innerText = 'Let\'s try again'
    }
  })


const lblHint1 = document.getElementById('hint1')

function myTextChange1() {
    document.getElementById('btnhint1').innerHTML = 'You got it!'
    lblHint1.innerHTML='Sometimes, cues are within a word and act on the other part of the word. Given that, which of the syllables in the clue above is a synonym of one of the cue word categories above?'
    ;
  }