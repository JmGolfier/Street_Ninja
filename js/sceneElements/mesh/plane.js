var planeTexture = THREE.ImageUtils.loadTexture("assets/textures/wood_1-1024x1024.png");
var planeGeometry = new THREE.PlaneGeometry(2000,2000);
var planeMaterial = Physijs.createMaterial(new THREE.MeshPhongMaterial({map: planeTexture}), 0, 0);
var plane = new Physijs.BoxMesh(planeGeometry, planeMaterial, 0);
plane.receiveShadow = true;

//rotate and position the plane
plane.rotation.x = -0.5 * Math.PI;
plane.position.x = 0;
plane.position.y = 0;
plane.position.z = 0;

module.exports = plane;