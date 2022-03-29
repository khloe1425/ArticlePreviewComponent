// Event click tooltip screen desktop
document.querySelector(".info__icon").addEventListener("click", function () {
  document.querySelector(".tooltip").classList.toggle("tooltip-click");
  document.querySelector(".info__icon").classList.toggle("info__icon--click");
  document
    .querySelector(".info__icon .fas")
    .classList.toggle("icon__color--change");
});
// Event click tooltip screen mobile
document.querySelector(".info__icon2").addEventListener("click", function () {
  document
    .querySelector(".tooltip__mobile")
    .classList.toggle("tooltip__mobile--click");
});
