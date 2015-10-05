/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    $('#submit').on('click', function() {
        var nameValue = $('#nameField').val();
        var emailValue = $('#emailField').val();
        var msgValue = $('#msgField').val();

        $.ajax({
            cache:false,
            url: "https://docs.google.com/forms/d/1b9XArolA6aRtcIENIwxOsRYeLNdcch8FS1X6BkOF_VI/formResponse",
            type: "POST",
            data: {
                "entry_1802656120" : nameValue,
                "entry_1443533689" : emailValue,
                "entry_584157804" : msgValue
            },
            success: function(data) {
                //$("#weather-temp").html("<strong>" + data + "</strong> degrees");
            }
        });
    });

})(jQuery); // End of use strict
