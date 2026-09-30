// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });

});


// ================================
// ACTIVE NAVIGATION
// ================================

window.addEventListener("scroll", () => {

    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {

        if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.nav-link[href="#${section.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }

    });

});


// ================================
// COUNTER ANIMATION
// ================================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statistics = document.querySelector(".statistics");

    const position = statistics.getBoundingClientRect().top;

    if (position < window.innerHeight) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = Math.ceil(target / 80);

            const updateCounter = () => {

                current += increment;

                if (current >= target) {

                    counter.textContent =
                        target.toLocaleString();

                    return;
                }

                counter.textContent =
                    current.toLocaleString();

                requestAnimationFrame(updateCounter);
            };

            updateCounter();

        });
    }
}

window.addEventListener("scroll", startCounters);


// ================================
// ADMISSION FORM
// ================================

const form = document.getElementById("admissionForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    if (name.trim() === "" || phone.trim() === "") {

        formMessage.textContent =
            "Please fill all required details.";

        formMessage.style.color = "red";

        return;
    }

    formMessage.textContent =
        "Thank you! Your enquiry has been submitted successfully.";

    formMessage.style.color = "#28a745";

    form.reset();

});


// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(
    ".course-card, .feature-card, .contact-card, .about-content, .form-card"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 80) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.7s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();