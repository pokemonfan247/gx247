jQuery(function($) {

     /* -----------------------------------------
    Sticky Header
    ----------------------------------------- */
    if ( $("body").hasClass("header-fixed") ){
        const header = document.querySelector('.adore-header');
        window.onscroll = function() {
            if (window.pageYOffset > 200) {
                header.classList.add('fix-header');
            } else {
                header.classList.remove('fix-header');
            }
        };
        $(document).ready(function() {
            var divHeight = $('.adore-header').height();
            $('.header-outer-wrapper').css('min-height', divHeight + 'px');
        });
    }

    /* -----------------------------------------
    Tabs
    ----------------------------------------- */
    $('.post-tabs-wrapper').each(function(index) {
        $(this).find('.post-tab-container:not(:first-child)').hide();
        $(this).find('.post-tabs li:not(:first-child) a').addClass('inactive');
    });
    $('.post-tabs li a').click(function() {
        var t = $(this).attr('href');
        $(this).closest('.post-tabs-wrapper').find('.post-tabs li a').addClass('inactive');
        $(this).removeClass('inactive');
        $(this).closest('.post-tabs-wrapper').find('.post-tab-container').hide();
        $(this).closest('.post-tabs-wrapper').find(t).fadeIn('slow');
        return false;
    });

});