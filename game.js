let userClickedPattern = [];
let gamePattern = [];

let buttonCollours = ["red", "blue", "green", "yellow"];

$(".btn").click(function () {
  nextSequence();
  let userChosenColour = $(this).attr("id");
  //console.log(userChosenColour)

  userClickedPattern.push(userChosenColour);
  //console.log(userClickedPattern);

  // 5.1
  playSound(userChosenColour);
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

  playSond(randomChosenColour);
}
// 5.2
function playSond(name){
  // 5.3
  let audio = new Audio("/sounds/" + name + ".mp3");
  audio.play();
}

