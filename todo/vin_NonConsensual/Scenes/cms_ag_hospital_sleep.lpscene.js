// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\cms_ag_hospital_sleep.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'cms_ag_hospital_sleep'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["hospital:work"])
    scene.when([18, 4])
    scene.who("none")
    scene.other(($IF) => {
        $IF()
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        Actor.dress()
        Actor.show()
        narrative(`A patient is brought in from a night out on the town having drunk too much.`)
        Actor.animate("health")
        Actor.closeEyes("true")
        narrative(`<Actor.His_or_Her> condition is rapidly deteriorating.`)
        narrative(`After a while, I managed to stabilize the patient but <Actor.he_or_she> is in a deep sleep.`)
        option([
            {text: `Leave <Actor.him_or_her> to recover`},
            {text: `Rape <Actor.him_or_her>`},
        ])
        if (1) {
            narrative(`Working in a hospital has its perks.`)
            if (Actor.isMale() && !Player.isMale()) {
                scene.filter("Sleeping")
            } else {
                scene.filter("Aggressive")
            }
            scene.talkNonConsensual()
            scene.sex(Player, Actor)
        }
    })
    scene.timeout(200, "cms_ag_hospital_sleep")
})
module.exports = scene