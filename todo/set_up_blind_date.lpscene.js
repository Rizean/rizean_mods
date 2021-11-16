// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\misc\set_up_blind_date.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'set_up_blind_date'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([17, 20])
    let Actor = scene.getPerson("true")
    let Actor2 = scene.getPerson("true")
    scene.who(($IF) => {
        Actor = scene.getPerson("true")
        Actor2 = scene.getPerson("true")
        $IF(!Actor.hasRelationship("Dating", "Spouses") && !Actor2.hasRelationship("Dating", "Spouses") && !Actor.isDating() && !Actor2.isDating() && Actor.isInterestedIn(Actor2) && Actor2.isInterestedIn(Actor) && Actor.rapportwithplayer > 20 && Actor2.rapportwithplayer > 20)
    })
    scene.other("none")


    scene.start(() => {
        Actor.dress()
        Actor.show(2)
        Actor2.dress()
        Actor2.show(3)


        narrative(`<Actor.name> and <Actor2.name> are two of my good friends. They are both single however, and I think they might make a good match.`)
        option([
            {text: `Set up a blind date`},
            {text: `Nevermind`},
        ])
        if (0) {
            if (random(0, 100) < Player.interpersonal) {
                narrative(`I managed to talk them into going on a blind date with each other, which went quite well. Who knows? This could be the start of something special.`)
                Player.karma += 2.5
                Actor.rapportwithplayer += random(0, 5)
                Actor2.rapportwithplayer += random(0, 5)
                Actor.attractionToPlayer -= 30
                Actor2.attractionToPlayer -= 30
                scene.addNpcRelationship("Dating", Actor, Actor2)
                if (Actor.perversion + Actor2.perversion > 75) {
                    Actor2.hide()
                    scene.setBackground("coffee")
                    narrative(`A few days later, I was hanging out with <Actor.name> when <Actor.he_or_she> accidentally confessed that <Actor.he_or_she> had sex with <Actor2.name> on their first date! Wow, I know I'm a good matchmaker but this is certainly unexpected.`)
                    option([
                        {text: `Press <Actor.him_or_her> for details`},
                        {text: `Change the subject`},
                    ])
                    if (0) {
                        narrative(`Although <Actor2.he_or_she> is just a friend, I've always wondered what <Actor2.he_or_she> is like in bed.`)
                        if (random(50, 200) < Player.interpersonal + Actor.perversion) {
                            Actor.dialogue(`Alright, you got me. I guess you deserve to know everything, being the one to set up the date in the first place.`, `Embarrassed`)
                            narrative(`<Actor.name> started telling me all about that night, with every single little graphic detail ...`)
                            scene.setBackground("home")
                            scene.sex(Actor, Actor2)
                            Player.arousal += random(0, 20)
                            Player.perversion += random(0, 0.25)
                        } else {
                            Actor.dialogue(`No, no way I'm telling you. It's a secret between us two!`, `Embarrassed`)
                        }
                    } else {
                        narrative(`That's already too much information. I didn't need to know that.`)
                    }
                }
            } else {
                narrative(`Despite my best efforts, I couldn't quite get them to agree to a blind date.`)
                Player.mood -= 5
            }
        } else {
            narrative(`I'm not too keen on matchmaking and getting involved with other people's business.`)
        }


    })
    scene.timeout(200, "set_up_blind_date")
})
module.exports = scene