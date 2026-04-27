// TYPEWRITER EFFECT
const texts = ["Web Developer", "Graphic Designer", "Freelancer"];

let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  const current = texts[i];

  if (!isDeleting) {
    document.getElementById("type").innerHTML = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("type").innerHTML = current.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }

  setTimeout(type, isDeleting ? 80 : 120);
}

type();


// MODAL
function openModal(src) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}


// DARK/LIGHT TOGGLE
function toggleTheme() {
  document.body.classList.toggle("light");
}