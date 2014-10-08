module.exports = {
    Keyboard: {
        LEFT: 81,
        RIGHT: 68,
        UP: 90,
        DOWN: 83,
        SPACE: 32,
        UPLEFT: "upleft",
        UPRIGHT: "upright",
        DOWNLEFT: "downleft",
        DOWNRIGHT: "downright"
    },

    Paths: {
        Physijs: {
            Worker: 'lazy_load_libs/physijs_worker.js',
            Ammo: 'ammo.js'
        },

        Models: {
            Ninja: "assets/3d/ogre/ogro.json",
            Dino: "assets/models/estj-dino-anim.json",
            Enemy: "assets/3d/ogre/ogro.json"
        },

        Skins: {
            Ninja: "assets/3d/ogre/skins/skin.jpg",
            Enemy: "assets/3d/ogre/skins/skin.jpg"
        }
    },

    Models: {
        Ninja: "Ninja",
        Enemy: "Enemy"
    }
};