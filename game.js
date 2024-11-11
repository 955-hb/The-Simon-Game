let userClickedPattern = [];
let gamePattern = [];

let buttonCollours = ["red", "blue", "green", "yellow"];

let started = false;
let level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  // 8.2
  checkAnswer(userClickedPattern.length-1)
});

// 8.1
function checkAnswer (currentLevel) {

  // 8.3
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log('success');

    // 8.4
    if (userClickedPattern.length === gamePattern.length) {

      // 8.5
      setTimeout(function () {
        nextSequence();
      }, 1000)
    }
  }
}

function nextSequence() {

  // 8.6
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

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

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
