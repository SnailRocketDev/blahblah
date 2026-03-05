import Swiper from "swiper";
import "swiper/css"

const params = new URLSearchParams(window.location.search);
const difficulty = params.get("difficulty");

const difficultyMap = {
  w: "Warm-Up",
  e: "Easy",
  m: "Moderate",
  c: "Challenging",
  a: "Advanced",
};

const tag = difficultyMap[difficulty];

if (tag) {
  fetch("blahblah/blahblah-merged-utf-8.json")
    .then((res) => res.json())
    .then((allQuestions) => {
      const filtered = allQuestions.filter((q) => q.DifficultyTag === tag);
      const result = filtered[Math.floor(Math.random() * filtered.length)];
      console.log(result);
      displayQuestionFR(result);
    });
}

function displayQuestionFR(result) {
  document.getElementById("question").textContent = result.QuestionFR;
}

const swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
    });