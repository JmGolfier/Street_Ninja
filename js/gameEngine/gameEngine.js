var camera;
var scene = new Physijs.Scene;
var width, height;
var renderElements = [], animatedElements = [];
var renderer;
var clock = new THREE.Clock();

module.exports = {
    setCamera: function(newCamera) {
        camera = newCamera;
        camera.lookAt(scene.position);
    },

    getCamera: function() {
        return camera;
    },

    setKeyboardListener: function(listener) {
        window.onkeydown = listener.onKeyDown;
        window.onkeyup = listener.onKeyUp;
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

    addSceneAnimatedElement: function(element) {
        scene.add(element);
        animatedElements.push(element);
    },

    addAnimatedElement: function(element) {
        animatedElements.push(element);
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
    }
};

function initRenderer() {
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(width, height);
    renderer.shadowMapEnabled = true;
}

function render() {
    var delta = clock.getDelta();
    for(var i=0; i<renderElements.length; i++) {
        renderElements[i].update();
    }

    for(var i=0; i<animatedElements.length; i++) {
        animatedElements[i].updateAnimation(delta * 1000);
    }

    scene.simulate(); // run physics
    THREE.AnimationHandler.update(delta);

    // render using requestAnimationFrame
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}