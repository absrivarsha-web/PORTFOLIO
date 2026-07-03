// Mobile Menu
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

// Contact Form Validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if(name === "" || email === "" || message === ""){
        formMessage.style.color = "red";
        formMessage.innerHTML = "❌ Please fill in all fields.";
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){
        formMessage.style.color = "red";
        formMessage.innerHTML = "❌ Please enter a valid email address.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.innerHTML = "✅ Message sent successfully!";

    form.reset();
});