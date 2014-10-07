var Constants = require("../../Constants");
var gameEngine = require("../../gameEngine/gameEngine");

var ninjaModel = gameEngine.models[Constants.Models.Ninja];
var mesh = createMesh(ninjaModel);
var box = createBox(mesh);

module.exports = {
    box: box,
    mesh: mesh,
    move: move,
    stopMove: stopMove,
    jump: jump
};

mesh.parseAnimations();
mesh.playAnimation('idle', 10);

function createMesh(ninjaModel) {
    var geometry = ninjaModel.geometry;

    geometry.computeMorphNormals();
    var mat = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture(Constants.Paths.Skins.Ninja),
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
    box.position.y = 10;
    mesh.position.y = -size.y/2;
    box.add(mesh);
    return box;
}

var started = false;

function move(direction, key) {
    if(!started) {
        mesh.playAnimation('walk', 20);
        setMeshRotation(mesh, key);
        started = true;
    }

    box.setLinearVelocity(direction);
}

function setMeshRotation(mesh, key) {
    var rotation = 0.8;
    var keyBoardRotation = {};
    keyBoardRotation[Constants.Keyboard.UPRIGHT] = 0;
    keyBoardRotation[Constants.Keyboard.RIGHT] = -rotation;
    keyBoardRotation[Constants.Keyboard.DOWNRIGHT] = -rotation * 2;
    keyBoardRotation[Constants.Keyboard.DOWN] = -rotation * 3;
    keyBoardRotation[Constants.Keyboard.DOWNLEFT] = -rotation*4;
    keyBoardRotation[Constants.Keyboard.LEFT] = -rotation*5;
    keyBoardRotation[Constants.Keyboard.UPLEFT] = -rotation*6;
    keyBoardRotation[Constants.Keyboard.UP] = -rotation*7;

    mesh.rotation.y = keyBoardRotation[key];
}

function stopMove() {
    mesh.playAnimation('idle', 10);
    box.setLinearVelocity({x: 0, y: 0, z: 0});
    started = false;
}

function jump() {
    mesh.playAnimation("jump", 10);
}