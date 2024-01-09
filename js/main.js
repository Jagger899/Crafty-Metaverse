const body = document.querySelector('.body');
const header = document.getElementById('header');
const mobileMenu = document.getElementById('header__mobile-menu');
console.log(mobileMenu);
const menuOpen = document.getElementById('mobile-menu-open');
console.log(menuOpen);
const firstLine = document.getElementById('first-line');

const secondLine = document.getElementById('second-line');

const thirdLine = document.getElementById('third-line');

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
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
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
  
  
  // formatFractionCurrent: function (number) {
  //         return '0' + number;
  //     },
    // renderCustom: function (swiper, current, total) {
    //     return current + '/' + (total - 1);
    // },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'fraction',
  //   formatFractionCurrent: function (number) {
  //       return '0' + number;
  //   }
  // },
  //   pagination: {
  //   el: '.swiper-pagination',
  //   type: 'fraction',
  //   renderCustom: function (current, total) {
  //     return current + 'Chapter' + (total + 4);
  //   }
  // },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (current, total) {
      return '<span class="' + current + '"> </span>' +
        ' Chapter' +
        '<span class="' + total + '"></span>';
    },
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});