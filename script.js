

this.addEventListener("DOMContentLoaded", () =>{
    const questions = document.querySelectorAll(".question")
    questions.forEach((question) => question.addEventListener("click", () =>{
  
        if(question.parentNode.classList.contains("active")){
            question.parentNode.classList.toggle("active")
        }
    else{
    questions.forEach(question => question.parentNode.classList.remove("active"))
    question.parentNode.classList.add("active")
        }

    }))
}) 



function validerFormulaire(event) {
    
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const cin = document.getElementById("cin").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;

    const nomRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,}$/;
    const cinRegex = /^[A-Za-z0-9]{8}$/; 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const telephoneRegex = /^[0-9]{10}$/;

    if (!nomRegex.test(nom)) {
        alert("Nom non valide");
        event.preventDefault();
    }
    if (!nomRegex.test(prenom)) {
        alert("Prénom non valide");
        event.preventDefault();
    }
    if (!cinRegex.test(cin)) {
        alert("CIN non valide");
        event.preventDefault();
    }
    if (!emailRegex.test(email)) {
        alert("Adresse e-mail non valide");
        event.preventDefault();
    }
    if (!telephoneRegex.test(telephone)) {
        alert("Numéro de téléphone non valide");
        event.preventDefault();
    }
}


// document.getElementById("myForm").addEventListener("submit", validerFormulaire);


const burgerButton = document.querySelector(".burger");
const menu = document.querySelector(".nav_list");

burgerButton.addEventListener("click", function () {
    menu.classList.toggle("active");
});








