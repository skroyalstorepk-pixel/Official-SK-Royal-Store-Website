// ===================================
// SK ROYAL STORE JAVASCRIPT
// ===================================

// 1. HERO SLIDER
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    if (slides.length === 0) return;
    
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

if (slides.length > 0) {
    setInterval(() => {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }, 4000);
}

// 2. MOBILE MENU TOGGLE
function toggleMenu() {
    let menu = document.querySelector(".nav-links");
    if (menu) {
        menu.classList.toggle("active");
    }
}

// 3. PRODUCT SEARCH FUNCTIONALITY
function searchProducts() {
    let input = document.getElementById("searchBox");
    if (!input) return;

    let filter = input.value.toLowerCase();
    let products = document.querySelectorAll(".product-card");

    products.forEach(function (product) {
        let name = product.innerText.toLowerCase();
        if (name.includes(filter)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// 4. BUTTON CLICK SCALING EFFECT
let buttons = document.querySelectorAll(".gold-btn");

buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        btn.style.transform = "scale(0.95)";
        setTimeout(function () {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});

// 5. PAGE LOAD LOG
window.onload = function () {
    console.log("Welcome to SK Royal Store");
};