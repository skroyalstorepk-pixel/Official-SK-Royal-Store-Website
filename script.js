/* =====================================
   SK ROYAL STORE
   script.js
===================================== */


/* ========= HERO SLIDER ========= */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

if (slides.length > 0) {

    slides[currentSlide].classList.add("active");

    setInterval(() => {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");

    }, 4000);

}


/* ========= PRODUCT SEARCH ========= */

const searchInput = document.querySelector(".search-section input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.indexOf(value) > -1) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}


/* ========= CATEGORY FILTER ========= */

const buttons = document.querySelectorAll(".categories button");

if (buttons.length > 0) {

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            const category = button.innerText.toLowerCase();

            const cards = document.querySelectorAll(".product-card");

            cards.forEach(card => {

                const text = card.innerText.toLowerCase();

                if (
                    category === "all" ||
                    text.includes(category.slice(0, -1)) ||
                    text.includes(category)
                ) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });

}


/* ========= IMAGE GALLERY ========= */

const bigImage = document.querySelector(".product-images > img");

const thumbs = document.querySelectorAll(".gallery img");

if (bigImage && thumbs.length > 0) {

    thumbs.forEach(img => {

        img.addEventListener("click", () => {

            bigImage.src = img.src;

        });

    });

}


/* ========= SMOOTH SCROLL ========= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ========= PAGE LOADED ========= */

window.addEventListener("load", () => {

    console.log("SK Royal Store Loaded Successfully");

});
