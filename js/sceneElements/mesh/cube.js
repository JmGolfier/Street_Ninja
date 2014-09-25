
var greenTexture = THREE.ImageUtils.loadTexture("assets/textures/okami.jpg");
var cube1Geometry = new THREE.BoxGeometry(10, 10, 10);
var cube1Material = new THREE.MeshLambertMaterial({map:greenTexture});

var cube = new THREE.Mesh(cube1Geometry, cube1Material);
cube.overdraw = true;
cube.name = 'cube';
cube.castShadow = true;
cube.position.x = 5;
cube.position.y = 5/2;
cube.position.z = 5;

module.exports = cube;