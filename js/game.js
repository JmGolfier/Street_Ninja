var Constants = require("./Constants");
var gameEngine = require("./gameEngine/gameEngine");
var buildingGenerator = require("./sceneElements/building_generator");

module.exports = {
    init: function (width, height) {
        gameEngine.loadModels(Constants.Paths.Models, function () {
            var ogre = require("./sceneElements/mesh/ogre");
            var ninja = require("./sceneElements/mesh/ninja");
            var keyboardListener = require("./listeners/keyboardListener");
            var walls = require("./sceneElements/mesh/walls");
            var cube = require("./sceneElements/mesh/cube");

            gameEngine.addSceneElement(cube);

            gameEngine.setSize(width, height);
            gameEngine.setCamera(require("./gameElements/camera"));

            gameEngine.addRenderElement(require("./gameEngine/controls/orbitControls"));
            gameEngine.addRenderElement(require("./gameEngine/misc/stats"));

            gameEngine.addSceneElement(require("./sceneElements/mesh/plane"));
            for(var i=0; i<walls.length; i++) {
                gameEngine.addSceneElement(walls[i]);
            }
//        gameEngine.addSceneElement(buildingGenerator.randomBuild(4));

            gameEngine.addSceneElement(require("./sceneElements/light"));

//            gameEngine.addSceneElement(ogre.box);
//            gameEngine.addAnimatedElement(ogre.mesh);
//            gameEngine.setKeyboardListener(keyboardListener);
//            gameEngine.cameraFollow(ogre.box);

            gameEngine.addSceneElement(ninja.box);
            gameEngine.addAnimatedElement(ninja.mesh);
            gameEngine.setKeyboardListener(keyboardListener);
            gameEngine.cameraFollow(ninja.box);

            gameEngine.start();
        });
    },

    resize: function(width, height) {
        gameEngine.resize(width, height);
    }
};