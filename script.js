

// CV Download functionality
document.getElementById('downloadBtn').addEventListener('click', function() {
  console.log('CV download initiated');
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slider-image');
const indicators = document.querySelectorAll('.indicator');

function openSlider() {
  document.getElementById('sliderModal').style.display = 'flex';
  currentSlide = 0;
  updateSlider();
}

function closeSlider() {
  document.getElementById('sliderModal').style.display = 'none';
}

function changeSlide(direction) {
  currentSlide += direction;
  
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

function updateSlider() {
  
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  
 
  indicators.forEach(indicator => {
    indicator.classList.remove('active');
  });
  
 
  slides[currentSlide].classList.add('active');
  
 
  if (indicators[currentSlide]) {
    indicators[currentSlide].classList.add('active');
  }
}

window.onclick = function(event) {
  const modal = document.getElementById('sliderModal');
  if (event.target == modal) {
    closeSlider();
  }
}


document.addEventListener('keydown', function(event) {
  const modal = document.getElementById('sliderModal');
  if (modal.style.display === 'flex') {
    if (event.key === 'ArrowLeft') {
      changeSlide(-1);
    } else if (event.key === 'ArrowRight') {
      changeSlide(1);
    } else if (event.key === 'Escape') {
      closeSlider();
    }
  }
});