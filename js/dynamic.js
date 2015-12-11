$(document).ready(function() {
	if ( $('.slider').length > 0 ) {
		$('.slider').slides({
			generatePagination: false,
			generateNextPrev: true,
			container: 'container',
			effect: 'slide',
			slideSpeed: 500,
			slideEasing: 'easeInOutQuad',
			play: 10000,
			pause: 2500,
		});
		$('.slider').bind('swipeleft', function() {
			$('.slider .next').trigger('click');
		});
		$('.slider').bind('swiperight', function() {
			$('.slider .prev').trigger('click');
		});
	}
	if ( $('.gallery-c').length > 0 ) {
		$('.gallery-c ul').jcarousel({
			scroll: 1,
			animation: 500,
			easing: 'easeInOutQuad',
			wrap: 'circular'
		});
		$('.gallery-c .jcarousel-container').bind('swipeleft', function() {
			$('.gallery-c .jcarousel-container .jcarousel-next').trigger('click');
		});
		$('.gallery-c .jcarousel-container').bind('swiperight', function() {
			$('.gallery-c .jcarousel-container .jcarousel-prev').trigger('click');
		});
	}
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
});