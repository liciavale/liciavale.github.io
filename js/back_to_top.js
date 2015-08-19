$(function() {
  var showOrHideByOffset = function($element, offset) {
    if (hasScrolled(offset)) {
      show($element);
    } else {
      hide($element);
    }
  }

  var hasScrolled = function(offset) {
    return $(this).scrollTop() > offset;
  }

  var scrollToTop = function(duration) {
    $('body, html').animate({ scrollTop: 0 }, duration);
  }

  var hide = function($element) {
    $element.css({ opacity: 0 });
  }

  var show = function($element) {
    $element.css({ opacity: 1 });
  }

  // events

  var offset = 300;
  var scrollDuration = 700;

  var $backToTopLink = $('.back-to-top');

  showOrHideByOffset($backToTopLink, offset);
  $(window).on('scroll', function() {
    showOrHideByOffset($backToTopLink, offset)
  });

  $backToTopLink.on('click', function(event) {
    event.preventDefault();
    scrollToTop(scrollDuration);
  });
});