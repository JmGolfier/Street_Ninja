var THREE = require("three");

var planeTexture = THREE.ImageUtils.loadTexture("assets/textures/wood_1-1024x1024.png");
var planeGeometry = new THREE.PlaneGeometry(100,100);
var planeMaterial = new THREE.MeshLambertMaterial({map: planeTexture});
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;

//rotate and position the plane
plane.rotation.x = -0.5 * Math.PI;
plane.position.x = 0;
plane.position.y = -2;
plane.position.z = 0;

module.exports = plane;