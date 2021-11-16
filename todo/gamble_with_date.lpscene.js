// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\companion\gamble_with_date.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'gamble_with_date'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["gamble"])
    scene.where(["all"])
    scene.when([0, 24])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(random(50, 200) < Actor.attractiveness)
    })
    scene.other(($IF) => {
        $IF(scene.isModEnabled("vin_NTR") && Player.intelligence < random(0, 80) * random(0, 1))
    })


    scene.start(() => {
        let Actor2 = scene.generatePersonTemporary([])
        let paying = true
        narrative(`Oh no, I have rotten luck today. I have lost all my money.`)
        Actor2 = scene.generatePersonTemporary([])
        Actor2.dress()
        Actor2.show(2)
        Actor2.dialogue(`You lost it all. I think it's time you pay up!`, `Evil`)
        Actor2.dialogue(`Or alternatively, I wouldn't say no if you offer the body of your <Actor.handsome_or_pretty> friend here to pay for your debt instead.`, `Flirty`)
        option([
            {text: `Pay up`},
            {text: `Convince <Actor.name> to sacrifice`},
        ])
        if (0) {
            paying = true
            Actor.rapportwithplayer += random(0, 2)
            Player.masochist -= random(0, 2)
        } else {
            Player.masochist += random(0, 2)
            if (random(100, 500) < Player.interpersonal + Actor.attractionToPlayer + Actor.rapportwithplayer + Actor.perversion) {
                Actor.dialogue(`I guess I have to save you ... I care about you, I don't want you to go broke. But you must promise to give up gambling from now!`, `Crying`)
                scene.sex(Actor2, Actor)
                paying = false
            } else {
                Actor.dialogue(`Do you have no shame? How could you ask me to be a mere object to exchange around?`, `Furious`)
                paying = true
            }
            Actor.attractionToPlayer -= random(0, 5)
            Actor.rapportwithplayer -= random(0, 5)
        }


        if (paying) {
            narrative(`I have no choice but to pay up ...`)
            Player.money -= random(1000, 10000)
        }
    })
    scene.timeout(2000, "gamble_with_date")
})
module.exports = scene