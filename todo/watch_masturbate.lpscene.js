// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\misc\watch_masturbate.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'watch_masturbate'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        scene.filter("solo")
        scene.sex(Player)


    })
})
module.exports = scene