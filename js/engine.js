$(document).ready(function(){
	// carousel
	$('#foo1').owlCarousel({
		loop:false,
		nav:true,
		dots: true,
		items:4,
		navText: ["PREV", "NEXT"],
		navContainer : '.powerfarms .owl-nav',
		dotsContainer : '.powerfarms .owl-dots'
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

	// var vid = document.getElementById("bgvideo");
	// var vid2 = document.getElementById("bgvideo2");
	// vid.addEventListener('ended', function () {
	// 	// vid.currentTime = 12.0;
	// 	vid2.play();
	// 	$('.bgvideo').hide();
	// }, false);	


	// style select
	$('#farm').styler();
	$('#period').styler();


	// calculator
	var $output = '',
		$sumtext = '';

	$('#period').change(function() {
		var value = $(this).val();
		switch (value){
			case '1' :
				$money = 'Please enter desired monthly income';
				$output = 'You need to invest in order to get desired monthly income';
				break;
			case '2' :
				$money = 'Please enter the sum of available investment';
				$output = 'Will be your approximate monthly income';
				break;
			default :
				$money = '';
				$output = '';
			 	break;
		};

		$('.calculator .result-text').text($output);
		$('.calculator #money').val('').removeAttr('disabled').attr('placeholder', $money);
	});


	$('.calc-btn').click(function(e){
		e.preventDefault();
		$('.calculator .sum').text('20 000 $');
	});


	// validation
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
				}
			}).fail(function(error){
					name = $('#name').val();
					thankTxt = '<div class="thank"> <div class="inner"> <button class="close" type="button"></button> <p class="name">Dear ' + name +'</p> <p>Thank you for submitting your question to the My Power Farm. <br> Your satisfaction is our goal!</p> <p>Our manager will contact you regarding<br>your request as soon as possible!</p> <p><strong>Sincerely, <br>My Power Farm</strong></p> </div> </div>';
					$('#contactus').fadeOut();
					$('body').append(thankTxt);
					startClock('contactus-form');
				// alert(errorTxt)
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
				}
			}).fail(function(error){
					name = $('#nameagent').val();
					thankTxt = '<div class="thank fixed"> <div class="inner"> <button class="close" type="button"></button> <p class="name">Dear ' + name +'</p> <p>Thank you for choosing up MyPowerFarm. <br/> Our manager will contact you as soon as possible!</p> <p><strong>Sincerely, <br>My Power Farm</strong></p> </div> </div>';
					$('body').append(thankTxt);
					$('body').addClass('blur').append('<div class="modal-backdrop in"></div>');
					startClock('mpfagent-form');
				// alert(errorTxt)
			});
		}
	});	
})

$(document).on('click','.thank .close', function(e){    
    e.preventDefault();
    var $this = $(this);
    $('.thank').fadeOut();
    $('#contactus').modal('hide');
})


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
var sec = 4;

function showTime(form){
	sec = sec-1;
	if (sec <=0) {
		stopClock();
		if (form == 'contactus-form'){ 
			$('.thank').fadeOut('normal', function(){
				$('#contactus-form .form-control').val('');
				$('.thank').remove();
				$('#contactus').modal('hide');
			})
		}

		if (form == 'mpfagent-form'){ 
			$('.thank').fadeOut('normal', function(){
				$('#mpfagent-form .form-control').val('');
				$('.thank').remove();
				$('body').removeClass('blur');
				$('.modal-backdrop').remove()
			})
		}


	}
}

function stopClock(){
	window.clearInterval(timer);
	timer = null;
	sec = 4;
}

function startClock(form){
	if (!timer)
	timer = window.setInterval("showTime('"+form+"')",1000);
}