var Constants = require("./Constants");
var gameEngine = require("./gameEngine/gameEngine");
var buildingGenerator = require("./sceneElements/building_generator");

module.exports = {
    init: function (width, height) {
        gameEngine.loadModels(Constants.Paths.Models, function () {
            var ninja = require("./sceneElements/mesh/ninja");
            var enemy = require("./sceneElements/mesh/enemy");
            var keyboardListener = require("./listeners/keyboardListener");

            gameEngine.setSize(width, height);
            gameEngine.setCamera(require("./gameElements/camera"));

            gameEngine.addRenderElement(require("./gameEngine/controls/orbitControls"));
            gameEngine.addRenderElement(require("./gameEngine/misc/stats"));

            gameEngine.addSceneElement(require("./sceneElements/mesh/plane"));
//        gameEngine.addSceneElement(buildingGenerator.randomBuild(4));

            gameEngine.addSceneElement(require("./sceneElements/light"));

            //gameEngine.addSceneElement(ninja.box);
            //gameEngine.addAnimatedElement(ninja.mesh);
            //gameEngine.setKeyboardListener(keyboardListener);
            //gameEngine.cameraFollow(ninja.box);


            gameEngine.addSceneElement(enemy.box);
            gameEngine.addAnimatedElement(enemy.mesh);
            gameEngine.setKeyboardListener(keyboardListener);
            gameEngine.cameraFollow(enemy.box);

            gameEngine.start();
        });
    },

    resize: function(width, height) {
        gameEngine.resize(width, height);
    }
};