var Constants = require("../Constants");

var HealthBar = function(options) {
    this.startHealth = options.startHealth;
    this.health = options.startHealth;
    this.maxBarWidth = 5;
    this.bar = this.createBar(options.box);
    this.callbacks = options.callbacks ? options.callbacks : {};
};

HealthBar.prototype.getDamage = function(damage) {
    this.health -= damage;
    if(this.health > 0)
        this.updateBar();
    else {
        this.health = 0;
        this.updateBar(0.01);
        if(this.callbacks[Constants.Callbacks.OnDeath]) this.callbacks[Constants.Callbacks.OnDeath]();
    }
};

HealthBar.prototype.createBar = function(box) {
    var cubeGeometry = new THREE.BoxGeometry(1, 0.5, 1);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: 'red', transparent: true});
    cubeMaterial.ambient = cubeMaterial.color;
    var bar = new THREE.Mesh(cubeGeometry, cubeMaterial);
    bar.position.y = 6;
    bar.rotation.y = 0.79;
    bar.scale.x = this.maxBarWidth;
    box.add(bar);
    return bar;
};

HealthBar.prototype.updateBar = function(width) {
    if(width === undefined)
        width = (this.health * this.maxBarWidth) / this.startHealth;
    this.bar.scale.x = width;
};

module.exports = HealthBar;