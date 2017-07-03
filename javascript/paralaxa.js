/**
 * Created by marcinkopystynski on 29.06.17.
 */

(function(){

    window.addEventListener('scroll', function() {
        var paralaxOne = document.querySelector('.parallax-one');
        var paralaxTwo = document.querySelector('.parallax-two');
        var paralaxThree = document.querySelector('.parallax-three');
        var paralaxFour = document.querySelector('.parallax-four');

        var scrollY = window.scrollY;
        paralaxOne.style.backgroundPositionY = (scrollY / 10 ) + 'px';
        paralaxTwo.style.top = ( scrollY / 2 ) + 'px';
        paralaxThree.style.top = ( scrollY / 3.5 ) + 'px';
        paralaxFour.style.top = ( scrollY / 3.8 ) + 'px';

    });
}())

