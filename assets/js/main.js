(function ($) {
  "use strict";

  var windowOn = $(window);
  let mm = gsap.matchMedia();

  // sticky header
  function pinned_header() {
    var lastScrollTop = 300;

    windowOn.on("scroll", function () {
      var currentScrollTop = $(this).scrollTop();

      if (currentScrollTop > lastScrollTop) {
        $(".header-area-3").removeClass("sticky");
        $(".header-area-3").addClass("transformed");
      } else if ($(this).scrollTop() <= 300) {
        $(".header-area-3").removeClass("sticky");
        $(".header-area-3").removeClass("transformed");
      } else {
        $(".header-area-3").addClass("sticky");
        $(".header-area-3").removeClass("transformed");
      }
      lastScrollTop = currentScrollTop;
    });
  }
  pinned_header();

  // Smooth active
  var device_width = window.screen.width;

  if (device_width > 767) {
    if (
      document.querySelector("#has_smooth").classList.contains("has-smooth")
    ) {
      const smoother = ScrollSmoother.create({
        smooth: 0.9,
        effects: device_width < 1025 ? false : true,
        smoothTouch: 0.1,
        normalizeScroll: {
          allowNestedScroll: true,
        },
        ignoreMobileResize: true,
      });
    }
  }

  // Preloader
  $(document).ready(function () {
    $("#container").addClass("loaded");
    if ($("#container").hasClass("loaded")) {
      $("#preloader")
        .delay(300)
        .queue(function () {
          $(this).remove();
        });
    }
  });

  // nice select activation
  $("select").niceSelect();

  // Side Info Js
  $(".side-info-close,.offcanvas-overlay").on("click", function () {
    $(".side-info").removeClass("info-open");
    $(".offcanvas-overlay").removeClass("overlay-open");
  });
  $(".side-toggle").on("click", function () {
    $(".side-info").addClass("info-open");
    $(".offcanvas-overlay").addClass("overlay-open");
  });

  // meanmenu activation
  $(".main-menu").meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu",
    meanMenuCloseSize: "28px",
  });


    // Set Background Images JS
  const setBackgroundImages = () => {
    var elements = document.querySelectorAll("[data-bg-src]");
    if (elements?.length > 0) {
      elements.forEach(function (element) {
        var src = element.getAttribute("data-bg-src");
        element.style.backgroundImage = "url(" + src + ")";
        element.classList.add("background-image");
        element.removeAttribute("data-bg-src");
      });
    }
  };
  setBackgroundImages();

  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);

  // Counter active
  if ("counterUp" in window) {
    const skill_counter = window.counterUp.default;
    const skill_cb = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains("is-visible")) {
          skill_counter(el, {
            duration: 1500,
            delay: 16,
          });
          el.classList.add("is-visible");
        }
      });
    };

    const IO = new IntersectionObserver(skill_cb, {
      threshold: 1,
    });

    const els = document.querySelectorAll(".t-counter");
    els.forEach((el) => {
      IO.observe(el);
    });
  }

  // Magnific Video popup
  if ($(".video-popup").length && "magnificPopup" in jQuery) {
    $(".video-popup").magnificPopup({
      type: "iframe",
    });
  }

  // work slider
  if (".work-slider".length) {
    var work_slider = new Swiper(".work-slider", {
      loop: false,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1800,
      watchSlidesProgress: true,
      mousewheel: {
        releaseOnEdges: true, // Allows page scrolling when Swiper reaches start/end
      },
      navigation: {
        prevEl: ".work-button-prev",
        nextEl: ".work-button-next",
      },
      pagination: {
        el: ".work-pagination",
        type: "progressbar",
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
          slidesPerView: 2,
        },
        1201: {
          slidesPerView: 3,
        },
        1367: {
          slidesPerView: 3,
        },
      },
    });
  }

  // work-2 slider
  if (".work-2-slider".length) {
    var work_2_slider = new Swiper(".work-2-slider", {
      loop: false,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1800,
      watchSlidesProgress: true,
      mousewheel: {
        releaseOnEdges: true, // Allows page scrolling when Swiper reaches start/end
      },
      navigation: {
        prevEl: ".work-2-button-prev",
        nextEl: ".work-2-button-next",
      },
      pagination: {
        el: ".work-2-pagination",
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
          slidesPerView: 2,
        },
        1201: {
          slidesPerView: 2,
        },
        1367: {
          slidesPerView: 2,
        },
      },
    });
  }
 document.addEventListener("DOMContentLoaded", function () {
        // Left direction slider
        const heroSliderLeft = new Swiper(
          '.hero-slider[data-direction="left"]',
          {
            slidesPerView: "auto",
            spaceBetween: 25,
            loop: true,
            autoplay: {
              delay: 1,
              disableOnInteraction: false,
            },
            speed: 3000,
            allowTouchMove: false,
            freeMode: true,
            freeModeMomentum: false,
            breakpoints: {
              0: {
                spaceBetween: 20,
              },
              992: {
                spaceBetween: 25,
              },
            },
          }
        );

        // Right direction slider
        const heroSliderRight = new Swiper(
          '.hero-slider[data-direction="right"]',
          {
            slidesPerView: "auto",
            spaceBetween: 25,
            loop: true,
            autoplay: {
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            },
            speed: 4000,
            allowTouchMove: false,
            freeMode: true,
            freeModeMomentum: false,
            breakpoints: {
              0: {
                spaceBetween: 20,
              },
              992: {
                spaceBetween: 25,
              },
            },
          }
        );
      });
  // text slider
  if (".responsive__text-slider") {
    var text_slider_active = new Swiper(".responsive__text-slider", {
      slidesPerView: "auto",
      loop: true,
      autoplay: true,
      spaceBetween: 0,
      speed: 30000,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    });
  }

  // text slider 2
  if (".text-slider-active-2") {
    var text_slider_active_2 = new Swiper(".text-slider-active-2", {
      slidesPerView: "auto",
      loop: true,
      autoplay: true,
      spaceBetween: 0,
      speed: 30000,
      autoplay: {
        delay: 1,
      },
    });
  }

  // brand slider
  if (".brand-slider-active") {
    var brand_slider_active = new Swiper(".brand-slider-active", {
      slidesPerView: "auto",
      loop: true,
      autoplay: true,
      spaceBetween: 0,
      speed: 5000,
      autoplay: {
        delay: 1,
      },
    });
  }

  // faq number active
  $(".accordion-active .accordion-item").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // team hover active
  $(".team-hover-active .team-box").on("mouseover", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // blog hover active
  $(".blog-hover-active .blog").on("mouseover", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // service hover active
  $(".service-hover-active .service-box").on("mouseover", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // process hover active
  $(".process-hover-active .process-box").on("mouseover", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // Play video on hover
  var videoContainers = document.querySelectorAll(".video-container");

  videoContainers.forEach((container) => {
    var video = container.querySelector(".video_on_hover");

    container.addEventListener("mouseover", () => {
      if (video) {
        video.play();
      }
    });

    container.addEventListener("mouseout", () => {
      if (video) {
        video.pause();
      }
    });
  });

  // testimonial active
  var swiper = new Swiper(".testimonial-nav-active", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
      // when window width is >= px
      768: {
        direction: "vertical",
      },
    },
  });
  var swiper2 = new Swiper(".testimonial-content-active", {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  // testimonial 2 active
  if (".testimonial-2-active".length) {
    var testimonial_slider = new Swiper(".testimonial-2-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 100,
      speed: 1800,
      watchSlidesProgress: true,
      navigation: {
        prevEl: ".testimonial-button-prev",
        nextEl: ".testimonial-button-next",
      },
      pagination: {
        el: ".testimonial-pagination",
        type: "fraction",
        clickable: true,
        formatFractionCurrent: function (number) {
          return ("0" + number).slice(-2);
        },
        formatFractionTotal: function (number) {
          return ("0" + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            ' <span class="mid-line">/</span> ' +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      },
    });
  }

  // testimonial 3 active
  var swiper = new Swiper(".testimonial-3-nav-active", {
    loop: true,
    spaceBetween: 5,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
      // when window width is >= px
      768: {
        direction: "vertical",
      },
    },
  });
  var swiper2 = new Swiper(".testimonial-3-content-active", {
    loop: true,
    spaceBetween: 30,
    mousewheelControl: true,
    navigation: {
      nextEl: ".testimonial-3-button-next",
      prevEl: ".testimonial-3-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  // testimonial 4 active
  if (".testimonial-4-active".length) {
    var testimonial_4_slider = new Swiper(".testimonial-4-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1800,
      watchSlidesProgress: true,
      navigation: {
        prevEl: ".testimonial-4-button-prev",
        nextEl: ".testimonial-4-button-next",
      },
    });
  }

  // testimonial 5 active
  if (".testimonial-5-active".length) {
    var testimonial_5_slider = new Swiper(".testimonial-5-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1800,
      watchSlidesProgress: true,
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
        },
        1201: {
          slidesPerView: 3,
          centeredSlides: true,
        },
        1367: {
          slidesPerView: 3,
          centeredSlides: true,
        },
      },
    });
  }

  // Image Reveal Animation
  let img_anim_reveal = document.querySelectorAll(".img_anim_reveal");

  img_anim_reveal.forEach((img_reveal) => {
    let image = img_reveal.querySelector("img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: img_reveal,
        start: "top 50%",
      },
    });

    tl.set(img_reveal, { autoAlpha: 1 });
    tl.from(img_reveal, 1.5, {
      yPercent: -100,
      ease: Power2.out,
    });
    tl.from(image, 1.5, {
      yPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out,
    });
  });

  // stacking item with header
  if (document.querySelectorAll(".header-stacking-items").length > 0) {
    mm.add("(min-width: 991px)", () => {
      const items = gsap.utils.toArray(".item");

      items.forEach((item, i) => {
        const content = item.querySelector(".body");
        const header = item.querySelector(".header");
        gsap.to(content, {
          height: 0,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top " + header.clientHeight * i,
            endTrigger: ".final",
            end: "top " + header.clientHeight * items.length,
            pin: true,
            pinSpacing: false,
            scrub: true,
          },
        });
      });
    });
  }

  // stacking item with space
  if (document.querySelectorAll(".space-stacking-items").length > 0) {
    mm.add("(min-width: 991px)", () => {
      const items = gsap.utils.toArray(".item");

      items.forEach((item, i) => {
        gsap.to(item, {
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top " + 40 * i,
            endTrigger: ".final",
            end: "top " + item.clientHeight * items.length,
            pin: true,
            pinSpacing: false,
            scrub: true,
            // markers: true
          },
        });
      });
    });
  }

  // stacking item with scale
  if (document.querySelectorAll(".portfolio-panel").length > 0) {
    mm.add("(min-width: 991px)", () => {
      let tl = gsap.timeline();
      let scaleItem = document.querySelectorAll(".portfolio-panel");

      scaleItem.forEach((item, index) => {
        gsap.set(scaleItem, {
          scale: 1,
        });

        tl.to(item, {
          scale: 0.8,
          scrollTrigger: {
            trigger: item,
            pin: item,
            scrub: 1,
            start: "top 10%",
            end: "bottom 90%",
            endTrigger: ".work-area-3",
            pinSpacing: false,
            markers: false,
          },
        });
      });
    });
  }

  // hover move btn
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
        scale: 1.1,
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

  // GSAP Fade Animation
  let fadeArray_items = document.querySelectorAll(".fade-anim");
  if (fadeArray_items.length > 0) {
    const fadeArray = gsap.utils.toArray(".fade-anim");
    // gsap.set(fadeArray, {opacity:0})
    fadeArray.forEach((item, i) => {
      var fade_direction = "bottom";
      var onscroll_value = 1;
      var duration_value = 1.15;
      var fade_offset = 50;
      var delay_value = 0.15;
      var ease_value = "power2.out";

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
      };

      if (fade_direction == "top") {
        animation_settings["y"] = -fade_offset;
      }
      if (fade_direction == "left") {
        animation_settings["x"] = -fade_offset;
      }

      if (fade_direction == "bottom") {
        animation_settings["y"] = fade_offset;
      }

      if (fade_direction == "right") {
        animation_settings["x"] = fade_offset;
      }

      if (onscroll_value == 1) {
        animation_settings["scrollTrigger"] = {
          trigger: item,
          start: "top 85%",
        };
      }
      gsap.from(item, animation_settings);
    });
  }

  /////////////////////////////////////////////////////
  let text_animation = gsap.utils.toArray(".move-anim");

  if (text_animation) {
    text_animation.forEach((splitTextLine) => {
      var delay_value = 0.1;
      if (splitTextLine.getAttribute("data-delay")) {
        delay_value = splitTextLine.getAttribute("data-delay");
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 85%",
          duration: 1,
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      const itemSplitted = new SplitText(splitTextLine, {
        type: "lines",
      });
      gsap.set(splitTextLine, {
        perspective: 400,
      });
      itemSplitted.split({
        type: "lines",
      });
      tl.from(itemSplitted.lines, {
        duration: 1,
        delay: delay_value,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    });
  }

  // Animation Word
  let animation_word_anim_items = document.querySelectorAll(".word-anim");

  animation_word_anim_items.forEach((word_anim_item) => {
    var stagger_value = 0.04;
    var translateX_value = false;
    var translateY_value = false;
    var onscroll_value = 1;
    var data_delay = 0.1;
    var data_duration = 0.75;

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
          type: "chars, words",
        });
        gsap.from(split_word.words, {
          duration: data_duration,
          x: translateX_value,
          autoAlpha: 0,
          stagger: stagger_value,
          delay: data_delay,
          scrollTrigger: {
            trigger: word_anim_item,
            start: "top 90%",
          },
        });
      }

      if (translateY_value && !translateX_value) {
        let split_word = new SplitText(word_anim_item, {
          type: "chars, words",
        });
        gsap.from(split_word.words, {
          duration: 1,
          delay: data_delay,
          y: translateY_value,
          autoAlpha: 0,
          stagger: stagger_value,
          scrollTrigger: {
            trigger: word_anim_item,
            start: "top 90%",
          },
        });
      }

      if (translateY_value && translateX_value) {
        let split_word = new SplitText(word_anim_item, {
          type: "chars, words",
        });
        gsap.from(split_word.words, {
          duration: 1,
          delay: data_delay,
          x: translateX_value,
          y: translateY_value,
          autoAlpha: 0,
          stagger: stagger_value,
          scrollTrigger: {
            trigger: word_anim_item,
            start: "top 90%",
          },
        });
      }

      if (!translateX_value && !translateY_value) {
        let split_word = new SplitText(word_anim_item, {
          type: "chars, words",
        });
        gsap.from(split_word.words, {
          duration: 1,
          delay: data_delay,
          x: 20,
          autoAlpha: 0,
          stagger: stagger_value,
          scrollTrigger: {
            trigger: word_anim_item,
            start: "top 85%",
          },
        });
      }
    } else {
      if (translateX_value > 0 && !translateY_value) {
        let split_word = new SplitText(word_anim_item, {
          type: "chars, words",
        });
        gsap.from(split_word.words, {
          duration: 1,
          delay: data_delay,
          x: translateX_value,
          autoAlpha: 0,
          stagger: stagger_value,
        });
      }

      if (translateY_value > 0 && !translateX_value) {
        let split_word = new SplitText(word_anim_item, {
          type: "chars, words",
        });
        gsap.from(split_word.words, {
          duration: 1,
          delay: data_delay,
          y: translateY_value,
          autoAlpha: 0,
          stagger: stagger_value,
        });
      }

      if (translateY_value > 0 && translateX_value > 0) {
        let split_word = new SplitText(word_anim_item, {
          type: "chars, words",
        });
        gsap.from(split_word.words, {
          duration: 1,
          delay: data_delay,
          x: translateX_value,
          y: translateY_value,
          autoAlpha: 0,
          stagger: stagger_value,
        });
      }

      if (!translateX_value && !translateY_value) {
        let split_word = new SplitText(word_anim_item, {
          type: "chars, words",
        });
        gsap.from(split_word.words, {
          duration: 1,
          delay: data_delay,
          x: 20,
          autoAlpha: 0,
          stagger: stagger_value,
        });
      }
    }
  });

  // Animation Character
  var animation_char_come_items = document.querySelectorAll(".char-anim");
  animation_char_come_items.forEach((item) => {
    var stagger_value = 0.05;
    var translateX_value = 20;
    var translateY_value = false;
    var onscroll_value = 1;
    var data_delay = 0.1;
    var data_duration = 1;
    var ease_value = "power2.out";

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
          type: "chars, words",
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
            start: "top 85%",
          },
        });
      }
      if (translateY_value > 0 && !translateX_value) {
        let split_char = new SplitText(item, {
          type: "chars, words",
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
            start: "top 85%",
          },
        });
      }
      if (translateX_value && translateY_value) {
        let split_char = new SplitText(item, {
          type: "chars, words",
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
            start: "top 85%",
          },
        });
      }
      if (!translateX_value && !translateY_value) {
        let split_char = new SplitText(item, {
          type: "chars, words",
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
            start: "top 85%",
          },
        });
      }
    } else {
      if (translateX_value > 0 && !translateY_value) {
        let split_char = new SplitText(item, {
          type: "chars, words",
        });
        gsap.from(split_char.chars, {
          duration: 1,
          delay: data_delay,
          x: translateX_value,
          ease: ease_value,
          autoAlpha: 0,
          stagger: stagger_value,
        });
      }
      if (translateY_value > 0 && !translateX_value) {
        let split_char = new SplitText(item, {
          type: "chars, words",
        });
        gsap.from(split_char.chars, {
          duration: 1,
          delay: data_delay,
          y: translateY_value,
          autoAlpha: 0,
          ease: ease_value,
          stagger: stagger_value,
        });
      }
      if (translateX_value && translateY_value) {
        let split_char = new SplitText(item, {
          type: "chars, words",
        });
        gsap.from(split_char.chars, {
          duration: 1,
          delay: data_delay,
          y: translateY_value,
          x: translateX_value,
          ease: ease_value,
          autoAlpha: 0,
          stagger: stagger_value,
        });
      }
      if (!translateX_value && !translateY_value) {
        let split_char = new SplitText(item, {
          type: "chars, words",
        });
        gsap.from(split_char.chars, {
          duration: 1,
          delay: data_delay,
          ease: ease_value,
          x: 50,
          autoAlpha: 0,
          stagger: stagger_value,
        });
      }
    }
  });

  // typewritter text
  if (document.querySelectorAll(".typewriter-text").length > 0) {
    typing(0, $(".typewriter-text").data("text"));

    function typing(index, text) {
      var textIndex = 1;

      var tmp = setInterval(function () {
        if (textIndex < text[index].length + 1) {
          $(".typewriter-text").text(text[index].substr(0, textIndex));
          textIndex++;
        } else {
          setTimeout(function () {
            deleting(index, text);
          }, 2000);
          clearInterval(tmp);
        }
      }, 150);
    }

    function deleting(index, text) {
      var textIndex = text[index].length;

      var tmp = setInterval(function () {
        if (textIndex + 1 > 0) {
          $(".typewriter-text").text(text[index].substr(0, textIndex));
          textIndex--;
        } else {
          index++;
          if (index == text.length) {
            index = 0;
          }
          typing(index, text);
          clearInterval(tmp);
        }
      }, 150);
    }
  }

  // button effect
  var mouse = { x: 0, y: 0 };
  var pos = { x: 0, y: 0 };
  var ratio = 0.65;
  var active = false;

  var allParalax = document.querySelectorAll(".parallax-wrap");

  allParalax.forEach(function (e) {
    e.addEventListener("mousemove", mouseMoveBtn);
  });

  function mouseMoveBtn(e) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    mouse.x = e.pageX;
    mouse.y = e.pageY - scrollTop;
  }
  gsap.ticker.add(updatePosition);

  $(".parallax-wrap").mouseenter(function (e) {
    gsap.to(this, { duration: 0.3, scale: 2 });
    gsap.to($(this).children(), { duration: 0.3, scale: 0.5 });
    active = true;
  });

  $(".parallax-wrap").mouseleave(function (e) {
    gsap.to(this, { duration: 0.3, scale: 1 });
    gsap.to($(this).children(), { duration: 0.3, scale: 1, x: 0, y: 0 });
    active = false;
  });

  function updatePosition() {
    pos.x += (mouse.x - pos.x) * ratio;
    pos.y += (mouse.y - pos.y) * ratio;
  }

  $(".parallax-wrap").mousemove(function (e) {
    parallaxCursorBtn(e, this, 2);
    callParallaxBtn(e, this);
  });

  function callParallaxBtn(e, parent) {
    parallaxItBtn(e, parent, parent.querySelector(".parallax-element"), 20);
  }

  function parallaxItBtn(e, parent, target, movement) {
    var boundingRect = parent.getBoundingClientRect();
    var relX = e.pageX - boundingRect.left;
    var relY = e.pageY - boundingRect.top;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    gsap.to(target, {
      duration: 0.3,
      x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
      y:
        ((relY - boundingRect.height / 2 - scrollTop) / boundingRect.height) *
        movement,
      ease: Power2.easeOut,
    });
  }

  function parallaxCursorBtn(e, parent, movement) {
    var rect = parent.getBoundingClientRect();
    var relX = e.pageX - rect.left;
    var relY = e.pageY - rect.top;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
    pos.y =
      rect.top +
      rect.height / 2 +
      (relY - rect.height / 2 - scrollTop) / movement;
  }

  // Pin Active
  var pin_fixed = document.querySelector(".pin-element");
  if (pin_fixed && device_width > 991) {
    gsap.to(".pin-element", {
      scrollTrigger: {
        trigger: ".pin-area",
        pin: ".pin-element",
        start: "top top",
        end: "bottom bottom",
        pinSpacing: false,
      },
    });
  }

  // pin on bottom
  var pin_on_bottom = document.querySelectorAll(".pin-on-bottom");
  pin_on_bottom.forEach((el) => {
    gsap.to(el, {
      paddingBottom: "500px",
      ease: "none",
      scrollTrigger: {
        trigger: el,
        pin: true,
        start: "bottom 90%",
        end: "bottom top",
        pinSpacing: false,
        scrub: 3,
        // markers: true,
      },
    });
  });

  // gsap nav
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // Get section ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // // Ball Movement Effect
  // const Engine = Matter.Engine,
  //   Render = Matter.Render,
  //   Runner = Matter.Runner,
  //   Bodies = Matter.Bodies,
  //   Composite = Matter.Composite,
  //   Body = Matter.Body,
  //   World = Matter.World;

  // // Get container and features
  // const container = document.getElementById("canvas-container");
  // const features = container
  //   .getAttribute("data-features")
  //   .split(",")
  //   .map((feature) => feature.trim());

  // // Create engine with specific settings
  // const engine = Engine.create({
  //   gravity: { x: 0, y: 0.2 },
  //   constraintIterations: 6,
  //   positionIterations: 10,
  // });

  // // Create renderer
  // const render = Render.create({
  //   element: container,
  //   engine: engine,
  //   options: {
  //     width: container.clientWidth,
  //     height: container.clientHeight,
  //     wireframes: false,
  //     background: "transparent",
  //   },
  // });

  // // Set world bounds
  // engine.world.bounds = {
  //   min: { x: 0, y: 0 },
  //   max: { x: container.clientWidth, y: container.clientHeight },
  // };

  // // Wall configuration
  // const wallThickness = 100;
  // const walls = [
  //   Bodies.rectangle(
  //     container.clientWidth / 2,
  //     container.clientHeight + wallThickness / 2,
  //     container.clientWidth,
  //     wallThickness,
  //     {
  //       isStatic: true,
  //       render: { fillStyle: "#424242" },
  //       restitution: 0.2,
  //       friction: 0.1,
  //     }
  //   ),
  //   Bodies.rectangle(
  //     -wallThickness / 2,
  //     container.clientHeight / 2,
  //     wallThickness,
  //     container.clientHeight,
  //     {
  //       isStatic: true,
  //       render: { fillStyle: "#424242" },
  //       restitution: 0.2,
  //       friction: 0.1,
  //     }
  //   ),
  //   Bodies.rectangle(
  //     container.clientWidth + wallThickness / 2,
  //     container.clientHeight / 2,
  //     wallThickness,
  //     container.clientHeight,
  //     {
  //       isStatic: true,
  //       render: { fillStyle: "#424242" },
  //       restitution: 0.2,
  //       friction: 0.1,
  //     }
  //   ),
  //   Bodies.rectangle(
  //     container.clientWidth / 2,
  //     -wallThickness / 2,
  //     container.clientWidth,
  //     wallThickness,
  //     {
  //       isStatic: true,
  //       render: { fillStyle: "#424242" },
  //       restitution: 0.2,
  //       friction: 0.1,
  //     }
  //   ),
  // ];

  // // Utility functions
  // function getDistance(point1, point2) {
  //   const dx = point2.x - point1.x;
  //   const dy = point2.y - point1.y;
  //   return Math.sqrt(dx * dx + dy * dy);
  // }

  // function calculateBallSize(text) {
  //   const baseSize = window.innerWidth <= 575 ? 100 : 150;
  //   return baseSize; // Keep all balls the same size regardless of screen
  // }

  // function getInitialPosition(ballSize, existingBalls) {
  //   const margin = ballSize * 0.6;
  //   const maxAttempts = 100;
  //   let attempt = 0;

  //   while (attempt < maxAttempts) {
  //     const x = margin + Math.random() * (container.clientWidth - margin * 2);
  //     const y = margin + Math.random() * (container.clientHeight - margin * 2);

  //     let validPosition = true;
  //     for (const existingBall of existingBalls) {
  //       const distance = getDistance({ x, y }, existingBall.position);
  //       const minDistance = ballSize + existingBall.circleRadius;

  //       if (distance < minDistance) {
  //         validPosition = false;
  //         break;
  //       }
  //     }

  //     if (validPosition) {
  //       return { x, y };
  //     }

  //     attempt++;
  //   }

  //   return {
  //     x: container.clientWidth / 2,
  //     y: -ballSize * (existingBalls.length + 1),
  //   };
  // }

  // function preventOverlap(ball1, ball2) {
  //   if (ball1.isStatic && ball2.isStatic) return;

  //   const dx = ball2.position.x - ball1.position.x;
  //   const dy = ball2.position.y - ball1.position.y;
  //   const distance = Math.sqrt(dx * dx + dy * dy);
  //   const minDistance = ball1.circleRadius + ball2.circleRadius;

  //   if (distance < minDistance) {
  //     const overlap = minDistance - distance;
  //     const angle = Math.atan2(dy, dx);

  //     const force = {
  //       x: Math.cos(angle) * overlap * 0.05,
  //       y: Math.sin(angle) * overlap * 0.05,
  //     };

  //     if (!ball1.isStatic) {
  //       Body.setPosition(ball1, {
  //         x: ball1.position.x - force.x,
  //         y: ball1.position.y - force.y,
  //       });

  //       Body.setVelocity(ball1, {
  //         x: ball1.velocity.x - force.x * 0.2, // Reduced force effect
  //         y: ball1.velocity.y - force.y * 0.2,
  //       });
  //     }

  //     if (!ball2.isStatic) {
  //       Body.setPosition(ball2, {
  //         x: ball2.position.x + force.x,
  //         y: ball2.position.y + force.y,
  //       });

  //       Body.setVelocity(ball2, {
  //         x: ball2.velocity.x + force.x * 0.2, // Reduced force effect
  //         y: ball2.velocity.y + force.y * 0.2,
  //       });
  //     }
  //   }
  // }

  // // Arrays to store balls and labels
  // const balls = [];
  // const ballLabels = [];
  // let highestZIndex = 1;

  // // Create balls and labels
  // if(features.length < 0) render;
  // features.forEach((feature, i) => {
  //   const ballSize = calculateBallSize(feature);
  //   const initialPosition = getInitialPosition(ballSize, balls);

  //   const ball = Bodies.circle(
  //     initialPosition.x,
  //     initialPosition.y,
  //     ballSize / 2,
  //     {
  //       restitution: 0.3,
  //       friction: 0.1,
  //       frictionAir: 0.005,
  //       density: 0.001,
  //       slop: 0,
  //       render: {
  //         fillStyle: "#424242",
  //       },
  //     }
  //   );

  //   ball.collisionFilter = {
  //     group: 0,
  //     category: 0x0001,
  //     mask: 0xffffffff,
  //   };

  //   balls.push(ball);

  //   const label = document.createElement("div");
  //   label.className = "ball-label";
  //   label.textContent = feature;
  //   label.style.width = `${ballSize}px`;
  //   label.style.height = `${ballSize}px`;
  //   container.appendChild(label);
  //   ballLabels.push(label);

  //   let isDragging = false;
  //   let lastMousePosition = { x: 0, y: 0 };
  //   let mouseVelocity = { x: 0, y: 0 };
  //   let lastTime = 0;

  //   function startDragging(e) {
  //     e.preventDefault();
  //     isDragging = true;

  //     highestZIndex++;
  //     label.style.zIndex = highestZIndex;
  //     label.classList.add("dragging");

  //     const mousePos =
  //       e.type === "mousedown"
  //         ? { x: e.clientX, y: e.clientY }
  //         : { x: e.touches[0].clientX, y: e.touches[0].clientY };

  //     lastMousePosition = mousePos;
  //     lastTime = Date.now();

  //     Body.setStatic(ball, true);
  //     Body.setVelocity(ball, { x: 0, y: 0 });
  //     Body.setAngularVelocity(ball, 0);
  //   }

  //   function drag(e) {
  //     if (!isDragging) return;
  //     e.preventDefault();

  //     const currentTime = Date.now();
  //     const deltaTime = (currentTime - lastTime) / 1000;

  //     const currentMousePos =
  //       e.type === "mousemove"
  //         ? { x: e.clientX, y: e.clientY }
  //         : { x: e.touches[0].clientX, y: e.touches[0].clientY };

  //     if (deltaTime > 0) {
  //       mouseVelocity = {
  //         x: (currentMousePos.x - lastMousePosition.x) / deltaTime,
  //         y: (currentMousePos.y - lastMousePosition.y) / deltaTime,
  //       };
  //     }

  //     const containerBounds = container.getBoundingClientRect();
  //     const halfSize = ballSize / 2;

  //     let boundedX = Math.max(
  //       halfSize,
  //       Math.min(currentMousePos.x, containerBounds.width - halfSize)
  //     );
  //     let boundedY = Math.max(
  //       halfSize,
  //       Math.min(currentMousePos.y, containerBounds.height - halfSize)
  //     );

  //     // Check for overlaps with other balls
  //     balls.forEach((otherBall, j) => {
  //       if (otherBall !== ball) {
  //         const distance = getDistance(
  //           { x: boundedX, y: boundedY },
  //           otherBall.position
  //         );
  //         const minDistance = ballSize / 2 + otherBall.circleRadius;

  //         if (distance < minDistance) {
  //           const angle = Math.atan2(
  //             boundedY - otherBall.position.y,
  //             boundedX - otherBall.position.x
  //           );

  //           // Push other ball away slightly
  //           if (!otherBall.isStatic) {
  //             const pushForce = 0.5;
  //             Body.setPosition(otherBall, {
  //               x: otherBall.position.x - Math.cos(angle) * pushForce,
  //               y: otherBall.position.y - Math.sin(angle) * pushForce,
  //             });
  //           }

  //           // Adjust current ball position
  //           boundedX = otherBall.position.x + Math.cos(angle) * minDistance;
  //           boundedY = otherBall.position.y + Math.sin(angle) * minDistance;
  //         }
  //       }
  //     });

  //     Body.setPosition(ball, {
  //       x: boundedX,
  //       y: boundedY,
  //     });

  //     lastMousePosition = currentMousePos;
  //     lastTime = currentTime;
  //   }

  //   function endDragging() {
  //     if (!isDragging) return;

  //     isDragging = false;
  //     label.classList.remove("dragging");

  //     Body.setStatic(ball, false);

  //     const maxVelocity = 10; // Reduced max velocity
  //     const throwVelocity = {
  //       x: Math.min(
  //         Math.max(mouseVelocity.x * 0.08, -maxVelocity),
  //         maxVelocity
  //       ),
  //       y: Math.min(
  //         Math.max(mouseVelocity.y * 0.08, -maxVelocity),
  //         maxVelocity
  //       ),
  //     };

  //     Body.setVelocity(ball, throwVelocity);
  //   }

  //   label.addEventListener("mousedown", startDragging);
  //   label.addEventListener("touchstart", startDragging, { passive: false });
  //   document.addEventListener("mousemove", drag);
  //   document.addEventListener("touchmove", drag, { passive: false });
  //   document.addEventListener("mouseup", endDragging);
  //   document.addEventListener("touchend", endDragging);
  // });

  // // Event handlers
  // Matter.Events.on(engine, "beforeUpdate", () => {
  //   for (let i = 0; i < balls.length; i++) {
  //     for (let j = i + 1; j < balls.length; j++) {
  //       preventOverlap(balls[i], balls[j]);
  //     }
  //   }
  // });

  // Matter.Events.on(engine, "afterUpdate", function () {
  //   const containerBounds = container.getBoundingClientRect();

  //   balls.forEach((ball, i) => {
  //     const label = ballLabels[i];
  //     const ballSize = parseInt(label.style.width);
  //     const halfSize = ballSize / 2;

  //     const x = Math.max(
  //       halfSize,
  //       Math.min(ball.position.x, containerBounds.width - halfSize)
  //     );
  //     const y = Math.max(
  //       halfSize,
  //       Math.min(ball.position.y, containerBounds.height - halfSize)
  //     );

  //     if (x !== ball.position.x || y !== ball.position.y) {
  //       Body.setPosition(ball, { x, y });
  //     }

  //     label.style.left = `${x}px`;
  //     label.style.top = `${y}px`;
  //   });
  // });

  // // Window resize handler
  // let lastWidth = window.innerWidth;
  // window.addEventListener("resize", function () {
  //   // Only recalculate if we cross the 575px threshold
  //   if (
  //     (lastWidth <= 575 && window.innerWidth > 575) ||
  //     (lastWidth > 575 && window.innerWidth <= 575)
  //   ) {
  //     balls.forEach((ball, i) => {
  //       const feature = features[i];
  //       const newSize = calculateBallSize(feature);
  //       const label = ballLabels[i];

  //       // Update label size
  //       label.style.width = `${newSize}px`;
  //       label.style.height = `${newSize}px`;

  //       // Update ball size
  //       const scale = newSize / (ball.circleRadius * 2);
  //       Body.scale(ball, scale, scale);
  //     });
  //   }

  //   lastWidth = window.innerWidth;

  //   render.canvas.width = container.clientWidth;
  //   render.canvas.height = container.clientHeight;

  //   engine.world.bounds = {
  //     min: { x: 0, y: 0 },
  //     max: { x: container.clientWidth, y: container.clientHeight },
  //   };

  //   walls.forEach((wall, index) => {
  //     const positions = [
  //       {
  //         x: container.clientWidth / 2,
  //         y: container.clientHeight + wallThickness / 2,
  //       },
  //       { x: -wallThickness / 2, y: container.clientHeight / 2 },
  //       {
  //         x: container.clientWidth + wallThickness / 2,
  //         y: container.clientHeight / 2,
  //       },
  //       { x: container.clientWidth / 2, y: -wallThickness / 2 },
  //     ];
  //     Body.setPosition(wall, positions[index]);
  //   });
  // });

  // // Add all bodies to world
  // Composite.add(engine.world, [...walls, ...balls]);

  // // Start the engine and renderer
  // Runner.run(engine);
  // Render.run(render);

  // // Prevent default touch behaviors
  // render.canvas.addEventListener("touchstart", (e) => e.preventDefault(), {
  //   passive: false,
  // });
  // render.canvas.addEventListener("touchmove", (e) => e.preventDefault(), {
  //   passive: false,
  // });

  // =====================================
  // Validate if Swiper is available

  // Initialize necessary variables
  const swiperElement = document.querySelector(".responsive__slider");
  const swiperPagination = document.querySelector(".responsive__pagination");

  // Check if elements are present
  if (!swiperElement || !swiperPagination) {
    return;
  } else {
    // Initialize Swiper with options
    const swiper = new Swiper(swiperElement, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 800,
        disableOnInteraction: false,
      },
      pagination: {
        el: swiperPagination,
        clickable: true,
      },
      effect: "slide",
      easing: "ease",
      speed: 2000,
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 30,
          slidesPerView: 4,
        },
      },
    });
  }
  // ===========================================================
  // ===========================================================
  if ($(".text-rotator").length > 0) {
    $(".text-rotator").each(function () {
      var textRotator = $(this);
      var textRotatorWrapper = textRotator.closest(".text-rotator-wrapper");
      var parent = textRotatorWrapper.parent();
      var parentLineHeight = parseFloat(
        window.getComputedStyle(parent[0]).lineHeight
      );

      gsap.set(parent, { y: 0 });
      gsap.set(textRotatorWrapper, { height: parentLineHeight });

      setInterval(function () {
        var spanHeight = textRotator.find("span").eq(0).height();
        var currentSpan = textRotator.find("span").eq(0);
        var nextSpan = textRotator.find("span").eq(1);
        var nextSpanWidth = nextSpan.outerWidth();

        gsap.to(textRotator, {
          duration: 0.75,
          y: spanHeight * -1,
          ease: "back.inOut(2)",
          onComplete: function () {
            textRotator.append(currentSpan);
            gsap.set(textRotator, { y: 0 });
          },
        });

        gsap.to(textRotatorWrapper, {
          duration: 0.75,
          width: nextSpanWidth,
          ease: "back.inOut(2)",
        });
      }, 3000);
    });
  }

})(jQuery);
