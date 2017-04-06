$(document).ready(function(){
	// carousel
	$('#foo1').owlCarousel({
		loop:false,
		nav:true,
		dots: true,
		items:4,
		navText: ["PREV", "NEXT"],
		navContainer : '.powerfarms .owl-nav',
		dotsContainer : '.powerfarms .owl-dots',
		responsive:{
			0:{
				items:1,
				stagePadding: 20
			},
			480:{
				items:2
			},
			768:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});

	$('#foo2').owlCarousel({
		loop:false,
		nav:true,
		dots: true,
		items:1,
		navText: ["PREV", "NEXT"],
		navContainer : '.friends .owl-nav',
		dotsContainer : '.friends .owl-dots'
	});

	$('#foo3').owlCarousel({
		loop:false,
		nav:true,
		dots: true,
		items:4,
		navText: ["PREV", "NEXT"],
		navContainer : '.other_projects .owl-nav',
		dotsContainer : '.other_projects .owl-dots',
		responsive:{
			0:{
				items:1,
				stagePadding: 20
			},
			400:{
				items:2
			},
			700:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});	



	$('#money, #amount, #invamount').inputmask(
		"decimal", {
			digits: 3,
			autoGroup: true,
			groupSeparator: " ",
			allowPlus: false,
			allowMinus: false,
			placeholder: ' ',
			prefix: "$ ",
			rightAlign : false,
			showMaskOnFocus : true
		});

	// style select
	$('#farm').styler();
	$('#period').styler();
	$('#model').styler();
	$('#energy').styler();
	$('#capacity').styler();


	if (document.documentElement.scrollHeight == document.documentElement.offsetHeight) $('.contact-btn').fadeIn();

	$(window).scroll(function (){
		if ($(this).scrollTop() > 270){
			$('.contact-btn').fadeIn();
		} else{
			$('.contact-btn').fadeOut();
		}
		if (document.documentElement.scrollHeight == document.documentElement.offsetHeight) $('.contact-btn').fadeIn();
	});


	// calculator
	$.fn.setCursorPosition = function(pos) {
		this.each(function(index, elem) {
		if (elem.setSelectionRange) {
			elem.setSelectionRange(pos, pos);
		} else if (elem.createTextRange) {
			var range = elem.createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
		});
		return this;
	};



	var $output = '',
		$sumtext = '';

	$('#period').change(function() {
		var value = $(this).val();
		switch (value){
			case '1' :
				$money = 'Please enter desired monthly income';
				$output = 'You need to invest in order <br/> to get desired monthly income';
				break;
			case '2' :
				$money = 'Please enter the sum of available investment';
				$output = 'Will be your approximate <br/> monthly income';
				break;
			default :
				$money = '';
				$output = '';
			 	break;
		};


		$('.money-box').addClass('enabled').find('.placeholder').show().text($money);

		$('.calculator .result-text').html($output);
		$('.calculator #money').prop('disabled' ,false).val('').prop('placeholder', $money);
		// $('.calculator #money');
		// $('.calculator #money').inputmask('setvalue', '');
	});


	$('.calc-btn').click(function(e){
		e.preventDefault();
		$('.calculator .sum').text('$ 20 000');
	});


	// validation modal contact form
	$('#contactus-form .btn-submit').click(function(){
		$('#contactus-form').submit();
		return false;
	});

	errorTxt = 'Ошибка отправки';
	$('#contactus-form').validate({
		submitHandler: function(form){
			strSubmit=$(form).serialize();
			$.ajax({type: 'POST',url: '/ajax/callback.ajax.php',data: strSubmit,
				success: function(){
					name = $('#name').val();
					thankTxt = '<div class="thank"> <div class="inner"> <button class="close" type="button"></button> <p class="name">Dear ' + name +'</p> <p>Thank you for submitting your question to the My Power Farm. <br> Your satisfaction is our goal!</p> <p>Our manager will contact you regarding<br>your request as soon as possible!</p> <p><strong>Sincerely, <br>My Power Farm</strong></p> </div> </div>';
					$('#contactus').fadeOut();
					$('body').append(thankTxt);
					startClock('contactus-form');
				}
			}).fail(function(error){
				alert(errorTxt)
			});
		}
	});

	// validation mpf agent 
	$('#mpfagent-form .btn-submit').click(function(){
		$('#mpfagent-form').submit();
		return false;
	});

	errorTxt = 'Ошибка отправки';
	$('#mpfagent-form').validate({
		submitHandler: function(form){
			strSubmit=$(form).serialize();
			$.ajax({type: 'POST',url: '/ajax/callback.ajax.php',data: strSubmit,
				success: function(){
					name = $('#nameagent').val();
					thankTxt = '<div class="thank fixed"> <div class="inner"> <button class="close" type="button"></button> <p class="name">Dear ' + name +'</p> <p>Thank you for choosing up MyPowerFarm. <br/> Our manager will contact you as soon as possible!</p> <p><strong>Sincerely, <br>My Power Farm</strong></p> </div> </div>';
					$('body').append(thankTxt);
					$('body').addClass('blur').append('<div class="modal-backdrop in"></div>');
					startClock('mpfagent-form');
				}
			}).fail(function(error){
				alert(errorTxt)
			});
		}
	});


	// validation project page
	$('#order-form .btn-submit').click(function(){
		amount = $('#invamount').val();

		if (amount.search(/\d/) != -1){
			console.log('|' + $('#invamount').val() + '|');			
		}
		$('#order-form').submit();
		return false;
	});

	errorTxt = 'Ошибка отправки';
	$('#order-form').validate({
		submitHandler: function(form){
			strSubmit=$(form).serialize();
			$.ajax({type: 'POST',url: '/ajax/callback.ajax.php',data: strSubmit,
				success: function(){
					console.log('"' + $('#invamount').val()) + '"';
					name = $('#nameagent').val();
					thankTxt = '<div class="thank fixed"> <div class="inner"> <button class="close" type="button"></button> <p class="name">Dear ' + name +'</p> <p>Thank you for choosing up MyPowerFarm. <br/> Our manager will contact you as soon as possible!</p> <p><strong>Sincerely, <br>My Power Farm</strong></p> </div> </div>';
					$('body').append(thankTxt);
					$('body').addClass('blur').append('<div class="modal-backdrop in"></div>');
					startClock('order-form');
				}
			}).fail(function(error){
				alert(errorTxt)
			});
		}
	});


	$.validator.addMethod("validamount", function(value){
		amount = $('#invamount').val();
		if (amount.search(/\d/) != -1){
			return true
		} else return false;

	},"");

	$.validator.addClassRules("requiredamount", { validamount: true});


	// detect user agent
		var ua = navigator.userAgent;
		var checker = {
			iphone: ua.match(/(iPhone|iPod|iPad)/),
			blackberry: ua.match(/BlackBerry/),
			android: ua.match(/Android/)
		};
		if (checker.iphone){
			$('body').addClass('iphone');
			$('.money-box .placeholder').remove();
		}

});

$(document).on('click','.thank .close', function(e){	
	e.preventDefault();
	var $this = $(this);
	$('.thank').fadeOut();
	$('#contactus').modal('hide');
	$('.modal-backdrop').remove();
	$('body').removeClass('blur');
});


$(document).on('click','.money-box.enabled .placeholder', function(e){	
	$(this).hide();
	$('#money').focus().setCursorPosition(2);
});


// =заглушка для IE
//event listener: DOM ready
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
//call plugin function after DOM ready
addLoadEvent(function(){
	outdatedBrowser({
		bgColor: '#f25648',
		color: '#ffffff',
		lowerThan: 'transform',
		languagePath: '/outdatedbrowser/lang/ru.html'
	})
});
// =/заглушка для IE




var timer;
var sec = 400;

function showTime(form){
	sec = sec-1;
	if (sec <=0) {
		stopClock();

		switch (form){
			case 'contactus-form' :
				$('.thank').fadeOut('normal', function(){
					$('#contactus-form .form-control').val('');
					$('.thank').remove();
					$('#contactus').modal('hide');
				});
				break;
			case 'mpfagent-form' :
				$('.thank').fadeOut('normal', function(){
					$('#mpfagent-form .form-control').val('');
					$('.thank').remove();
					$('body').removeClass('blur');
					$('.modal-backdrop').remove()
				});
				break;
			case 'order-form' : 
				$('.thank').fadeOut('normal', function(){
					$('#order-form .form-control').val('');
					$('.thank').remove();
					$('body').removeClass('blur');
					$('.modal-backdrop').remove()
				})
				break;
			default :
				$money = '';
				$output = '';
			 	break;
		};
	}
}

function stopClock(){
	window.clearInterval(timer);
	timer = null;
	sec = 400;
}

function startClock(form){
	if (!timer)
	timer = window.setInterval("showTime('"+form+"')",1000);
}