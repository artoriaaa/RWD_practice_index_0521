$(document).ready(function() {
	
	$('.nav-switch').click(function(event) {
		event.preventDefault();
	/*	$('.slideMenu').slideToggle(3000);*/
		$('body').toggleClass('trigger');
	});
	
});