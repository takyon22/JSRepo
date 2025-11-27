const playerAge = 15;
const favoriteNumber = 67;

let isChild = playerAge <= 12
let isTeen = playerAge >= 13 && playerAge <= 19;
let isAdult = playerAge >= 20;

let isOdd = favoriteNumber % 2 !== 0;

function ageMessage(playerAge) {
  if (playerAge < 12) return 'You are a child.';
  if (playerAge <= 19) return 'You are a teenager.';
  return 'You are an adult.';
}

console.log(ageMessage(playerAge));

//if (isChild) {
//  console.log('Nah you a lil ahh jit 😂');
//}
//if (isTeen) {
//  console.log('You a teen boi');
//}
//if (isAdult) {
//  console.log('You grown na..🫡')
//}

if (playerAge > favoriteNumber) {
  console.log('The greater number is: ' + playerAge);
} else {
  console.log('The greater number is: ' + favoriteNumber);
}


if (isOdd) {
  console.log("Your favorite number is an odd number.");
} else {
  console.log('Your favorite number is an even number.')
}


//console.log('You are a child: ' + isChild);
//console.log('You are a teenager: ' + isTeen);
//console.log('You are an adult: ' + isAdult);



//let numberBottles = 10;
//const line1 = 'green bottles hanging on the wall.';
//const line2 = 'And if one green bottle, should accidentally fall, there will be ';

//console.log(numberBottles + " " + line1 + " " + numberBottles + " " + line1);
//console.log(line2 + --numberBottles + " " + line1);

//const playerName = 'Axel';

//document.getElementById("output").innerHTML =
  //"<p>Hej, <strong>" + playerName + "</strong>.</p>";
