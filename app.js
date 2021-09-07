// Handle Form Submit
const contactForm = document.querySelector("form");

handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      console.log("success!");
      alert("Message recieved.Thank you, I will get back to you soon");
      contactForm.reset();
    })
    .catch((error) => {
      console.log(error.message);
    });
};
contactForm.addEventListener("submit", handleSubmit);

// Transitions
const scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

const showElements = document.querySelectorAll(".scrollShow");

function isElementInView(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

const visibilityChecker = () => {
  showElements.forEach((el) => {
    if (isElementInView(el)) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
  scroll(visibilityChecker);
};
visibilityChecker();
