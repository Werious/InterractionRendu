"use strict";

let burger = document.querySelector(".burger-icon");
let darkmode = document.querySelector(".dark-btn");

// SIDENAV BURGER BTN
burger.addEventListener('click', function() {
    burger.classList.toggle("shownav");
    document.querySelector("nav").classList.toggle("shownav");
    console.log("NAV !");
}) 

// DARKMODE BTN
darkmode.addEventListener('click', darken)
function darken() {
    document.querySelector("body").classList.toggle("dark");

    if(document.querySelector("body").classList.contains("dark")){
        localStorage['darkmode']= 'enabled';
        darkmode.innerHTML="Lightmode";
    } else{
        localStorage['darkmode']= 'disabled';
        darkmode.innerHTML="Darkmode";
    }
}

if(localStorage['darkmode']=='enabled'){
    darken();
}

// FORM
document.getElementById("submit").addEventListener('click',function(e){
    let prenom = document.getElementById("prenom").value;
    validateMail();
    validatePassword();
    if(validateMail() && validatePassword() && prenom.length>=1) {
        document.querySelector("form").style.boxShadow="0px 5px 15px 5px rgba(0, 255, 13, 0.36)";
        document.getElementById("submit").style.backgroundColor="rgb(48, 203, 55)";
        console.log(prenom);
        console.log(mdpInput.value);
        console.log(mailInput.value);
    } else {
        document.querySelector("form").style.boxShadow="0px 5px 15px 5px rgba(255, 1, 1, 0.36)";
        document.getElementById("submit").style.backgroundColor="var(--text-color)";
    }
    e.preventDefault();
})

let mdpInput = document.getElementById("mdp");
function validatePassword() {
    let mdpError = document.getElementById("mdpError");
    let mdpRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if(mdpRegex.test(mdpInput.value)) {
        mdpError.innerHTML="";
        return true;
    } else {
        mdpError.innerHTML="Le mot de passe doit contenir au moins une majuscule, une minuscule et un caractère spécial, et faire au moins 8 caractères de long.";
        return false;
    }
}

let mailInput = document.getElementById("mail");
function validateMail() {
    let mailError = document.getElementById("mailError");
    let mailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

    if(mailRegex.test(mailInput.value)) {
        mailError.innerHTML="";
        return true;
    } else {
        mailError.innerHTML="Mail invalide (exemple@domaine.fr)";
        return false;
    }
}