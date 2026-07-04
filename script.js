"use strict";

/* Mobile Menu */

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

/* Close Menu On Link Click */

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu && menuBtn) {
            navMenu.classList.remove("active");
            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
});

/* Sticky Header */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* Active Navigation */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 160;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
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

/* Back To Top */

const topBtn = document.getElementById("backToTop");

if (topBtn) {
    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 400 ? "flex" : "none";
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* Preloader */

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

/* Scroll Reveal */

const revealElements = document.querySelectorAll(
    ".about, .services, .skills, .portfolio, .testimonials, .contact, .experience, .stats, .footer"
);

revealElements.forEach(el => {
    el.classList.add("hidden");
});

function revealOnScroll() {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* Counter Animation */

const counters = document.querySelectorAll(".stat-card h2");
let counterStarted = false;

function startCounter() {
    if (counterStarted) return;

    const statsSection = document.querySelector(".stats");
    if (!statsSection) return;

    const statsTop = statsSection.getBoundingClientRect().top;

    if (statsTop < window.innerHeight - 100) {
        counters.forEach(counter => {
            const originalText = counter.innerText.trim();

            if (originalText.includes("/")) {
                counter.innerText = originalText;
                return;
            }

            const target = parseInt(originalText);
            const suffix = originalText.replace(/[0-9]/g, "");

            if (isNaN(target)) return;

            let count = 0;
            const speed = Math.max(1, target / 80);

            function updateCounter() {
                count += speed;

                if (count < target) {
                    counter.innerText = Math.floor(count) + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target + suffix;
                }
            }

            updateCounter();
        });

        counterStarted = true;
    }
}

window.addEventListener("scroll", startCounter);
window.addEventListener("load", startCounter);

/* Skills Progress Animation */

const skillSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress");
let skillsAnimated = false;

const skillWidths = {
    photoshop: "95%",
    illustrator: "92%",
    aftereffects: "88%",
    xd: "90%",
    figma: "95%",
    branding: "95%",
    logo: "96%",
    social: "98%",
    uiux: "92%",
    print: "90%",
    ai: "92%",
    prompt: "90%",
    video: "85%",
    htmlcss: "80%",
    javascript: "75%"
};

progressBars.forEach(bar => {
    bar.style.width = "0%";
});

function animateSkills() {
    if (!skillSection || skillsAnimated) return;

    const sectionTop = skillSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 120) {
        progressBars.forEach(bar => {
            let width = "0%";

            Object.keys(skillWidths).forEach(className => {
                if (bar.classList.contains(className)) {
                    width = skillWidths[className];
                }
            });

            setTimeout(() => {
                bar.style.transition = "width 1.8s ease";
                bar.style.width = width;
            }, 150);
        });

        skillsAnimated = true;
    }
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

/* Desktop Parallax Glow */

const blur1 = document.querySelector(".blur-one");
const blur2 = document.querySelector(".blur-two");
const blur3 = document.querySelector(".blur-three");

window.addEventListener("mousemove", e => {
    if (window.innerWidth <= 768) return;
    if (!blur1 || !blur2 || !blur3) return;

    blur1.style.transform =
        `translate(${e.clientX / 45}px, ${e.clientY / 45}px)`;

    blur2.style.transform =
        `translate(${-e.clientX / 55}px, ${-e.clientY / 55}px)`;

    blur3.style.transform =
        `translate(${e.clientX / 65}px, ${-e.clientY / 65}px)`;
});

/* Contact Form */

const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();
    });
}

/* Dynamic Year */

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.innerHTML = `© ${year} Design By Mudassir. All Rights Reserved.`;
}

/* Console Message */

console.log(
    "%cDesign By Mudassir",
    "font-size:28px;font-weight:bold;color:#3B82F6"
);

console.log(
    "%cPortfolio Loaded Successfully 🚀",
    "font-size:16px;color:#60A5FA"
);