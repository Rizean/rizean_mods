// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\clinical_trial.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'clinical_trial'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["university:school"])
    scene.when([8, 20])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < Player.fitness)
    })


    scene.start(() => {
        narrative(`There's a flyer asking for volunteers to take part in a clinical trial for a university research. I will be paid some pocket money for my troubles.`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            Player.money += random(15, 75)
            Player.fitness -= random(0, 0.5)
        }
    })
    scene.timeout(250, "clinical_trial")
})
module.exports = scene