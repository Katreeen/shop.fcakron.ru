"use strict";

document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.querySelector('.navbar-toggler'),
        drop = document.querySelector('.drop__menu'),
        menu  = document.querySelector('.drop__wrap'),
        closeBtn = document.querySelector('.navbar-close');

    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      drop.classList.add('active');
      document.body.classList.add('hide');
     
    });
  
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenu();
    });
    
    drop.addEventListener('click', (e) => {
      e.preventDefault();
      if (drop.classList.contains('active')) {
        console.log(drop);
        const withinBoundaries = e.composedPath().includes(menu);
        if ( ! withinBoundaries ) {
          closeMenu();
        }
        
      }
    });
  

    function closeMenu() {
      drop.classList.remove('active');
      document.body.classList.remove('hide');
    }
  
  const searchBtn = document.querySelector('.header__search .search-link');
  const searchForm = document.querySelector('.header__search .search-form');
  const searchFormClose = document.querySelector('.header__search .btn-close');  
  const searchMobilForm = document.querySelector('.drop__search .search-wrap');
  const searchMobilBtn = document.querySelector('.drop__search .search-link');

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchForm.classList.add('active');
    
  });
  searchFormClose.addEventListener('click', (e) => {
    e.preventDefault();
    searchForm.classList.remove('active');
    
  });
  searchMobilBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchMobilForm.classList.toggle('active');
    
  });
  
  

  customSelect('.custom-select');

  const productThumbs = new Swiper('.product__thumbs', {
    spaceBetween: 17,
    slidesPerView: 5,
    slideToClickedSlide: true,
  });


  const productSlider = new Swiper(".product__swiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    mousewheel: true,
    thumbs: {
      swiper: productThumbs
    }
  });

  

  productSlider[0].controller.control = productThumbs;
  productThumbs[0].controller.control = productSlider;





  
});