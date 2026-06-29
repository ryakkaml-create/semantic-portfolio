/* ===========================
   DARK MODE
=========================== */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});


/* ===========================
   IMAGE POPUP
=========================== */

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

function openImage(image, title) {

    modal.style.display = "flex";

    modalImg.src = image;

    caption.innerHTML = title;

}


// Close button

closeBtn.onclick = function () {

    modal.style.display = "none";

}


// Click outside image

window.onclick = function (e) {

    if (e.target == modal) {

        modal.style.display = "none";

    }

}


// ESC key closes popup

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        modal.style.display = "none";

    }

});


/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


/* ===========================
   ACTIVE NAVIGATION
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
