// ===== Navigation Toggle (Mobile) =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close nav when clicking a link
navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("show");
  }
});

// ===== Back to Top Button =====
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ===== Theme Toggle (Light / Dark) =====
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});

// ===== Contact Form Validation (Basic) =====
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent actual submission

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    messageInput.value.trim() === ""
  ) {
    alert("Please fill in all required fields before submitting.");
    return;
  }

  alert("Thank you for your message! This form is for demo purposes only.");
  contactForm.reset();
});

// ===== Dynamic Year in Footer =====
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();
