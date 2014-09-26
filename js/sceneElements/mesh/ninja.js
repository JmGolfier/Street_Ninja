var Constants = require("../../Constants");
var GameEngine = require("../../gameEngine/gameEngine");
var started = false;

module.exports = {
    load: function(callback) {
        var loader = new THREE.JSONLoader();
        loader.load("assets/3d/ogre/ogro.json", function(geometry, mat){
            geometry.computeMorphNormals();
            mat = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture("assets/3d/ogre/skins/skin.jpg"),
                morphTargets: true, morphNormals:true
            });

            var mesh = new THREE.MorphAnimMesh(geometry, mat);

            var temp = new THREE.Box3().setFromObject(mesh);
            var size = temp.size();

            var boxGeometry = new THREE.BoxGeometry(size.x, size.y, size.z);
            var boxMaterial = new THREE.MeshLambertMaterial({transparent: true, opacity: 0.3});
            var box = new Physijs.BoxMesh(boxGeometry, boxMaterial);
            box.position.y = 30;
            box.add(mesh);

            callback({
                box: box,
                mesh: mesh,
                move: function(direction, key) {
                    if(!started) {
                        mesh.playAnimation('run', 10);
                        setMeshRotation(mesh, key);
                        started = true;
                    }

                    box.setLinearVelocity(direction);
                },

                stopMove: function() {
                    mesh.playAnimation('stand', 10);
                    box.setLinearVelocity({x: 0, y: 0, z: 0});
                    started = false;
                },

                jump: function() {
                    mesh.playAnimation("jump", 20);
                }
            });

            mesh.parseAnimations();
            mesh.playAnimation('stand', 10);
        });
    }
};

function setMeshRotation(mesh, key) {
    var rotation = 0.8;
    if(key == Constants.Keyboard.UP)
        mesh.rotation.y = -rotation;
    else if(key == Constants.Keyboard.LEFT)
        mesh.rotation.y = rotation;
    else if(key == Constants.Keyboard.DOWN)
        mesh.rotation.y = rotation * 3;
    else if(key == Constants.Keyboard.RIGHT)
        mesh.rotation.y = rotation * 5;
    else if(key == Constants.Keyboard.UPLEFT)
        mesh.rotation.y = 0;
}