//alert('Hello, it works!')

// #2.5
let gamePattern = [];

// #2.3
let buttonCollours = ["red", "blue", "green", "yellow"];

// #2.1
function nextSequence() {
  // #2.2
  let randomNumber = Math.floor(Math.random() * 4);
  //console.log(randomNumber)

  // #2.4
  let randomChosenColour = buttonCollours[randomNumber];
  //console.log(randomChosenColour);

  // #2.6
  gamePattern.push(randomChosenColour);

  // 3.1 & 3.2
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  // 3.3
  let audio = new Audio("/sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

// lösung mittels Event-Listener
$(document).on('click', function(){
  nextSequence();
})


