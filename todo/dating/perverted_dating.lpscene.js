// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\perverted_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'perverted_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.perversion > 70)
    })
    scene.other(($IF) => {
        $IF(Player.perversion < random(0, 60))
    })


    scene.start(() => {
        scene.secondScreenIfHidden(Dating)
        Dating.dress()
        Dating.show(2)
        narrative(`I must admit: my <Dating.boyfriend_or_girlfriend> <Dating.name> is far more experienced sexually than me and is rather adventurous in bed. I sometimes feel like the prude in the relationship.`)
        option([
            {text: `Ask <Dating.name> to 'train' me`},
            {text: `Do nothing`},
        ])
        if (0) {
            if (random(0, 50) < Dating.attractionToPlayer) {
                narrative(`<Dating.name> agreed to teach me a thing or two in bed. Practice makes perfect!`)
                Player.perversion += random(0, 1)
                Dating.attractionToPlayer += random(0, 2)
                scene.setBackground("home")
                scene.sex(Dating, Player)
            } else {
                narrative(`Although <Dating.name> promised to help me, <Dating.he_or_she> ended up being too busy to have sex with me more often.`)
            }
        } else {
            narrative(`It doesn't matter. I'm proud of who I am and <Dating.name> should be too.`)
            Dating.attractionToPlayer -= random(0, 1)
        }


        scene.timeout(200, "perverted_dating")
    })
})
module.exports = scene