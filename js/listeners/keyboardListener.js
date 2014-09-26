var Constants = require("./../Constants");
var ninja;

module.exports = {
    setNinja: function(newNinja) {
        ninja = newNinja;
    },

    callbacks: {
        onKeyDown: function(e) {
            e = e || window.event;

            var factor = 50;
            var action = {};
            action[Constants.Keyboard.LEFT] = function(){
                ninja.move(new THREE.Vector3(0, 0, factor));
            };
            action[Constants.Keyboard.UP] = function(){
                ninja.move(new THREE.Vector3(-factor, 0, 0));
            };
            action[Constants.Keyboard.DOWN] = function(){
                ninja.move(new THREE.Vector3(factor, 0, 0));
            };
            action[Constants.Keyboard.RIGHT] = function(){
                ninja.move(new THREE.Vector3(0, 0, -factor));
            };
            action[Constants.Keyboard.SPACE] = function(){
                ninja.jump();
            };

            if(action[e.keyCode]) action[e.keyCode]();
        },

        onKeyUp: function(e) {
            ninja.stopMove();
        }
    }
};