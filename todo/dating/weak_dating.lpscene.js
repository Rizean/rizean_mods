// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\weak_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'weak_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.fitness < random(0, 60))
    })
    scene.other(($IF) => {
        $IF(Player.fitness > 70)
    })


    scene.start(() => {
        scene.secondScreenIfHidden(Dating)
        Dating.dress()
        Dating.show(2)
        narrative(`I must admit: my <Dating.boyfriend_or_girlfriend> <Dating.name> isn't the healthiest person in the world and is rather unfit. Worse, <Dating.he_or_she> has very few athletic pursuits.`)
        option([
            {text: `Encourage <Dating.name> to exercise more`},
            {text: `Do nothing`},
        ])
        if (0) {
            if (random(0, 150) < Player.interpersonal + Player.fitness) {
                narrative(`Motivated by my encouragements, <Dating.name> took up a few sports and adopted a healthier lifestyle.`)
                Dating.fitness += random(0, 2)
                Player.karma += 2.5
            } else {
                narrative(`Unfortunately, despite my encouragements, <Dating.name> still refused to exercise. <Dating.He_or_She> even accused me of being a gym nut.`)
                Dating.attractionToPlayer -= random(0, 2)
            }
        } else {
            narrative(`It doesn't matter. I like <Dating.name> just the way <Dating.he_or_she> is.`)
            Dating.attractionToPlayer += random(0, 1)
        }


        scene.timeout(200, "weak_dating")
    })
})
module.exports = scene