var Constants = require("./../Constants");
var ogre = require("../sceneElements/mesh/ogre");

var keyPressed = {length: 0};
var doubleKey = false;

var action = {};
var factor = 50;
var rotationFactor = 45;
var diagoSpeedFactor = 1.3;

action[Constants.Keyboard.UP] = createMoveCallback(new THREE.Vector3(-factor, 0, -rotationFactor), Constants.Keyboard.UP);
action[Constants.Keyboard.DOWN] = createMoveCallback(new THREE.Vector3(factor, 0, rotationFactor), Constants.Keyboard.DOWN);
action[Constants.Keyboard.LEFT] = createMoveCallback(new THREE.Vector3(-rotationFactor, 0, factor), Constants.Keyboard.LEFT);
action[Constants.Keyboard.RIGHT] = createMoveCallback(new THREE.Vector3(rotationFactor, 0, -factor), Constants.Keyboard.RIGHT);

action[Constants.Keyboard.UPLEFT] = createMoveCallback(new THREE.Vector3(-factor*diagoSpeedFactor, 0, 0), Constants.Keyboard.UPLEFT);
action[Constants.Keyboard.UPRIGHT] = createMoveCallback(new THREE.Vector3(0, 0, -factor*diagoSpeedFactor), Constants.Keyboard.UPRIGHT);
action[Constants.Keyboard.DOWNLEFT] = createMoveCallback(new THREE.Vector3(0, 0, factor*diagoSpeedFactor), Constants.Keyboard.DOWNLEFT);
action[Constants.Keyboard.DOWNRIGHT] = createMoveCallback(new THREE.Vector3(factor*diagoSpeedFactor, 0, 0), Constants.Keyboard.DOWNRIGHT);

action[Constants.Keyboard.SPACE] = function(){
    ogre.jump();
};

module.exports = {
    onKeyDown: function(e) {
        e = e || window.event;

        var keyCode = e.keyCode;

        if(!keyPressed[keyCode]) {
            keyPressed[keyCode] = true;
            keyPressed.length++;
        }


        if(keyPressed.length == 2) {
            if(!doubleKey) {
                doubleKey = true;
                ogre.stopMove();
            }
            if(keyPressed[Constants.Keyboard.UP] && keyPressed[Constants.Keyboard.LEFT])
                keyCode = Constants.Keyboard.UPLEFT;
            else if(keyPressed[Constants.Keyboard.UP] && keyPressed[Constants.Keyboard.RIGHT])
                keyCode = Constants.Keyboard.UPRIGHT;
            else if(keyPressed[Constants.Keyboard.DOWN] && keyPressed[Constants.Keyboard.LEFT])
                keyCode = Constants.Keyboard.DOWNLEFT;
            else if(keyPressed[Constants.Keyboard.DOWN] && keyPressed[Constants.Keyboard.RIGHT])
                keyCode = Constants.Keyboard.DOWNRIGHT;
        }

        if(action[keyCode]) action[keyCode]();
    },

    onKeyUp: function(e) {
        delete keyPressed[e.keyCode];
        keyPressed.length--;
        doubleKey = false;

        if(keyPressed.length == 1 && action[e.keyCode]) {
            for(var key in keyPressed) {
                ogre.stopMove();
                if(action[key]) action[key]();
                break;
            }
        } else
            ogre.stopMove();
    }
};

function createMoveCallback(direction, key) {
    return function() {
        ogre.move(direction, key);
    };
}