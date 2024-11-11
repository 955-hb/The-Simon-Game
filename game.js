let userClickedPattern = [];
let gamePattern = [];

let buttonCollours = ["red", "blue", "green", "yellow"];

$(".btn").click(function () {
  nextSequence();
  let userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
});

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);

  let randomChosenColour = buttonCollours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  let audio = new Audio("/sounds/" + name + ".mp3");
  audio.play();
}

// 6.1
function animatePress(currentColor) {
  // 6.3
  $('#' + currentColor).addClass('pressed')

  // 6.4 
  setTimeout(function(){
    $('#' + currentColor).removeClass('pressed')
  },100)
}