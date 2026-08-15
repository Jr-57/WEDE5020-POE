document.addEventListener("DOMContentLoaded", () => {

    const currentYearElements = document.querySelectorAll("#year");

    currentYearElements.forEach((element) => {
        const currentYear = new Date().getFullYear();

        element.textContent = currentYear;
    });

    const menuToggle = document.querySelector(".menu-toggle");

    const navigationLinks = document.querySelector(".nav-links");

    if (menuToggle && navigationLinks) {

        menuToggle.addEventListener("click", () => {

            const navigationIsOpen =
                navigationLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                navigationIsOpen
            );
        });
    }

    const quoteForm = document.querySelector("#quoteForm");

    if (quoteForm) {

        quoteForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const formMessage = document.querySelector("#formMessage");

            formMessage.textContent =
                "Thank you. Your quotation request has been captured. " +
                "Connect this form to your email or CRM before going live.";

            quoteForm.reset();
        });
    }

    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const contactMessage =
                document.querySelector("#contactMessage");

            contactMessage.textContent =
                "Thank you. Your enquiry has been captured. " +
                "Connect this form to your email service before going live.";

            contactForm.reset();
        });
    }
});
