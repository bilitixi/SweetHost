class ImageSlider {
  constructor(container) {
    this.container = container;
    this.wrapper = container.querySelector('.slider-wrapper');
    this.slides = this.wrapper.querySelectorAll('.slider-image');
    this.dotsContainer = container.querySelector('.dots');
    this.prevBtn = container.querySelector('.prev');
    this.nextBtn = container.querySelector('.next');
    this.currentSlide = 0;
    this.maxDots = 5; // Maximum number of visible dots at a time
    this.dots = [];

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
      this.dots.push(dot);
    });
    this.updateDots();  // Initial dots display
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
    this.updateDots();
  }

  updateDots() {
    // Determine the start and end of the dot range to be displayed
    const start = Math.max(0, this.currentSlide - Math.floor(this.maxDots / 2));
    const end = Math.min(this.slides.length - 1, start + this.maxDots - 1);

    // Show only the dots within the range
    this.dotsContainer.innerHTML = '';
    for (let i = start; i <= end; i++) {
      this.dotsContainer.appendChild(this.dots[i]);
    }

    // Ensure the active dot is within the range
    this.dotsContainer.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === this.currentSlide - start);
    });

    // Scroll the dot container to show the correct set of dots
    const dotWidth = this.dotsContainer.querySelector('.dot').offsetWidth + 10; // 10 is the margin
    const totalDots = this.dots.length;
    const maxScroll = dotWidth * (totalDots - this.maxDots);

    // Calculate the scroll position based on the current slide
    const visibleDotsFrom = Math.max(0, this.currentSlide - Math.floor(this.maxDots / 2));
    const scrollPosition = dotWidth * visibleDotsFrom;

    // Scroll the dots container horizontally
    this.dotsContainer.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slider-container').forEach(container => {
    new ImageSlider(container);
  });
});
