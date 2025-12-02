
const h1 = document.getElementById("h11");
const scoreshow = document.getElementById("score");
const button = document.getElementById("button");
const headertext = document.getElementById("headertext");
const wrapper = document.getElementById("wrapper");

let score = 0;


button.addEventListener("click", buttonClick);

function buttonClick() {
  score++;
  if (score > 49) {
    scoreshow.innerText = score;
    scoreshow.style.color = "#ff5454";
    headertext.innerText = "Cookie Pro 😳";
    scoreshow.style.fontWeight = "bold";
  } else if (score > 29) {
    scoreshow.innerText = score;
    scoreshow.style.color = "#f56dfa";
    headertext.innerText = "Cookie Enthusiast 😎";
  } else if (score > 19) {
    scoreshow.innerText = score;
    headertext.innerText = "Cookie Rookie 😍";
  } else if (score > 0) {
    scoreshow.innerText = score;
    headertext.innerText = "Cookie Noob 💩";
  } else {
    scoreshow.innerText = score;
  }
}
