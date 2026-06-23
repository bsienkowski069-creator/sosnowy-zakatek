window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 100){
navbar.style.background = "#ffffff";
}
else{
navbar.style.background = "#ffffffdd";
}

});

document.querySelector("form")
.addEventListener("submit", e => {

e.preventDefault();

alert("Wiadomość została wysłana!");

});
