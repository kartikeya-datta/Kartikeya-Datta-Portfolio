// Add any interactivity or dynamic behavior here
// Example: Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

// EmailJS Integration
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send email using EmailJS
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(
      () => {
        // Success message
        formStatus.textContent = "Message sent successfully!";
        formStatus.style.color = "green";
        contactForm.reset();
      },
      (error) => {
        // Error message
        formStatus.textContent = "Failed to send message. Please try again.";
        formStatus.style.color = "red";
        console.error("EmailJS Error:", error);
      }
    );
});