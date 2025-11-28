const playerName = "Axel";
let playerAge = 11;
const rightHand = 'Sword';
const leftHand = '';


function startPlayer(playerAge) {
  if (playerAge < 16){
    console.log("You start in your house.");
  } else if (playerAge < 20){
    console.log("You start in a forest.");
  } else {
    console.log("You start in a dark dungeon.");
  }
}

function ageCheck(playerAge) {
  if (playerAge < 12) {
    console.log("You are too young for this quest, my child.");
  } else {
    console.log("Let's start this quest!")
  }
}

function chooseEquipment(rightHand, leftHand){
  if (rightHand && leftHand) {
    console.log('You are armed with a ' + rightHand + ' and ' + leftHand);
  } else if (rightHand) {
    console.log('You are only armed with a ' + rightHand);
  } else if (leftHand) {
    console.log('You are only armed with a ' + leftHand);
  } else {
    console.log('You are unarmed, be careful!');
  }
}

console.log("Welcome, " + playerName);

if (playerAge < 12) {
  ageCheck(playerAge);
} else {
  ageCheck(playerAge);
  startPlayer(playerAge);
  chooseEquipment(rightHand, leftHand);
}

