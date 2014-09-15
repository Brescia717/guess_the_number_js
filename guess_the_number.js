var user = prompt("Please enter your username: ");
while (user === ""){
  alert("Answer cannot be blank.")
  var user = prompt("Please enter your username: ");
}
alert("Welcome " + user + "!");


var number = Math.floor((Math.random() * 10) + 1);

var guess = prompt("Guess a number between 1 and 10: ");
if (guess == number){
  alert("Congrats, you win! That is the correct number!");
} else {
  alert("Sorry, that's incorrect. You Lose.\nThe correct number was: " + number);
}
