
var greenTexture = THREE.ImageUtils.loadTexture("assets/textures/okami.jpg");
var cube1Geometry = new THREE.BoxGeometry(10, 10, 10);
var cube1Material = new THREE.MeshLambertMaterial({map:greenTexture});

var cube = new Physijs.BoxMesh(cube1Geometry, cube1Material);
cube.overdraw = true;
cube.name = 'cube';
cube.castShadow = true;
cube.position.x = 20;
cube.position.y = 11;
cube.position.z = 11;

module.exports = cube;