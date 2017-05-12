var link = document.querySelector(".contacts-button");

var popup = document.querySelector(".contacts-form");
var overlay = document.querySelector(".contacts-form-overlay");
var close = popup.querySelector(".contacts-close-button");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("contacts-form-show");
  overlay.classList.add("contacts-form-overlay-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("contacts-form-show");
  overlay.classList.remove("contacts-form-overlay-show");
});
