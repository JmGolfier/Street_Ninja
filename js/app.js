Physijs.scripts.worker = '/lazy_load_libs/physijs_worker.js';
Physijs.scripts.ammo = '/lazy_load_libs/ammo.js';

var game = require("./game");

window.onload = function () {
    game.init(window.innerWidth, window.innerHeight);
};

window.addEventListener('resize', function() {
    game.resize(window.innerWidth, window.innerHeight);
}, false);