/**
 * Created by Sophie on 24/09/2014.
 */

module.exports = {
    randomBuild: function (buildingNumber) {
        var buildings = [];
        for (var i = 0; i < buildingNumber; i++) {
            var paramHeight = (Math.random() * 100);
            var building = build({
                width: (Math.random() * 20),
                height: paramHeight,
                depth: (Math.random() * 30),
                pos: {
                    x: (Math.random() * 100),
                    y: paramHeight / 2,
                    z: (Math.random() * 100)
                }
            });
            buildings.push(building);
        }
        return buildings;
    }
};


function build(options){
    var buildingTexture = THREE.ImageUtils.loadTexture("assets/textures/okamiGrand.png");
    var buildingGeometry = new THREE.BoxGeometry(options.width, options.height, options.depth);
    var buildingMaterial = new THREE.MeshLambertMaterial({map: buildingTexture});
    var building = new THREE.Mesh(buildingGeometry, buildingMaterial);

    building.castShadow = true;
    building.overdraw = true;
    building.name = 'building';

    building.position.x = options.pos.x;
    building.position.y = options.pos.y;
    building.position.z = options.pos.z;
    return building;
}