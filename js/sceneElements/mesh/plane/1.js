
var planeGeometry = new THREE.PlaneGeometry(50,50);
var simpleVerticalRoadTexture = THREE.ImageUtils.loadTexture("assets/textures/simple_vertical_road.jpg");
var simplePlanMaterial = new THREE.MeshLambertMaterial({map: simpleVerticalRoadTexture});
var simplePlane = new THREE.Mesh(planeGeometry, simplePlanMaterial);

var greenRoadTexture = THREE.ImageUtils.loadTexture("assets/textures/green_road.jpg");
var greenMaterial = new THREE.MeshLambertMaterial({map: greenRoadTexture});
var greenPlane = new THREE.Mesh(planeGeometry, greenMaterial);

var rightBendTexture = THREE.ImageUtils.loadTexture("assets/textures/right_bend.jpg");
var rightBendMaterial = new THREE.MeshLambertMaterial({map: rightBendTexture});
var rightBendPlane = new THREE.Mesh(planeGeometry, rightBendMaterial);

var crossroadsTexture = THREE.ImageUtils.loadTexture("assets/textures/crossroads.jpg");
var crossroadsMaterial = new THREE.MeshLambertMaterial({map: crossroadsTexture});
var crossroadsPlane = new THREE.Mesh(planeGeometry, crossroadsMaterial);

var plan = new THREE.Mesh(planeGeometry, crossroadsMaterial);
plan.position.x = 50;
plan.position.y = -2;
plan.position.z = 0;
plan.rotation.x = -0.5 * Math.PI;

module.exports = plan;