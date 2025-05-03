class ImageSlider {
    constructor(container) {
      this.container = container;
      this.wrapper = container.querySelector('.slider-wrapper');
      this.slides = this.wrapper.querySelectorAll('.slider-image');
      this.dotsContainer = container.querySelector('.dots');
      this.prevBtn = container.querySelector('.prev');
      this.nextBtn = container.querySelector('.next');
      this.currentSlide = 0;
  
      this.initDots();
      this.updateSlide();
      this.attachEvents();
    }
  
    initDots() {
      this.dotsContainer.innerHTML = '';
      this.slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => this.moveToSlide(index));
        this.dotsContainer.appendChild(dot);
      });
    }
  
    attachEvents() {
      this.prevBtn.addEventListener('click', () => this.moveSlide(-1));
      this.nextBtn.addEventListener('click', () => this.moveSlide(1));
    }
  
    moveSlide(direction) {
      this.currentSlide = (this.currentSlide + direction + this.slides.length) % this.slides.length;
      this.updateSlide();
    }
  
    moveToSlide(index) {
      this.currentSlide = index;
      this.updateSlide();
    }
  
    updateSlide() {
      this.wrapper.style.transform = `translateX(-${this.currentSlide * 100}%)`;
      this.dotsContainer.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === this.currentSlide);
      });
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.slider-container').forEach(container => {
      new ImageSlider(container);
    });
  });
  