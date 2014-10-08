var Constants = require("../../Constants");

var walls = [];

walls.push(createWall({rotate: true, reverse: true}));
walls.push(createWall({rotate: true, reverse: false}));
walls.push(createWall({rotate: false, reverse: false}));
walls.push(createWall({rotate: false, reverse: true}));

module.exports = walls;

function createWall(options) {
    var planeTexture = THREE.ImageUtils.loadTexture("assets/textures/wood_1-1024x1024.png");
    var height = 15;
    var planeGeometry = new THREE.BoxGeometry(Constants.TerrainSize, height, 10);
    var planeMaterial = Physijs.createMaterial(new THREE.MeshLambertMaterial({map:planeTexture}), 0, 0);
    var wall = new Physijs.BoxMesh(planeGeometry, planeMaterial, 0);
    wall.receiveShadow = true;

//rotate and position the wall
    if(options.rotate) {
        wall.rotation.y = -0.5 * Math.PI;
        wall.position.z = 0;
        wall.position.x = -Constants.TerrainSize/2;
        if(options.reverse) {
            wall.position.x *= -1;
        }
    } else {
        wall.position.z = Constants.TerrainSize/2;
        wall.position.x = 0;
        if(options.reverse) {
            wall.position.z *= -1;
        }
    }

    wall.position.y = height/2;

    return wall;
}