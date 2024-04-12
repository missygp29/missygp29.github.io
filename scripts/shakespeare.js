// Define an array of Shakespeare quotes
const shakespeareQuotes = [
  "Now is the winter of our discontent made glorious summer by this sun of York. Richard III, Act I scene i",
    "Lord, what fools these mortals be! A Midsummer Night”s Dream, Act III, scene ii",
    "All that glisters is not gold. Merchant of Venice, Act II, scene vii",
    "The better part of valour is discretion; in the which better part I have saved my life.” Henry IV, Part 1, Act V, scene iv",
    "Sigh no more, ladies, sigh no more, Men were deceivers ever; One foot in sea, and one on shore,To one thing constant never. Much Ado about Nothing, Act II, scene iii",
    "Men at some time are masters of their fates: The fault, dear Brutus, is not in our stars, But in ourselves, that we are underlings. Julius Caesar, Act 1, scene ii",
    "Some are born great, some achieve greatness, and some have greatness thrust upon “em. Twelfth Night, Act II, scene v",
    "Reputation is an idle and most false imposition; oft got without merit and lost without deserving. Othello, Act II scene iii",
    "By the pricking of my thumbs, Something wicked this way comes. Macbeth, Act IV scene i",
    "Thou sodden-witted lord! thou hast no more brain than I have in mine elbows. Troilus & Cressida, Act II, scene i",
    "Would thou wert clean enough to spit upon! Timon of Athens, Act IV scene iii",
    "But I am now about no waste; I am about thrift. The Merry Wives of Windsor, Act I scene iii",
    "A most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of no one good quality. All`s Well That Ends Well, Act III, scene vi",
    "I must tell you friendly in your ear, sell when you can, you are not for all markets. As You Like It, Act III scene v",
    "More of your conversation would infect my brain. Coriolanus, Act II, scene i",
    "The tartness of his face sours ripe grapes. The Comedy of Errors, Act V, scene iv",
    "Virginity breeds mites, much like a cheese. All`s Well That Ends Well, Act I, scene i",
    "Out of my sight! Thou dost infect mine eyes. Richard III, Act I, scene 2"

    
];

// Function to generate a random quote
function generateQuote() {
  // Get a random index from the shakespeareQuotes array
  const randomIndex = Math.floor(Math.random() * shakespeareQuotes.length);
  // Get the quote corresponding to the random index
  const randomQuote = shakespeareQuotes[randomIndex];
  // Display the quote on the webpage
    document.getElementById('quote').innerText = randomQuote;
}

// Add click event listener to the button
document.getElementById('quoteBtn').addEventListener('click', generateQuote);

