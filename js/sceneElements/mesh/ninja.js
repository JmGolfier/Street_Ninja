
var greenTexture = THREE.ImageUtils.loadTexture("assets/textures/okami.jpg");

var cube1Geometry = new THREE.BoxGeometry(10, 10, 10);
var cube1Material = new THREE.MeshLambertMaterial({map:greenTexture});

var ninjaMesh = new Physijs.BoxMesh(cube1Geometry, cube1Material);

ninjaMesh.overdraw = true;
ninjaMesh.name = 'cube';
ninjaMesh.castShadow = true;
ninjaMesh.position.x = 6;
ninjaMesh.position.y = 6/2;
ninjaMesh.position.z = 6;

module.exports = {

    mesh:ninjaMesh,

    move:function(direction){
        ninjaMesh.position.x += direction.x;
        ninjaMesh.position.y += direction.y;
        ninjaMesh.position.z += direction.z;

    }

};
