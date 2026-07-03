/* =====================================================
        DESIGN BY MUDASSIR
        Portfolio V4 JavaScript
===================================================== */

"use strict";

/* ===========================================
        MOBILE MENU
=========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuBtn.innerHTML = navMenu.classList.contains("active")
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });

}


/* ===========================================
        CLOSE MENU AFTER CLICK
=========================================== */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


/* ===========================================
        STICKY HEADER
=========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ===========================================
        ACTIVE NAVIGATION
=========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

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


/* ===========================================
        BACK TO TOP BUTTON
=========================================== */

const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ===========================================
        PRELOADER
=========================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.remove();

        }, 600);

    }

});


/* ===========================================
        SCROLL REVEAL
=========================================== */

const hiddenElements = document.querySelectorAll(

    ".about,.services,.skills,.portfolio,.testimonials,.contact,.experience,.stats,.footer"

);

const reveal = () => {

    hiddenElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();


/* ===========================================
        FLOATING IMAGE
=========================================== */

const heroImage = document.querySelector(".image-wrapper");

window.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform =
        `translate(${x}px,${y}px)`;

});


/* ===========================================
        COUNTER ANIMATION
=========================================== */

const counters = document.querySelectorAll(".stat-card h2");

let started = false;

function startCounter() {

    if (started) return;

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const position = stats.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counters.forEach(counter => {

            const text = counter.innerText;

            const target = parseInt(text);

            if (isNaN(target)) return;

            let count = 0;

            const speed = target / 80;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

        });

        started = true;

    }

}

window.addEventListener("scroll", startCounter);


/* ===========================================
        PARALLAX BACKGROUND
=========================================== */

window.addEventListener("mousemove", (e) => {

    const blur1 = document.querySelector(".blur-one");
    const blur2 = document.querySelector(".blur-two");
    const blur3 = document.querySelector(".blur-three");

    if (!blur1 || !blur2 || !blur3) return;

    blur1.style.transform =
        `translate(${e.clientX / 40}px,${e.clientY / 40}px)`;

    blur2.style.transform =
        `translate(${-e.clientX / 50}px,${-e.clientY / 50}px)`;

    blur3.style.transform =
        `translate(${e.clientX / 60}px,${-e.clientY / 60}px)`;

});


/* ===========================================
        CONTACT FORM
=========================================== */

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}


/* ===========================================
        YEAR
=========================================== */

const year = new Date().getFullYear();

const footerBottom = document.querySelector(".footer-bottom p");

if (footerBottom) {

    footerBottom.innerHTML =
        `© ${year} Design By Mudassir. All Rights Reserved.`;

}
/* ===========================================
        SKILLS PROGRESS ANIMATION
=========================================== */

const skillSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress");

let skillsAnimated = false;

function animateSkills() {

    if (!skillSection || skillsAnimated) return;

    const sectionTop = skillSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 120) {

        progressBars.forEach(bar => {

            let width = "0%";

            if (bar.classList.contains("photoshop")) width = "95%";
            else if (bar.classList.contains("illustrator")) width = "92%";
            else if (bar.classList.contains("aftereffects")) width = "88%";
            else if (bar.classList.contains("xd")) width = "90%";
            else if (bar.classList.contains("figma")) width = "95%";

            else if (bar.classList.contains("branding")) width = "95%";
            else if (bar.classList.contains("logo")) width = "96%";
            else if (bar.classList.contains("social")) width = "98%";
            else if (bar.classList.contains("uiux")) width = "92%";
            else if (bar.classList.contains("print")) width = "90%";

            else if (bar.classList.contains("ai")) width = "92%";
            else if (bar.classList.contains("prompt")) width = "90%";
            else if (bar.classList.contains("video")) width = "85%";
            else if (bar.classList.contains("htmlcss")) width = "80%";
            else if (bar.classList.contains("javascript")) width = "75%";

            bar.style.width = "0%";

            setTimeout(() => {

                bar.style.transition = "width 2s ease";

                bar.style.width = width;

            }, 150);

        });

        skillsAnimated = true;

    }

}

window.addEventListener("scroll", animateSkills);

animateSkills();


/* ===========================================
        CONSOLE MESSAGE
=========================================== */

console.log("%cDesign By Mudassir",
"font-size:28px;font-weight:bold;color:#3B82F6");

console.log("%cPortfolio V4 Loaded Successfully 🚀",
"font-size:16px;color:#60A5FA");