// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\start_a_porn_career.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'start_a_porn_career'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        narrative(`Am I sure about becoming a pornstar?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`Yes, it sounds like a very pleasurable way to make ends meet.`)
            Player.pornfame += 5
        } else {
            narrative(`No, that's a crazy idea. What if my family finds out?`)
        }


    })
})
module.exports = scene