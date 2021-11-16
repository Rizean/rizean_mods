// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\modeling\retire_from_modeling.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'retire_from_modeling'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
            narrative(`Am I sure about quitting my modeling career?`)
            option([
                {text: `Yes`},
                {text: `No`},
                    ])
            if (0) {
                    narrative(`I wasn't making that much money. It's a cutthroat industry and there's so much competition to get noticed.`)
                     Player.modelfame  = 0
            } else {
                    narrative(`On second thought, maybe I just need more patience. One day, I'll become a supermodel.`)
            }


    })
})
module.exports = scene