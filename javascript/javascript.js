$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function(){
    if ($('#navigation').offset().top > 0) {
    	$('#navigation').addClass('navscroll');
    } else {
    	$('#navigation').removeClass('navscroll');
    }

    $('#contact').waypoint(function(direction) {
      if (direction === 'down') {
        $('#contact').addClass('inview');
      } else {
        $('#contact').removeClass('inview');
      }
    }, { offset: '100%' });
});

$(document).ready(function(){
  resizeDiv();
});

window.onresize = function(event) {
  resizeDiv();
}

function resizeDiv() {
  vpw = $(window).width();
  vph = $(window).height();
  $('#hero-wrapper').css({'height': vph + 'px'});
}
