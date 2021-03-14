$(function() {

  "use strict";

  // init controller
  var controller = new ScrollMagic.Controller();

  // build scene - a.navbar-brand.reveal1 - link DaviQP navbar
  new ScrollMagic.Scene({
      triggerElement: "body",
      triggerHook: 0,
      offset: -1
    })
    .setClassToggle("a.navbar-brand.reveal1", "visible")
    .addTo(controller);

  // // build scene - li.nav-item.reveal2 - links navbar
  new ScrollMagic.Scene({
      triggerElement: "body",
      triggerHook: 0,
      offset: -1
    })
    .setClassToggle("li.nav-item.reveal2", "visible")
    .addTo(controller);

  // build scene - #site-header div.reveal3 - console
  new ScrollMagic.Scene({
      triggerElement: "body",
      triggerHook: 0,
      offset: -1
    })
    .setClassToggle("#site-header div.reveal3", "visible")
    .addTo(controller);

  // build scene - #site-header .reveal4 - console h1, h2 and p
  new ScrollMagic.Scene({
      triggerElement: "body",
      triggerHook: 0,
      offset: -1
    })
    .setClassToggle("#site-header .reveal4", "visible")
    .addTo(controller);

  // build scene - #site-header li.reveal1 - console social
  new ScrollMagic.Scene({
      triggerElement: "body",
      triggerHook: 0,
      offset: -1
    })
    .setClassToggle("#site-header li.reveal1", "visible")
    .addTo(controller);

  // build scene - #contact div.content-section ul li.reveal1 - contact social
  new ScrollMagic.Scene({
      triggerElement: "#contact div.content-section ul",
      triggerHook: 1,
      // duration: "80%",
      offset: -5
    })
    .setClassToggle("#contact div.content-section ul li.reveal1", "visible")
    // .addIndicators()
    .addTo(controller);

  // section
  var revealElements = $("section.reveal4");
  for (var i = 0; i < revealElements.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: revealElements[i],
        offset: 0,
        triggerHook: 1,
      })
      .setClassToggle(revealElements[i], "visible")
      // .addIndicators({
      //   name: "digit " + (i + 1)
      // })
      .addTo(controller);
  }

});
