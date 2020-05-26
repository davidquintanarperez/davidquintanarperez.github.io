$(function() {

  "use strict";

  // ===========================================================================
  // ================================================================= Menu Icon
  // ===========================================================================
  $(".menu-icon-container").click(function() {
    // Menu animation
    $(".menu-icon-container").toggleClass("change-menu");
    // Aside animation
    $(".site-aside").toggleClass("change-aside");
  });

  // ===========================================================================
  // ================================================================== Typed JS
  // ===========================================================================
  var typed = new Typed('#typed', {
    strings: ['Consultor BI', 'Desarrollador Python'],
    loop: true,
    loopCount: Infinity,
    backSpeed: 60,
    typeSpeed: 60,
  });

  // ===========================================================================
  // ======================================================== ScrollMagic JS nav
  // ===========================================================================
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 0
    }
  });

  var scene1 = new ScrollMagic.Scene({
      triggerElement: "#home",
      duration: $('#home').outerHeight(true)
    })
    .setClassToggle("#nav-a1", "nav-a-active")
    .addTo(controller);
  var scene2 = new ScrollMagic.Scene({
      triggerElement: "#about",
      duration: $('#about').outerHeight(true)
    })
    .setClassToggle("#nav-a2", "nav-a-active")
    .addTo(controller);
  var scene3 = new ScrollMagic.Scene({
      triggerElement: "#skills",
      duration: $('#skills').outerHeight(true)
    })
    .setClassToggle("#nav-a3", "nav-a-active")
    .addTo(controller);
  var scene4 = new ScrollMagic.Scene({
      triggerElement: "#resume",
      duration: $('#resume').outerHeight(true)
    })
    .setClassToggle("#nav-a4", "nav-a-active")
    .addTo(controller);
  var scene5 = new ScrollMagic.Scene({
      triggerElement: "#study",
      duration: $('#study').outerHeight(true)
    })
    .setClassToggle("#nav-a5", "nav-a-active")
    .addTo(controller);
  var scene6 = new ScrollMagic.Scene({
      triggerElement: "#testimonials",
      duration: $('#testimonials').outerHeight(true)
    })
    .setClassToggle("#nav-a6", "nav-a-active")
    .addTo(controller);
  var scene7 = new ScrollMagic.Scene({
      triggerElement: "#contact",
      duration: $('#contact').outerHeight(true)
    })
    .setClassToggle("#nav-a7", "nav-a-active")
    .addTo(controller);

  $(window).bind("resize", function() {
    scene1.duration($('#home').outerHeight(true));
    scene2.duration($('#about').outerHeight(true));
    scene3.duration($('#skills').outerHeight(true));
    scene4.duration($('#resume').outerHeight(true));
    scene5.duration($('#study').outerHeight(true));
    scene6.duration($('#testimonials').outerHeight(true));
    scene7.duration($('#contact').outerHeight(true));
  });

  setTimeout(function() {
    scene6.duration($('#testimonials').outerHeight(true));
  }, 1000);

  // ===========================================================================
  // ===================================================== ScrollMagic JS Reveal
  // ===========================================================================
  var revealElements = document.getElementsByClassName("digit");
  for (var i = 0; i < revealElements.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: revealElements[i],
        offset: -800,
      })
      .setClassToggle(revealElements[i], "visible")
      .addTo(controller);
  }
  var revealElements = document.getElementsByClassName("reveal1");
  for (var i = 0; i < revealElements.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: revealElements[i],
        offset: -800,
      })
      .setClassToggle(revealElements[i], "visible")
      .addTo(controller);
  }
});
