//Parsing javascript 

//Clue 1

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

  //Clue 2
  const btnParsing2= document.getElementById("button2-parsing")
const iptParsing2 = document.getElementById('clue2-parsing')
const lblParsing2 = document.getElementById('label2-parsing')
  btnParsing2.addEventListener("click", function() {
    if (document.getElementById("clue2-parsing").value === "deodorised" || document.getElementById("clue2-parsing").value === "Deodorised") {
      alert("That's right - nice job!") 
      lblParsing2.innerHTML = 'Now try more <a href=../clues.html#clue1-gc>Great Clues!</a>'
      iptParsing2.value = '';
      btnParsing2.innerHTML = 'Nice work!'
    } else {
      alert("Not quite; let's try again")
      iptParsing2.value = '';
      btnParsing2.innerText = 'Let\'s try again'
    }
  })


const lblHint2 = document.getElementById('hint2')

function myTextChange2() {
    document.getElementById('btnhint2').innerHTML = 'You got it!'
    lblHint2.innerHTML='1) It\'s a British spelling; 2) This uses a lot of the cue word types listed above - in, start of, woman. Given that, the meaning is probably at the other end of the clue.'
    ;
  }
