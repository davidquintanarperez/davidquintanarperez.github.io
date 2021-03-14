$(function() {

  // JavaScript Use Strict
  "use strict";

  // ===========================================================================
  // ================================================================ Tab active
  // ===========================================================================
  // //////////////////////////////////////////////////////////////////// #study
  function tabContentActiveC(button_clic) {
    $("#study div.tab button.tab-button-active").removeClass("tab-button-active");
    $("#study .tabcontent.tab-tabcontent-active").removeClass("tab-tabcontent-active");
    button_clic.addClass("tab-button-active")
  }

  $("#study div.tab button").click(function() {
    tabContentActiveC($(this))
    if ($(this).html() === "Scrum Study") {
      $("#scrum").addClass("tab-tabcontent-active")
    } else if ($(this).html() === "UNAM") {
      $("#unam").addClass("tab-tabcontent-active")
    } else {
      $("#courses").addClass("tab-tabcontent-active")
    }
  });

  // /////////////////////////////////////////////////////////////////// #resume
  function tabContentActive(button_clic) {
    $("#resume div.tab button.tab-button-active").removeClass("tab-button-active");
    $("#resume .tabcontent.tab-tabcontent-active").removeClass("tab-tabcontent-active");
    button_clic.addClass("tab-button-active")
  }

  $("#resume div.tab button").click(function() {
    tabContentActive($(this))
    if ($(this).html() === "/Bluetab Solutions") {
      $("#bluetab").addClass("tab-tabcontent-active")
    } else if ($(this).html() === "FES Acatlán") {
      $("#fes").addClass("tab-tabcontent-active")
    } else {
      $("#mainbit").addClass("tab-tabcontent-active")
    }
  });

  // ===========================================================================
  // ================================================================== Typed JS
  // ===========================================================================
  var typed = new Typed('#typed', {
    strings: ['Consultor BI', 'Desarrollador en Python', 'Desarrollador en Scala', 'Desarrollador en Spark'],
    loop: true,
    loopCount: Infinity,
    backSpeed: 60,
    typeSpeed: 60,
  });

  // ===========================================================================
  // ================================================================= Menu Icon
  // ===========================================================================
  $("button.navbar-toggler").click(function() {
    $(".menu-icon").toggleClass("change-menu");
  });

  // ===========================================================================
  // ===================================================================== Navar
  // ===========================================================================

  // ////////////////////////////////////////////////// Navar Validator Collapse
  function navValidatorCollapse() {
    if ($("#site-nav div:last-child").hasClass("show") == true) {
      if ($("#site-nav").offset().top == 0) {
        $("#site-nav").css("background-color", "transparent");
      } else {
        $("#site-nav").css("background-color", "rgba(10,25,47, 0.9)");
      }
    } else {
      $("#site-nav").css("background-color", "rgba(10,25,47, 0.9)");
    }
  }

  // /////////////////////////////////////////////////////////// Navbar Collapse
  navValidatorCollapse();

  $("button.navbar-toggler").click(function() {
    navValidatorCollapse();
  });

  // /////////////////////////////////////////////////////////// Navar Validator
  function navValidator() {
    if ($("#site-nav").offset().top == 0) {
      if ($("#site-nav div:last-child").hasClass("show") == false) {
        $("#site-nav").css("background-color", "transparent");
      } else {
        if ($(window).width() > 992) {
          $("#site-nav").css("background-color", "transparent");
        } else {
          $("#site-nav").css("background-color", "rgba(10,25,47, 0.9)");
        }
      }
    } else {
      $("#site-nav").css("background-color", "rgba(10,25,47, 0.9)");
    }
  }

  // ///////////////////////////////////////////////////////////// Navbar Scroll
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    $("#site-nav").css("background-color", "rgba(10,25,47, 0.9)");
  } else {
    $("#site-nav").css("background-color", "transparent");
  }

  window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      $("#site-nav").css("background-color", "rgba(10,25,47, 0.9)");
    } else {
      navValidator();
    }
  }

  // ////////////////////////////////////////////////////// Navbar Window Resize
  $(window).resize(function() {
    navValidator();
  });

});
