/**
 * Created by marcinkopystynski on 30.06.17.
 */
$('#navbar a').click(function() {
    var hash = $(this).attr('href');
    $('html,body').animate({
        scrollTop: $(hash).offset().top
    }, 800);
    return false; // <- działa jak event.preventDefault()
});

$('.navbar-header a').click(function() {
    var hash = $(this).attr('href');
    $('html,body').animate({
        scrollTop: $(hash).offset().top
    }, 800);
    return false; // <- działa jak event.preventDefault()
});
