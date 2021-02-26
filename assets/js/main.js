/*
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

  skel.breakpoints({
    xlarge: '(max-width: 1680px)',
    large: '(max-width: 1280px)',
    medium: '(max-width: 980px)',
    small: '(max-width: 736px)',
    xsmall: '(max-width: 480px)',
    xxsmall: '(max-width: 360px)'
  });

  $(function() {

    var $window = $(window),
      $body = $('body'),
      $wrapper = $('#wrapper'),
      $header = $('#header'),
      $footer = $('#footer'),
      $main = $('#main'),
      $main_articles = $main.children('article');

    // Poptrox gallery
    $(document).ready(function() {
      $('#gallery').poptrox();
    });

    // Poptrox options
    $('#gallery').poptrox({
      preload: false, // If true, preload fullsize images in
      // the background
      baseZIndex: 1000, // Base Z-Index
      fadeSpeed: 300, // Global fade speed
      overlayColor: '#000000', // Overlay color
      overlayOpacity: 0.6, // Overlay opacity
      windowMargin: 50, // Window margin size (in pixels; only comes into
      // play when an image is larger than the viewport)
      windowHeightPad: 0, // Window height pad
      selector: 'a', // Anchor tag selector
      caption: null, // Caption settings (see docs)
      popupSpeed: 300, // Popup (resize) speed
      popupWidth: 200, // Popup width
      popupHeight: 100, // Popup height
      popupIsFixed: false, // If true, popup won't resize to fit images
      useBodyOverflow: true, // If true, the BODY tag is set to overflow: hidden
      // when the popup is visible
      usePopupEasyClose: false, // If true, popup can be closed by clicking on
      // it anywhere
      usePopupForceClose: false, // If true, popup can be closed even while content
      // is loading
      usePopupLoader: true, // If true, show the popup loader
      usePopupCloser: false, // If true, show the popup closer button/link
      usePopupCaption: true, // If true, show the popup image caption
      usePopupNav: true, // If true, show (and use) popup navigation
      usePopupDefaultStyling: true, // If true, default popup styling will be applied
      // (background color, text color, etc)
      popupBackgroundColor: '#242629', // (Default Style) Popup background color (when
      // usePopupStyling = true)
      popupTextColor: '#FFFFFF', // (Default Style) Popup text color (when
      // usePopupStyling = true)
      popupLoaderTextSize: '3em', // (Default Style) Popup loader text size
      popupCloserBackgroundColor: '#000000', // (Default Style) Popup closer background color
      // (when usePopupStyling = true)
      popupCloserTextColor: '#FFFFFF', // (Default Style) Popup closer text color (when
      // usePopupStyling = true)
      popupCloserTextSize: '20px', // (Default Style) Popup closer text size
      popupPadding: 10, // (Default Style) Popup padding (when
      // usePopupStyling = true)
      popupCaptionHeight: 60, // (Default Style) Popup height of caption area
      popupCaptionTextSize: null, // (Default Style) Popup caption text size
      popupBlankCaptionText: '&copy Black Ridge Contractors', // Applied to images that don't have captions
      // (when captions are enabled)
      popupCloserText: '&#215;', // Popup closer text
      popupLoaderText: '&bull;&bull;', // Popup loader text
      popupClass: 'poptrox-popup', // Popup class
      popupSelector: null, // (Advanced) Popup selector (use this if you
      // want to replace the built-in popup)
      popupLoaderSelector: '.loader', // (Advanced) Popup Loader selector
      popupCloserSelector: '.closer', // (Advanced) Popup Closer selector
      popupCaptionSelector: '.caption', // (Advanced) Popup Caption selector
      popupNavPreviousSelector: '.nav-previous', // (Advanced) Popup Nav Previous selector
      popupNavNextSelector: '.nav-next', // (Advanced) Popup Nav Next selector
      onPopupClose: null, // Called when popup closes
      onPopupOpen: null // Called when popup opens
    });

    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading');

    $window.on('load', function() {
      window.setTimeout(function() {
        $body.removeClass('is-loading');
      }, 100);
    });

    // Fix: Placeholder polyfill.
    $('form').placeholder();

    // Fix: Flexbox min-height bug on IE.
    if (skel.vars.IEVersion < 12) {

      var flexboxFixTimeoutId;

      $window.on('resize.flexbox-fix', function() {

        clearTimeout(flexboxFixTimeoutId);

        flexboxFixTimeoutId = setTimeout(function() {

          if ($wrapper.prop('scrollHeight') > $window.height())
            $wrapper.css('height', 'auto');
          else
            $wrapper.css('height', '100vh');

        }, 250);

      }).triggerHandler('resize.flexbox-fix');

    }

    // Nav.
    var $nav = $header.children('nav'),
      $nav_li = $nav.find('li');

    // Add "middle" alignment classes if we're dealing with an even number of items.
    if ($nav_li.length % 2 == 0) {

      $nav.addClass('use-middle');
      $nav_li.eq(($nav_li.length / 2)).addClass('is-middle');

    }

    // Main.
    var delay = 325,
      locked = false;

    // Methods.
    $main._show = function(id, initial) {

      var $article = $main_articles.filter('#' + id);

      // No such article? Bail.
      if ($article.length == 0)
        return;

      // Handle lock.

      // Already locked? Speed through "show" steps w/o delays.
      if (locked || (typeof initial != 'undefined' && initial === true)) {

        // Mark as switching.
        $body.addClass('is-switching');

        // Mark as visible.
        $body.addClass('is-article-visible');

        // Deactivate all articles (just in case one's already active).
        $main_articles.removeClass('active');

        // Hide header, footer.
        $header.hide();
        $footer.hide();

        // Show main, article.
        $main.show();
        $article.show();

        // Activate article.
        $article.addClass('active');

        // Unlock.
        locked = false;

        // Unmark as switching.
        setTimeout(function() {
          $body.removeClass('is-switching');
        }, (initial ? 1000 : 0));

        return;

      }

      // Lock.
      locked = true;

      // Article already visible? Just swap articles.
      if ($body.hasClass('is-article-visible')) {

        // Deactivate current article.
        var $currentArticle = $main_articles.filter('.active');

        $currentArticle.removeClass('active');

        // Show article.
        setTimeout(function() {

          // Hide current article.
          $currentArticle.hide();

          // Show article.
          $article.show();

          // Activate article.
          setTimeout(function() {

            $article.addClass('active');

            // Window stuff.
            $window
              .scrollTop(0)
              .triggerHandler('resize.flexbox-fix');

            // Unlock.
            setTimeout(function() {
              locked = false;
            }, delay);

          }, 25);

        }, delay);

      }

      // Otherwise, handle as normal.
      else {

        // Mark as visible.
        $body
          .addClass('is-article-visible');

        // Show article.
        setTimeout(function() {

          // Hide header, footer.
          $header.hide();
          $footer.hide();

          // Show main, article.
          $main.show();
          $article.show();

          // Activate article.
          setTimeout(function() {

            $article.addClass('active');

            // Window stuff.
            $window
              .scrollTop(0)
              .triggerHandler('resize.flexbox-fix');

            // Unlock.
            setTimeout(function() {
              locked = false;
            }, delay);

          }, 25);

        }, delay);

      }

    };

    $main._hide = function(addState) {

      var $article = $main_articles.filter('.active');

      // Article not visible? Bail.
      if (!$body.hasClass('is-article-visible'))
        return;

      // Add state?
      if (typeof addState != 'undefined' &&
        addState === true)
        history.pushState(null, null, '#');

      // Handle lock.

      // Already locked? Speed through "hide" steps w/o delays.
      if (locked) {

        // Mark as switching.
        $body.addClass('is-switching');

        // Deactivate article.
        $article.removeClass('active');

        // Hide article, main.
        $article.hide();
        $main.hide();

        // Show footer, header.
        $footer.show();
        $header.show();

        // Unmark as visible.
        $body.removeClass('is-article-visible');

        // Unlock.
        locked = false;

        // Unmark as switching.
        $body.removeClass('is-switching');

        // Window stuff.
        $window
          .scrollTop(0)
          .triggerHandler('resize.flexbox-fix');

        return;

      }

      // Lock.
      locked = true;

      // Deactivate article.
      $article.removeClass('active');

      // Hide article.
      setTimeout(function() {

        // Hide article, main.
        $article.hide();
        $main.hide();

        // Show footer, header.
        $footer.show();
        $header.show();

        // Unmark as visible.
        setTimeout(function() {

          $body.removeClass('is-article-visible');

          // Window stuff.
          $window
            .scrollTop(0)
            .triggerHandler('resize.flexbox-fix');

          // Unlock.
          setTimeout(function() {
            locked = false;
          }, delay);

        }, 25);

      }, delay);


    };

    // Articles.
    $main_articles.each(function() {

      var $this = $(this);

      // Close.
      $('<div class="close">Close</div>')
        .appendTo($this)
        .on('click', function() {
          location.hash = '';
        });

      // Prevent clicks from inside article from bubbling.
      $this.on('click', function(event) {
        event.stopPropagation();
      });

    });

    // Events.
    $body.on('click', function(event) {

      // Article visible? Hide.
      if ($body.hasClass('is-article-visible'))
        $main._hide(true);

    });

    $window.on('keyup', function(event) {

      switch (event.keyCode) {

        case 27:

          // Article visible? Hide.
          if ($body.hasClass('is-article-visible'))
            $main._hide(true);

          break;

        default:
          break;

      }

    });

    $window.on('hashchange', function(event) {

      // Empty hash?
      if (location.hash == '' ||
        location.hash == '#') {

        // Prevent default.
        event.preventDefault();
        event.stopPropagation();

        // Hide.
        $main._hide();

      }

      // Otherwise, check for a matching article.
      else if ($main_articles.filter(location.hash).length > 0) {

        // Prevent default.
        event.preventDefault();
        event.stopPropagation();

        // Show article.
        $main._show(location.hash.substr(1));

      }

    });

    // Scroll restoration.
    // This prevents the page from scrolling back to the top on a hashchange.
    if ('scrollRestoration' in history)
      history.scrollRestoration = 'manual';
    else {

      var oldScrollPos = 0,
        scrollPos = 0,
        $htmlbody = $('html,body');

      $window
        .on('scroll', function() {

          oldScrollPos = scrollPos;
          scrollPos = $htmlbody.scrollTop();

        })
        .on('hashchange', function() {
          $window.scrollTop(oldScrollPos);
        });

    }

    // Initialize.

    // Hide main, articles.
    $main.hide();
    $main_articles.hide();

    // Initial article.
    if (location.hash != '' &&
      location.hash != '#')
      $window.on('load', function() {
        $main._show(location.hash.substr(1), true);
      });

  });

})(jQuery);
