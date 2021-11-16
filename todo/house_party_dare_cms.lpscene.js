// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\misc\house_party_dare_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'house_party_dare_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([17, 24])
    let Actor = scene.getPerson("true")
    scene.who(($IF) => {
        Actor = scene.getPerson("true")
        $IF(!Actor.isDating() && Actor.perversion > 50 && Actor.rapportwithplayer > 30)
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion())
    })


    scene.start(() => {
        let Actor2 = scene.generatePersonTemporary([])
        scene.secondScreen(Actor)
        Actor.show()


        narrative(`One of my friends <Actor.name> is inviting me to a house party tonight ... <Actor.He_or_She> is a bit of a free spirit so anything <Actor.he_or_she> hosts tends to turn rather debaucherous`)
        option([
            {text: `Come to <Actor.name>'s house party`},
            {text: `Decline`},
        ])
        if (0) {
            scene.secondScreen()
            scene.setBackgroundCustom("livingroom")
            Actor2 = scene.generatePersonTemporary([])
            while (!Actor2.isMale()) {
                Actor2 = scene.generatePersonTemporary([])
            }
            Actor.dress()
            Actor2.dress()
            Actor.show()
            Actor2.show()
            narrative(`The party is alright, but of course <Actor.name> wanted to spice things up with a silly game. If I lose though, I'll have to do some dare.`)
            option([
                {text: `Play the party game`},
                {text: `Just have some drinks`},
            ])
            if (0) {
                narrative(`And of course, with my rotten luck, it was no surprise that I lost ...`)
                narrative(`Now it's time to hear <Actor.name>'s dare ... I'm pretty sure <Actor.he_or_she>'s up to no good.`)
                if (random(0, 100) < 33) {
                    narrative(`<Actor.name> is daring me to twerk ...`)
                    Player.dialogue(`Alright ...`)
                    Player.animate("dance")
                    Player.dialogue(`Happy?`)
                } else if (random(0, 100) < 50) {
                    narrative(`<Actor.name> is daring me to make some moaning sound ...`)
                    Player.dialogue(`Alright ...`)
                    Player.dialogue(`Ahhhhhhhh ....... Ahhhhhhhhh .....`, `Crying`)
                    Player.dialogue(`Yes ..... just like that ....... fuck me!`, `Crying`)
                } else {
                    narrative(`<Actor.name> is daring me to give <Actor.his_or_her> friend <Actor2.name> a blowjob ...`)
                    option([
                        {text: `Alright`},
                        {text: `That's too far`},
                    ])
                    if (0) {
                        scene.filter("Blowjob")
                        scene.sex(Actor2, Player)
                    } else {
                        Player.dialogue(`Are you crazy? No way!`)
                        Actor.rapportwithplayer -= 3
                    }
                }
            }
        }
    })
    scene.timeout(500, "house_party_dare_cms")


})
module.exports = scene