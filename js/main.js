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

const roadmapArrowFirst = document.getElementById('roadmap-arrow-first');
const roadmapArrowSecond = document.getElementById('roadmap-arrow-second');

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
  dropTextFirst.classList.toggle('roadmap__dropdown-text_visible');
  let currentElement = dropTextFirst.nextElementSibling;
  roadmapArrowFirst.classList.toggle('roadmap__dropdown-arrow_rotate')


  if (!dropButtonFirst.classList.contains('roadmap__dropdown-text_visible')) {
    dropButtonFirst.classList.add('roadmap__dropdown-text_visible');
    // roadmapArrowFirst.classList.remove('roadmap__dropdown-arrow_rotate');
  } else {
    dropButtonFirst.classList.remove('roadmap__dropdown-text_visible');
    // roadmapArrowFirst.classList.add('roadmap__dropdown-arrow_rotate');
  }

  // if (!currentElement.classList.contains('roadmap__dropdown-text_visible')) {
  //     currentElement.classList.add('roadmap__dropdown-text_visible');
  //     currentElement.style.maxHeight = currentElement.scrollHeight + 'px';
  //   } else {
  //     currentElement.classList.remove('roadmap__dropdown-text_visible');
  //     currentElement.style.maxHeight = null;
  //   }
})

dropButtonSecond.addEventListener('click', function () {
  dropTextSecond.classList.toggle('roadmap__dropdown-text_visible');
  let currentElement = dropTextSecond.nextElementSibling;
  roadmapArrowSecond.classList.toggle('roadmap__dropdown-arrow_rotate');

  // if (!dropButtonSecond.classList.contains('roadmap__dropdown-text_visible')) {
  //   dropButtonSecond.classList.add('roadmap__dropdown-text_visible');

  // } else {
  //   dropButtonSecond.classList.remove('roadmap__dropdown-text_visible');
  // }

if (!currentElement.classList.contains('roadmap__dropdown-text_visible')) {
    currentElement.classList.add('roadmap__dropdown-text_visible');
  // currentElement.style.maxHeight = currentElement.scrollHeight + 'px';
  currentElement.style.maxHeight = currentElement.scrollHeight + 'px';
  
  } else {
    currentElement.classList.remove('roadmap__dropdown-text_visible');
    currentElement.style.maxHeight = null;
  }
})