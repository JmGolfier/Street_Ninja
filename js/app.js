//set global THREE
THREE = require("three");
var game = require("./game");

window.onload = game.init;
window.addEventListener('resize', function() {
    game.resize(window.innerWidth, window.innerHeight);
}, false);