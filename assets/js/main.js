/***************************************************
==================== JS INDEX ======================
****************************************************

  // Data Css js
  // sticky header
  // Preloader Animation
  // nice select activation 
  // odometer active 
  // Register GSAP Plugins
  // Smooth active
  // gsap nav 
  // GSAP Fade Animation 
  // Moving text		
  // odometer active 
  // Side Info Js
  // meanmenu activation 
  // Magnific Video popup
  // btn move animation 
  // Animation Word
  // Full Character Setup 
  // brand active  
  // brand-3 active  
  // testimonial active 
  // testimonial-2 active
  // award active
  // team active
  // project-gallery active
  // WOW active
  // work-4 active
  // hero-title-shape-2 animation 
  // service hover active 
  // work-2 active 
  // eye animation on mouse move
  // Service list Hover Animation
  // blog Hover Animation
  // text reveal animation
  // text flip animation
  // go top btn 
  // Text Invert With Scroll 
  // offcanvas js 
  // service-4 active 
  // story-3-video control 
  // brand-4 active  
  // team-4 active
  // testimonial-4 active
  // blog-6 active
  // testimonial-5 active
  // text slider 


****************************************************/

(function ($) {
  "use strict";

  var windowOn = $(window);
  let mm = gsap.matchMedia();

  // Data Css js
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  // sticky header
  function pinned_header() {
    var lastScrollTop = 0;

    windowOn.on('scroll', function () {
      var currentScrollTop = $(this).scrollTop();
      if (currentScrollTop > lastScrollTop) {
        $('.header-sticky').removeClass('sticky');
        $('.header-sticky').addClass('transformed');
      } else if ($(this).scrollTop() <= 500) {
        $('.header-sticky').removeClass('sticky');
        $('.header-sticky').removeClass('transformed');
      } else {
        // Scrolling up, remove the class
        $('.header-sticky').addClass('sticky');
        $('.header-sticky').removeClass('transformed');
      }
      lastScrollTop = currentScrollTop;
    });
  }
  pinned_header();

  // Preloader animation
  $(document).ready(function () {
    $('#container').addClass('loaded');
    if ($('#container').hasClass('loaded')) {
      $('#preloader').delay(300).queue(function () {
        $(this).remove();
      });
    }
  });

  // nice select activation 
  if (document.querySelectorAll("select").length > 0) {
    $('select').niceSelect();
  }

  // odometer active 
  $(document).ready(function () {
    $('.odometer').waypoint(function (direction) {
      if (direction === 'down') {
        let countNumber = $(this.element).attr("data-count");
        $(this.element).html(countNumber);
      }
    }, {
      offset: '80%'
    });
  });

  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // Smooth active
  var device_width = window.screen.width;

  if (device_width > 767) {
    if (document.querySelector("#has_smooth").classList.contains("has-smooth")) {
      const smoother = ScrollSmoother.create({
        // smooth: 0.9,
        smooth: 1.5,
        effects: device_width < 1025 ? false : true,
        smoothTouch: 0.1,
        // normalizeScroll: false,
        normalizeScroll: {
          allowNestedScroll: true,
        },
        ignoreMobileResize: true,
      });
    }
  }

  // gsap nav 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); // Get section ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });

  // GSAP Fade Animation 
  let fadeArray_items = document.querySelectorAll(".fade-anim");
  if (fadeArray_items.length > 0) {
    const fadeArray = gsap.utils.toArray(".fade-anim")
    fadeArray.forEach((item, i) => {
      var fade_direction = "bottom"
      var onscroll_value = 1
      var duration_value = 1.15
      var fade_offset = 50
      var delay_value = 0.15
      var ease_value = "power2.out"
      if (item.getAttribute("data-offset")) {
        fade_offset = item.getAttribute("data-offset");
      }
      if (item.getAttribute("data-duration")) {
        duration_value = item.getAttribute("data-duration");
      }
      if (item.getAttribute("data-direction")) {
        fade_direction = item.getAttribute("data-direction");
      }
      if (item.getAttribute("data-on-scroll")) {
        onscroll_value = item.getAttribute("data-on-scroll");
      }
      if (item.getAttribute("data-delay")) {
        delay_value = item.getAttribute("data-delay");
      }
      if (item.getAttribute("data-ease")) {
        ease_value = item.getAttribute("data-ease");
      }
      let animation_settings = {
        opacity: 0,
        ease: ease_value,
        duration: duration_value,
        delay: delay_value,
      }
      if (fade_direction == "top") {
        animation_settings['y'] = -fade_offset
      }
      if (fade_direction == "left") {
        animation_settings['x'] = -fade_offset;
      }
      if (fade_direction == "bottom") {
        animation_settings['y'] = fade_offset;
      }
      if (fade_direction == "right") {
        animation_settings['x'] = fade_offset;
      }
      if (onscroll_value == 1) {
        animation_settings['scrollTrigger'] = {
          trigger: item,
          start: 'top 85%',
        }
      }
      gsap.from(item, animation_settings);
    })
  }



  // Moving text		
  if (document.querySelectorAll(".moving-text").length > 0) {
    gsap.utils.toArray('.moving-text').forEach((section, index) => {
      const w = section.querySelector('.wrapper-text');
      const [x, xEnd] = (index % 2) ? [(section.offsetWidth - w.scrollWidth), 0] : [0, section.offsetWidth - w.scrollWidth];
      gsap.fromTo(w, { x }, {
        x: xEnd,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scrub: 0.5,
          start: "20% bottom",
          end: "80% top",
        }
      });
    });
  }


  // odometer active 
  $(document).ready(function () {
    $('.odometer').waypoint(function (direction) {
      if (direction === 'down') {
        let countNumber = $(this.element).attr("data-count");
        $(this.element).html(countNumber);
      }
    }, {
      offset: '80%'
    });
  });

  // Side Info Js
  $(".side-info-close,.offcanvas-overlay").on("click", function () {
    $(".side-info").removeClass("info-open");
    $(".offcanvas-overlay").removeClass("overlay-open");
  });
  $(".side-toggle").on("click", function () {
    $(".side-info").addClass("info-open");
    $(".offcanvas-overlay").addClass("overlay-open");
  });

  $(window).scroll(function () {
    if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
      $(".side-info").removeClass("info-open");
      $(".offcanvas-overlay").removeClass("overlay-open");
    }
  });

  // meanmenu activation 
  $('.main-menu').meanmenu({
    meanScreenWidth: "1199",
    meanMenuContainer: '.mobile-menu',
    // meanMenuCloseSize: '28px',
  });
  $('.main-menu-all').meanmenu({
    meanScreenWidth: "5000",
    meanMenuContainer: '.mobile-menu',
    // meanMenuCloseSize: '28px',
  });

  // Magnific Video popup
  if ($('.video-popup').length && 'magnificPopup' in jQuery) {
    $('.video-popup').magnificPopup({
      type: 'iframe',
    });
  }

  // btn move animation 
  const all_btn = gsap.utils.toArray(".btn-move");
  const all_btn_cirlce = gsap.utils.toArray(".btn-item");

  all_btn.forEach((btn, i) => {
    $(btn).mousemove(function (e) {
      callParallax(e);
    });
    function callParallax(e) {
      parallaxIt(e, all_btn_cirlce[i], 80);
    }

    function parallaxIt(e, target, movement) {
      var $this = $(btn);
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      gsap.to(target, 0.3, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
        scale: 1.2,
        ease: Power2.easeOut,
      });
    }
    $(btn).mouseleave(function (e) {
      gsap.to(all_btn_cirlce[i], 0.3, {
        x: 0,
        y: 0,
        scale: 1,
        ease: Power2.easeOut,
      });
    });
  });

  // Animation Word
  if (document.querySelectorAll(".word-anim").length > 0) {
    let animation_word_anim_items = document.querySelectorAll(".word-anim");

    animation_word_anim_items.forEach((word_anim_item) => {

      var stagger_value = 0.04
      var translateX_value = false
      var translateY_value = false
      var onscroll_value = 1
      var data_delay = 0.1
      var data_duration = 0.75

      if (word_anim_item.getAttribute("data-stagger")) {
        stagger_value = word_anim_item.getAttribute("data-stagger");
      }
      if (word_anim_item.getAttribute("data-translateX")) {
        translateX_value = word_anim_item.getAttribute("data-translateX");
      }

      if (word_anim_item.getAttribute("data-translateY")) {
        translateY_value = word_anim_item.getAttribute("data-translateY");
      }

      if (word_anim_item.getAttribute("data-on-scroll")) {
        onscroll_value = word_anim_item.getAttribute("data-on-scroll");
      }
      if (word_anim_item.getAttribute("data-delay")) {
        data_delay = word_anim_item.getAttribute("data-delay");
      }
      if (word_anim_item.getAttribute("data-duration")) {
        data_duration = word_anim_item.getAttribute("data-duration");
      }

      if (onscroll_value == 1) {
        if (translateX_value && !translateY_value) {
          let split_word = new SplitText(word_anim_item, {
            type: "chars, words"
          })
          gsap.from(split_word.words, {
            duration: data_duration,
            x: translateX_value,
            autoAlpha: 0,
            stagger: stagger_value,
            delay: data_delay,
            scrollTrigger: {
              trigger: word_anim_item,
              start: 'top 90%'
            }
          });
        }

        if (translateY_value && !translateX_value) {
          let split_word = new SplitText(word_anim_item, {
            type: "chars, words"
          })
          gsap.from(split_word.words, {
            duration: 1,
            delay: data_delay,
            y: translateY_value,
            autoAlpha: 0,
            stagger: stagger_value,
            scrollTrigger: {
              trigger: word_anim_item,
              start: 'top 90%'
            }
          });
        }

        if (translateY_value && translateX_value) {
          let split_word = new SplitText(word_anim_item, {
            type: "chars, words"
          })
          gsap.from(split_word.words, {
            duration: 1,
            delay: data_delay,
            x: translateX_value,
            y: translateY_value,
            autoAlpha: 0,
            stagger: stagger_value,
            scrollTrigger: {
              trigger: word_anim_item,
              start: 'top 90%'
            }
          });
        }

        if (!translateX_value && !translateY_value) {
          let split_word = new SplitText(word_anim_item, {
            type: "chars, words"
          })
          gsap.from(split_word.words, {
            duration: 1,
            delay: data_delay,
            x: 20,
            autoAlpha: 0,
            stagger: stagger_value,
            scrollTrigger: {
              trigger: word_anim_item,
              start: 'top 85%',
            }
          });
        }
      } else {
        if (translateX_value > 0 && !translateY_value) {
          let split_word = new SplitText(word_anim_item, {
            type: "chars, words"
          })
          gsap.from(split_word.words, {
            duration: 1,
            delay: data_delay,
            x: translateX_value,
            autoAlpha: 0,
            stagger: stagger_value
          });
        }

        if (translateY_value > 0 && !translateX_value) {
          let split_word = new SplitText(word_anim_item, {
            type: "chars, words"
          })
          gsap.from(split_word.words, {
            duration: 1,
            delay: data_delay,
            y: translateY_value,
            autoAlpha: 0,
            stagger: stagger_value
          });
        }

        if (translateY_value > 0 && translateX_value > 0) {
          let split_word = new SplitText(word_anim_item, {
            type: "chars, words"
          })
          gsap.from(split_word.words, {
            duration: 1,
            delay: data_delay,
            x: translateX_value,
            y: translateY_value,
            autoAlpha: 0,
            stagger: stagger_value
          });
        }

        if (!translateX_value && !translateY_value) {
          let split_word = new SplitText(word_anim_item, {
            type: "chars, words"
          })
          gsap.from(split_word.words, {
            duration: 1,
            delay: data_delay,
            x: 20,
            autoAlpha: 0,
            stagger: stagger_value
          });
        }

      }

    });
  }

  // Full Character Setup 
  if (document.querySelectorAll(".char-anim").length > 0) {
    var animation_char_come_items = document.querySelectorAll(".char-anim")
    animation_char_come_items.forEach((item) => {

      var stagger_value = 0.05
      var translateX_value = 20
      var translateY_value = false
      var onscroll_value = 1
      var data_delay = 0.1
      var data_duration = 1
      var ease_value = "power2.out"

      if (item.getAttribute("data-stagger")) {
        stagger_value = item.getAttribute("data-stagger");
      }
      if (item.getAttribute("data-translateX")) {
        translateX_value = item.getAttribute("data-translateX");
      }
      if (item.getAttribute("data-translateY")) {
        translateY_value = item.getAttribute("data-translateY");
      }
      if (item.getAttribute("data-on-scroll")) {
        onscroll_value = item.getAttribute("data-on-scroll");
      }
      if (item.getAttribute("data-delay")) {
        data_delay = item.getAttribute("data-delay");
      }
      if (item.getAttribute("data-ease")) {
        ease_value = item.getAttribute("data-ease");
      }
      if (item.getAttribute("data-duration")) {
        data_duration = item.getAttribute("data-duration");
      }

      if (onscroll_value == 1) {
        if (translateX_value > 0 && !translateY_value) {
          let split_char = new SplitText(item, {
            type: "chars, words"
          });
          gsap.from(split_char.chars, {
            duration: data_duration,
            delay: data_delay,
            x: translateX_value,
            autoAlpha: 0,
            stagger: stagger_value,
            ease: ease_value,
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            }
          });
        }
        if (translateY_value > 0 && !translateX_value) {
          let split_char = new SplitText(item, {
            type: "chars, words"
          });
          gsap.from(split_char.chars, {
            duration: data_duration,
            delay: data_delay,
            y: translateY_value,
            autoAlpha: 0,
            ease: ease_value,
            stagger: stagger_value,
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            }
          });
        }
        if (translateX_value && translateY_value) {
          let split_char = new SplitText(item, {
            type: "chars, words"
          });
          gsap.from(split_char.chars, {
            duration: 2,
            delay: data_delay,
            y: translateY_value,
            x: translateX_value,
            autoAlpha: 0,
            ease: ease_value,
            stagger: stagger_value,
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            }
          });
        }
        if (!translateX_value && !translateY_value) {
          let split_char = new SplitText(item, {
            type: "chars, words"
          });
          gsap.from(split_char.chars, {
            duration: 1,
            delay: data_delay,
            x: 50,
            autoAlpha: 0,
            stagger: stagger_value,
            ease: ease_value,
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            }
          });
        }
      } else {
        if (translateX_value > 0 && !translateY_value) {
          let split_char = new SplitText(item, {
            type: "chars, words"
          });
          gsap.from(split_char.chars, {
            duration: 1,
            delay: data_delay,
            x: translateX_value,
            ease: ease_value,
            autoAlpha: 0,
            stagger: stagger_value
          });
        }
        if (translateY_value > 0 && !translateX_value) {
          let split_char = new SplitText(item, {
            type: "chars, words"
          });
          gsap.from(split_char.chars, {
            duration: 1,
            delay: data_delay,
            y: translateY_value,
            autoAlpha: 0,
            ease: ease_value,
            stagger: stagger_value
          });
        }
        if (translateX_value && translateY_value) {
          let split_char = new SplitText(item, {
            type: "chars, words"
          });
          gsap.from(split_char.chars, {
            duration: 1,
            delay: data_delay,
            y: translateY_value,
            x: translateX_value,
            ease: ease_value,
            autoAlpha: 0,
            stagger: stagger_value
          });
        }
        if (!translateX_value && !translateY_value) {
          let split_char = new SplitText(item, {
            type: "chars, words"
          });
          gsap.from(split_char.chars, {
            duration: 1,
            delay: data_delay,
            ease: ease_value,
            x: 50,
            autoAlpha: 0,
            stagger: stagger_value
          });
        }
      }

    });


    let revealContainers = document.querySelectorAll(".return");

    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset"
        }
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        xPercent: -100,
        ease: Power2.out
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out
      });
    });

  }

  // brand active  
  if (document.querySelectorAll(".brand-active").length > 0) {
    if ('.brand-active') {
      var brand_active = new Swiper(".brand-active", {
        slidesPerView: 'auto',
        loop: true,
        autoplay: true,
        spaceBetween: 30,
        speed: 5000,
        allowTouchMove: false,
        autoplay: {
          delay: 1,
        },
      });
    }
  }

  // brand-3 active  
  if (document.querySelectorAll(".brand-3-active").length > 0) {
    if ('.brand-3-active') {
      var brand_3_active = new Swiper(".brand-3-active", {
        slidesPerView: 'auto',
        loop: true,
        autoplay: true,
        spaceBetween: 73,
        speed: 5000,
        allowTouchMove: false,
        autoplay: {
          delay: 1,
        },
      });
    }
  }



  // testimonial active 
  if (document.querySelectorAll(".testimonial-active").length > 0) {
    var testimonial_slider_active = new Swiper(".testimonial-active", {
      slidesPerView: 1,
      loop: true,
      autoplay: true,
      spaceBetween: 30,
      speed: 2000,
      autoplay: false,
      pagination: {
        el: ".testimonial-pagination",
        clickable: true,
      },
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1201: {
          slidesPerView: 3,
        },
        1367: {
          slidesPerView: 3,
        },
      }
    });
  }

  // testimonial-2 active
  if (document.querySelectorAll(".testimonial-2-active").length > 0) {
    var testimonial_2_active = new Swiper(".testimonial-2-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 100,
      speed: 2000,
      watchSlidesProgress: true,
      pagination: {
        el: ".testimonial-2-pagination",
        type: "progressbar",
      },
      navigation: {
        prevEl: ".testimonial-2-button-prev",
        nextEl: ".testimonial-2-button-next",
      },
    });
  }

  // award active
  if (document.querySelectorAll(".award-active").length > 0) {
    var award_active = new Swiper(".award-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 50,
      speed: 2000,
      watchSlidesProgress: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        prevEl: ".award-button-prev",
        nextEl: ".award-button-next",
      },
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1201: {
          slidesPerView: 3,
        },
        1367: {
          slidesPerView: 3,
        },
      }
    });
  }

  // team active
  if (document.querySelectorAll(".team-active").length > 0) {
    var team_active = new Swiper(".team-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 2000,
      watchSlidesProgress: true,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
      },
      navigation: {
        prevEl: ".team-button-prev",
        nextEl: ".team-button-next",
      },
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 3,
        },
        1201: {
          slidesPerView: 3,
        },
        1367: {
          slidesPerView: 3,
        },
      }
    });
  }

  // project-gallery active
  if (document.querySelectorAll(".project-gallery-active").length > 0) {
    var project_gallery_active = new Swiper(".project-gallery-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 2000,
      watchSlidesProgress: true,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
      },
      pagination: {
        el: ".project-gallery-pagination",
        type: "bullets",
      },
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.5,
        },
        992: {
          slidesPerView: 2,
        },
        1201: {
          slidesPerView: 2.3,
        },
        1367: {
          slidesPerView: 2.5,
        },
      }
    });
  }

  // WOW active
  new WOW().init();

  // work-4 active
  if (document.querySelectorAll(".work-4-active").length > 0) {
    var work_4_active = new Swiper(".work-4-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 2000,
      watchSlidesProgress: true,
      centeredSlides: true,
      effect: "fade",
      autoplay: {
        delay: 4000,
      },
      navigation: {
        prevEl: ".work-4-button-prev",
        nextEl: ".work-4-button-next",
      },
    });
  }

  // hero-title-shape-2 animation 
  if (document.querySelectorAll(".hero-title-shape-2").length > 0) {

    const containerMax = getComputedStyle(document.documentElement)
      .getPropertyValue("--container-max-widths").trim();

    // turn into a number (strip "px")
    const containerMaxNum = parseFloat(containerMax);

    // compute the left margin in px
    const marginLeft = (((containerMaxNum - window.innerWidth) - 30) / 2);
    mm.add("(min-width: 768px)", () => {

      const img = document.querySelector(".hero-title-shape-2 video");
      gsap.to(img, {
        scrollTrigger: {
          trigger: img,
          start: 'top 20%',
          endTrigger: '.hero-full-image',
          end: 'top 20%',
          scrub: true,
          pin: true,
          pinSpacing: false,
          // markers: true,
        },
        width: '100vw',
        height: '100vh',
        borderRadius: '0px',
        marginLeft: marginLeft,
        ease: 'power1.out',
        maxWidth: '100vw',
        maxHeight: '100vh',
      });
    });
  }



  // service hover active 
  $('.award-2-hover-active .award-2-box').on("mouseover", function () {
    $(this).addClass('active').siblings().removeClass('active');
  });


  // work-2 active 
  if (document.querySelectorAll(".work-2-active").length > 0) {
    const work_2_active = new Swiper('.work-2-active', {
      // pass EffectCarousel module to modules
      modules: [EffectCarousel],
      // specify "carousel" effect
      effect: 'carousel',
      // carousel effect parameters
      carouselEffect: {
        // opacity change per side slide
        opacityStep: 0.00,
        // scale change per side slide
        scaleStep: 0.10,
        // amount of side slides visible, can be 1, 2 or 3
        sideSlides: 3,
      },
      grabCursor: true,
      loop: true,
      loopAdditionalSlides: 1,
      slidesPerView: 'auto',
      pagination: {
        el: '.work-2-pagination',
        clickable: true,
      },

      autoplay: {
        delay: 30000,
      },
    });
  }

  // eye animation on mouse move
  document.querySelector('body').addEventListener('mousemove', eyeball);
  function eyeball() {
    const eye = document.querySelectorAll('.eye');
    eye.forEach(function (eye) {
      let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 3);

      let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 3);

      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      let rotation = (radian * (180 / Math.PI) * -1) + 270;
      eye.style.transform = "rotate(" + rotation + "deg)"
    })
  }

  // Service list Hover Animation
  function service_animation() {
    const wrappers = [".service-3-wrapper"];

    wrappers.forEach(wrapperClass => {
      const wrapper = $(wrapperClass);
      const active_bg = wrapper.find(".active-bg");

      function moveBgTo(target) {
        if (!target.length) return;

        const offsetTop = target.offset().top;
        const height = target.outerHeight();
        const wrapperTop = wrapper.offset().top;
        const translateY = offsetTop - wrapperTop;

        active_bg.css({
          transform: `translateY(${translateY}px)`,
          height: `${height}px`,
          opacity: 1
        });
      }

      // On hover
      wrapper.find(`${wrapperClass.replace("-wrapper", "-box")}`).on("mouseenter", function () {
        moveBgTo($(this));
      });

      // On leave, hide background
      wrapper.on("mouseleave", function () {
        active_bg.css({
          opacity: 0,
          height: 0
        });
      });
    });
  }
  $(document).ready(function () {
    service_animation();
  });

  // blog Hover Animation
  function blog_animation() {
    const wrappers = [".blog-4-wrapper"];

    wrappers.forEach(wrapperClass => {
      const wrapper = $(wrapperClass);
      const active_bg = wrapper.find(".active-bg");

      function moveBgTo(target) {
        if (!target.length) return;

        const offsetTop = target.offset().top;
        const height = target.outerHeight();
        const wrapperTop = wrapper.offset().top;
        const translateY = offsetTop - wrapperTop;

        active_bg.css({
          transform: `translateY(${translateY}px)`,
          height: `${height}px`,
          opacity: 1
        });
      }

      // On hover
      wrapper.find(`${wrapperClass.replace("-wrapper", "-box")}`).on("mouseenter", function () {
        moveBgTo($(this));
      });

      // On leave, hide background
      wrapper.on("mouseleave", function () {
        active_bg.css({
          opacity: 0,
          height: 0
        });
      });
    });
  }
  $(document).ready(function () {
    blog_animation();
  });

  // text reveal animation
  const tp_anim_reveal = document.querySelectorAll(".text-reveal-anim");
  tp_anim_reveal.forEach(areveal => {
    const getAttributeValue = (attr, defaultValue) => areveal.getAttribute(attr) || defaultValue;
    const duration_value = parseFloat(getAttributeValue("data-duration", 1));
    const onscroll_value = parseInt(getAttributeValue("data-on-scroll", 1));
    const stagger_value = parseFloat(getAttributeValue("data-stagger", 0.02));
    const data_delay = parseFloat(getAttributeValue("data-delay", 0.05));
    const ease_value = getAttributeValue("data-ease", "circ.out");

    areveal.split = new SplitText(areveal, { type: "lines,words,chars", linesClass: "text-reveal-line" });
    const animationProps = {
      duration: duration_value,
      delay: data_delay,
      ease: ease_value,
      y: 80,
      stagger: stagger_value,
      opacity: 0,
    };

    if (onscroll_value === 1) {
      areveal.anim = gsap.from(areveal.split.chars, {
        scrollTrigger: {
          trigger: areveal,
          start: 'top 85%',
        },
        ...animationProps,
      });
    } else {
      areveal.anim = gsap.from(areveal.split.chars, animationProps);
    }
  });

  // text flip animation
  if (document.querySelectorAll(".text-flip-anim").length > 0) {
    if ($('.text-flip-anim').length > 0) {
      let splitTitleLines = gsap.utils.toArray(".text-flip-anim");
      splitTitleLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none reverse'
          }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        tl.from(itemSplitted.lines, {
          duration: 1,
          delay: 0.3,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.2
        });
      });
    }
  }

  // go top btn 
  if (document.querySelectorAll(".go-top-btn").length > 0) {
    const goTopBtn = document.querySelector(".go-top-btn");

    goTopBtn.addEventListener("click", () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: 0 },
        ease: "power2.inOut"
      });
    });
  }

  // Text Invert With Scroll 
  const split = new SplitText(".text-invert", { type: "lines" });
  split.lines.forEach((target) => {
    gsap.to(target, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        scrub: 1,
        start: 'top 85%',
        end: "bottom center",
      }
    });
  });

  // offcanvas js 
  $(".ui-offcanvas-open-btn").on("click", function () {
    $(".ui-offcanvas-area").addClass("opened");
  });
  $(".ui-offcanvas-close-btn").on("click", function () {
    $(".ui-offcanvas-area").removeClass("opened");
  });


  // service-4 active 
  if (document.querySelectorAll(".service-4-active").length > 0) {
    var service_4_slider_active = new Swiper(".service-4-active", {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 30,
      speed: 2000,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".service-4-pagination",
        clickable: true,
      },
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1201: {
          slidesPerView: 3,
        },
        1367: {
          slidesPerView: 4,
        },
      }
    });
  }

  // story-3-video control 
  if (document.querySelectorAll(".story-3-video").length > 0) {
    document.addEventListener("DOMContentLoaded", function () {
      const video = document.querySelector(".story-3-video");
      const button = document.querySelector(".story-3-video-button");
      const icon = button.querySelector("i");

      button.addEventListener("click", function (e) {
        e.preventDefault();

        if (video.paused) {
          video.play();
          icon.classList.remove("fa-pause");
          icon.classList.add("fa-play");
        } else {
          video.pause();
          icon.classList.remove("fa-play");
          icon.classList.add("fa-pause");
        }
      });
    });
  }

  // brand-4 active  
  if (document.querySelectorAll(".brand-4-active").length > 0) {
    if ('.brand-4-active') {
      var brand_4_active = new Swiper(".brand-4-active", {
        slidesPerView: 'auto',
        loop: true,
        autoplay: true,
        spaceBetween: 144,
        speed: 5000,
        allowTouchMove: false,
        autoplay: {
          delay: 1,
        },
      });
    }
  }

  // team-4 active
  if (document.querySelectorAll(".team-4-active").length > 0) {
    var team_4_active = new Swiper(".team-4-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 2000,
      watchSlidesProgress: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        prevEl: ".team-4-button-prev",
        nextEl: ".team-4-button-next",
      },
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1201: {
          slidesPerView: 3,
        },
        1367: {
          slidesPerView: 4,
        },
      }
    });
  }

  // testimonial-4 active
  if (document.querySelectorAll(".testimonial-4-active").length > 0) {
    var testimonial_4_active = new Swiper(".testimonial-4-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 2000,
      watchSlidesProgress: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 1.2,
        },
        1201: {
          slidesPerView: 1.5,
        },
        1367: {
          slidesPerView: 1.8,
        },
        1630: {
          slidesPerView: 2.4,
        },
      }
    });
  }

  // blog-6 active
  if (document.querySelectorAll(".blog-6-active").length > 0) {
    var blog_6_active = new Swiper(".blog-6-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 2000,
      watchSlidesProgress: true,
      // autoplay: {
      //   delay: 3000,
      // },
      navigation: {
        prevEl: ".blog-6-button-prev",
        nextEl: ".blog-6-button-next",
      },
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1201: {
          slidesPerView: 3,
        },
        1367: {
          slidesPerView: 3,
        },
      }
    });
  }

  // testimonial-5 active
  if (document.querySelectorAll(".testimonial-5-active").length > 0) {
    var testimonial_5_active = new Swiper(".testimonial-5-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 2000,
      centeredSlides: true,
      watchSlidesProgress: true,
      pagination: {
        el: ".testimonial-5-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        prevEl: ".testimonial-5-button-prev",
        nextEl: ".testimonial-5-button-next",
      },
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
          centeredSlides: false,

        },
        1201: {
          slidesPerView: 3,
        },
        1367: {
          slidesPerView: 3,
        },
      }
    });
  }

  // text-slider active 
  if (document.querySelectorAll(".text-slider-active").length > 0) {
    var text_slider_active = new Swiper(".text-slider-active", {
      slidesPerView: 'auto',
      loop: true,
      autoplay: true,
      spaceBetween: 0,
      speed: 10000,
      allowTouchMove: false,
      autoplay: {
        delay: 1,
      },
    });
  }

  // text-slider-2 active 
  if (document.querySelectorAll(".text-slider-2-active").length > 0) {
    var text_slider_2_active = new Swiper(".text-slider-2-active", {
      slidesPerView: 'auto',
      loop: true,
      autoplay: true,
      spaceBetween: 0,
      speed: 10000,
      allowTouchMove: false,
      autoplay: {
        delay: 1,
      },
    });
  }


})(jQuery);


