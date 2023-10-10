// JavaScript Document
$(function () {
  //	ロゴとハンバーガーメニューの色の変更
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


  //	ハンバーガーメニュー
  $(".menu-button").click(function () {
    $('.top-navarea').toggleClass('is-open');
    $('top-navarea').fadeToggle(4000); // navの表示・非表示切り替わる

  });

  $(".menu-button").click(function () {
    $(this).toggleClass('is-open');
  });
  $('.header-content-item a').on('click', function () {
    $('.menu-button').removeClass('is-open');
    $('.top-navarea').removeClass('is-open');
  });


  if (window.matchMedia("(max-width: 768px)").matches) {
    /* ウィンドウサイズが 768px以下の場合のコードをここに */
    let txt2 = "span.two",
      txt3 = "span.three",
      txt4 = "span.four",
      txt5 = "span.five",
      txt6 = "span.six",
      txt7 = "span.seven",
      txt8 = "span.eight",
      img2 = "img.two",
      img3 = "img.three",
      img4 = "img.four",
      img5 = "img.five",
      img6 = "img.six",
      img7 = "img.seven",
      img8 = "img.eight",
      video1 = "video.one",
      video2 = "video.two",
      video3 = "video.three",
      video4 = "video.four",
      video5 = "video.five",
      video6 = "video.six",
      video7 = "video.seven",
      video8 = "video.eight";

    gsap.timeline({
        defaults: {
          duration: 2
        },
        scrollTrigger: {
          trigger: ".section-genre",
          scrub: !0,
          start: '+=1',
          pin: !0,
          end: '+=4000',

        }
      })
      .to(".wrap span.one", {
        opacity: 0,
        delay: 2
      })
      .to(".wrap img.one", {
        opacity: 0,
        y: -3
      }, "<")
      .to(".wrap video.one", {
        opacity: 0,
        y: -3
      }, "<")
      .from(txt2, {
        opacity: 0
      })
      .from(img2, {
        opacity: 0,
        y: 3
      }, "<")
      .from(video2, {
        opacity: 0,
        y: 3
      }, "<")
      .to(txt2, {
        opacity: 0,
        delay: 2
      })
      .to(img2, {
        opacity: 0,
        y: -3
      }, "<")
      .to(video2, {
        opacity: 0,
        y: -3
      }, "<")
      .from(txt3, {
        opacity: 0
      })
      .from(img3, {
        opacity: 0,
        y: 3
      }, "<")
      .from(video3, {
        opacity: 0,
        y: 3
      }, "<")
      .to(txt3, {
        opacity: 0,
        delay: 2
      })
      .to(img3, {
        opacity: 0,
        y: -3
      }, "<")
      .to(video3, {
        opacity: 0,
        y: -3
      }, "<")
      .from(txt4, {
        opacity: 0
      })
      .from(img4, {
        opacity: 0,
        y: 3
      }, "<")
      .from(video4, {
        opacity: 0,
        y: 3
      }, "<")
      .to(txt4, {
        opacity: 0,
        delay: 2
      })
      .to(img4, {
        opacity: 0,
        y: -3
      }, "<")
      .to(video4, {
        opacity: 0,
        y: -3
      }, "<")
      .from(txt5, {
        opacity: 0
      })
      .from(img5, {
        opacity: 0,
        y: 3
      }, "<")
      .from(video5, {
        opacity: 0,
        y: 3
      }, "<")
      .to(txt5, {
        opacity: 0,
        delay: 2
      })
      .to(img5, {
        opacity: 0,
        y: -3
      }, "<")
      .to(video5, {
        opacity: 0,
        y: -3
      }, "<")
      .from(txt6, {
        opacity: 0
      })
      .from(img6, {
        opacity: 0,
        y: 3
      }, "<")
      .from(video6, {
        opacity: 0,
        y: 3
      }, "<")
      .to(txt6, {
        opacity: 0,
        delay: 2
      })
      .to(img6, {
        opacity: 0,
        y: -3
      }, "<")
      .to(video6, {
        opacity: 0,
        y: -3
      }, "<")
      .from(txt7, {
        opacity: 0
      })
      .from(img7, {
        opacity: 0,
        y: 3
      }, "<")
      .from(video7, {
        opacity: 0,
        y: 3
      }, "<")
      .to(txt7, {
        opacity: 0,
        delay: 2
      })
      .to(img7, {
        opacity: 0,
        y: -3
      }, "<")
      .to(video7, {
        opacity: 0,
        y: -3
      }, "<")
      .from(txt8, {
        opacity: 0
      })
      .from(img8, {
        opacity: 0,
        y: 3
      }, "<")
      .from(video8, {
        opacity: 0,
        y: 3
      }, "<")
      .to(txt8, {
        opacity: 1,
        duration: 2
      })
      .to(img8, {
        opacity: 1,
        y: 0
      }, "<")
      .to(video8, {
        opacity: 1,
        y: 0
      }, "<");

    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();

      $('.genre-arrow__round').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });

    });
  } else {
    /* ウィンドウサイズが 768px以上の場合のコードをここに */
    //	section-genre-pc
    $('.hiphop').mouseover(function () {
      $('.hip').toggleClass('active');
      $("#stalker").removeClass("active");
    });

    $('.hiphop').mouseout(function () {
      $('.hip').removeClass('active');
      $('#stalker').toggleClass('active');

    });
    $('.break').mouseover(function () {
      $('.br').toggleClass('active');
      $("#stalker").removeClass("active");
    });
    $('.break').mouseout(function () {
      $('.br').removeClass('active');
      $('#stalker').toggleClass('active');
    });

    $('.reggae').mouseover(function () {
      $('.re').toggleClass('active');
      $("#stalker").removeClass("active");
    });
    $('.reggae').mouseout(function () {
      $('.re').removeClass('active');
      $('#stalker').toggleClass('active');

    });

    $('.pop').mouseover(function () {
      $('.po').toggleClass('active');
      $("#stalker").removeClass("active");

    });
    $('.pop').mouseout(function () {
      $('.po').removeClass('active');
      $('#stalker').toggleClass('active');

    });
    $('.girls').mouseover(function () {
      $('.gi').toggleClass('active');
      $("#stalker").removeClass("active");

    });
    $('.girls').mouseout(function () {
      $('.gi').removeClass('active');
      $('#stalker').toggleClass('active');

    });
    $('.lock').mouseover(function () {
      $('.lo').toggleClass('active');
      $("#stalker").removeClass("active");

    });
    $('.lock').mouseout(function () {
      $('.lo').removeClass('active');
      $('#stalker').toggleClass('active');
    });
    $('.house').mouseover(function () {
      $('.ho').toggleClass('active');
      $("#stalker").removeClass("active");

    });
    $('.house').mouseout(function () {
      $('.ho').removeClass('active');
      $('#stalker').toggleClass('active');

    });
    $('.randb').mouseover(function () {
      $('.rb').toggleClass('active');
      $("#stalker").removeClass("active");
    });
    $('.randb').mouseout(function () {
      $('.rb').removeClass('active');
      $('#stalker').toggleClass('active');
    });

  }
  //	section-event-sp swiper

  const swiper = new Swiper(".swiper", {
    slidesPerView: '1.1', // スライド数
    spaceBetween: '20px', // スライド間の余白
    freeMode: false, // 前後のスライドで止まらずにスライド
    grabCursor: false, // カーソルを置いたときに指のカーソルを表示
    allowTouchMove: true,
  });

  var windowWidth = $(window).width();
  var windowSm = 1500;
  if (windowWidth <= windowSm) {
    //横幅1500px以下に適用させるJavaScriptを記述
    //section-event-pc gsap

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

  } else {
    //横幅1500px以上に適用させるJavaScriptを記述

    const listWrapperEl = document.querySelector('.side-scroll-list-wrapper');
    const listEl = document.querySelector('.side-scroll-list');

    gsap.to(listEl, {
      x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-event',
        start: 'top center-=30%', // 要素の上端（top）が、ビューポートの真ん中にきた時
        end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,

      },
    });

  }

  //	arrow-button
  $('.arrow-button').mouseover(function () {
    $('.arrow-name').toggleClass('active');
    $('.arrow-round').toggleClass('active');
    $('.arrow-round::before').toggleClass('active');
  });


  $('.arrow-button').mouseout(function () {
    $('.arrow-name').removeClass('active');
    $('.arrow-round').removeClass('active');
    $('.arrow-round::before').removeClass('active');

  });


  //  faq
  $('.section-faq__description dt').on('click', function () {
    // .section-faq__description dt に close がなければつける、あれば外す 次にある要素（dd）
    $(this).toggleClass('close').next().slideToggle();
  });


  // aboutセクション
  var tl = new TimelineMax();

  tl.add(
    TweenMax.to('.video-container', 1, {
      scale: 0.8,
      transformOrigin: "50%, 50%",
      ease: Power2.easeInOut
    })
  )

  tl.add(
    TweenMax.to(".svg-container", 1, {
      scale: 10,
      transformOrigin: "50%, 50%",
      ease: Power2.easeInOut
    }),
    "-=1"
  )

  tl.add(
    TweenMax.to(".svg-container", 1, {
      opacity: 0
    }, "-=1")
  );

  // ScrollMagic
  var controller = new ScrollMagic.Controller();

  // container pin
  var startpin = new ScrollMagic.Scene({
      duration: 800,
      triggerElement: ".container",
      triggerHook: 'onLeave'
    })
    .setPin(".container")
    .addTo(controller);

  // tween
  new ScrollMagic.Scene({
      duration: 500,
      triggerElement: ".container",
      triggerHook: 'onLeave'
    })
    .setTween(tl)
    .addTo(controller);

  $('video').get(0).play();

  //向きが変わった時に実行
  $(window).on('orientationchange', () => {
    location.reload();
  });

  //画面幅が変わっても、aboutの位置を調整されて表示される。

  $(window).on('orientationchange', () => {
    //gsapをdestroyする。
    tl.kill();
    //gsapを再実行させる。
    // aboutセクション
    var tl = new TimelineMax();

    tl.add(
      TweenMax.to('.video-container', 1, {
        scale: 0.8,
        transformOrigin: "50%, 50%",
        ease: Power2.easeInOut
      })
    )

    tl.add(
      TweenMax.to(".svg-container", 1, {
        scale: 10,
        transformOrigin: "50%, 50%",
        ease: Power2.easeInOut
      }),
      "-=1"
    )

    tl.add(
      TweenMax.to(".svg-container", 1, {
        opacity: 0
      }, "-=1")
    );

    // ScrollMagic
    var controller = new ScrollMagic.Controller();

    // container pin
    var startpin = new ScrollMagic.Scene({
        duration: 800,
        triggerElement: ".container",
        triggerHook: 'onLeave'
      })
      .setPin(".container")
      .addTo(controller);

    // tween
    new ScrollMagic.Scene({
        duration: 500,
        triggerElement: ".container",
        triggerHook: 'onLeave'
      })
      .setTween(tl)
      .addTo(controller);

    $('video').get(0).play();


  });

  $(document).ready(function () {
    if (window.matchMedia('(min-width: 1160px)').matches) {

      //767pxまでの画面サイズの時の処理
      //マウスストーカー用のdivを取得
      const stalker = document.getElementById('stalker');

      //上記のdivタグをマウスに追従させる処理
      document.addEventListener('mousemove', function (e) {
        stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
      });
      jQuery(window).scroll(function () {
        let scrollTop = jQuery(window).scrollTop(); // スクロール上部の位置
        let areaTop = jQuery(".section-genre").offset().top; // 対象エリアの上部の位置
        let areaBottom = areaTop + jQuery(".section-genre").innerHeight(); // 対象エリアの下部の位置

        if (scrollTop > areaTop && scrollTop < areaBottom) {
          jQuery("#stalker").addClass("active"); // スクロールが対象エリアに入った場合
        } else {
          jQuery("#stalker").removeClass("active"); // スクロールが対象エリアから出ている場合

        }
      });
      var scroll;
      var winH = $(window).height();
      var objTop = $('.section-event').offset().top;
      $(window).on('scroll', function () {
        scroll = $(window).scrollTop();
        if (scroll >= objTop - winH / 2) {
          //ここに処理
          jQuery("#stalker").removeClass("active");

        }
      });

      $('.js-logo').mouseover(function () {
        $("#stalker").removeClass("active");
      });

      $('.menu-button').mouseover(function () {
        $("#stalker").removeClass("active");
      });
    }
  });
  var scroll;
  var winH = $(window).height();
  var objTop = $('.section-message').offset().top;
  $(window).on('scroll', function () {
    scroll = $(window).scrollTop();
    if (scroll >= objTop - winH) {
      //ここに処理
      $(".section-message").addClass("scroll_color");
    }
  });

  $('.section-news__list-item:first-of-type').mouseover(function () {
    $('.section-news__list').toggleClass('active');
    $(".section-news__list-item:first-of-type").toggleClass("active");
  });

  $('.section-news__list-item:first-of-type').mouseout(function () {
    $('.section-news__list').removeClass('active');
    $(".section-news__list-item:first-of-type").removeClass("active");
  });

  $('.section-news__list-item:nth-of-type(2)').mouseover(function () {

    $(".section-news__list-item:first-of-type").toggleClass("active");
    $(".section-news__list-item:nth-of-type(2)").toggleClass("active");
  });

  $('.section-news__list-item:nth-of-type(2)').mouseout(function () {

    $(".section-news__list-item:first-of-type").removeClass("active");
    $(".section-news__list-item:nth-of-type(2)").removeClass("active");
  });

  $('.section-news__list-item:last-of-type').mouseover(function () {

    $(".section-news__list-item:last-of-type").toggleClass("active");
    $(".section-news__list-item:nth-of-type(2)").toggleClass("active");
  });

  $('.section-news__list-item:last-of-type').mouseout(function () {

    $(".section-news__list-item:last-of-type").removeClass("active");
    $(".section-news__list-item:nth-of-type(2)").removeClass("active");
  });

});
