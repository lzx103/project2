$(document).ready(function(){
	$('#logo').hover(function(){
		$(this).css("font-size","30px");
	}, function(){
		$(this).css("font-size","20px");	
	});

	$('.nav-link a').hover(function(){
		$(this).css("color","#6600CC");
	}, function(){
		$(this).css("color","black");	
	});

	$('.begin').hover(function(){
		$(this).css("box-shadow", "0px 0px 100px 50px #6600CC");
		$(this).css("background-color", "rgba(102, 0, 204, 0.9)");
		$(this).css("cursor", "pointer");
	}, function(){
		$(this).css("box-shadow", "none");
		$(this).css("background-color", "black");
		$(this).css("cursor", "auto");
	});
	$('.begin').click(function(){
		$('.body-index').css("background","url('https://www.uwgb.edu/theatre/images/dance.jpg') no-repeat 50% 50% fixed");
		$('.body-index').css("background-size","cover");
		$(this).css("display","none");
		$('.header-index').fadeIn(2000);
		$('.tagline, #tag2').fadeIn(3000);
	});
});