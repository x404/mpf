$(document).ready(function(){
	$('.categories a img').hover(
		function(){$(this).stop().animate({opacity: 0.7}, 150);},
		function(){$(this).delay(50).animate({opacity: 1}, 50);}
	);


	$(".slider ul").carouFredSel({
	    auto    : {
	    	play: true,
	        items           : 1,
	        duration        : 5000
	    },
		scroll      : {
	        fx          : "crossfade"
	    },
		pagination  : ".pagination"			
	});

	$("#foo1").owlCarousel({
		items : 1,
		pagination : true,
		navigation : true,
		singleItem : true,
		navigationText: ["", ""]
	});	
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
