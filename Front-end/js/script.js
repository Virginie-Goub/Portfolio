/********************************* Texte qui défile ***********************************/

const textAnim = document.querySelector("h1");

new Typewriter(textAnim, {
  deleteSpeed: 10,
})
  .changeDelay(70)
  .typeString("Bonjour, je m'appelle Virginie,")
  .pauseFor(300)
  .typeString(" Dev Full-Stack JS.")
  .pauseFor(1000)
  .deleteChars(18)
  .typeString("à la recherche d'un stage!")
  .pauseFor(1000)
  .deleteChars(26)
  .typeString("curieuse, motivée et adaptable!")
  .pauseFor(1000)
  .deleteChars(31)
  .typeString("je serais ravie de faire partie de votre équipe!")
  .pauseFor(1000)
  .deleteChars(48)
  .typeString("n'hésitez pas à me contacter!")
  .start();
/********************************* Formulaire de contact **********************************/

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
