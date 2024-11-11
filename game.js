let userClickedPattern = [];
let gamePattern = [];

let buttonCollours = ["red", "blue", "green", "yellow"];
// 7.2
let started = false;
let level = 0;

// 7.1
$(document).keypress(function() {
  if (!started) {
    // 7.3
    $('#level-title').text('Level ' + level);
    nextSequence();
    started = true;

  }
})

$(".btn").click(function () {
  //nextSequence();
  let userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function nextSequence() {

  // 7.4
  level++;

  // 7.5
  $('#level-title').text('Level ' + level);

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
