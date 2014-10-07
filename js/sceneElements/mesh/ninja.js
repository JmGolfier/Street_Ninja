var gameEngine = require("../../gameEngine/gameEngine");
var Constants = require("../../Constants");

var ninjaModel = gameEngine.models[Constants.Models.Ninja];
var mesh = createMesh(ninjaModel);
var box = createBox(mesh);

module.exports = {
    mesh: mesh,
    box: box
};

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

function createMesh(ninjaModel) {
    var skinnedMesh = new THREE.SkinnedMesh(ninjaModel.geometry, new THREE.MeshFaceMaterial(ninjaModel.material));
    skinnedMesh.position.y = 50;
    skinnedMesh.scale.set(15, 15, 15);
    return skinnedMesh;
}