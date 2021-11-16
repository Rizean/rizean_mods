// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\too_much_reading.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'too_much_reading'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["university:school"])
    scene.when([8, 20])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        narrative(`A lecturer decided to give us a few book chapters and countless papers to read before the next lecture. There's no way I can read them all!`)
        option([
            {text: `Try my best`},
            {text: `Just give up`},
        ])
        if (0) {
            Player.intelligence += random(0, 0.25)
        }
    })
    scene.timeout(200, "too_much_reading")
})
module.exports = scene