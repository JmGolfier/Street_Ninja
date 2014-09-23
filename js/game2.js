var renderer;
var scene;
var camera;
var control;
var stats;
var light;
var cameraControl;

var THREE = require("three");

module.exports = {
    init: function () {
// create a scene, that will hold all our elements such as objects, cameras and lights.
        scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

        // create a render, sets the background color and the size
        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0x000000, 1.0);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;

        // position and point the camera to the center of the scene
        camera.position.x = 15;
        camera.position.y = 16;
        camera.position.z = 13;
        camera.lookAt(scene.position);

        //add controls
        cameraControl = new THREE.OrbitControls(camera);

        //create the ground plane
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

        // add the plane to the scene
        scene.add(plane);

        var greenTexture = THREE.ImageUtils.loadTexture("assets/textures/okami.jpg");
        var redTexture = THREE.ImageUtils.loadTexture("assets/textures/okamiGrand.png");

        var cube1Geometry = new THREE.BoxGeometry(10, 10, 10);
        var cube1Material = new THREE.MeshLambertMaterial({map:greenTexture});

        cube1 = new THREE.Mesh(cube1Geometry, cube1Material);
        cube1.overdraw = true;
        cube1.name = 'cube1';
        cube1.castShadow = true;
        cube1.position.x = 5;
        cube1.position.y = 3;
        cube1.position.z = 5;

        scene.add(cube1);

        light = new THREE.AmbientLight( 0xffffff ); // soft white light
        light.position.set(10,20,20);
        scene.add( light );

        //setup the control object for the control gui
        control = new function(){
            this.rotationSpeed = 0.001;
            this.opacity = 0.6;
            this.color = cube1Material.color.getHex();
        };

        //add extras
        addStatsObject();

        // add the output of the renderer to the html element
        document.body.appendChild(renderer.domElement);

        // call the render function, after the first render, interval is determined
        // by requestAnimationFrame
        render();
    },

    resize: function(width, height) {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }
};

function render() {
    stats.update();
    cameraControl.update();

    //change opacity
    scene.getObjectByName('cube1').material.opacity = control.opacity;

    //change color
    scene.getObjectByName('cube1').material.color = new THREE.Color(control.color);

    // render using requestAnimationFrame
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

function addStatsObject(){
    stats = new Stats();
    stats.setMode(0);


    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';

    document.body.appendChild(stats.domElement);

}