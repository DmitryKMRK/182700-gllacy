var link = document.querySelector(".contacts-button");

var popup = document.querySelector(".contacts-form");
var close = popup.querySelector(".contacts-close-button");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("contacts-form-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("contacts-form-show");
});
