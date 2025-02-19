document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".cta-btn").addEventListener("click", function() {
        document.querySelector(".portfolio").scrollIntoView({ behavior: "smooth" });
    });
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = e.target.textContent.toLowerCase();
            if (target === "home") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else if (target === "about" || target === "projects" || target === "contact") {
                document.querySelector(".portfolio").scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});