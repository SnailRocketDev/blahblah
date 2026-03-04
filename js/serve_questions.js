document.getElementById("Warm Up").onclick = function () {
  Promise.all([
    fetch("blahblah/blahblah_a1.json").then((res) => res.json()),
    fetch("blahblah/blahblah_a2.json").then((res) => res.json()),
    fetch("blahblah/blahblah_b1.json").then((res) => res.json()),
    fetch("blahblah/blahblah_b2.json").then((res) => res.json()),
    fetch("blahblah/blahblah_c1.json").then((res) => res.json()),
  ]).then((allFiles) => {
    const allQuestions = allFiles.flat();
    const easyQuestions = allQuestions.filter((q) => q.DifficultyTag === "Warm-Up");
    const randomIndex = Math.floor(Math.random() * easyQuestions.length);
    const result = easyQuestions[randomIndex];
    console.log(result);
    displayQuestionFR(result)
  });
};

document.getElementById("Easy").onclick = function () {
  Promise.all([
    fetch("blahblah/blahblah_a1.json").then((res) => res.json()),
    fetch("blahblah/blahblah_a2.json").then((res) => res.json()),
    fetch("blahblah/blahblah_b1.json").then((res) => res.json()),
    fetch("blahblah/blahblah_b2.json").then((res) => res.json()),
    fetch("blahblah/blahblah_c1.json").then((res) => res.json()),
  ]).then((allFiles) => {
    const allQuestions = allFiles.flat();
    const easyQuestions = allQuestions.filter((q) => q.DifficultyTag === "Easy");
    const randomIndex = Math.floor(Math.random() * easyQuestions.length);
    const result = easyQuestions[randomIndex];
    console.log(result);
    displayQuestionFR(result)
  });
};

document.getElementById("Moderate").onclick = function () {
  Promise.all([
    fetch("blahblah/blahblah_a1.json").then((res) => res.json()),
    fetch("blahblah/blahblah_a2.json").then((res) => res.json()),
    fetch("blahblah/blahblah_b1.json").then((res) => res.json()),
    fetch("blahblah/blahblah_b2.json").then((res) => res.json()),
    fetch("blahblah/blahblah_c1.json").then((res) => res.json()),
  ]).then((allFiles) => {
    const allQuestions = allFiles.flat();
    const easyQuestions = allQuestions.filter((q) => q.DifficultyTag === "Moderate");
    const randomIndex = Math.floor(Math.random() * easyQuestions.length);
    const result = easyQuestions[randomIndex];
    console.log(result);
    displayQuestionFR(result) 
  });
};

document.getElementById("Challenging").onclick = function () {
  Promise.all([
    fetch("blahblah/blahblah_a1.json").then((res) => res.json()),
    fetch("blahblah/blahblah_a2.json").then((res) => res.json()),
    fetch("blahblah/blahblah_b1.json").then((res) => res.json()),
    fetch("blahblah/blahblah_b2.json").then((res) => res.json()),
    fetch("blahblah/blahblah_c1.json").then((res) => res.json()),
  ]).then((allFiles) => {
    const allQuestions = allFiles.flat();
    const easyQuestions = allQuestions.filter((q) => q.DifficultyTag === "Challenging");
    const randomIndex = Math.floor(Math.random() * easyQuestions.length);
    const result = easyQuestions[randomIndex];
    console.log(result);
    displayQuestionFR(result)
  });
};

document.getElementById("Advanced").onclick = function () {
  Promise.all([
    fetch("blahblah/blahblah_a1.json").then((res) => res.json()),
    fetch("blahblah/blahblah_a2.json").then((res) => res.json()),
    fetch("blahblah/blahblah_b1.json").then((res) => res.json()),
    fetch("blahblah/blahblah_b2.json").then((res) => res.json()),
    fetch("blahblah/blahblah_c1.json").then((res) => res.json()),
  ]).then((allFiles) => {
    const allQuestions = allFiles.flat();
    const easyQuestions = allQuestions.filter((q) => q.DifficultyTag === "Advanced");
    const randomIndex = Math.floor(Math.random() * easyQuestions.length);
    const result = easyQuestions[randomIndex];
    console.log(result);
    displayQuestionFR(result)
  });
};

function displayQuestionFR(result) {
      document.getElementById("question").textContent = result.QuestionFR;
}
