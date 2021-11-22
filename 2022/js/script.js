// // const home = document.querySelector("#home");
// // const nav = document.querySelector(".nav");
// // const header = document.querySelector('.header');

// // const navHeight = nav.getBoundingClientRect().height;

// // const stickyNav = function (entries) {
// //   const [entry] = entries;
// //   // console.log(entry);
// // 	console.log(entry);
// //   if(!entry.isIntersecting)
// //     nav.classList.add('sticky');
// //   else
// //     nav.classList.remove('sticky');

// // }

// // const headerObserver = new IntersectionObserver(stickyNav , {
// //   root: null,
// //   threshold: 0,
// //   rootMargin: `-${navHeight}px`,
// // });
// // headerObserver.observe(header);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
(function ($) {
  "use strict";

  /*START GOOGLE MAP*/
  function initialize() {
  var mapOptions = {
  	zoom: 15,
  	scrollwheel: false,
  	center: new google.maps.LatLng(40.7127837, -74.00594130000002)
  };
  var map = new google.maps.Map(document.getElementById('map'),
  	mapOptions);
  var marker = new google.maps.Marker({
  	position: map.getCenter(),
  	icon: 'assets/img/map_pin.png',
  	map: map
  });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
  /*END GOOGLE MAP*/

  // Count Down JS

  $("#simple-timer").syotimer({
    year: 2022,
    month: 3,
    day: 14,
    hour: 12,
    minute: 0,
  });

  $(document).ready(function () {
    $("#contact-form").validate({
      rules: {
        user_name: {
          required: true,
          minlength: 4,
        },
        user_email: {
          required: true,
          email: true,
        },
        user_phone: {
          required: true,
        },
        user_message: {
          required: true,
        },
      },
      messages: {
        user_name: {
          required: "Come on, you have a name don't you?",
          minlength: "Your name must consist of at least 2 characters",
        },
        user_email: {
          required: "Please put your email address",
        },

        user_phone: {
          required: "Please put your Phone Number",
        },

        user_message: {
          required: "Put some messages here?",
          minlength: "Your name must consist of at least 2 characters",
        },
      },
      submitHandler: function (form) {
        $(form).ajaxSubmit({
          type: "POST",
          data: $(form).serialize(),
          url: "sendmail.php",
          success: function () {
            $("#contact-form #success").fadeIn();
          },
          error: function () {
            $("#contact-form #error").fadeIn();
          },
        });
      },
    });
  });
})(jQuery);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//fading elements
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -40px 0px",
};
console.log("Logged");

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      console.log("bye");
      return;
    } else {
      entry.target.classList.add("appear");
      entry.target.classList.remove("fade-in");
      appearOnScroll.unobserve(entry.target);
      console.log("hi");
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// // //slidng images

// function debounce(func, wait = 20, immediate = true) {
//   var timeout;
//   return function () {
//     var context = this,
//       args = arguments;
//     var later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

// const sliderImages = document.querySelectorAll(".slide-in");

// function checkSlide(e) {
//   sliderImages.forEach((sliderImage) => {
//     // halfway through the image
//     const slideInAt =
//       window.scrollY + window.innerHeight - sliderImage.height / 2;
//     // bottom of the image
//     const imageBottom = sliderImage.offsetTop + sliderImage.height;
//     const isHalfShown = slideInAt > sliderImage.offsetTop;
//     const isNotScrolledPast = window.scrollY < imageBottom;
//     if (isHalfShown && isNotScrolledPast) {
//       sliderImage.classList.add("active");
//     } else {
//       sliderImage.classList.remove("active");
//     }

//     console.log(slideInAt);
//   });
// }

// window.addEventListener("scroll", debounce(checkSlide));

// //fading cards
// const faderCards = document.querySelectorAll(".fade-in-card");
// const appearOptionsCard = {
//   threshold: 1,
//   rootMargin: "0px 0px -30px 0px",
// };

// const appearOnScrollCard = new IntersectionObserver(function (
//   entries,
//   appearOnScrollCard
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       console.log("bye");
//       return;
//     } else {
//       entry.target.classList.add("appearCard");
//       entry.target.classList.remove("fade-in-card");
//       appearOnScroll.unobserve(entry.target);
//       console.log("hi");
//     }
//   });
// },
// appearOptionsCard);

// faderCards.forEach((faderCard) => {
// 	appearOnScrollCard.observe(faderCard);
// });

{
  /* <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
	        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"

	        crossorigin="anonymous">

	</script>

	<script src="slideIn.min.js"></script> */
}
