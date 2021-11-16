// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_dances.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_dances'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.dance > 70)
    })
    scene.other(($IF) => {
        $IF(Player.dance < random(0, 60))
    })


    scene.start(() => {
        scene.secondScreenIfHidden(Dating)
        Dating.dress()
        Dating.show(2)
        narrative(`I must admit: my <Dating.boyfriend_or_girlfriend> <Dating.name> is a much better dancer than me. I simply can't keep up with <Dating.him_or_her> whenever we dance together.`)
        option([
            {text: `Ask <Dating.name> for help`},
            {text: `Do nothing`},
        ])
        if (0) {
            if (random(0, 50) < Dating.attractionToPlayer) {
                narrative(`<Dating.name> agreed to help me become a better dancer. <Dating.He_or_She> spent a lot of time practicing with me.`)
                Player.dance += random(0, 1)
                Dating.attractionToPlayer += random(0, 1)
            } else {
                narrative(`Although <Dating.name> promised to help me, <Dating.he_or_she> ended up being too busy to really spend time as my dancing instructor.`)
            }
        } else {
            narrative(`It doesn't matter. I'm proud of who I am and <Dating.name> should be too.`)
        }


        scene.timeout(200, "dating_dances")
    })
})
module.exports = scene