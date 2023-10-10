// JavaScript Document
$(function () {
	
  jQuery(window).scroll(function () {
    let scrollTop = jQuery(window).scrollTop(); // スクロール上部の位置
    let areaTop = jQuery(".section-message").offset().top; // 対象エリアの上部の位置
    let areaBottom = areaTop + jQuery(".section-message").innerHeight(); // 対象エリアの下部の位置

    if (scrollTop > areaTop && scrollTop < areaBottom) {
      jQuery(".js-logo").addClass("headerLogoScroll"); // スクロールが対象エリアに入った場合
    } else {
      jQuery(".js-logo").removeClass("headerLogoScroll"); // スクロールが対象エリアから出ている場合
    }
  });
  jQuery(window).scroll(function () {
    let scrollTop = jQuery(window).scrollTop(); // スクロール上部の位置
    let areaTop = jQuery(".section-message").offset().top; // 対象エリアの上部の位置
    let areaBottom = areaTop + jQuery(".section-message").innerHeight(); // 対象エリアの下部の位置

    if (scrollTop > areaTop && scrollTop < areaBottom) {
      jQuery(".js-menu-button").addClass("scroll-color"); // スクロールが対象エリアに入った場合
    } else {
      jQuery(".js-menu-button").removeClass("scroll-color"); // スクロールが対象エリアから出ている場合
    }
  });


  $(".menu-button").click(function () {
    $('.header-content-list').toggleClass('is-open');
  });
  $(".menu-button").click(function () {
    $(this).toggleClass('is-open');
  });
  $('.header-content-item a').on('click', function () {
    $('.menu-button').removeClass('is-open');
    $('.header-content-list').removeClass('is-open');
  });
  < /script> 
  < script
    >
    const swiper = new Swiper(".swiper", {
      slidesPerView: '1.1', // スライド数
      spaceBetween: '20px', // スライド間の余白
      freeMode: false, // 前後のスライドで止まらずにスライド
      grabCursor: false, // カーソルを置いたときに指のカーソルを表示
      allowTouchMove: true,
    });


  const listWrapperEl = document.querySelector('.side-scroll-list-wrapper');
  const listEl = document.querySelector('.side-scroll-list');

  gsap.to(listEl, {
    x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: '.section-event',
      start: 'top top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
      end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });


  // .section-faq__description dt をクリックしたら
  $('.section-faq__description dt').on('click', function () {
    // .section-faq__description dt に close がなければつける、あれば外す 次にある要素（dd）
    $(this).toggleClass('close').next().slideToggle();
  });


});
