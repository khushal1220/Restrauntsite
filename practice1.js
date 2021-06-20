burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navele = document.querySelector(".navele");

burger.addEventListener("click",()=>{
    navbar.classList.toggle("h-class");
    navele.classList.toggle("v-class");
})



