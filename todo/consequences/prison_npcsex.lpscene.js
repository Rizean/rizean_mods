// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\consequences\prison_npcsex.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'prison_npcsex'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["prison"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Actor2 = scene.generatePersonTemporary([])
        narrative(`Judging from the sounds of moaning, the inmate in the cell next door is having some intimate time with their spouse during a conjugal visit.`)
        option([
            {text: `Peep`},
            {text: `Good for them`},
        ])
        if (0) {
            scene.sneakGame()
            if (random(0, 100) < Player.sneak) {
                narrative(`Thankfully, there's a tiny hole between the cells that gives me great view of what's going on.`)
                Actor = scene.generatePersonTemporary([])
                Actor2 = scene.generatePersonTemporary([])
                scene.sex(Actor, Actor2)
            } else {
                narrative(`Between the thick walls of the prison cells, there's no way I could get a look in.`)
            }
        }
    })
    scene.timeout(100, "prison_npcsex")
})
module.exports = scene