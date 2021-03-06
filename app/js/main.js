window.addEventListener('DOMContentLoaded', () => {
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', e => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', e => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });

    menuCloseBtn.addEventListener('click', e => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  (function heroSlider() {
    const swiper = new Swiper(".hero__slider", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  })();

  (function partnersSlider() {
    const swiper1 = new Swiper(".partners__slider", {
      slidesPerView: 4,
      // grid: {
      //   rows: 2,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        310: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 80,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 100,
        }
      }
    });
  })();

  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);

    filters.forEach(el => {
      el.addEventListener('click', e => {
        const target = e.target.closest(accordion);
        const content = target.querySelector(accordionContent);

        target.classList.toggle('active');

        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + '1px';
          // content.style.maxHeight = `${400}px`;
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  };

  toggleAccordion('.faqs-box__top', '.faqs-box__content', '.faqs-box');
  toggleAccordion('.accordion__control', '.accordion__content', '.accordion');

  (function mixer() {
    const mixContent = document.querySelector('.blog-grid__list');
    if (mixContent) {
      const mixer = mixitup('.blog-grid__list');
    }
  })();

  (function showMore() {
    const btn = document.querySelector('.section-text__btn');
    const content = document.querySelector('.section-text__boxes');
    if (content) {
      btn.addEventListener('click', () => {
        content.classList.toggle('active');

        if (content.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
          btn.textContent = '????????????????';
        } else {
          content.style.maxHeight = null;
          btn.textContent = '????????????????????';
        }
      });
    }
  })();

  //  Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelector(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');

      if (modalEl) {
        openBtnEl.addEventListener('click', e => {

          if (e.target) {
            e.preventDefault()
          }

          modalEl.classList.add('active');
          body.classList.add('no-scroll');
        });

        closeEl.forEach(btn => {
          btn.addEventListener('click', e => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        })

        modalEl.addEventListener('click', e => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        })
      };
    };
    // bindModal('.page-about__preview', '.popup--form', '.popup__close');
    // bindModal('.quote__img', '.popup--thanks', '.popup__close');
  })();

  function scrollHeader() {
    const header = document.querySelector('header');

    if (this.scrollY >= 10) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  };

  window.addEventListener('scroll', scrollHeader);

  $('.select').select2();

  // * ==== Dropdown
  document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]');
      currentDropdown.classList.toggle('active');
    };

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove('active');
    });
  });
});