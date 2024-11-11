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

  playSond(randomChosenColour);
}

function playSond(name) {
  // 5.3
  let audio = new Audio("/sounds/" + name + ".mp3");
  audio.play();
}
