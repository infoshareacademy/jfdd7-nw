/**
 * Created by marcinkopystynski on 29.06.17.
 */

(function(){

    window.addEventListener('scroll', function() {
        var paralaxOne = document.querySelector('.parallax-one'),
            paralaxTwo = document.querySelector('.parallax-two'),
            paralaxThree = document.querySelector('.parallax-three');
        paralaxFour = document.querySelector('.parallax-Four');

        var scrollY = window.scrollY;
        paralaxOne.style.backgroundPositionY = (scrollY / 10 ) + 'px';
        paralaxTwo.style.top = ( scrollY / 2 ) + 'px';
        paralaxThree.style.top = ( scrollY / 3.5 ) + 'px';
        paralaxFour.style.top = ( scrollY / 3.5 ) + 'px';

    });
}())

