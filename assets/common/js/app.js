// Code for the animation control of sections upon scrolling of the page
$(window).scroll(function () {
  var windowBottom = $(this).scrollTop() + $(this).innerHeight();
  $(".animated-sections").each(function () {
    var objectBottom = $(this).offset().top + $(this).outerHeight();
    if (windowBottom > objectBottom) {
      if ($(this).css("opacity") == 0) {
        $(this).animate({ 'opacity': '1' }, 1000);
      }
    } else {
      if ($(this).css("opacity") == 1) {
        $(this).animate({ 'opacity': '0' }, 1000);
      }
    }
  });
  //Code for playing , pausing and resetting videos upon the scroll of webpage
  $('video').each(function () {
    if ($(this).visible(true)) {
      $(this)[0].play();
    } else {
      $(this)[0].load();
      $(this)[0].pause();
    }
  })
});