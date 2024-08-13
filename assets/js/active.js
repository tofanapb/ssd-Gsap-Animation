/*
    Template: 
    Author: 
*/

(function ($) {
	"use strict";

	$(document).ready(function () {
		/*==========================
			Swiper Init
		============================*/

		var swiper = new Swiper(".service__slider", {
			  // Optional parameters
			slidesPerView: 5,
			// spaceBetween: 0,
			// centeredSlides: true,
			// speed: 1500,
			autoplay: {
				delay: 2000,
			},
			loop: true,
			// If we need pagination
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			  640: {
			    slidesPerView: 2,
			    spaceBetween: 20,
			  },
			  768: {
			    slidesPerView: 3,
			    spaceBetween: 30,
			  },
			  1024: {
			    slidesPerView: 4,
			    spaceBetween: 40,
			  },
			  1200: {
			    slidesPerView: 5,
			    spaceBetween: 50,
			  },
			},
		});

		var swiper2 = new Swiper(".com__slider", {
		  slidesPerView: 5,
		  loop: true,
		  autoplay: {
			  delay: 2000,
		  },
		  breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			  640: {
			    slidesPerView: 2,
			    spaceBetween: 20,
			  },
			  768: {
			    slidesPerView: 3,
			    spaceBetween: 30,
			  },
			  1024: {
			    slidesPerView: 4,
			    spaceBetween: 40,
			  },
			  1200: {
			    slidesPerView: 5,
			    spaceBetween: 50,
			  },
			},
	  });

	  //metisMenu
		$("#main-menu").metisMenu();
	  $('.marquee1').marquee({
		duration: 10000,
		gap: 50,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true
	});
	$('.marquee2').marquee({
		duration: 10000,
		gap: 50,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true
	});
	
	$('.marquee__slider').marquee({
		duration: 10000,
		gap: 50,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true
	});

		//Header Responsive
		$("#hamburger").on("click", function () {
			$(".main-menu").addClass("show");
			$(".header__overly").addClass("active");
		});

		$(".header__overly").on("click", function () {
			$(".main-menu").removeClass("show");
			$(".header__overly").removeClass("active");
		});


		
		/* =============================================
				# contact
			===============================================*/

			$(".explore__form-checkbox_btn").on("click", function () {
				$(".explore__form-checkbox-list").toggleClass("show");
			});

			$(".dropdown_check").on("click", function () {
				$(".explore__sub-list").toggleClass("show");
			});

			new WOW().init();
		/* =============================================
				# Tab Filter  init
			===============================================*/

		$(".grids").imagesLoaded(function () {
			var $grid = $(".grids").isotope({
				itemSelector: ".grid-item",
				percentPosition: true,
				masonry: {
					columnWidth: ".grid-item",
				},
			});
		});
	});
})(jQuery); // End jQuery


gsap.registerPlugin(ScrollTrigger);


const pinWrap = document.querySelector(".pin-wrap");
let pinWrapWidth = pinWrap.offsetWidth;
let inner_width = pinWrapWidth - window.innerWidth;


const twieen = gsap.to(pinWrap, {
	x: - inner_width,
	duration:3,
	ease:"none",
	scrollTrigger: {
		trigger: "#sectionPin",
		start: "top 5%",
		end: "+=" + inner_width,
		scrub: true,
		pin:true,
	},
});


const twieen3 =gsap.to(".quote__text", {
	backgroundPositionX: "0%",
	stagger: 1,
	scrollTrigger: {
	  trigger: ".text__content",
	  scrub: 1,
	  start: "top 20%",
	  end: "bottom 80%"
	}
  });




//   console.clear();

// 	gsap.set('.wrapper',{xPercent:-50,yPercent:-50})
// 	gsap.set('#no02',{y:50})
// 	gsap.set('#no03',{y:120})

// 	var boxWidth = 250,
// 		totalWidth = boxWidth * 7,  //  * n of boxes
// 		no01 = document.querySelectorAll("#no01 .box"),
// 		no02 = document.querySelectorAll("#no02 .box"),
// 		no03 = document.querySelectorAll("#no03 .box"),
// 		dirFromLeft = "+=" + totalWidth,
// 		dirFromRight = "-=" + totalWidth;

// 	var mod = gsap.utils.wrap(0, totalWidth);

// 	function marquee(which, time, direction){
// 	gsap.set(which, {
// 		x:function(i) {
// 		return i * boxWidth;
// 		}
// 	});
// 	var action = gsap.timeline()
// 	.to(which,  {
// 	x: direction,
// 	modifiers: {
// 		x: x => mod(parseFloat(x)) + "px"
// 	},
// 		duration:time, ease:'none',
// 		repeat:-1,
// 	});
// 	return action
// 	}

// 	var master = gsap.timeline()
// 	.add(marquee(no01, 15, dirFromLeft), 1)
// 	.add(marquee(no02, 20, dirFromLeft), 2)
// 	.add(marquee(no03, 20, dirFromRight), 3)

// 	// =============================