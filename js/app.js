//set global THREE for libs
THREE = require("three");
var game = require("./game");

window.onload = function () {
    game.init(window.innerWidth, window.innerHeight);
};

window.addEventListener('resize', function() {
    game.resize(window.innerWidth, window.innerHeight);
}, false);