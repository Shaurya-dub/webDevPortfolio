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
    })
    .catch((error) => {
      console.log(error.message);
    });
};
contactForm.addEventListener("submit", handleSubmit);
