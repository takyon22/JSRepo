
const h1 = document.getElementById("h11");
const scoreshow = document.getElementById("score");
const button = document.getElementById("button");
const headertext = document.getElementById("headertext");

let score = 0;


button.addEventListener("click", buttonClick);

function buttonClick() {
  score++;
  if (score > 49) {
    scoreshow.innerText = "Kakor: " + score;
    scoreshow.style.color = "#ff5454";
    headertext.innerText = "Cookie Pro 😳";
  } else if (score > 29) {
    scoreshow.innerText = "Kakor: " + score;
    scoreshow.style.color = "#f56dfa";
    headertext.innerText = "Cookie Enthusiast 😎";
  } else if (score > 19) {
    scoreshow.innerText = "Kakor: " + score;
  } else if (score > 9) {
    scoreshow.innerText = "Kakor: " + score;
    headertext.innerText = "Cookie Rookie 😍";
  } else {
    scoreshow.innerText = "Kakor: " + score;
  }
}
