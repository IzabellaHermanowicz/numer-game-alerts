//create secretNumber

var secretNumber= 4;

//ask user for quess

do{
    var stringGuess = prompt("Why don't you tell me your quess?");
    var quess = Number(stringGuess);
//check quess

if (quess === secretNumber){
    alert("Congratuliation, are you some kind of medium or what?");
}
else if ( quess > secretNumber){
    alert("It's a little bit high don't you think? Quess one more time.");
}
else{
    alert("That's much to low don't you think? Quess one more time.");
}
}
while (!(Number(quess) === secretNumber ))