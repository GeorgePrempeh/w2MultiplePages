// Contact form submission handler
document.addEventListener('DOMContentLoaded', function() {
    // Simple form submission handler
    document
        .querySelector(".contact-form")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for your message! We'll get back to you soon.");
            this.reset();
        });
});
