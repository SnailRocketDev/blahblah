document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const difficulty = params.get("difficulty");
  const numCards = parseInt(params.get("count")) || 100;

  const difficultyMap = {
    w: "Warm-Up", e: "Easy", m: "Moderate", c: "Challenging", a: "Advanced",
  };

  const tag = difficultyMap[difficulty];

  if (tag) {
    fetch("blahblah/blahblah-german-complete.json")
      .then((res) => res.json())
      .then((allQuestions) => {
        const filtered = allQuestions.filter((q) => q.DifficultyTag === tag);

        const selected = pickRandom(filtered);
        const swiperWrapper = document.querySelector(".swiper-wrapper");
        swiperWrapper.innerHTML = "";

        selected.forEach((result) => {
          const slide = createSlide(result);
          swiperWrapper.appendChild(slide);
        });

        startSwiper();
      });
  }
});

let header = document.getElementById("blahblah");
let how = document.getElementById('how');
header.addEventListener('click', () => {
  window.location.href = "index.html"
  });

function pickRandom(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function createSlide(result) {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  slide.innerHTML = `
    <div class="container">
      <div class="upper-section">
        <div class="top">
          <p class="level">${result.Level} | ${result.LevelLabel}</p>
          <p class="theme">${result.Theme}</p>
        </div>
        <div>
          <p class="question">${result.QuestionDE}</p>
          <p class="hintEn">${result.HintEN}</p>
        </div>
      </div>
      <div class="lower-section">
        <div class="starters">
          ${buildStarter(result.Starter1, 1)}
          ${buildStarter(result.Starter2, 2)}
          ${buildStarter(result.Starter3, 3)}
          ${buildStarter(result.Starter4, 4)}
        </div>
        <div class="bottom">
          <p class="card-footer">${result.DifficultyTag}</p>
          <p class="card-num">${String(result.CardNumber).padStart(3, "0")}</p>
        </div>
      </div>
    </div>
  `;

  return slide;
}

function buildStarter(text, num) {
  if (!text || text === "@£$%^") return "";
  return `<p><span class="starter-number">${num}.</span> ${text}</p>`;
}

function startSwiper() {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}