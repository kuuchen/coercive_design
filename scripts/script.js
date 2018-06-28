$(document).ready(function(){

	$(".introText").mouseover(function(){
		$(".introText").animate({top: "200px", opacity: 1}, 1500);
		$(".introImageDiv").fadeIn(2500);

	});

	/* Every time the window is scrolled ... */
	$(window).scroll( function(){
		/* Check the location of each desired element */
		$('.hideme').each( function(i){
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			/* If the object is completely visible in the window, fade it in */
			if( bottom_of_window > bottom_of_object ){
				$(this).animate({'opacity':'1'},500);
			}
		}); 
	});

	/* Show nav menu only when past the intro screen */
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 900) {
			$('.navigation').fadeIn();
		} else {
			$('.navigation').fadeOut();
		}
	});

	/* Click 1 to take you to first section */
	$('.navOne').on('click', function() { 
		$('html, body').animate({
			scrollTop: $(".firstBG").offset().top
		}, 1000);

		// fade out the rest????
	});


	/* Click 2 to take you to second section */
	$('.navTwo').on('click', function() { 
		$('html, body').animate({
			scrollTop: $(".secondBG").offset().top
		}, 1000);
	});


	/* Click 3 to take you to third section */
	$('.navThree').on('click', function() { 
		$('html, body').animate({
			scrollTop: $(".thirdBG").offset().top
		}, 1000);

		$('.panelI1A').animate({opacity: '1'}, 2000);
	});

	/* Click 4 to take you to third section */
	$('.navFour').on('click', function() { 
		$('html, body').animate({
			scrollTop: $(".fourthBG").offset().top
		}, 1000);

		$('.panelI1A').animate({opacity: '1'}, 2000);
	});

	/* Click 5 to take you to third section */
	$('.navFive').on('click', function() { 
		$('html, body').animate({
			scrollTop: $(".fifthBG").offset().top
		}, 1000);
	});


	/* Click 6 to take you to third section */
	$('.navSix').on('click', function() { 
		$('html, body').animate({
			scrollTop: $(".sixthBG").offset().top
		}, 1000);
	});

	/* Click 7 to take you to third section */
	$('.navSeven').on('click', function() { 
		$('html, body').animate({
			scrollTop: $(".seventhBG").offset().top
		}, 1000);
	});


	/* Click 8 to take you to third section */
	$('.navEight').on('click', function() { 
		$('html, body').animate({
			scrollTop: $(".eighthBG").offset().top
		}, 1000);
	});

	// navONE
	$(".navOne").mouseover(function(){
		$(".navOneText").animate({opacity: 1}, 500);
		$(".navTwoText").animate({opacity: 0}, 500);
		$(".navThreeText").animate({opacity: 0}, 500);
		$(".navFourText").animate({opacity: 0}, 500);
		$(".navFiveText").animate({opacity: 0}, 500);
		$(".navSixText").animate({opacity: 0}, 500);
		$(".navSevenText").animate({opacity: 0}, 500);
		$(".navEightText").animate({opacity: 0}, 500);
	});
	$(".navOne").mouseout(function(){
		$(".navOneText").animate({opacity: 0}, 500);
	});

// navTWO
$(".navTwo").mouseover(function(){
	$(".navOneText").animate({opacity: 0}, 500);
	$(".navTwoText").animate({opacity: 1}, 500);
	$(".navThreeText").animate({opacity: 0}, 500);
	$(".navFourText").animate({opacity: 0}, 500);
	$(".navFiveText").animate({opacity: 0}, 500);
	$(".navSixText").animate({opacity: 0}, 500);
	$(".navSevenText").animate({opacity: 0}, 500);
	$(".navEightText").animate({opacity: 0}, 500);
});
$(".navTwo").mouseout(function(){
	$(".navTwoText").animate({opacity: 0}, 500);
});

// navTHREE
$(".navThree").mouseover(function(){
	$(".navOneText").animate({opacity: 0}, 500);
	$(".navTwoText").animate({opacity: 0}, 500);
	$(".navThreeText").animate({opacity: 1}, 500);
	$(".navFourText").animate({opacity: 0}, 500);
	$(".navFiveText").animate({opacity: 0}, 500);
	$(".navSixText").animate({opacity: 0}, 500);
	$(".navSevenText").animate({opacity: 0}, 500);
	$(".navEightText").animate({opacity: 0}, 500);
});
$(".navThree").mouseout(function(){
	$(".navThreeText").animate({opacity: 0}, 500);
});

// navFOUR
$(".navFour").mouseover(function(){
	$(".navOneText").animate({opacity: 0}, 500);
	$(".navTwoText").animate({opacity: 0}, 500);
	$(".navThreeText").animate({opacity: 0}, 500);
	$(".navFourText").animate({opacity: 1}, 500);
	$(".navFiveText").animate({opacity: 0}, 500);
	$(".navSixText").animate({opacity: 0}, 500);
	$(".navSevenText").animate({opacity: 0}, 500);
	$(".navEightText").animate({opacity: 0}, 500);
});
$(".navFour").mouseout(function(){
	$(".navFourText").animate({opacity: 0}, 500);
});

// navFIVE
$(".navFive").mouseover(function(){
	$(".navOneText").animate({opacity: 0}, 500);
	$(".navTwoText").animate({opacity: 0}, 500);
	$(".navThreeText").animate({opacity: 0}, 500);
	$(".navFourText").animate({opacity: 0}, 500);
	$(".navFiveText").animate({opacity: 1}, 500);
	$(".navSixText").animate({opacity: 0}, 500);
	$(".navSevenText").animate({opacity: 0}, 500);
	$(".navEightText").animate({opacity: 0}, 500);
});
$(".navFive").mouseout(function(){
	$(".navFiveText").animate({opacity: 0}, 500);
});

// navSIX
$(".navSix").mouseover(function(){
	$(".navOneText").animate({opacity: 0}, 500);
	$(".navTwoText").animate({opacity: 0}, 500);
	$(".navThreeText").animate({opacity: 0}, 500);
	$(".navFourText").animate({opacity: 0}, 500);
	$(".navFiveText").animate({opacity: 0}, 500);
	$(".navSixText").animate({opacity: 1}, 500);
	$(".navSevenText").animate({opacity: 0}, 500);
	$(".navEightText").animate({opacity: 0}, 500);
});
$(".navSix").mouseout(function(){
	$(".navSixText").animate({opacity: 0}, 500);
});

// navSEVEN
$(".navSeven").mouseover(function(){
	$(".navOneText").animate({opacity: 0}, 500);
	$(".navTwoText").animate({opacity: 0}, 500);
	$(".navThreeText").animate({opacity: 0}, 500);
	$(".navFourText").animate({opacity: 0}, 500);
	$(".navFiveText").animate({opacity: 0}, 500);
	$(".navSixText").animate({opacity: 0}, 500);
	$(".navSevenText").animate({opacity: 1}, 500);
	$(".navEightText").animate({opacity: 0}, 500);
});
$(".navSeven").mouseout(function(){
	$(".navSevenText").animate({opacity: 0}, 500);
});

// navEIGHT
$(".navEight").mouseover(function(){
	$(".navOneText").animate({opacity: 0}, 500);
	$(".navTwoText").animate({opacity: 0}, 500);
	$(".navThreeText").animate({opacity: 0}, 500);
	$(".navFourText").animate({opacity: 0}, 500);
	$(".navFiveText").animate({opacity: 0}, 500);
	$(".navSixText").animate({opacity: 0}, 500);
	$(".navSevenText").animate({opacity: 0}, 500);
	$(".navEightText").animate({opacity: 1}, 500);
});
$(".navEight").mouseout(function(){
	$(".navEightText").animate({opacity: 0}, 500);
});



$('.panelI1A').animate({opacity: '1'}, 2000);
$('.panelI4A').animate({opacity: '1'}, 2000);

 //panel 1 BUTTON
 $('.panelB1').on('click', function() { 
		//show panel 1 text & image and color button full white
		$('.panelT1').animate({height: '300px', opacity: '1'}, 500);
		$('.panelB1').animate({opacity: '1'}, 500);
		$('.panelI1').animate({opacity: '1'}, 500);
		$('.panelI1A').delay(1000).animate({opacity: '1'}, 500);

		$('.textC').animate({height: '230px'}, 500);


		//hide everything else whether shown or not
		$('.panelT2').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB2').animate({opacity: '0.5'}, 300);
		$('.panelI2').animate({opacity: '0'}, 500);

		$('.panelT3').animate({height: '0px', opacity: '0'}, 0); 
		$('.panelB3').animate({opacity: '0.5'}, 0); 
		$('.panelI3').animate({opacity: '0'}, 500);
	});

 //panel 2 BUTTON
 $('.panelB2').on('click', function() { 
		//show corresponding text box, close tab, and background image
		$('.panelT2').animate({height: '300px', opacity: '1'}, 500);
		$('.panelB2').animate({opacity: '1'}, 500);
		$('.panelI2').animate({opacity: '1'}, 500);

		$('.textC').animate({height: '230px'}, 500);

		//hide everything else whether shown or not
		$('.panelT1').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB1').animate({opacity: '0.5'}, 300);
		$('.panelI1').animate({opacity: '0'}, 500);
		$('.panelI1A').animate({opacity: '0'}, 500);

		$('.panelT3').animate({height: '0px', opacity: '0'}, 0); 
		$('.panelB3').animate({opacity: '0.5'}, 0); 
		$('.panelI3').animate({opacity: '0'}, 500);
	});

 //panel 3 BUTTON
 $('.panelB3').on('click', function() { 
		//show corresponding text box, close tab, and background image
		$('.panelT3').animate({height: '300px', opacity: '1'}, 500);
		$('.panelB3').animate({opacity: '1'}, 500);
		$('.panelI3').animate({opacity: '1'}, 500);

		$('.textC').animate({height: '250px'}, 500);

		//hide everything else whether shown or not
		$('.panelT1').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB1').animate({opacity: '0.5'}, 300);
		$('.panelI1').animate({opacity: '0'}, 500);
		$('.panelI1A').animate({opacity: '0'}, 500);

		$('.panelT2').animate({height: '0px', opacity: '0'}, 0); 
		$('.panelB2').animate({opacity: '0.5'}, 0); 
		$('.panelI2').animate({opacity: '0'}, 500);
	});

 //panel 4 BUTTON
 $('.panelB4').on('click', function() { 
		//show corresponding text box, close tab, and background image
		$('.panelT4').animate({height: '300px', opacity: '1'}, 500);
		$('.panelB4').animate({opacity: '1'}, 500);
		$('.panelI4').animate({opacity: '1'}, 500);
		$('.panelI4A').delay(1000).animate({opacity: '1'}, 500);

		$('.textD').animate({height: '250px'}, 500);

		//hide everything else whether shown or not
		$('.panelT5').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB5').animate({opacity: '0.5'}, 300);
		$('.panelI5').animate({opacity: '0'}, 500);
		$('.panelI5A').animate({opacity: '0'}, 500);
		$('.panelI5B').animate({opacity: '0'}, 500);

		$('.panelT6').animate({height: '0px', opacity: '0'}, 0); 
		$('.panelB6').animate({opacity: '0.5'}, 0); 
		$('.panelI6').animate({opacity: '0'}, 500);
		$('.panelI6A').animate({opacity: '0'}, 500);
		$('.panelI6B').animate({opacity: '0'}, 500);
	});

  //panel 5 BUTTON
  $('.panelB5').on('click', function() { 
		//show corresponding text box, close tab, and background image
		$('.panelT5').animate({height: '300px', opacity: '1'}, 500);
		$('.panelB5').animate({opacity: '1'}, 500);
		$('.panelI5').animate({opacity: '1'}, 500);
		$('.panelI5A').delay(1000).animate({opacity: '1'}, 500);
		$('.panelI5B').delay(2000).animate({opacity: '1'}, 500);

		$('.textD').animate({height: '320px'}, 500);

		//hide everything else whether shown or not
		$('.panelT4').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB4').animate({opacity: '0.5'}, 300);
		$('.panelI4').animate({opacity: '0'}, 500);
		$('.panelI4A').animate({opacity: '0'}, 500);

		$('.panelT6').animate({height: '0px', opacity: '0'}, 0); 
		$('.panelB6').animate({opacity: '0.5'}, 0); 
		$('.panelI6').animate({opacity: '0'}, 500);
		$('.panelI6A').animate({opacity: '0'}, 500);
		$('.panelI6B').animate({opacity: '0'}, 500);
	});

 //panel 6 BUTTON
 $('.panelB6').on('click', function() { 
		//show corresponding text box, close tab, and background image
		$('.panelT6').animate({height: '300px', opacity: '1'}, 500);
		$('.panelB6').animate({opacity: '1'}, 500);
		$('.panelI6').animate({opacity: '1'}, 500);
		$('.panelI6A').delay(1000).animate({opacity: '1'}, 500);
		$('.panelI6B').delay(2000).animate({opacity: '1'}, 500);

		$('.textD').animate({height: '300px'}, 500);

		//hide everything else whether shown or not
		$('.panelT4').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB4').animate({opacity: '0.5'}, 300);
		$('.panelI4').animate({opacity: '0'}, 500);
		$('.panelI4A').animate({opacity: '0'}, 500);

		$('.panelT5').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB5').animate({opacity: '0.5'}, 300);
		$('.panelI5').animate({opacity: '0'}, 500);
		$('.panelI5A').animate({opacity: '0'}, 500);
		$('.panelI5B').animate({opacity: '0'}, 500);
	});


 //panel 7 BUTTON
 $('.panelB7').on('click', function() { 
		//show corresponding text box, close tab, and background image
		$('.panelT7').animate({height: '300px', opacity: '1'}, 500);
		$('.panelB7').animate({opacity: '1'}, 500);
		$('.panelI7').animate({opacity: '1'}, 500);

		$('.textE').animate({height: '170px'}, 500);

		//hide everything else whether shown or not
		$('.panelT8').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB8').animate({opacity: '0.5'}, 300);
		$('.panelI8').animate({opacity: '0'}, 500);
		$('.panelI8A').animate({opacity: '0'}, 500);

		$('.panelT9').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB9').animate({opacity: '0.5'}, 300);
		$('.panelI9').animate({opacity: '0'}, 500);
		$('.panelI9A').animate({opacity: '0'}, 500);

		$('.panelT10').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB10').animate({opacity: '0.5'}, 300);
		$('.panelI10').animate({opacity: '0'}, 500);

		$('.panelT11').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB11').animate({opacity: '0.5'}, 300);
		$('.panelI11').animate({opacity: '0'}, 500);
		$('.panelI11A').animate({opacity: '0'}, 500);
		$('.panelI11B').animate({opacity: '0'}, 500);

		$('.panelT12').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB12').animate({opacity: '0.5'}, 300);
		$('.panelI12').animate({opacity: '0'}, 500);
		$('.panelI12A').animate({opacity: '0'}, 500);

		$('.panelT13').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB13').animate({opacity: '0.5'}, 300);
		$('.panelI13').animate({opacity: '0'}, 500);
	});


 //panel 8 BUTTON
 $('.panelB8').on('click', function() { 
		//show corresponding text box, close tab, and background image
		$('.panelT8').animate({height: '300px', opacity: '1'}, 500);
		$('.panelB8').animate({opacity: '1'}, 500);
		$('.panelI8').animate({opacity: '1'}, 500);
		$('.panelI8A').delay(1000).animate({opacity: '1'}, 500);

		$('.textE').animate({height: '190px'}, 500);

		//hide everything else whether shown or not
		$('.panelT7').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB7').animate({opacity: '0.5'}, 300);
		$('.panelI7').animate({opacity: '0'}, 500);

		$('.panelT9').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB9').animate({opacity: '0.5'}, 300);
		$('.panelI9').animate({opacity: '0'}, 500);
		$('.panelI9A').animate({opacity: '0'}, 500);

		$('.panelT10').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB10').animate({opacity: '0.5'}, 300);
		$('.panelI10').animate({opacity: '0'}, 500);

		$('.panelT11').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB11').animate({opacity: '0.5'}, 300);
		$('.panelI11').animate({opacity: '0'}, 500);
		$('.panelI11A').animate({opacity: '0'}, 500);
		$('.panelI11B').animate({opacity: '0'}, 500);

		$('.panelT12').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB12').animate({opacity: '0.5'}, 300);
		$('.panelI12').animate({opacity: '0'}, 500);
		$('.panelI12A').animate({opacity: '0'}, 500);

		$('.panelT13').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB13').animate({opacity: '0.5'}, 300);
		$('.panelI13').animate({opacity: '0'}, 500);
	});


//panel 9 BUTTON
$('.panelB9').on('click', function() { 
		//show corresponding text box, close tab, and background image
		$('.panelT9').animate({height: '300px', opacity: '1'}, 500);
		$('.panelB9').animate({opacity: '1'}, 500);
		$('.panelI9').animate({opacity: '1'}, 500);
		$('.panelI9A').delay(1000).animate({opacity: '1'}, 500);

		$('.textE').animate({height: '210px'}, 500);

		//hide everything else whether shown or not
		$('.panelT7').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB7').animate({opacity: '0.5'}, 300);
		$('.panelI7').animate({opacity: '0'}, 500);

		$('.panelT8').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB8').animate({opacity: '0.5'}, 300);
		$('.panelI8').animate({opacity: '0'}, 500);
		$('.panelI8A').animate({opacity: '0'}, 500);

		$('.panelT10').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB10').animate({opacity: '0.5'}, 300);
		$('.panelI10').animate({opacity: '0'}, 500);

		$('.panelT11').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB11').animate({opacity: '0.5'}, 300);
		$('.panelI11').animate({opacity: '0'}, 500);
		$('.panelI11A').animate({opacity: '0'}, 500);
		$('.panelI11B').animate({opacity: '0'}, 500);

		$('.panelT12').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB12').animate({opacity: '0.5'}, 300);
		$('.panelI12').animate({opacity: '0'}, 500);
		$('.panelI12A').animate({opacity: '0'}, 500);

		$('.panelT13').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB13').animate({opacity: '0.5'}, 300);
		$('.panelI13').animate({opacity: '0'}, 500);
	});


//panel 10 BUTTON
$('.panelB10').on('click', function() { 
		//show corresponding text box, close tab, and background image
		$('.panelT10').animate({height: '300px', opacity: '1'}, 500);
		$('.panelB10').animate({opacity: '1'}, 500);
		$('.panelI10').animate({opacity: '1'}, 500);

		$('.textE').animate({height: '210px'}, 500);

		//hide everything else whether shown or not
		$('.panelT7').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB7').animate({opacity: '0.5'}, 300);
		$('.panelI7').animate({opacity: '0'}, 500);

		$('.panelT8').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB8').animate({opacity: '0.5'}, 300);
		$('.panelI8').animate({opacity: '0'}, 500);
		$('.panelI8A').animate({opacity: '0'}, 500);

		$('.panelT9').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB9').animate({opacity: '0.5'}, 300);
		$('.panelI9').animate({opacity: '0'}, 500);
		$('.panelI9A').animate({opacity: '0'}, 500);

		$('.panelT11').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB11').animate({opacity: '0.5'}, 300);
		$('.panelI11').animate({opacity: '0'}, 500);
		$('.panelI11A').animate({opacity: '0'}, 500);
		$('.panelI11B').animate({opacity: '0'}, 500);

		$('.panelT12').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB12').animate({opacity: '0.5'}, 300);
		$('.panelI12').animate({opacity: '0'}, 500);
		$('.panelI12A').animate({opacity: '0'}, 500);

		$('.panelT13').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB13').animate({opacity: '0.5'}, 300);
		$('.panelI13').animate({opacity: '0'}, 500);
	});


//panel 11 BUTTON
$('.panelB11').on('click', function() { 
		//show corresponding text box, close tab, and background image
		$('.panelT11').animate({height: '300px', opacity: '1'}, 500);
		$('.panelB11').animate({opacity: '1'}, 500);
		$('.panelI11').animate({opacity: '1'}, 500);
		$('.panelI11A').delay(1000).animate({opacity: '1'}, 500);
		$('.panelI11B').delay(2000).animate({opacity: '1'}, 500);

		$('.textE').animate({height: '230px'}, 500);

		//hide everything else whether shown or not
		$('.panelT7').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB7').animate({opacity: '0.5'}, 300);
		$('.panelI7').animate({opacity: '0'}, 500);

		$('.panelT8').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB8').animate({opacity: '0.5'}, 300);
		$('.panelI8').animate({opacity: '0'}, 500);
		$('.panelI8A').animate({opacity: '0'}, 500);

		$('.panelT9').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB9').animate({opacity: '0.5'}, 300);
		$('.panelI9').animate({opacity: '0'}, 500);
		$('.panelI9A').animate({opacity: '0'}, 500);

		$('.panelT10').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB10').animate({opacity: '0.5'}, 300);
		$('.panelI10').animate({opacity: '0'}, 500);

		$('.panelT12').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB12').animate({opacity: '0.5'}, 300);
		$('.panelI12').animate({opacity: '0'}, 500);
		$('.panelI12A').animate({opacity: '0'}, 500);

		$('.panelT13').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB13').animate({opacity: '0.5'}, 300);
		$('.panelI13').animate({opacity: '0'}, 500);
	});


//panel 12 BUTTON
$('.panelB12').on('click', function() { 
		//show corresponding text box, close tab, and background image
		$('.panelT12').animate({height: '300px', opacity: '1'}, 500);
		$('.panelB12').animate({opacity: '1'}, 500);
		$('.panelI12').animate({opacity: '1'}, 500);
		$('.panelI12A').delay(1000).animate({opacity: '1'}, 500);

		$('.textE').animate({height: '270px'}, 500);

		//hide everything else whether shown or not
		$('.panelT7').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB7').animate({opacity: '0.5'}, 300);
		$('.panelI7').animate({opacity: '0'}, 500);

		$('.panelT8').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB8').animate({opacity: '0.5'}, 300);
		$('.panelI8').animate({opacity: '0'}, 500);
		$('.panelI8A').animate({opacity: '0'}, 500);

		$('.panelT9').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB9').animate({opacity: '0.5'}, 300);
		$('.panelI9').animate({opacity: '0'}, 500);
		$('.panelI9A').animate({opacity: '0'}, 500);

		$('.panelT10').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB10').animate({opacity: '0.5'}, 300);
		$('.panelI10').animate({opacity: '0'}, 500);

		$('.panelT11').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB11').animate({opacity: '0.5'}, 300);
		$('.panelI11').animate({opacity: '0'}, 500);
		$('.panelI11A').animate({opacity: '0'}, 500);
		$('.panelI11B').animate({opacity: '0'}, 500);

		$('.panelT13').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB13').animate({opacity: '0.5'}, 300);
		$('.panelI13').animate({opacity: '0'}, 500);
	});


//panel 13 BUTTON
$('.panelB13').on('click', function() { 
		//show corresponding text box, close tab, and background image
		$('.panelT13').animate({height: '300px', opacity: '1'}, 500);
		$('.panelB13').animate({opacity: '1'}, 500);
		$('.panelI13').animate({opacity: '1'}, 500);

		$('.textE').animate({height: '190px'}, 500);

		//hide everything else whether shown or not
		$('.panelT7').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB7').animate({opacity: '0.5'}, 300);
		$('.panelI7').animate({opacity: '0'}, 500);

		$('.panelT8').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB8').animate({opacity: '0.5'}, 300);
		$('.panelI8').animate({opacity: '0'}, 500);
		$('.panelI8A').animate({opacity: '0'}, 500);

		$('.panelT9').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB9').animate({opacity: '0.5'}, 300);
		$('.panelI9').animate({opacity: '0'}, 500);
		$('.panelI9A').animate({opacity: '0'}, 500);

		$('.panelT10').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB10').animate({opacity: '0.5'}, 300);
		$('.panelI10').animate({opacity: '0'}, 500);

		$('.panelT11').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB11').animate({opacity: '0.5'}, 300);
		$('.panelI11').animate({opacity: '0'}, 500);
		$('.panelI11A').animate({opacity: '0'}, 500);
		$('.panelI11B').animate({opacity: '0'}, 500);

		$('.panelT12').animate({height: '0px', opacity: '0'}, 300);
		$('.panelB12').animate({opacity: '0.5'}, 300);
		$('.panelI12').animate({opacity: '0'}, 500);
		$('.panelI12A').animate({opacity: '0'}, 500);
	});

// credits to me lmao
$(".creditSym").mouseover(function(){
	$(".creditText").animate({opacity: 1}, 500);
});


});