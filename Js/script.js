// JavaScript Document
$(function (){
	"use strict";
	// slider height //
	var winH   = $(window).height(),
		navH   = $(".navbar").innerHeight();
	$("slider, .carousel-item").height ( winH - navH );
});
//*/ text slider /*//
$(window).scroll(function(){
	'use strict';
  var st = $(window).scrollTop();
  var range = 300;
  $('.translate').css("opacity", 1- st / range);
});
//*/ culture /*//
$('.num-2').click(function(){
		'use strict';
	$('.small-1').hide(500);
	$('.small-2').show(500);
	$('.capital-1').css('color','#7f7f7f');
	$('.capital-2').css('color','white');
	$('.small-3').hide(500);
	$('.capital-3').css('color','#7f7f7f');
	$('.photo').attr('src','img/photo-2.jpg');
});
$('.num-1').click(function(){
	'use strict';
	$('.small-2').hide(500);
	$('.small-3').hide(500);
	$('.small-1').show(500);
	$('.capital-2').css('color','#7f7f7f');
	$('.capital-3').css('color','#7f7f7f');
	$('.capital-1').css('color','white');
	$('.photo').attr('src','img/culture-1.jpg');
});
$('.num-3').click(function(){
	'use strict';
	$('.small-1').hide(500);
	$('.small-2').hide(500);
	$('.small-3').show(500);
	$('.capital-1').css('color','#7f7f7f');
	$('.capital-2').css('color','#7f7f7f');
	$('.capital-3').css('color','white');
	$('.photo').attr('src','img/photo-3.jpg');
});
$('.card-1').mouseover(function(){
	'use strict';
	$('.change-1').css('color','white');
});
$('.card-1').mouseleave(function(){
	'use strict';
	$('.change-1').css('color','#151515');
});
$('.card-2').mouseover(function(){
	'use strict';
	$('.change-2').css('color','white');
});
$('.card-2').mouseleave(function(){
	'use strict';
	$('.change-2').css('color','#151515');
});
$('.card-3').mouseover(function(){
	'use strict';
	$('.change-3').css('color','white');
});
$('.card-3').mouseleave(function(){
	'use strict';
	$('.change-3').css('color','#151515');
});
$('.card-4').mouseover(function(){
	'use strict';
	$('.change-4').css('color','white');
});
$('.card-4').mouseleave(function(){
	'use strict';
	$('.change-4').css('color','#151515');
});
$('.card-5').mouseover(function(){
	'use strict';
	$('.change-5').css('color','white');
});
$('.card-5').mouseleave(function(){
	'use strict';
	$('.change-5').css('color','#151515');
});
$('.card-6').mouseover(function(){
	'use strict';
	$('.change-6').css('color','white');
});
$('.card-6').mouseleave(function(){
	'use strict';
	$('.change-6').css('color','#151515');
});