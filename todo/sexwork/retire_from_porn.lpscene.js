// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\retire_from_porn.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'retire_from_porn'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        narrative(`Am I sure about quitting porn?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`I wasn't making that much money and the social taboo attached to it isn't worth it.`)
            Player.pornfame = 0
        } else {
            narrative(`On second thought, what else could I do to make money? Who's gonna hire a former pornstar?`)
        }


    })
})
module.exports = scene