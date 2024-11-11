let userClickedPattern = [];
let gamePattern = [];

let buttonCollours = ["red", "blue", "green", "yellow"];

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");
  //console.log(userChosenColour)

  userClickedPattern.push(userChosenColour);
  //console.log(userClickedPattern);
});

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  //console.log(randomNumber)

  let randomChosenColour = buttonCollours[randomNumber];
  //console.log(randomChosenColour);

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  let audio = new Audio("/sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

// lösung mittels Event-Listener
$(document).on("click", function () {
  nextSequence();
});
