window.addEventListener('DOMContentLoaded', () => {
  // const showMenu = () => {
  //   const menuBtn = document.querySelector('.header__toggle');
  //   const menu = document.querySelector('.menu');
  //   const body = document.querySelector('body');
  //   const overlay = document.querySelector('.overlay');

  //   menuBtn.addEventListener('click', e => {
  //     menu.classList.toggle('active');
  //     menuBtn.classList.toggle('active');
  //     // overlay.classList.toggle('active');
  //     // body.classList.toggle('no-scroll');
  //   });



  //   // overlay.addEventListener('click', e => {
  //   //   menu.classList.remove('active');
  //   //   overlay.classList.remove('active');
  //   //   body.classList.remove('no-scroll');
  //   //   menuBtn.classList.remove('active');
  //   // });

  //   // overlay.addEventListener('click', e => {
  //   // menu.classList.remove('active');
  //   // menuBtn.classList.remove('active');
  //   // overlay.classList.remove('active');
  //   // body.classList.remove('no-scroll');
  //   // });

  // };
  // showMenu();



  const swiper = new Swiper(".hero__slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const swiper1 = new Swiper(".partners__slider", {
    slidesPerView: 4,
    // grid: {
    //   rows: 2,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const toggleAccordion = (accordion, accordionContent) => {
    const filters = document.querySelectorAll(accordion);

    filters.forEach(el => {
      el.addEventListener('click', e => {
        const target = e.currentTarget;
        const content = target.querySelector(accordionContent);

        target.classList.toggle('active');

        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  };
  toggleAccordion('.accordion', '.accordion__content');
  toggleAccordion('.faqs-box', '.faqs-box__content');

  function mixer() {
    const mixContent = document.querySelector('.blog-grid__list');
    if (mixContent) {
      const mixer = mixitup('.blog-grid__list');
    }
  }
  mixer();

  function showMore() {
    const btn = document.querySelector('.section-text__btn');
    const content = document.querySelector('.section-text__boxes');
    if (content) {
      btn.addEventListener('click', () => {
        content.classList.toggle('active');

        if (content.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
          btn.textContent = 'Свернуть';
        } else {
          content.style.maxHeight = null;
          btn.textContent = 'Развернуть';
        }
      });
    }
  };

  showMore();

  //  Modal
  const modalsSlider = () => {
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
    bindModal('.page-about__preview', '.popup--form', '.popup__close');
    bindModal('.quote__img', '.popup--thanks', '.popup__close');
  };
  modalsSlider();
});