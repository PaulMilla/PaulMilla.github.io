/**
 * Javascript that hooks to the nav-wrapper & nav elements and
 * enables it to 'stick' to the top of the screen.
 */
$(function() {
    $('#nav-wrapper').height($("nav").height());
    $('nav').affix({
        offset: { top: $('nav').offset().top }
    });
});
