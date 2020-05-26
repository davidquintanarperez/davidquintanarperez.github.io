$(function() {

  "use strict";

  // ===========================================================================
  // ================================================================= Reed JSON
  // ===========================================================================
  var testimonials = [{
      "_id": "1",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "2",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "3",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "4",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "5",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "6",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "7",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "8",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "9",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "10",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "11",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "12",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "13",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "14",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "15",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "16",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "17",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "18",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "19",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "20",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "21",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "22",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "23",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "24",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    },
    {
      "_id": "25",
      "name": "Nombre Apellido",
      "job": "Puesto",
      "linkedin": "URL Linkedin",
      "github": "URL GitHub",
      "image": "URL Imagen",
      "testimonial": "Testimono"
    }
  ];

  // ---------------------------------------------------------------------------
  // --------------------------------------------------------- Testimonials HTML
  // ---------------------------------------------------------------------------
  var counter = 0;
  var listItem = "";

  for (var i = 0; i < 3; i++) {
    if (testimonials[i].image == "URL Imagen") {
      testimonials[i].image = "../resources/images/testimonial-profile.png";
    }
    if (testimonials[i].linkedin == "URL Linkedin") {
      testimonials[i].linkedin = "#";
    }
    if (testimonials[i].github == "URL GitHub") {
      testimonials[i].github = "#";
    }

    listItem = '';

    listItem = '' +
      '<div class="col-12 col-md-6 col-xl-4">' +
      '<figure class="snip1157">' +
      '<blockquote>' + testimonials[i].testimonial +
      '<div class="arrow"></div>' +
      '</blockquote>' +
      '<img src="' + testimonials[i].image + '" alt="Imagen de Usuario" />' +
      '<div class="author">' +
      '<h5>' + testimonials[i].name + '<span> ' + testimonials[i].job + '</span></h5>' +
      '<div class="social-menu mt-3">' +
      '<a target="_blank" href="' + testimonials[i].linkedin + '" target="_blank"><i class="fab fa-linkedin"></i></a>' +
      '<a target="_blank" href="' + testimonials[i].github + '" target="_blank"><i class="fab fa-github"></i></a>' +
      '</div>' +
      '</div>' +
      '</figure>' +
      '</div>';

    counter += 1;

    $("#testimonials-container").append(listItem);
  }


  $("#more-testimonials").click(function() {
    for (var i = 0; i < 3; i++) {
      if (counter <= testimonials.length) {
        if (testimonials[i].image == "URL Imagen") {
          testimonials[i].image = "../resources/images/testimonial-profile.png";
        }
        if (testimonials[i].linkedin == "URL Linkedin") {
          testimonials[i].linkedin = "#";
        }
        if (testimonials[i].github == "URL GitHub") {
          testimonials[i].github = "#";
        }

        listItem = '';

        listItem = '' +
          '<div class="col-12 col-md-6 col-xl-4">' +
          '<figure class="snip1157">' +
          '<blockquote>' + testimonials[i].testimonial +
          '<div class="arrow"></div>' +
          '</blockquote>' +
          '<img src="' + testimonials[i].image + '" alt="Imagen de Usuario" />' +
          '<div class="author">' +
          '<h5>' + testimonials[i].name + '<span> ' + testimonials[i].job + '</span></h5>' +
          '<div class="social-menu mt-3">' +
          '<a target="_blank" href="' + testimonials[i].linkedin + '" target="_blank"><i class="fab fa-linkedin"></i></a>' +
          '<a target="_blank" href="' + testimonials[i].github + '" target="_blank"><i class="fab fa-github"></i></a>' +
          '</div>' +
          '</div>' +
          '</figure>' +
          '</div>';

        $("#testimonials-container").append(listItem);

        counter += 1;
      } else {
        $("#more-testimonials").css("display", "none");
        $("#testimonials-id div div").removeClass("justify-content-between");
        $("#testimonials-id div div").addClass("justify-content-start");
        break;
      }
    }
  });

  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------- Index HTML
  // ---------------------------------------------------------------------------
  for (var i = 0; i < 3; i++) {
    if (testimonials[i].image == "URL Imagen") {
      testimonials[i].image = "../resources/images/testimonial-profile.png";
    }
    if (testimonials[i].linkedin == "URL Linkedin") {
      testimonials[i].linkedin = "#";
    }
    if (testimonials[i].github == "URL GitHub") {
      testimonials[i].github = "#";
    }

    listItem = '';
    var active = "";

    if (i == 0) {
      active = "active"
    }

    listItem = '' +
      '<div class="carousel-item ' + active + '">' +
      '<div class="testimonial4_slide">' +
      '<img src="./resources/images/testimonial-profile.png" class="img-circle img-responsive" />' +
      '<p>' +
      '' + testimonials[i].testimonial + '' +
      '</p>' +
      '<h3>' + testimonials[i].name + '</h3>' +
      '<div class="social-menu mt-3">' +
      '<a target="_blank" href="' + testimonials[i].linkedin + '" target="_blank"><i class="fab fa-linkedin"></i></a>' +
      '<a target="_blank" href="' + testimonials[i].github + '" target="_blank"><i class="fab fa-github"></i></a>' +
      '</div>' +
      '</div>' +
      '</div>';

    $("#testimonials-principal-container").append(listItem);
  }
});
