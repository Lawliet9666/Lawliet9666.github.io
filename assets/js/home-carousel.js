(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function setupCarousel(carousel) {
    const track = carousel.querySelector('.bibliography');
    const slides = Array.from(carousel.querySelectorAll('.bibliography > li'));
    const dots = Array.from(carousel.querySelectorAll('[data-carousel-dot]'));
    const previousButton = carousel.querySelector('[data-carousel-previous]');
    const nextButton = carousel.querySelector('[data-carousel-next]');
    const status = carousel.querySelector('[data-carousel-status]');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    let timer = null;
    let pointerStartX = null;
    let isHovering = false;
    let hasFocus = false;

    track.setAttribute('role', 'list');

    slides.forEach((slide, index) => {
      slide.setAttribute('role', 'group');
      slide.setAttribute('aria-roledescription', 'slide');
      slide.setAttribute('aria-label', `${index + 1} of ${slides.length}`);
    });

    function shouldPause() {
      return reduceMotion.matches || document.hidden || isHovering || hasFocus;
    }

    function updateVideos() {
      slides.forEach((slide, index) => {
        const video = slide.querySelector('video');
        if (!video) return;

        if (index === currentIndex && !reduceMotion.matches && !document.hidden) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }

    function render() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      slides.forEach((slide, index) => {
        const active = index === currentIndex;
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
        slide.querySelectorAll('a, button').forEach((element) => {
          element.tabIndex = active ? 0 : -1;
        });
      });

      dots.forEach((dot, index) => {
        const active = index === currentIndex;
        dot.setAttribute('aria-current', active ? 'true' : 'false');
      });

      if (status) status.textContent = `Publication ${currentIndex + 1} of ${slides.length}`;
      updateVideos();
    }

    function stopTimer() {
      if (timer !== null) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function startTimer() {
      stopTimer();
      if (slides.length > 1 && !shouldPause()) {
        timer = window.setInterval(() => {
          currentIndex = (currentIndex + 1) % slides.length;
          render();
        }, 6000);
      }
    }

    function goTo(index) {
      currentIndex = (index + slides.length) % slides.length;
      render();
      startTimer();
    }

    previousButton?.addEventListener('click', () => goTo(currentIndex - 1));
    nextButton?.addEventListener('click', () => goTo(currentIndex + 1));
    dots.forEach((dot, index) => dot.addEventListener('click', () => goTo(index)));

    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goTo(currentIndex - 1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goTo(currentIndex + 1);
      }
    });

    carousel.addEventListener('mouseenter', () => {
      isHovering = true;
      stopTimer();
    });
    carousel.addEventListener('mouseleave', () => {
      isHovering = false;
      startTimer();
    });
    carousel.addEventListener('focusin', () => {
      hasFocus = true;
      stopTimer();
    });
    carousel.addEventListener('focusout', () => {
      window.requestAnimationFrame(() => {
        hasFocus = carousel.contains(document.activeElement);
        startTimer();
      });
    });

    carousel.addEventListener(
      'touchstart',
      (event) => {
        pointerStartX = event.changedTouches[0].clientX;
        stopTimer();
      },
      { passive: true }
    );
    carousel.addEventListener(
      'touchend',
      (event) => {
        if (pointerStartX === null) return;
        const distance = event.changedTouches[0].clientX - pointerStartX;
        pointerStartX = null;
        if (Math.abs(distance) >= 40) goTo(currentIndex + (distance < 0 ? 1 : -1));
        else startTimer();
      },
      { passive: true }
    );

    document.addEventListener('visibilitychange', () => {
      updateVideos();
      startTimer();
    });
    reduceMotion.addEventListener?.('change', () => {
      render();
      startTimer();
    });

    render();
    startTimer();
  }

  document.querySelectorAll('[data-publication-carousel]').forEach(setupCarousel);
})();
