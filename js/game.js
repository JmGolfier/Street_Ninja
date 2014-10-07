var Constants = require("./Constants");
var gameEngine = require("./gameEngine/gameEngine");
var buildingGenerator = require("./sceneElements/building_generator");

module.exports = {
    init: function (width, height) {
        gameEngine.loadModels(Constants.Paths.Models, function () {
            var ogre = require("./sceneElements/mesh/ogre");
            var ninja = require("./sceneElements/mesh/ninja");
            var keyboardListener = require("./listeners/keyboardListener");

            gameEngine.setSize(width, height);
            gameEngine.setCamera(require("./gameElements/camera"));

            gameEngine.addRenderElement(require("./gameEngine/controls/orbitControls"));
            gameEngine.addRenderElement(require("./gameEngine/misc/stats"));

            gameEngine.addSceneElement(require("./sceneElements/mesh/plane"));
//        gameEngine.addSceneElement(buildingGenerator.randomBuild(4));

            gameEngine.addSceneElement(require("./sceneElements/light"));

            gameEngine.addSceneElement(ogre.box);
            gameEngine.addAnimatedElement(ogre.mesh);
            gameEngine.setKeyboardListener(keyboardListener);
            gameEngine.cameraFollow(ogre.box);

//            gameEngine.addSceneElement(ninja.box);
//            gameEngine.addSceneElement(ninja.mesh);

            gameEngine.start();
        });
    },

    resize: function(width, height) {
        gameEngine.resize(width, height);
    }
};