var Constants = require("./Constants");

Physijs.scripts.worker = Constants.Paths.Physijs.Worker;
Physijs.scripts.ammo = Constants.Paths.Physijs.Ammo;

var game = require("./game");

window.onload = function () {
    game.init(window.innerWidth, window.innerHeight);
};

window.addEventListener('resize', function() {
    game.resize(window.innerWidth, window.innerHeight);
}, false);