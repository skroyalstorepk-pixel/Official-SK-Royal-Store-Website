// ===============================
// SK ROYAL STORE HERO SLIDER
// ===============================

const slides = document.querySelectorAll(".slide");

let current = 0;

function showSlide(index){

slides.forEach(slide=>{
slide.classList.remove("active");
});

slides[index].classList.add("active");

}

function nextSlide(){

current++;

if(current >= slides.length){

current = 0;

}

showSlide(current);

}

setInterval(nextSlide,4000);

// ===============================
// PREVIOUS / NEXT BUTTONS
// ===============================

const nextBtn=document.querySelector(".next");
const prevBtn=document.querySelector(".prev");

if(nextBtn){

nextBtn.addEventListener("click",()=>{

nextSlide();

});

}

if(prevBtn){

prevBtn.addEventListener("click",()=>{

current--;

if(current<0){

current=slides.length-1;

}

showSlide(current);

});

}

showSlide(current);
