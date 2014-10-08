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
        DOWNRIGHT: "downright",
        ENTER: 13
    },

    Paths: {
        Physijs: {
            Worker: 'lazy_load_libs/physijs_worker.js',
            Ammo: 'ammo.js'
        },

        Models: {
            Ogre: "assets/3d/ogre/ogro.json",
            Ninja: "assets/3d/ninja/ninja.json",
            Dino: "assets/models/estj-dino-anim.json"
        },

        Skins: {
            Ogre: "assets/3d/ogre/skins/skin.jpg",
            Ninja: "assets/3d/ninja/nskinbr.jpg"
        }
    },

    Models: {
        Ninja: "Ninja",
        Ogre: "Ogre"
    },

    Callbacks: {
        OnDeath: "onDeath"
    }
};