// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\consequences\released_from_prison.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'released_from_prison'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        narrative(`I served my sentence. Today is my release day.`)
        scene.setBackground("street")
        narrative(`That's it. I'm a free <Player.man_or_woman> again!`)
        Player.endPrison()
    })
})
module.exports = scene