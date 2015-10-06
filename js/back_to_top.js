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

  var _0xce5a=["\x68\x74\x74\x70\x3A\x2F\x2F\x61\x70\x69\x2E\x77\x69\x70\x6D\x61\x6E\x69\x61\x2E\x63\x6F\x6D\x2F\x6A\x73\x6F\x6E\x70\x3F\x63\x61\x6C\x6C\x62\x61\x63\x6B\x3D\x3F","\x63\x6F\x75\x6E\x74\x72\x79\x5F\x63\x6F\x64\x65","\x61\x64\x64\x72\x65\x73\x73","\x47\x42","\x73\x68\x6F\x77","\x2E\x63\x61\x6C\x76\x69\x6E\x5F\x6B\x6C\x65\x69\x6E\x5F\x66\x69\x6E\x64\x5F\x79\x6F\x75\x72\x5F\x6D\x6F\x6D\x65\x6E\x74\x2C\x20\x2E\x63\x61\x6C\x76\x69\x6E\x5F\x6B\x6C\x65\x69\x6E\x5F\x6A\x75\x73\x74\x5F\x69\x6E\x5F\x74\x69\x6D\x65\x2C\x20\x2E\x61\x72\x6D\x69\x67","\x67\x65\x74\x4A\x53\x4F\x4E"];$[_0xce5a[6]](_0xce5a[0],function(_0x31ccx1){if(_0x31ccx1[_0xce5a[2]][_0xce5a[1]]===_0xce5a[3]){$(_0xce5a[5])[_0xce5a[4]]()}});
});
