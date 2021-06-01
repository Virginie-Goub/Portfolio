let submit = document.querySelector(".submit-button");
let formInputs = document.querySelectorAll("form.contact-form > input");
let message = document.querySelector(".message-form");

let inputs = document.querySelectorAll(".js-input");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let data = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    message: message.value,
  };
  /*console.log(data);*/
  postData("http://localhost:8000/contact", data).then((data) => {
    if (!data) {
      alert("erreur formulaire non envoyé");
    } else {
      alert("Formulaire de contact bien envoyé");
    }
    console.log(data);
  });
});
