let shareOut = document.querySelector(".card__share--out");
let cardShare = document.querySelector(".card__share");
let body = document.body;

body.addEventListener("click", (e) => {
  console.log(e.target);
  if (
    e.target == shareOut ||
    e.target.parentElement == shareOut
  ) {
    cardShare.classList.add("active");
  } else if (
    e.target == cardShare ||
    e.target.parentElement == cardShare ||
    e.target.parentElement.parentElement == cardShare
  ) {
    return;
  } else {
    cardShare.classList.remove("active");
  }
});
