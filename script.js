
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let index = 0;

function showImage(i) {
  if (i < 0) index = images.length - 1;
  else if (i >= images.length) index = 0;
  else index = i;
  carouselImages.style.transform = `translateX(${-index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  showImage(index - 1);
});

nextBtn.addEventListener('click', () => {
  showImage(index + 1);
});


setInterval(() => {
  showImage(index + 1);
}, 5000);
