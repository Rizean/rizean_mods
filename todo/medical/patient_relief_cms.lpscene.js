// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\medical\patient_relief_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'patient_relief_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["hospital:work"])
    scene.when([18, 4])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        narrative(`A patient presses the call button.`)
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.show()
        narrative(`When I arrive, I can't help but notice that the patient is visibly aroused`)
        narrative(`The patient proceeds to complain about the painful <Actor.erection_or_arousal> and asks for my assistance relieving this.`)
        option([
            {text: `Give an icepack`},
            {text: `Perform oral sex instead`},
        ])
        if (0) {
            narrative(`I stayed professional and gave the patient an icepack to relieve <Actor.his_or_her> pain.`)
        } else {
            Player.perversion += 1
            narrative(`Might as well have some fun with this ...`)
            scene.filter("Oral")
            scene.sex(Player, Actor)
        }


    })
    scene.timeout(200, "patient_relief_cms")
})
module.exports = scene