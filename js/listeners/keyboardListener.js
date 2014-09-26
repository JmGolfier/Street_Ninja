var Constants = require("./../Constants");
var ninja;

var keyPressed = {length: 0};

module.exports = {
    setNinja: function(newNinja) {
        ninja = newNinja;
    },

    callbacks: {
        onKeyDown: function(e) {
            e = e || window.event;

            if(!keyPressed[e.keyCode]) {
                keyPressed[e.keyCode] = true;
                keyPressed.length++;
            }

            var factor = Constants.MoveFactor;
            var action = {};

            if(keyPressed.length == 1) {
                console.log("single");
                action[Constants.Keyboard.UP] = createMoveCallback(new THREE.Vector3(-factor, 0, -45), Constants.Keyboard.UP);
                action[Constants.Keyboard.LEFT] = createMoveCallback(new THREE.Vector3(-45, 0, factor), Constants.Keyboard.LEFT);
                action[Constants.Keyboard.DOWN] = createMoveCallback(new THREE.Vector3(factor, 0, 45), Constants.Keyboard.DOWN);
                action[Constants.Keyboard.RIGHT] = createMoveCallback(new THREE.Vector3(45, 0, -factor), Constants.Keyboard.RIGHT);
            } else if(keyPressed.length == 2) {
                console.log("double");
                if(keyPressed[Constants.Keyboard.UP] && keyPressed[Constants.Keyboard.LEFT])
                    createMoveCallback(new THREE.Vector3(0, 0, 0), Constants.Keyboard.UPLEFT);
            }

            action[Constants.Keyboard.SPACE] = function(){
                ninja.jump();
            };

            if(action[e.keyCode]) action[e.keyCode]();
        },

        onKeyUp: function(e) {
            delete keyPressed[e.keyCode];
            keyPressed.length--;
            ninja.stopMove();
        }
    }
};

function createMoveCallback(direction, key) {
    return function() {
        ninja.move(direction, key);
    };
}