var registered = false;

module.exports = {
    load: function(callback) {
        var loader = new THREE.JSONLoader();
        loader.load("/assets/models/estj-dino-anim.json", function (model, loadedMat) {
            var skinnedMesh = new THREE.SkinnedMesh(model, loadedMat[0]);
            skinnedMesh.scale.set(15, 15, 15);
            callback({
                mesh: skinnedMesh,
                move: function(direction) {
//                    skinnedMesh.position.x += direction.x;
//                    skinnedMesh.position.y += direction.y;
//                    skinnedMesh.position.z += direction.z;

                    skinnedMesh.geometry.bones[2].pos[0] += direction.x;
                    skinnedMesh.geometry.bones[2].pos[1] += direction.x;
                    skinnedMesh.geometry.bones[2].pos[2] += direction.x;
                    console.log(skinnedMesh.geometry.bones);
                }
            });

            animate(skinnedMesh);
        }, "");
    }
};

function animate(skinnedMesh) {
    if(!registered) {
        THREE.AnimationHandler.add(skinnedMesh.geometry.animations[0]);
        registered = true;
        skinnedMesh.material.skinning = true;
        var animation = new THREE.Animation(skinnedMesh, "ArmatureAction");
        animation.play();
    }
}