const scoreShow = document.getElementById("score");
const button = document.getElementById("button");
const headerText = document.getElementById("headerText");

let score = 0;


button.addEventListener("click", buttonClick);

function buttonClick() {
  score++;
  if (score > 49) {
    scoreShow.innerText = score;
    scoreShow.style.color = "#ff5454";
    headerText.innerText = "Cookie Pro 😳";
    headerText.style.fontWeight = "500";
    scoreShow.style.fontWeight = "500";
    scoreShow.style.boxShadow = "0px 0px 30px #ff5454"
  } else if (score > 29) {
    scoreShow.innerText = score;
    scoreShow.style.color = "#f56dfa";
    headerText.innerText = "Cookie Enthusiast 😎";
    headerText.style.fontWeight = "400";
    scoreShow.style.fontWeight = "400";
    scoreShow.style.boxShadow = "0px 0px 30px #f56dfa";
  } else if (score > 19) {
    scoreShow.innerText = score;
    scoreShow.style.color = "#5283ff";
    headerText.innerText = "Cookie Rookie 😍";
    headerText.style.fontWeight = "300";
    scoreShow.style.fontWeight = "300";
    scoreShow.style.boxShadow = "0px 0px 30px #5283ff";
  } else if (score > 9) {
    scoreShow.innerText = score;
    scoreShow.style.color = "#83fa48";
    headerText.innerText = "Cookie Rookie 😍";
    headerText.style.fontWeight = "200";
    scoreShow.style.fontWeight = "200";
    scoreShow.style.boxShadow = "0px 0px 30px #83fa48";
  } else if (score > 0) {
    scoreShow.innerText = score;
    headerText.innerText = "Cookie Noob 💩";
    headerText.style.fontWeight = "100";
    scoreShow.style.fontWeight = "100";
  } else {
    scoreShow.innerText = score;
  }
}
