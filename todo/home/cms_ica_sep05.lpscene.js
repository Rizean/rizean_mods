// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\cms_ica_sep05.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'cms_ica_sep05'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["home"])
    scene.when([8, 20])
    let Actor = scene.getSpecific("Landlord")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Landlord")
        $IF(Actor.perversion > 80 && Actor.isInterestedIn(Player))
    })
    scene.other(($IF) => {
        $IF(Player.isAtHome())
    })


    scene.start(() => {
        let Actor2 = scene.getSpecific("Dating")
        Actor2 = scene.getSpecific("Dating")
        Actor.dress()
        Actor.show()
        narrative(`When the landlord comes in to collect the rent today, the pervert offers a big discount if I sleep with <Actor2.him_or_her> ...`)
        option([
            {text: `Okay ...`},
            {text: `Offer <Actor2.name> instead`, condition: Actor2.isValid() && Actor.isInterestedIn(Actor2)},
            {text: `No way`},
        ])
        if (2) {
            narrative(`What kind of offer is that?`)
        } else {
            if (0) {
                scene.sex(Player, Actor)
            } else {
                scene.sex(Actor, Actor2)
            }
            Player.money += 500
        }
    })
    scene.timeout(1000, "cms_ica_sep05")
})
module.exports = scene