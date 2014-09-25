var gameEngine = require("./gameEngine/gameEngine");
var buildingGenerator = require("./sceneElements/building_generator");
var ninja = require("./sceneElements/mesh/ninja");
var keyboardListener = require("./listeners/keyboardListener");

module.exports = {
    init: function (width, height) {
        gameEngine.setSize(width, height);
        gameEngine.setCamera(require("./gameElements/camera"));

        gameEngine.addRenderElement(require("./gameEngine/controls/orbitControls"));
        gameEngine.addRenderElement(require("./gameEngine/misc/stats"));

        gameEngine.addSceneElement(require("./sceneElements/mesh/plane"));
//        gameEngine.addSceneElement(buildingGenerator.randomBuild(4));

        gameEngine.addSceneElement(require("./sceneElements/light"));

        ninja.load(function (ninja) {
            gameEngine.addSceneElement(ninja.mesh);
            keyboardListener.setNinja(ninja);
            gameEngine.setKeyboardListener(keyboardListener.callback);
        });

        gameEngine.start();
    },

    resize: function(width, height) {
        gameEngine.resize(width, height);
    }
};