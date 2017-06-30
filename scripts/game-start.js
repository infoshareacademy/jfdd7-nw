/**
 * Created by oskfelin on 29.06.17.
 */
var gameBoard = $('formularz');
var $formField = $('#form-field');
var $formGame = $('#form');
var $game = $('#game');
var $navigation = $('#navigation');

$($game.hide());


$formGame.on('submit', function (event) {
    $formField.hide();
    $game.show();
    $navigation.hide()
});
