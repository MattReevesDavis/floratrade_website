window.onscroll = () => scrollFunction();

const scrollFunction = () => {
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		$('#scroll-to-top-button').addClass('show-scroll-to-top-button');
	} else {
		$('#scroll-to-top-button').removeClass('show-scroll-to-top-button');
	}
};

$(document).ready(() => {
	const year = new Date().getFullYear();
	$('.copyright-year').html(year);
});

$('#scroll-to-top-button').click(function () {
	window.scrollTo(0, 0);
});

$('.faq-qa-container').click(function () {
	$(this).find('.faq-a-container').slideToggle();
	$(this).find('.faq-q-container i').toggleClass('icon-rotate');
});

$('#how').click(function (e) {
	e.preventDefault();

	$('html').animate({ scrollTop: $('#how-section').offset().top }, 0);
});

$('#faq').click(function (e) {
	e.preventDefault();

	$('html').animate({ scrollTop: $('#faq-section').offset().top }, 0);
});

$('#about').click(function (e) {
	e.preventDefault();

	$('html').animate({ scrollTop: $('#about-section').offset().top }, 0);
});

$('#contact').click(function (e) {
	e.preventDefault();

	$('html').animate({ scrollTop: $('#contact-section').offset().top }, 0);
});
