
// 1. Scroll 

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});



// 2. Navbar active au scroll

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});



// 3. Animation barre de progression

const progressBar = document.querySelector(".prog-bar-inner");
const progressText = document.querySelector(".prog-pct");

let progress = 0;

function animateProgress() {
  if (progress < 68) {
    progress++;
    progressBar.style.width = progress + "%";
    progressText.textContent = progress + "%";
    requestAnimationFrame(animateProgress);
  }
}

// lancer une  animation quand visible
window.addEventListener("load", animateProgress);


// 4. Animation apparition au scroll

const revealElements = document.querySelectorAll(
  ".feature-card, .team-card, .stack-item, .stat"
);

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 50) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

// initial state
revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);



// 5. Boutons 

const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";

    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});



// 6. Navbar effet au scroll

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
  } else {
    nav.style.boxShadow = "none";
  }
});