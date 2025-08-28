// JavaScript placeholder

// Placeholder for any future JS code
// Added smooth scroll for anchor links (if any)
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});


 // typewriter
const companyName = "Free classes, no fees, ever!";
const typingElem = document.getElementById("typing");
const typingSpeed = 150;   // ms per letter
const erasingSpeed = 75;   // ms per letter
const pauseAfterTyping = 2000;  // ms to wait before erasing

let charIndex = 0;
let isErasing = false;

function typeWriter() {
  if (!isErasing) {
    // Type forward
    if (charIndex < companyName.length) {
      typingElem.textContent += companyName.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      // Pause before deleting
      isErasing = true;
      setTimeout(typeWriter, pauseAfterTyping);
    }
  } else {
    // Erase
    if (charIndex > 0) {
      typingElem.textContent = companyName.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeWriter, erasingSpeed);
    } else {
      // Start typing again
      isErasing = false;
      setTimeout(typeWriter, typingSpeed);
    }
  }
}

// Kick off the effect once DOM is loaded
document.addEventListener("DOMContentLoaded", typeWriter);



