// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\inexperienced_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'inexperienced_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.perversion < random(0, 60))
    })
    scene.other(($IF) => {
        $IF(Player.perversion > 70)
    })


    scene.start(() => {
        Dating.dress()
        scene.secondScreenIfHidden(Dating)
        Dating.show(2)
        narrative(`I must admit: my <Dating.boyfriend_or_girlfriend> <Dating.name> isn't the most experienced person in bed and is easily red-faced just by mere mentions of festishes. Worse, <Dating.he_or_she> seems to make no attempts to learn to be more comfortable about <Dating.his_or_her> body.`)
        option([
            {text: `Train <Dating.name>`},
            {text: `Do nothing`},
        ])
        if (0) {
            if (random(0, 150) < Player.interpersonal + Player.perversion) {
                Player.karma += 2.5
                narrative(`Practice makes perfect! I managed to convince <Dating.name> to do the deed with me more often and try out new things. <Dating.He_or_She> has become more comfortable sexually as a result.`)
                scene.setBackground("home")
                scene.sex(Player, Dating)
                Dating.perversion += random(0, 2)
            } else {
                narrative(`<Dating.name> still refused to have more sex and accused me of thinking about sex all the time.`)
                Dating.attractionToPlayer -= random(0, 2)
            }
        } else {
            narrative(`It doesn't matter. I like <Dating.name> just the way <Dating.he_or_she> is.`)
            Dating.attractionToPlayer += random(0, 1)
        }


        scene.timeout(200, "inexperienced_dating")
    })
})
module.exports = scene