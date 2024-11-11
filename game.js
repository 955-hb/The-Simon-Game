//alert('Hello, it works!')

// #5
let gamePattern = [];

// #3
let buttonCollours = ["red", "blue", "green", "yellow"];

// #1
function nextSequence() {
  // #2
  let randomNumber = Math.floor(Math.random() * 4);
  //console.log(randomNumber)

  // #4
  let randomChosenColour = buttonCollours[randomNumber];
  //console.log(randomChosenColour);

  // #6
  gamePattern.push(randomChosenColour);
}

nextSequence();
