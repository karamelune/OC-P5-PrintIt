const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Sélection des éléments du DOM
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const bannerDiv = document.getElementById("banner");
const dotsDiv = document.querySelector(".dots");

// Initialisation des variables
let currentIndex = 0;
let dots = [];

// Création des dots et ajout des écouteurs d'événements
slides.forEach((slide, i) => {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dotsDiv.appendChild(dot);
  dots.push(dot);

  dot.addEventListener("click", () => {
    updateSlide(i);
  });
});

// Ajout de la classe "dot_selected" au premier dot
dots[0].classList.add("dot_selected");

// Mise à jour de la diapositive
function updateSlide(index) {
  dots[currentIndex].classList.remove("dot_selected");
  currentIndex = index;
  dots[currentIndex].classList.add("dot_selected");
  bannerImg.src = slides[currentIndex].image;
  bannerText.innerHTML = slides[currentIndex].tagLine;
}

// Navigation avec les flèches
bannerDiv.addEventListener("click", (event) => {
  if (event.target.classList.contains("arrow_left")) {
    updateSlide((currentIndex - 1 + slides.length) % slides.length);
  } else if (event.target.classList.contains("arrow_right")) {
    updateSlide((currentIndex + 1) % slides.length);
  }
});

updateSlide(currentIndex);