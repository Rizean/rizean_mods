// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\ignorant_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'ignorant_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.intelligence < random(0, 60))
    })
    scene.other(($IF) => {
        $IF(Player.intelligence > 70)
    })


    scene.start(() => {
        scene.secondScreenIfHidden(Dating)
        Dating.dress()
        Dating.show(2)
        narrative(`I must admit: my <Dating.boyfriend_or_girlfriend> <Dating.name> isn't the most intelligent person in the world and is rather ignorant on many topics. Worse, <Dating.he_or_she> has very few intellectual pursuits.`)
        option([
            {text: `Encourage <Dating.name> to read more`},
            {text: `Do nothing`},
        ])
        if (0) {
            if (random(0, 150) < Player.interpersonal + Player.intelligence) {
                narrative(`Motivated by my encouragements, <Dating.name> developed somewhat of a habit of reading and has become more knowledgeable on many subjects as a result.`)
                Dating.intelligence += random(0, 2)
                Player.karma += 2.5
            } else {
                narrative(`Unfortunately, despite my encouragements, <Dating.name> still refused to improve <Dating.his_or_her> general knowledge. <Dating.He_or_She> even accused me of intellectual snobbery.`)
                Dating.attractionToPlayer -= random(0, 2)
            }
        } else {
            narrative(`It doesn't matter. I like <Dating.name> just the way <Dating.he_or_she> is.`)
            Dating.attractionToPlayer += random(0, 1)
        }


        scene.timeout(200, "ignorant_dating")
    })
})
module.exports = scene