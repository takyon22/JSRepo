
const h1 = document.getElementById("h11");
const scoreshow = document.getElementById("score");
const button = document.getElementById("button");
const headertext = document.getElementById("headertext");

let score = 0;


button.addEventListener("click", buttonClick);

function buttonClick() {
  score++;
  if (score > 39) {
    scoreshow.innerText = "Kakor: " + score + " 😳";
    scoreshow.style.color = "#ff5454";
    scoreshow.style.fontWeight = "900";
    headertext.innerText = "Walla ja kommer busssss......";
  } else if (score > 29) {
    scoreshow.innerText = "Kakor: " + score + " 😎";
    scoreshow.style.color = "#f56dfa";
    scoreshow.style.fontWeight = "bolder";
    headertext.innerText = "Du är så bra på att klicka babe";
  } else if (score > 19) {
    scoreshow.innerText = "Kakor: " + score + " 😍";
    scoreshow.style.fontWeight = "bold";
  } else if (score > 9) {
    scoreshow.innerText = "Kakor: " + score;
    headertext.innerText = "Fortsätt klicka babe";
  } else {
    scoreshow.innerText = "Kakor: " + score;
  }
}
