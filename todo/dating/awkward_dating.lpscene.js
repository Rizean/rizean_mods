// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\awkward_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'awkward_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.interpersonal < random(0, 60))
    })
    scene.other(($IF) => {
        $IF(Player.interpersonal > 70)
    })


    scene.start(() => {
        scene.secondScreenIfHidden(Dating)
        Dating.dress()
        Dating.show(2)
        narrative(`I must admit: my <Dating.boyfriend_or_girlfriend> <Dating.name> isn't the most outgoing person in the world and is rather awkward in dealing with social situations. Worse, <Dating.he_or_she> doesn't even like to go out and socialize.`)
        option([
            {text: `Encourage <Dating.name> to be more social`},
            {text: `Do nothing`},
        ])
        if (0) {
            if (random(0, 75) < Player.interpersonal) {
                Player.karma += 2.5
                narrative(`Motivated by my encouragements, <Dating.name> decided to participate in more social events and has become more sociable and confident as a result. <Dating.He_or_She> is still far from a party animal, mind you.`)
                Dating.interpersonal += random(0, 2)
            } else {
                narrative(`Unfortunately, despite my encouragements, <Dating.name> still refused to go out much. <Dating.He_or_She> even accused me of being a party animal.`)
                Dating.attractionToPlayer -= random(0, 2)
            }
        } else {
            narrative(`It doesn't matter. I like <Dating.name> just the way <Dating.he_or_she> is.`)
            Dating.attractionToPlayer += random(0, 1)
        }


        scene.timeout(200, "awkward_dating")
    })
})
module.exports = scene