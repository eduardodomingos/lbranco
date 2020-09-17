(function ($) {
    $(document).ready(function () {
        var dom = {
            $window: $(window),
            $body: $('body'),
            $sidenavToggle: $('.sidenav-toggle')
        };

        (function init() {
            // Nav Toggle
            dom.$sidenavToggle.click(function() {
                dom.$body.toggleClass('sidenav-is-open');
            });

            // Throttle window scroll for performace
            var throttled = _.throttle(updatePosition, 100);
            dom.$window.scroll(throttled);

            // Throttle callback
            function updatePosition() {
                if ( dom.$window.scrollTop() > 500 ) {
                    dom.$body.addClass('header-is-collapsed');
                }
                else {
                    dom.$body.removeClass('header-is-collapsed');
                }
            }
        })();
    });
}(jQuery));