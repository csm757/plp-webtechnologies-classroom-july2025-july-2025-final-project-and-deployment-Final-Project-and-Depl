// "Learn More" button redirects to About page
const learnMoreBtn = document.getElementById("learnMoreBtn");
if (learnMoreBtn) {
  learnMoreBtn.addEventListener("click", () => {
    window.location.href = "about.html";
  });
}

// Contact form validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("feedback");

    if (name && email && message) {
      feedback.textContent = "✅ Message sent successfully!";
      feedback.style.color = "green";
      contactForm.reset();
    } else {
      feedback.textContent = "⚠️ Please fill out all fields before submitting.";
      feedback.style.color = "red";
    }
  });
}
