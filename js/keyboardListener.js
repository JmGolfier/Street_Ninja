var Constants = require("./Constants");

module.exports = function(e) {
    e = e || window.event;

    var action = {};
    action[Constants.Keyboard.LEFT] = function(){console.log(e.keyCode)};
    action[Constants.Keyboard.UP] = function(){console.log(e.keyCode)};
    action[Constants.Keyboard.DOWN] = function(){console.log(e.keyCode)};
    action[Constants.Keyboard.RIGHT] = function(){console.log(e.keyCode)};

    if(action[e.keyCode])
        action[e.keyCode]();
};