const body = document.querySelector('.body');
const header = document.getElementById('header');

const mobileMenu = document.getElementById('header__mobile-menu');
const menuOpen = document.getElementById('mobile-menu-open');

const firstLine = document.getElementById('first-line');
const secondLine = document.getElementById('second-line');
const thirdLine = document.getElementById('third-line');

const dropButtonFirst = document.getElementById('roadmap__dropdown-button-first');
const dropTextFirst = document.getElementById('roadmap__dropdown-text-first');
const dropButtonSecond = document.getElementById('roadmap__dropdown-button-second');
const dropTextSecond = document.getElementById('roadmap__dropdown-text-second');

const roadmapArrow = document.getElementsByClassName('roadmap__dropdown-arrow');
console.log(roadmapArrow);

menuOpen.addEventListener('click', function (event) {
  event.preventDefault();
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

const swiper = new Swiper('.about-us__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (current, total) {
      return '<span class="' + current + '"> </span>' +
        ' Chapter' +
        '<span class="' + total + '"></span>'
    }
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


dropButtonFirst.addEventListener('click', function () {
  let currentElement = dropButtonFirst.nextElementSibling;
  roadmapArrow[0].classList.toggle('roadmap__dropdown-arrow_rotate')

  if (window.innerWidth >= 1313 && !currentElement.classList.contains('roadmap__dropdown-text_visible')) {
    currentElement.classList.add('roadmap__dropdown-text_visible');
  } else if (!currentElement.classList.contains('roadmap__dropdown-text_visible')) {
      currentElement.classList.add('roadmap__dropdown-text_visible');
      currentElement.style.maxHeight = currentElement.scrollHeight + 'px';
  } else {
    currentElement.classList.remove('roadmap__dropdown-text_visible');
    currentElement.style.maxHeight = null;
  }
})

dropButtonSecond.addEventListener('click', function () {
  let currentElement = dropButtonSecond.nextElementSibling;
  roadmapArrow[1].classList.toggle('roadmap__dropdown-arrow_rotate');

  if (window.innerWidth >= 1295 && !currentElement.classList.contains('roadmap__dropdown-text_visible')) {
    currentElement.classList.add('roadmap__dropdown-text_visible');
  } else if (!currentElement.classList.contains('roadmap__dropdown-text_visible')) {
      currentElement.classList.add('roadmap__dropdown-text_visible');
      currentElement.style.maxHeight = currentElement.scrollHeight + 'px';
  } else {
    currentElement.classList.remove('roadmap__dropdown-text_visible');
    currentElement.style.maxHeight = null;
  }
})

const accordeonButtons = document.querySelectorAll('.accordeon__button');
const accordeonText = document.querySelectorAll('.accordeon__text-box');
const accordeonButtonsSvg = document.querySelectorAll('.accordeon__button-svg');

accordeonButtons.forEach(function (accordeonButton) {
  accordeonButton.addEventListener('click', function () {
    let currentElement = accordeonButton.nextElementSibling;

    if (!currentElement.classList.contains('accordeon__text-box_visible')) {
      currentElement.classList.add('accordeon__text-box_visible');
      currentElement.style.maxHeight = currentElement.scrollHeight + 'px';
      accordeonButton.childNodes[1].classList.add('accordeon__button-svg_rotate');
      accordeonButton.classList.add('accordeon__button_active')
    } else {
      currentElement.classList.remove('accordeon__text-box_visible');
      currentElement.style.maxHeight = null;
      accordeonButton.childNodes[1].classList.remove('accordeon__button-svg_rotate');
      accordeonButton.classList.remove('accordeon__button_active')
    }
  })
});


