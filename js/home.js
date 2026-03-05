let currentCard = null;

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    if (currentCard && currentCard !== card) {
      const cardToFlipBack = currentCard;
      setTimeout(() => {
        cardToFlipBack.classList.remove("flipped");
      }, 200);
    }
    card.classList.toggle("flipped");
    currentCard = card.classList.contains("flipped") ? card : null;
  });
});

document.querySelectorAll('.btn-container > button').forEach(button => {
  button.addEventListener("click", () => {
    const firstChar = button.id.charAt(0);
    //TODO: Add query param
    const language = button.id.charAt(2);
    if (language === "f") {
      console.log("sending to new page")
      window.location.href = `french.html?difficulty=${firstChar}`;
    } else if (language === "e") {
      window.location.href = `spanish.html?difficulty=${firstChar}`;
    } else if (language === "d") {
      window.location.href = `german.html?difficulty=${firstChar}`;
    };
  });
});