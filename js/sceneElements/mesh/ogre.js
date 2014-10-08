var Constants = require("../../Constants");
var gameEngine = require("../../gameEngine/gameEngine");

var ogreModel = gameEngine.models[Constants.Models.Ogre];
var mesh = createMesh(ogreModel);
var box = createBox(mesh);

module.exports = {
    box: box,
    mesh: mesh,
    move: move,
    stopMove: stopMove,
    jump: jump
};

mesh.parseAnimations();
mesh.playAnimation('stand', 10);

var started = false;

function move(direction, key) {
    if(!started) {
        mesh.playAnimation('run', 10);
        setMeshRotation(mesh, key);
        started = true;
    }

    box.setLinearVelocity(direction);
}

function setMeshRotation(mesh, key) {
    var rotation = 0.8;
    var keyBoardRotation = {};
    keyBoardRotation[Constants.Keyboard.UP] = -rotation;
    keyBoardRotation[Constants.Keyboard.LEFT] = rotation;
    keyBoardRotation[Constants.Keyboard.DOWN] = rotation * 3;
    keyBoardRotation[Constants.Keyboard.RIGHT] = rotation * 5;

    keyBoardRotation[Constants.Keyboard.UPLEFT] = 0;
    keyBoardRotation[Constants.Keyboard.UPRIGHT] = rotation*6;
    keyBoardRotation[Constants.Keyboard.DOWNLEFT] = rotation*2;
    keyBoardRotation[Constants.Keyboard.DOWNRIGHT] = rotation*4;

    mesh.rotation.y = keyBoardRotation[key];
}

function stopMove() {
    mesh.playAnimation('stand', 10);
    box.setLinearVelocity({x: 0, y: 0, z: 0});
    started = false;
}

function jump() {
    mesh.playAnimation("jump", 20);
}

function createMesh(ogreModel) {
    var geometry = ogreModel.geometry;

    geometry.computeMorphNormals();
    var mat = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture(Constants.Paths.Skins.Ogre),
        morphTargets: true, morphNormals: true
    });

    return new THREE.MorphAnimMesh(geometry, mat);
}

function createBox(mesh) {
    var temp = new THREE.Box3().setFromObject(mesh);
    var size = temp.size();

    var boxGeometry = new THREE.BoxGeometry(size.x, size.y, size.z);
    var boxMaterial = new THREE.MeshLambertMaterial({transparent: true, opacity: 0.3});
    box = new Physijs.BoxMesh(boxGeometry, boxMaterial);
    box.position.y = 30;
    box.add(mesh);
    return box;
}