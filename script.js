document.addEventListener('DOMContentLoaded', () => {
  //  Регистрация
  const form = document.getElementById('regForm');
  if (form) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirm');
    const serviceSelect = document.getElementById('service');
    const message = document.getElementById('message');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      message.innerHTML = '';

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      const confirm = confirmInput.value;
      const service = serviceSelect.value;

      if (!name || !email || !password || !confirm || !service) {
        return showError('Пожалуйста, заполните все поля');
      }

      if (!isEmailValid(email)) {
        return showError('Неверный формат email');
      }

      if (!isPasswordStrong(password)) {
        return showError('Пароль должен быть минимум 8 символов');
      }

      if (password !== confirm) {
        return showError('Пароли не совпадают');
      }

      showMessage('Регистрация успешна!', true);
      form.reset();
    });

    function isEmailValid(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isPasswordStrong(password) {
      return password.length >= 8;
    }

    function showMessage(text, success) {
      message.textContent = text;
      message.style.backgroundColor = success ? '#4CAF50' : '#f44336';
      message.style.color = 'white';
      message.style.padding = '10px';
      message.style.marginTop = '10px';
    }

    function showError(text) {
      showMessage(text, false);
    }
  }

  //  Слайдер
  const slides = document.querySelectorAll('.slide');
  if (slides.length > 0) {
    let slideIndex = 0;

    function showNextSlide() {
      slides[slideIndex].classList.remove('active');
      slideIndex = (slideIndex + 1) % slides.length;
      slides[slideIndex].classList.add('active');
    }

    setInterval(showNextSlide, 5000);
  }

  //  Particles.js
  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#bb86fc" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 }
        },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#bb86fc",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: { opacity: 1 }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  } else {
    console.error("particles.js не загружен!");
  }
});