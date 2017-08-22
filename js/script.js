var feedbackLink = document.querySelector(".contacts__btn");
var feedback = document.querySelector(".modal-feedback");
var feedbackClose = document.querySelector(".modal-feedback__close");
var modalOverlay  = document.querySelector('.modal-overlay');

feedbackLink.addEventListener("click", function(event) {
  event.preventDefault();
  feedback.classList.add("modal-feedback--show");
  modalOverlay.classList.add('modal-overlay--show');
});

feedbackClose.addEventListener("click", function(event) {
  event.preventDefault();
  feedback.classList.remove("modal-feedback--show");
  modalOverlay.classList.remove("modal-overlay--show");
});

modalOverlay.addEventListener('click', function (event) {
  event.preventDefault();
  modalOverlay.classList.remove('modal-overlay--show');
  feedback.classList.remove('modal-feedback--show');
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedback.classList.contains("modal-feedback--show")) {
      feedback.classList.remove("modal-feedback--show");
    }
  }
});
