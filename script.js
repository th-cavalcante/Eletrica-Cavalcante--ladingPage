const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Função para exibir o slide atual
function showSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[currentSlide].classList.add('active');
}

// Função para alternar automaticamente os slides
function autoPlay() {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  showSlide();
}

// Definir intervalo de tempo para alternar os slides (a cada 5 segundos)
setInterval(autoPlay, 2000);

// Exibir o primeiro slide ao carregar a página
showSlide();
