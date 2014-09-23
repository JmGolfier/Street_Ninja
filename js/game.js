var THREE = require("three");
var gameEngine = require("./gameEngine/gameEngine");

module.exports = {
    init: function (width, height) {
        gameEngine.setSize(width, height);
        gameEngine.setCamera(require("./camera"));

        gameEngine.addRenderElement(require("./gameEngine/controls/orbitControls"));
        gameEngine.addRenderElement(require("./gameEngine/misc/stats"));

        gameEngine.addSceneElement(require("./sceneElements/mesh/plane"));
        gameEngine.addSceneElement(require("./sceneElements/light"));
        gameEngine.addSceneElement(require("./sceneElements/mesh/cube"));

        gameEngine.start();
    },

    resize: function(width, height) {
        gameEngine.resize(width, height);
    }
};