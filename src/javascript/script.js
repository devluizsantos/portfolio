const imgs = document.querySelectorAll('img[data-hover]');

imgs.forEach(img => {
  const originalSrc = img.src;
  const hoverSrc = img.dataset.hover;

  img.addEventListener('mouseover', () => img.src = hoverSrc);
  img.addEventListener('mouseout', () => img.src = originalSrc);
});

const verMaisBtn = document.getElementById('ver-mais');
const imagens = document.querySelectorAll('#galeria > div');

let mostrando = false;

verMaisBtn.addEventListener('click', () => {
  mostrando = !mostrando;

  imagens.forEach((img, index) => {
    if (index >= 3) {
      img.classList.toggle('hidden', !mostrando);
    }
  });

  verMaisBtn.textContent = mostrando ? "Ver Menos" : "Ver Mais";
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-item a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 150) {
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