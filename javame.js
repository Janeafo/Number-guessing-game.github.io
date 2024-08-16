p = document.getElementById("p")
minnum = 1
maxnum = 101
answer = RandomNumberGenerator()

function RandomNumberGenerator() {
 return Math.floor(Math.random() * (
  maxnum -
  minnum)) + 1
}

function Go() {
 playerinputs = document
  .getElementById("input").value
 playerinput = parseInt(playerinputs,
  10)
 if (
  playerinput === answer) {
  p.innerHTML = "Your right"
  answer = RandomNumberGenerator()
 } else if (playerinput > answer) {
  p.innerHTML = "Guess lower"
 } else {
  p.innerHTML = "Guess higher"
 }
}
