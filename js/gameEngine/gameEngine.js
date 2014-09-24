var camera;
var scene = new Physijs.Scene;
var width, height;
var renderElements = [];
var renderer;

module.exports = {
    setCamera: function(newCamera) {
        camera = newCamera;
        camera.lookAt(scene.position);
    },

    getCamera: function() {
        return camera;
    },

    setKeyboardListener: function(listener) {
        window.onkeydown = listener;
    },

    addRenderElement: function(element) {
        renderElements.push(element);
    },

    addSceneElement: function(element) {
        if(Array.isArray(element)) {
            for(var i=0; i<element.length; i++) {
                scene.add(element[i]);
            }
        } else
            scene.add(element);
    },

    start: function() {
        initRenderer();

        // add the output of the renderer to the html element
        document.body.appendChild(renderer.domElement);

        // call the render function, after the first render, interval is determined
        // by requestAnimationFrame
        render();
    },

    setSize: function(newWidth, newHeight) {
        width = newWidth;
        height = newHeight;
    },

    resize: function(width, height) {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    },

    loadModel: function(){
        var loader = new THREE.JSONLoader();
        loader.load("/assets/models/ninja_model.json", function (model, loadedMat) {
            loadedMat[0].skinning = true;

            THREE.AnimationHandler.add(model.animations[0]);
            var animesh = new THREE.SkinnedMesh(model, loadedMat[0]);


            animesh.translateY(-2);
            var animation = new THREE.Animation(animesh, "");
            animation.play();

            scene.add(animesh);
        }, "");
    }
};

function initRenderer() {
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(width, height);
    renderer.shadowMapEnabled = true;
}

function render() {
    for(var i=0; i<renderElements.length; i++) {
        renderElements[i].update();
    }

    scene.simulate(); // run physics

    // render using requestAnimationFrame
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}