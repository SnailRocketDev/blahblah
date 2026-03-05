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