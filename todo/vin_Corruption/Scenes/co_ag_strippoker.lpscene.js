// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_ag_strippoker.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_ag_strippoker'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([17, 23])
    let Actor = Player.getCompanion()
    let Guest1 = scene.getPerson("true")
    let Guest2 = scene.getPerson("true")
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        Guest1 = scene.getPerson("true")
        Guest2 = scene.getPerson("true")
        $IF(!Actor.isRelative() && Guest1.perversion > 50 && Guest2.perversion > 50 && Player.isInterestedIn(Actor) && (Player.perversion - Actor.perversion > 40 || Actor.isVirgin()) && Actor.attractionToPlayer > 10)
    })
    scene.other("none")


    scene.start(() => {
        let round = 0
        let choice = -1
        let Loser = Player
        if (!Actor.isValid() || scene.forcedTrigger()) {
            Actor = Player.getCompanion()
        }
        scene.setBackground("street")


        narrative(`<Actor.name> is such an innocent <Actor.guy_or_girl>.`)
        if (Actor.isVirgin()) {
            narrative(`I'm pretty sure <Actor.he_or_she> is still a virgin too ...`)
        }
        narrative(`I reckon a game of strip poker at house party tonight could help <Actor.him_or_her> open up a bit ...`)
        option([
            {text: `Sounds good`},
            {text: `Not a good idea`},
        ])
        if (0) {
            if (random(0, 200) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                Actor.dialogue(`Okay, let's go to this house party then.`, `Happy`)
                scene.setBackground("home")


                Guest1.dress()
                Guest1.show(2)


                Guest2.dress()
                Guest2.show(3)


                Player.dialogue(`<Actor.name>, meet my friends <Guest1.name> and <Guest2.name>!`, `Happy`)
                Actor.dialogue(`Nice to meet you both!`, `Happy`)
                narrative(`An hour later ...`)
                Player.intoxication += random(0, 100)
                Player.dialogue(`Guys, let's play some strip poker!`, `Wink`)
                if (random(0, 250) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                    Actor.dialogue(`Okay then ... Let's play.`, `Embarrassed`)
                    Player.dialogue(`Remember our usual rules: If anyone loses a round but has no clothes left, they have to touch themselves a bit for everyone else's enjoyment.`, `Flirty`)
                    Guest1.dialogue(`Deal!`, `Happy`)
                    Guest2.dialogue(`Sounds good to me.`, `Happy`)
                    Actor.dialogue(`...`, `Embarrassed`)
                    round = 0
                    Actor.perversion += random(0, 0.5)
                    Actor.masochist += random(0, 0.25)
                    choice = -1
                    while (choice < 1 && round < 10) {
                        if (choice == -1 || random(0, 150) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                            choice = 0
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
                        } else {
                            Actor.dialogue(`Sorry, but I think this is going too far. I'm not comfortable with this ... I'll have to stop playing this game.`, `Embarrassed`)
                            choice = 1
                        }
                    }
                    Player.dialogue(`I think that's enough strip poker for tonight ... Thank you all for participating!`, `Happy`)
                    narrative(`Eventually the party wound down and everyone went home.`)
                    Actor.dress()
                } else {
                    Actor.dialogue(`I'd rather not ... I think I'd better get going now. Thank you for inviting me to this house party.`, `Sad`)
                    Player.endDate()
                }
            } else {
                Player.dialogue(`Sorry, I'm not in the mood for parting today ... You guys have fun!`, `Sad`)
                Actor.attractionToPlayer -= random(0, 0.5)
                Player.endDate()
            }
        }


    })
    scene.timeout(500, "co_ag_strippoker")
})
module.exports = scene