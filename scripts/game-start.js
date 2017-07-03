/**
 * Created by oskfelin on 29.06.17.
 */
var gameBoard = $('formularz');
var $formField = $('#form-field');
var $formGame = $('#form');
var $game = $('#game');
var $navigation = $('#navigation');
var $buttonAgain = $('#btn-game-again');
var $begin = $('#begin');
var $startD = $('#startDiv');

$($game.hide());
$($buttonAgain.hide());

$formGame.on('submit', function (event) {

    $formField.hide();
    $game.show();
    $navigation.hide();

    $('html, body').animate({
        scrollTop: $('#game').offset().top
    }, 500);
});

// $buttonAgain.on('submit', function (event) {
//     event.preventDefault();
//     $formField.hide();
//     $game.show();
//     $navigation.hide();
//
//     $('html, body').animate({
//         scrollTop: $('#game').offset().top
//     }, 500);
// });

$begin.on('click', function (event) {
    event.preventDefault();
    $startD.hide();
});