function welcome(){
alert("Welcome to TechVerse!");
}

window.addEventListener("scroll", function(){
let cards = document.querySelectorAll(".card");

cards.forEach(function(card){
let position = card.getBoundingClientRect().top;
let screenHeight = window.innerHeight;

if(position < screenHeight - 100){
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}
});
});