const body = document.querySelector('.body');
const header = document.getElementById('header');

const mobileMenu = document.getElementById('mobile-menu');
const menuOpen = document.getElementById('mobile-menu-open');
const firstLine = document.getElementById('first-line');
const secondLine = document.getElementById('second-line');
const thirdLine = document.getElementById('third-line');

const dropButton = document.querySelectorAll('.roadmap__dropdown-button');
const roadmapArrow = document.getElementsByClassName('roadmap__dropdown-arrow');

const accordeonButtons = document.querySelectorAll('.accordeon__button');
const accordeonText = document.querySelectorAll('.accordeon__text-box');
const accordeonButtonsSvg = document.querySelectorAll('.accordeon__button-svg');
const roadmapPoints = document.querySelectorAll('.point-general');
const runStrings = document.querySelector('.run-strings');
const teamRunStrings = document.querySelector('.team__run-string');

const socialLinks = document.querySelectorAll('.social__link');

socialLinks.forEach((link) => {
  link.addEventListener('click',(event) => {
    event.preventDefault();
  })
})

const teamRunStringsObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('team__run-string_animated');
    } else {
      entry.target.classList.remove('team__run-string_animated');
    }
  });
});

teamRunStringsObserver.observe(teamRunStrings);

const runStringsObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('run-strings_animated');
    } else {
      entry.target.classList.remove('run-strings_animated');
    }
  });
});

runStringsObserver.observe(runStrings);

const roadmapsObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('point-general_animated');
      console.log(entry.target.classList)
    } else {
      entry.target.classList.remove('point-general_animated');
    }
  })
},{
  rootMargin:'200px 0px 0px 200px'
});

roadmapPoints.forEach(function (point) {
  return roadmapsObserver.observe(point);
});

menuOpen.addEventListener('click', function () {
  mobileMenu.classList.toggle('header__mobile-menu_active');

  if (mobileMenu.classList.contains('header__mobile-menu_active')) {
    firstLine.classList.add('header__mobile-menu-line_rotate1');
    secondLine.classList.add('header__mobile-menu-line_remove');
    thirdLine.classList.add('header__mobile-menu-line_rotate2');
    header.classList.add('header_active');
    body.classList.add('lock');
  } else {
    firstLine.classList.remove('header__mobile-menu-line_rotate1');
    secondLine.classList.remove('header__mobile-menu-line_remove');
    thirdLine.classList.remove('header__mobile-menu-line_rotate2');
    header.classList.remove('header_active');
    body.classList.remove('lock');
  }
});

window.addEventListener('scroll', function () {
 if (this.window.scrollY > 0) {
    header.classList.add('header_fixed');
  } else {
    header.classList.remove('header_fixed');
  }
});

const swiper1 = new Swiper('.about-us__slider', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (current, total) {
      return '<span class="' + current + '"> </span>' +
        ' Chapter' +
        '<span class="' + total + '"></span>'
    }
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


dropButton.forEach(function (button) {
  let currentElement = button.nextElementSibling;

  button.addEventListener('click', function () {
    console.log(button.childNodes)
    if (window.innerWidth >= 1400 && !currentElement.classList.contains('roadmap__dropdown-text_visible')) {
      currentElement.classList.add('roadmap__dropdown-text_visible');
      button.childNodes[1].classList.add('roadmap__dropdown-arrow_rotate');
    } else if (!currentElement.classList.contains('roadmap__dropdown-text_visible')) {
      currentElement.classList.add('roadmap__dropdown-text_visible');
      currentElement.style.maxHeight = currentElement.scrollHeight + 'px';
      button.childNodes[1].classList.add('roadmap__dropdown-arrow_rotate');
    } else {
      currentElement.classList.remove('roadmap__dropdown-text_visible');
      currentElement.style.maxHeight = null;
      button.childNodes[1].classList.remove('roadmap__dropdown-arrow_rotate');
    };
  });
});

accordeonButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    let currentElement = button.nextElementSibling;

    if (!currentElement.classList.contains('accordeon__text-box_visible')) {
      for (const text of accordeonText) {
        text.classList.remove('accordeon__text-box_visible');
        text.style.maxHeight = null;
        // button.childNodes[1].classList.toggle('accordeon__button-svg_rotate');
      }

      for (const svg of accordeonButtonsSvg) {
        svg.classList.remove('accordeon__button-svg_rotate');
      }

      currentElement.classList.add('accordeon__text-box_visible');
      currentElement.style.maxHeight = currentElement.scrollHeight + 'px';
      button.childNodes[1].classList.toggle('accordeon__button-svg_rotate');
      button.classList.add('accordeon__button_active');
    }

  });
});

accordeonButtons[0].click();

const swiper2 = new Swiper('.social__slider', {
  slidesPerView: 4,
  breakpoints: {
    0: {
      slidesPerView: 1.95,
      spaceBetween:50,
    },

    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    450: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },

    500: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },

    550: {
      slidesPerView:2.8,
    },

    600: {
      slidesPerView:2.8,
    },

    650: {
      slidesPerView:2.9,
    },

    700: {
      slidesPerView: 3,
      spaceBetween:0,
    },

    750: {
      slidesPerView: 3.1,
    },

    768: {
      slidesPerView: 2.6,
    },

    850: {
      slidesPerView: 2.8,
    },

    900: {
      slidesPerView:3.1,
    },

    950: {
      slidesPerView: 3.3,
    },

    1050: {
      slidesPerView: 3.4,
    },

    1100: {
      slidesPerView:3.8,
    },

    1180: {
      enabled: false,
      slidesPerView: 4,
    },
  },
});


