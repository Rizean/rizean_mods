// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_cooks.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_cooks'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.cooking > 70)
    })
    scene.other(($IF) => {
        $IF(Player.cooking < random(0, 60))
    })


    scene.start(() => {
        scene.secondScreenIfHidden(Dating)
        Dating.dress()
        Dating.show(2)
        narrative(`I must admit: my <Dating.boyfriend_or_girlfriend> <Dating.name> is a much better cook than me. I'm a bit embarrassed that <Dating.he_or_she> is always the one to cook for me in this relationship.`)
        option([
            {text: `Ask <Dating.name> for help`},
            {text: `Do nothing`},
        ])
        if (0) {
            if (random(0, 50) < Dating.attractionToPlayer) {
                narrative(`<Dating.name> agreed to help me become a better cook. <Dating.He_or_She> spent a lot of time with me trying out new recipes and cooking together.`)
                Player.cooking += random(0, 1)
                Dating.attractionToPlayer += random(0, 1)
            } else {
                narrative(`Although <Dating.name> promised to help me, <Dating.he_or_she> ended up being too busy to really spend time as my culinary instructor.`)
            }
        } else {
            narrative(`It doesn't matter. I'm proud of who I am and <Dating.name> should be too.`)
        }


        scene.timeout(200, "dating_cooks")
    })
})
module.exports = scene