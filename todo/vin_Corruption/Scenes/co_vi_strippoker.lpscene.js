// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_vi_strippoker.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_vi_strippoker'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([17, 23])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!Actor.isRelative() && Actor.isInterestedIn(Player) && Actor.perversion > 70 && Actor.attractionToPlayer > 10)
    })
    scene.other("none")


    scene.start(() => {
        let Guest1 = scene.generatePersonTemporary([])
        let Guest2 = scene.generatePersonTemporary([])
        let round = 0
        let Loser = Player
        scene.setBackground("street")


        narrative(`I was hanging out with <Actor.name> when <Actor.he_or_she> insisted that I followed <Actor.him_or_her> to <Actor.his_or_her> a house party a friend of <Actor.his_or_her> is hosting tonight.`)
        option([
            {text: `Refuse`},
            {text: `Go to the house party`},
        ])
        if (0) {
            Player.dialogue(`Sorry, I'm not in the mood for parting today ... You guys have fun!`, `Sad`)
            Actor.attractionToPlayer -= random(0, 0.5)
            Player.endDate()
        } else {
            Player.dialogue(`Okay, let's go to your friend's house party then.`, `Happy`)
            scene.setBackground("home")


            Guest1 = scene.generatePersonTemporary([])
            Guest1.dress()
            Guest1.show(2)


            Guest2 = scene.generatePersonTemporary([])
            Guest2.dress()
            Guest2.show(3)


            Actor.dialogue(`<Player.name>, meet my friends <Guest1.name> and <Guest2.name>!`, `Happy`)
            Player.dialogue(`Nice to meet you both!`, `Happy`)
            narrative(`An hour later ...`)
            narrative(`This house party isn't so bad ...`)
            Player.intoxication += random(0, 100)
            Actor.dialogue(`Guys, let's play some strip poker!`, `Wink`)
            scene.option([
                {text: `Join them`, condition: Player.perversion > 15},
                {text: `Go home`},
            ])
            if (0) {
                Player.dialogue(`Okay then ... Let's play.`, `Embarrassed`)
                Actor.dialogue(`Remember our usual rules: If anyone loses a round but has no clothes left, they have to touch themselves a bit for everyone else's enjoyment.`, `Flirty`)
                Guest1.dialogue(`Deal!`, `Happy`)
                Guest2.dialogue(`Sounds good to me.`, `Happy`)
                narrative(`Damn it, it's too late to chicken out now ...`)
                round = 0
                Player.perversion += random(0, 0.5)
                Player.masochist += random(0, 0.25)
                while (choice == 0 && round < 10) {
                    narrative(`What should I do?`)
                    option([
                        {text: `Play another round`},
                        {text: `Stop playing`},
                    ])
                    if (0) {
                        round += 1
                        scene.$random(() => {
                            Loser = Player
                            Loser = Actor
                            Loser = Guest1
                            Loser = Guest2
                        })
                        Loser.dialogue(`Damn, I lost!`, `Sad`)
                        if (Loser.isNaked()) {
                            narrative(`No clothes left ... Some solo action it is then ...`)
                            Player.hide()
                            Actor.hide()
                            Guest1.hide()
                            Guest2.hide()
                            scene.filter("Solo")
                            scene.sex(Loser)
                            Player.show(0)
                            Actor.show(4)
                            Guest1.show(2)
                            Guest2.show(3)
                            Loser.perversion += random(0, 0.25)
                        } else {
                            Loser.dialogue(`Off this goes then ...`, `Embarrassed`)
                            Loser.stripOne()
                            Loser.perversion += random(0, 0.1)
                        }
                    }
                }
                Actor.dialogue(`I think that's enough strip poker for tonight ... Thank you all for participating!`, `Happy`)
                narrative(`Eventually the party wound down and everyone went home.`)
                Actor.dress()
            } else {
                Player.dialogue(`I'd rather not ... I think I'd better get going now. Thank you for inviting me to this house party.`, `Sad`)
                narrative(`Who does <Actor.he_or_she> take me for? Getting naked in front of a bunch of people I've just met over some poker - no way!`)
                Player.endDate()
            }
        }
    })
    scene.timeout(500, "co_vi_strippoker")
})
module.exports = scene