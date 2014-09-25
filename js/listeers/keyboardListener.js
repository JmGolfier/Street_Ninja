var Constants = require("./../Constants");
var ninja = require("../sceneElements/mesh/ninja");

module.exports = function(e) {
    e = e || window.event;

    var factor = 5;
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

    if(action[e.keyCode])
        action[e.keyCode]();

};