document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                e.preventDefault();
                const navHeight = document.querySelector("nav").offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

     (function (){
        emailjs.init("HCyvv3moCC9RpSQs4");
     }
)();

    // Contact form
    const contactForm = document.querySelector("#contact form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = contactForm.querySelector("input[name='name']").value.trim();
            const email = contactForm.querySelector("input[name='email']").value.trim();
            const message = contactForm.querySelector("textarea[name='message']").value.trim();

            if (!name || !email || !message) {
                alert("Please fill out all fields");
                return;
            }
             const submitbtn=document.querySelector("button[type='submit']");
             submitbtn.disabled=true;
             submitbtn.textContent="Sending...";
             emailjs.sendForm("service_huxke7o", "template_zcojm9b",contactForm)
              .then((res)=>{
                console.log(res);
                alert("email sent successfully");
                contactForm.reset();
              })
              .catch((err)=>{
                alert("error sending email");
                console.log(err);
              })
              .finally(()=>{
                submitbtn.disabled=false;
               submitbtn.textContent="send";
              })
              
            
        });
    }

    // Background video play on scroll
    const bgVideo = document.getElementById('bgVideo');
    const videoSection = document.getElementById('videoSection');

    if (bgVideo && videoSection) {
        window.addEventListener('scroll', () => {
            const rect = videoSection.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible && bgVideo.paused) {
                bgVideo.play();
            } else if (!isVisible && !bgVideo.paused) {
                bgVideo.pause();
            }
        });
    }
});

// Canvas code

