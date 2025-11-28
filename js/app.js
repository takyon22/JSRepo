
const h1 = document.getElementById("h11");
const scoreshow = document.getElementById("score");
const button = document.getElementById("button");

let score = 0;


button.addEventListener("click", buttonClick);

function buttonClick() {

  score++;

  if (score > 39) {
    scoreshow.innerText = "Score: " + score + "! Ehhhh....?";
    scoreshow.style.color = "#ff5454";
    scoreshow.style.fontweight = "1000";
  } else if (score > 29) {
    scoreshow.innerText = "Score: " + score + "! OMFG!!!!";
    scoreshow.style.color = "#f56dfa";
    scoreshow.style.fontweight = "800";
  } else if (score > 19) {
    scoreshow.innerText = "Score: " + score + "! Du e galen!";
    scoreshow.style.color = "#8754FF";
    scoreshow.style.fontweight = "bold";
  } else if (score > 9) {
    scoreshow.innerText = "Score: " + score + "! Wow! Fortsätt!";
    scoreshow.style.fontweight = "bold";
  } else {
    scoreshow.innerText = "Score: " + score;
  }
}
