/* =====================================
Template Name: 	Mediplus.
Author Name: Naimur Rahman
Website: http://wpthemesgrid.com/
Description: Mediplus - Doctor HTML Template.
Version:	1.1
========================================*/
/*=======================================
[Start Activation Code]
=========================================
* Sticky Header JS
* Search JS
* Mobile Menu JS
* Hero Slider JS
* Testimonial Slider JS
* Portfolio Slider JS
* Clients Slider JS
* Single Portfolio Slider JS
* Accordion JS
* Nice Select JS
* Date Picker JS
* Counter Up JS
* Checkbox JS
* Right Bar JS
* Video Popup JS
* Wow JS
* Scroll Up JS
* Animate Scroll JS
* Stellar JS
* Google Maps JS
* Preloader JS
=========================================
[End Activation Code]
=========================================*/
(function ($) {
  "use strict";
  $(document).on("ready", function () {
    jQuery(window).on("scroll", function () {
      if ($(this).scrollTop() > 200) {
        $("#header .header-inner").addClass("sticky");
      } else {
        $("#header .header-inner").removeClass("sticky");
      }
    });

    /*====================================
      Form Submit
    ======================================*/
    function collectFormData(form) {
      const formData = {};
      const formElements = form.elements;
      const excludedTypes = ["submit", "button"];

      for (let element of formElements) {
        // Check if element's type is not in the excluded types list
        if (
          element.name &&
          !excludedTypes.includes(element.type) &&
          element.value !== ""
        ) {
          formData[element.name] = element.value;
        }
      }

      return formData;
    }
    async function handleSubmit(event, url) {
      event.preventDefault();

      const form = event.target;
      const formData = collectFormData(form);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Mail sent successfully!");
          window.location.href =
            "https://owateconsulting.com/form-success.html";
        } else {
          alert("Error sending mail.");
        }
      } catch (error) {
        alert("Error sending mail: " + error);
      }
    }
    function attachFormSubmit(formId, url) {
      const form = document.getElementById(formId);
      if (form) {
        form.addEventListener("submit", function (event) {
          handleSubmit(event, url);
        });
      } else {
        console.log(`Form with ID '${formId}' not found.`);
      }
    }
    attachFormSubmit(
      "ama-form",
      "https://owate-backend.onrender.com/mail/submit"
    );
    attachFormSubmit(
      "cea-form",
      "https://owate-backend.onrender.com/mail/submit"
    );
    attachFormSubmit(
      "feedback-form",
      "https://owate-backend.onrender.com/mail/submit"
    );
    attachFormSubmit(
      "free-intro-form",
      "https://owate-backend.onrender.com/mail/submit"
    );
    attachFormSubmit(
      "contact-form",
      "https://owate-backend.onrender.com/mail/submit"
    );
    attachFormSubmit(
      "hcdp-form",
      "https://owate-backend.onrender.com/mail/submit"
    );
    attachFormSubmit(
      "raip-form",
      "https://owate-backend.onrender.com/mail/submit"
    );
    attachFormSubmit(
      "sst-form",
      "https://owate-backend.onrender.com/mail/submit"
    );

    /*====================================
      End Form Submit
    ======================================*/

    function loadNavbarAndFooter() {
      // Fetch and insert the Navbar
      fetch("/navbar.html")
        .then((response) => response.text())
        .then((data) => {
          $("#navbar").html(data);
          initializeNavbarToggler(); // Initialize toggler after navbar is loaded
        })
        .catch((error) => console.error("Error loading the navbar:", error));

      // Fetch and insert the Footer
      fetch("/footer.html")
        .then((response) => response.text())
        .then((data) => {
          $("#footer").html(data);
        })
        .catch((error) => console.error("Error loading the footer:", error));
    }

    // Initialize navbar toggler function
    function initializeNavbarToggler() {
      // Initialize slicknav for mobile menu after navbar is loaded
      $(".menu").slicknav({
        prependTo: ".mobile-nav",
        duration: 300,
        closeOnClick: true,
      });
    }

    // Call the function to load the Navbar and Footer
    loadNavbarAndFooter();

    /*====================================
      Sticky Header JS
======================================*/
    jQuery(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $(".header").addClass("sticky");
      } else {
        $(".header").removeClass("sticky");
      }
    });

    $(".pro-features .get-pro").on("click", function () {
      $(".pro-features").toggleClass("active");
    });

    /*====================================
      Search JS
======================================*/
    $(".search a").on("click", function () {
      $(".search-top").toggleClass("active");
    });

    /*===============================
			Hero Slider JS
		=================================*/
    $(".hero-slider").owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 500,
      // slider time interval
      autoplayTimeout: 5000,
      singleItem: true,
      autoplayHoverPause: true,
      items: 1,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
      dots: false,
    });

    /*===============================
			Testimonial Slider JS
		=================================*/
    $(".testimonial-slider").owlCarousel({
      items: 3,
      autoplay: true,
      autoplayTimeout: 4500,
      smartSpeed: 300,
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      nav: false,
      dots: true,
      responsive: {
        1: {
          items: 1,
        },
        300: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1170: {
          items: 3,
        },
      },
    });

    /*===============================
			Portfolio Slider JS
		=================================*/
    $(".portfolio-slider").owlCarousel({
      autoplay: true,
      autoplayTimeout: 4000,
      margin: 15,
      smartSpeed: 300,
      autoplayHoverPause: true,
      loop: true,
      nav: true,
      dots: false,
      responsive: {
        300: {
          items: 1,
        },
        480: {
          items: 2,
        },
        768: {
          items: 2,
        },
        1170: {
          items: 4,
        },
      },
    });

    /*=====================================
			Counter Up JS
		======================================*/
    $(".counter").counterUp({
      delay: 20,
      time: 2000,
    });

    /*===============================
			Clients Slider JS
		=================================*/
    $(".clients-slider").owlCarousel({
      items: 5,
      autoplay: true,
      autoplayTimeout: 3500,
      margin: 15,
      smartSpeed: 400,
      autoplayHoverPause: true,
      loop: true,
      nav: false,
      dots: false,
      responsive: {
        300: {
          items: 1,
        },
        480: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1170: {
          items: 5,
        },
      },
    });

    /*====================================
			Single Portfolio Slider JS
		======================================*/
    $(".pf-details-slider").owlCarousel({
      items: 1,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      nav: true,
      dots: false,
      navText: [
        '<i class="icofont-rounded-left"></i>',
        '<i class="icofont-rounded-right"></i>',
      ],
    });

    /*===================
			Accordion JS
		=====================*/
    // $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
    // $(".accordion a").on("click", function (j) {
    //   var dropDown = $(this).closest("li").find("p");
    //   $(this).closest(".accordion").find("p").not(dropDown).slideUp(300);
    //   if ($(this).hasClass("active")) {
    //     $(this).removeClass("active");
    //   } else {
    //     $(this).closest(".accordion").find("a.active").removeClass("active");
    //     $(this).addClass("active");
    //   }
    //   dropDown.stop(false, true).slideToggle(300);
    //   j.preventDefault();
    // });

    /*====================================
			Nice Select JS
		======================================*/
    $("select").niceSelect();

    /*=====================================
			Date Picker JS
		======================================*/
    $(function () {
      $("#datepicker").datepicker();
    });

    /*===============================
			Checkbox JS
		=================================*/
    $('input[type="checkbox"]').change(function () {
      if ($(this).is(":checked")) {
        $(this).parent("label").addClass("checked");
      } else {
        $(this).parent("label").removeClass("checked");
      }
    });

    /*===============================
			Right Bar JS
		=================================*/
    $(".right-bar .bar").on("click", function () {
      $(".sidebar-menu").addClass("active");
    });
    $(".sidebar-menu .cross").on("click", function () {
      $(".sidebar-menu").removeClass("active");
    });

    /*=====================
			Video Popup JS
		=======================*/
    $(".video-popup").magnificPopup({
      type: "video",
    });

    /*================
			Wow JS
		==================*/
    var window_width = $(window).width();
    if (window_width > 767) {
      new WOW().init();
    }

    /*===================
			Scroll Up JS
		=====================*/
    $.scrollUp({
      scrollText: '<span><i class="fa fa-angle-up"></i></span>',
      easingType: "easeInOutExpo",
      scrollSpeed: 900,
      animation: "fade",
    });

    /*=======================
			Animate Scroll JS
		=========================*/
    $(".scroll").on("click", function (e) {
      var anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr("href")).offset().top - 100,
          },
          1000
        );
      e.preventDefault();
    });

    /*=======================
			Stellar JS
		=========================*/
    $.stellar({
      horizontalOffset: 0,
      verticalOffset: 0,
    });

    /*====================
			Google Maps JS
		======================*/
    var map = new GMaps({
      el: "#map",
      lat: 23.011245,
      lng: 90.88478,
      scrollwheel: false,
    });
    map.addMarker({
      lat: 23.011245,
      lng: 90.88478,
      title: "Marker with InfoWindow",
      infoWindow: {
        content: "<p>welcome to Medipro</p>",
      },
    });
  });

  /*====================
		Preloader JS
	======================*/
  $(window).on("load", function () {
    $(".preloader").addClass("preloader-deactivate");
  });
})(jQuery);
