var Constants = require("./../Constants");
var ninja;

module.exports = {
    setNinja: function(newNinja) {
        ninja = newNinja;
    },

    callback: function(e) {
        e = e || window.event;

        var factor = 1;
        var action = {};
        action[Constants.Keyboard.LEFT] = function(){
            ninja.move(new THREE.Vector3(0, 0, factor))
        };
        action[Constants.Keyboard.UP] = function(){
            ninja.move(new THREE.Vector3(-factor, 0, 0))
        };
        action[Constants.Keyboard.DOWN] = function(){
            ninja.move(new THREE.Vector3(factor, 0, 0))
        };
        action[Constants.Keyboard.RIGHT] = function(){
            ninja.move(new THREE.Vector3(0, 0, -factor))
        };

        if(action[e.keyCode]) action[e.keyCode]();
    }
};