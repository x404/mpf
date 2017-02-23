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
