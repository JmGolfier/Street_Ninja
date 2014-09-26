var Constants = require("../../Constants");

module.exports = {
    load: function(callback) {
        var loader = new THREE.JSONLoader();
        loader.load(Constants.Paths.Models.Ninja, function (model, loadedMat) {
            var skinnedMesh = new THREE.SkinnedMesh(model, loadedMat[0]);
            skinnedMesh.scale.set(15, 15, 15);
            callback({
                mesh: skinnedMesh,
                move: function(direction) {
                    skinnedMesh.position.x += direction.x;
                    skinnedMesh.position.y += direction.y;
                    skinnedMesh.position.z += direction.z;
                }
            });

            animate(skinnedMesh);
        }, "");
    }
};

function animate(skinnedMesh) {
    THREE.AnimationHandler.add(skinnedMesh.geometry.animations[0]);
    skinnedMesh.material.skinning = true;
    var animation = new THREE.Animation(skinnedMesh, "ArmatureAction");
    animation.play();
}