// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\medical\night_shift_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'night_shift_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["hospital:work"])
    scene.when([18, 4])
    let Actor = scene.getSpecific("Doctor", "Nurse")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Doctor", "Nurse")
        $IF(Actor.isInterestedIn(Player) && Player.isInterestedIn(Actor) && Actor.perversion > 70 && Actor.attractionToPlayer > 20)
    })
    scene.other(($IF) => {
        $IF()
    })


    scene.start(() => {
        Actor.dressUniform()
        Actor.show()
        narrative(`I'm on the night shift today, which has been very uneventful and boring. At least <Actor.name> is there to keep my company.`)
        Actor.dialogue(`This is too boring! You know what, since only us two are here ... let's sneak away and have some fun to pass the time ...`)
        narrative(`Wow, that's a direct proposal ...`)
        option([
            {text: `Fuck <Actor.name>`},
            {text: `No`},
        ])
        if (0) {
            narrative(`Sounds like a fun way to kill some time till the shift finishes ...`)
            scene.sex(Player, Actor)
            scene.passTime(1, 3)
        }
    })
    scene.timeout(200, "night_shift_cms")
})
module.exports = scene