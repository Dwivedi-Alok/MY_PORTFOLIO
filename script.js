document.addEventListener("DOMContentLoaded", function() {
    // Navigation smooth scrolling
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1); // Use 'this' instead of 'e.target'
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Contact form handling
    const contactForm = document.querySelector("#contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = contactForm.querySelector("input[name='name']").value.trim();
            const email = contactForm.querySelector("input[name='email']").value.trim();
            const message = contactForm.querySelector("textarea[name='message']").value.trim();
            const portfolioOwnerEmail = "alok78555@gmail.com"; 

            if (!name || !email || !message) {
                alert("Please fill out all fields");
                return;
            }

            const subject = encodeURIComponent("Contact Form Submission from " + name);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

            // Open the default email client
            window.location.href = `mailto:${portfolioOwnerEmail}?subject=${subject}&body=${body}`;
        });
    }
});
