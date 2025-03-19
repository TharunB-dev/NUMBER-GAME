var live = document.getElementById("livesNo");
var msg = document.getElementById("message");
var submit = document.getElementById("submit");

var randomNumber = Math.floor(Math.random() * 100) + 1; // Between 1-100
var lives = 5;

submit.onclick = () => {
  var userInput = parseInt(document.getElementById("num").value);
  let message = "";

  if (!userInput || userInput < 1 || userInput > 100) {
    msg.style.display = "block";
    msg.innerHTML = "Please enter a valid number between 1 and 100.";
    return;
  }

  lives--;

  if (userInput === randomNumber) {
    location.href = "./win.html";
  } else if (lives === 0) {
    location.href = "./lose.html";
  } else if (userInput < randomNumber) {
    message = "Oops! Your guess is too low.";
  } else if (userInput > randomNumber) {
    message = "Oops! Your guess is too high.";
  }

  msg.style.display = "block";
  msg.innerHTML = message;
  live.innerHTML = lives;
};
