// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\ugly_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'ugly_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.attractiveness < random(0, 60))
    })
    scene.other(($IF) => {
        $IF(Player.attractiveness > 70)
    })


    scene.start(() => {
        scene.secondScreenIfHidden(Dating)
        Dating.dress()
        Dating.show(2)
        narrative(`I must admit: my <Dating.boyfriend_or_girlfriend> <Dating.name> isn't the most attractive person in the world and is also rather clueless on fashion. Worse, <Dating.he_or_she> seems to make no attempts to dress better.`)
        option([
            {text: `Encourage <Dating.name> to be better-dressed`},
            {text: `Do nothing`},
        ])
        if (0) {
            if (random(0, 150) < Player.interpersonal + Player.attractiveness) {
                narrative(`Motivated by my encouragements, <Dating.name> became a bit more fashionable and at least tries to look good in public.`)
                Dating.attractiveness += random(0, 2)
                Player.karma += 2.5
            } else {
                narrative(`Unfortunately, despite my encouragements, <Dating.name> still refused to wear decent clothes. <Dating.He_or_She> even accused me of being shallow.`)
                Dating.attractionToPlayer -= random(0, 2)
            }
        } else {
            narrative(`It doesn't matter. I like <Dating.name> just the way <Dating.he_or_she> is.`)
            Dating.attractionToPlayer += random(0, 1)
        }


        scene.timeout(200, "ugly_dating")
    })
})
module.exports = scene