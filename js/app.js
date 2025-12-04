
const h1 = document.getElementById("h11");
const scoreShow = document.getElementById("score");
const button = document.getElementById("button");
const headerText = document.getElementById("headertext");
const wrapper = document.getElementById("wrapper");

let score = 0;


button.addEventListener("click", buttonClick);

function buttonClick() {
  score++;
  if (score > 49) {
    scoreShow.innerText = score;
    scoreShow.style.color = "#ff5454";
    headerText.innerText = "Cookie Pro 😳";
    scoreShow.style.fontWeight = "bold";
  } else if (score > 29) {
    scoreShow.innerText = score;
    scoreShow.style.color = "#f56dfa";
    headerText.innerText = "Cookie Enthusiast 😎";
  } else if (score > 19) {
    scoreShow.innerText = score;
    headerText.innerText = "Cookie Rookie 😍";
  } else if (score > 0) {
    scoreShow.innerText = score;
    headerText.innerText = "Cookie Noob 💩";
  } else {
    scoreShow.innerText = score;
  }
}
