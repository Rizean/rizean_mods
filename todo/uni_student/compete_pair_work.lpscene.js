// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\compete_pair_work.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'compete_pair_work'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["attend_lectures"])
    scene.where(["university:school"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Coursemate")
    let Actor2 = scene.getSpecific("Coursemate")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Coursemate")
        Actor2 = scene.getSpecific("Coursemate")
        $IF(Actor.rapportwithplayer > 0 && Actor2.rapportwithplayer > 0)
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < Player.intelligence)
    })


    scene.start(() => {
        Actor.dress()
        Actor.show(2)
        Actor2.dress()
        Actor2.show(3)
        narrative(`We were just handed an assignment by the lecturer, to be done in pairs. Two of my classmates <Actor.name> and <Actor2.name>, are both asking me to work with them ...`)
        option([
            {text: `Work with <Actor.name>`},
            {text: `Work with <Actor2.name>`},
        ])
        if (0) {
            Actor.rapportwithplayer += random(0, 2)
            Actor2.rapportwithplayer -= random(0, 2)
        } else {
            Actor2.rapportwithplayer += random(0, 2)
            Actor.rapportwithplayer -= random(0, 2)
        }
    })
    scene.timeout(200, "compete_pair_work")
})
module.exports = scene