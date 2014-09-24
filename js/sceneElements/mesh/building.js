/**
 * Created by Sophie on 24/09/2014.
 */

var buildingTexture = THREE.ImageUtils.loadTexture("assets/textures/okami.png");
var buildingGeometry = new THREE.BoxGeometry(10, 100, 10);
var buildingMaterial = new THREE.MeshLambertMaterial({map:buildingTexture});

var building = new THREE.Mesh(buildingGeometry, buildingMaterial);
building.overdraw = true;
building.name = 'building';
building.castShadow = true;
building.position.x = 6;
building.position.y = 3;
building.position.z = 6;

module.exports = building;
