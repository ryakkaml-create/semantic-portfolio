/* ===========================
   DARK / LIGHT MODE
=========================== */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {

        document.documentElement.removeAttribute("data-theme");

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    } else {

        document.documentElement.setAttribute("data-theme", "dark");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

});


/* ===========================
   PROJECT MODAL
=========================== */

const modal = document.getElementById("modal");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const closeBtn = document.querySelector(".close");


function openModal(image, title, description){

    modal.style.display = "flex";

    modalImage.src = image;

    modalTitle.textContent = title;

    modalDescription.textContent = description;

}


closeBtn.onclick = function(){

    modal.style.display = "none";

}


window.onclick = function(event){

    if(event.target == modal){

        modal.style.display = "none";

    }

}


document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){

        modal.style.display = "none";

    }

});


/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


/* ===========================
   ACTIVE NAV LINK
=========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
