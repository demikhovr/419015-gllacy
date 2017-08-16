var feedbackLink = document.querySelector(".contacts__btn");
      var feedback = document.querySelector(".modal-feedback");
      var feedbackClose = document.querySelector(".modal-feedback__close");

      feedbackLink.addEventListener("click", function(event) {
        event.preventDefault();
        feedback.classList.add("modal-feedback--show");
      });

      feedbackClose.addEventListener("click", function(event) {
        event.preventDefault();
        feedback.classList.remove("modal-feedback--show");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (feedback.classList.contains("modal-feedback--show")) {
            feedback.classList.remove("modal-feedback--show");
          }
        }
      });
