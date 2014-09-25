var gameEngine = require("./gameEngine/gameEngine");
var buildingGenerator = require("./sceneElements/building_generator");
var ninja = require("./sceneElements/mesh/ninja");

module.exports = {
    init: function (width, height) {
        gameEngine.setSize(width, height);
        gameEngine.setCamera(require("./camera"));

        gameEngine.addRenderElement(require("./gameEngine/controls/orbitControls"));
        gameEngine.addRenderElement(require("./gameEngine/misc/stats"));

        gameEngine.addSceneElement(require("./sceneElements/mesh/plane"));
//        gameEngine.addSceneElement(buildingGenerator.randomBuild(4));

        gameEngine.addSceneElement(require("./sceneElements/light"));
//        gameEngine.addSceneElement(require("./sceneElements/mesh/ninja").mesh);

        ninja.load(function (ninja) {
            gameEngine.addSceneElement(ninja.mesh);
        });

        gameEngine.setKeyboardListener(require("./listeers/keyboardListener"));

        gameEngine.start();
    },

    resize: function(width, height) {
        gameEngine.resize(width, height);
    }
};