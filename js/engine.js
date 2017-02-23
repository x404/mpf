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




	// validation
	$('#contactus-form .btn-submit').click(function(){
		$('#contactus-form').submit();
		return false;
	});

	errorTxt = 'Ошибка отправки';
	thankTxt = '<div class="thank"> <div class="inner"> <button class="close" type="button"></button> <p class="name">Dear Antotn Gorodetskiy</p> <p>Thank you for submitting your question to the My Power Farm. <br> Your satisfaction is our goal!</p> <p>Our manager will contact you regarding<br>your request as soon as possible!</p> <p><strong>Sincerely, <br>My Power Farm</strong></p> </div> </div>';
	$('#contactus-form').validate({
		submitHandler: function(form){
			strSubmit=$(form).serialize();
			$.ajax({type: 'POST',url: '/ajax/callback.ajax.php',data: strSubmit,
				success: function(){
				}
			}).fail(function(error){
					$('#contactus').fadeOut();
					$('body').append(thankTxt);
					startClock('contactus-form');
				// alert(errorTxt)
			});
		}
	});
})

$(document).on('click','.thank .close', function(e){    
    e.preventDefault();
    var $this = $(this);
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
				$('.thank').remove();
				$('#contactus-form .form-control').val('');
				$('#contactus').modal('hide');
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