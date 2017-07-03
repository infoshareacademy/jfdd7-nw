/**
 * Created by marcin on 01.07.2017.
 */
$(document).ready(function() {
    $(window).scroll(function () {
        var elem = $('#funkcje-produktu');
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
            $(elem).find("img").each(function (index) {
                $(this).addClass("animated swing")
            })
        } else {
            $(elem).find("img").removeClass("animated swing")
        }
    });
});

$('#slide-toogle').click(function(){
    $('.left_pics'). addClass("animated fadeInLeft");
    $('.right_pics').addClass("animated fadeInRight");
});