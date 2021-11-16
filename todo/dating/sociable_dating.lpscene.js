// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\sociable_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'sociable_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.interpersonal > 70)
    })
    scene.other(($IF) => {
        $IF(Player.interpersonal < random(0, 60))
    })


    scene.start(() => {
        scene.secondScreenIfHidden(Dating)
        Dating.dress()
        Dating.show(2)
        narrative(`I must admit: my <Dating.boyfriend_or_girlfriend> <Dating.name> is far better-spoken and more outgoing than me and is rather comfortable in social situations. I sometimes feel like the socially awkward one in the relationship.`)
        option([
            {text: `Ask <Dating.name> for help`},
            {text: `Do nothing`},
        ])
        if (0) {
            if (random(0, 50) < Dating.attractionToPlayer) {
                narrative(`<Dating.name> agreed to help me become more confident socially. <Dating.He_or_She> took me with <Dating.him_or_her> to many social events and taught me many party tricks.`)
                Player.interpersonal += random(0, 1)
                Dating.attractionToPlayer += random(0, 2)
            } else {
                narrative(`Although <Dating.name> promised to help me, <Dating.he_or_she> ended up being too busy to really spend time as my social mentor.`)
            }
        } else {
            narrative(`It doesn't matter. I'm proud of who I am and <Dating.name> should be too.`)
            Dating.attractionToPlayer -= random(0, 1)
        }


        scene.timeout(200, "sociable_dating")
    })
})
module.exports = scene