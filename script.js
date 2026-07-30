// ===========================
// SK ROYAL STORE HERO SLIDER
// ===========================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

setInterval(()=>{

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

},4000);

showSlide(currentSlide);// =============================
// SK ROYAL STORE JAVASCRIPT
// PART 6
// =============================


// MOBILE MENU

function toggleMenu(){

    let menu = document.querySelector(".nav-links");

    if(menu){
        menu.classList.toggle("active");
    }

}



// PRODUCT SEARCH

function searchProducts(){

    let input = document
    .getElementById("searchBox")
    .value
    .toLowerCase();


    let products = document
    .querySelectorAll(".product-card");


    products.forEach(function(product){

        let name = product
        .innerText
        .toLowerCase();


        if(name.includes(input)){

            product.style.display="block";

        }

        else{

            product.style.display="none";

        }

    });

}



// SMOOTH SCROLL

document.querySelectorAll("a").forEach(function(link){

    link.addEventListener("click",function(e){

        let target=this.getAttribute("href");


        if(target && target.startsWith("#")){

            e.preventDefault();

            document
            .querySelector(target)
            .scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});




// BUTTON CLICK EFFECT

let buttons=document.querySelectorAll(".gold-btn");


buttons.forEach(function(btn){

    btn.addEventListener("click",function(){

        btn.style.transform="scale(0.9)";


        setTimeout(function(){

            btn.style.transform="scale(1)";

        },150);

    });

});




// CART COUNTER

let cartCount=0;


function addToCart(){

    cartCount++;


    let cart=document
    .getElementById("cart-count");


    if(cart){

        cart.innerHTML=cartCount;

    }


    alert(
    "Product added to cart!"
    );

}




// PAGE LOAD MESSAGE

window.onload=function(){

    console.log(
    "Welcome to SK Royal Store"
    );

};