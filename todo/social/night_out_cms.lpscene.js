// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\social\night_out_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'night_out_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([18, 22])
    let Actor = scene.getPerson("true")
    scene.who(($IF) => {
        Actor = scene.getPerson("true")
        $IF(Actor.rapportwithplayer > 30 && !Actor.isDating() && random(50, 100) < Actor.interpersonal)
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion())
    })


    scene.start(() => {
        let choice = -1
        let ate = false
        let hadSex = false
        let Kissed = false
        Actor.dress()
        Actor.show(2)
        Actor.dialogue(`Hey, let's go out tonight. There's a new nightclub in town - we should check it out.`, `Happy`)
        option([
            {text: `Accept`},
            {text: `Decline`},
        ])
        if (0) {
            Player.dialogue(`Sounds good to me. See you tonight.`, `Happy`)
            scene.setBackground("nightclub")
            Actor.dialogue(`Wow, this place is dead boring ... sorry about this, I'd never trust these social media ads again.`, `Sad`)
            Player.dialogue(`It's new. Give it time.`, `Happy`)
            Actor.dialogue(`I still kinda feel bad for dragging you along to this borefast ... You know what, why don't we head back to my place? I have plenty of alcohol left from the last house party.`)
            Player.dialogue(`Sounds good to me.`, `Happy`)


            scene.setBackgroundCustom("livingroom")
            choice = -1
            ate = false
            hadSex = false


            while (choice < 5) {
                Kissed = false
                narrative(`What should I suggest to <Actor.name> that we do?`)
                option([
                    {text: `Chat`},
                    {text: `Eat something together`, condition: !ate},
                    {text: `Watch a movie`},
                    {text: `Drink alcohol`},
                    {text: `Kiss <Actor.him_or_her>`, condition: !hadSex},
                    {text: `Leave`},
                    {text: `Ask to stay the night ...`},
                ])
                if (5) {
                    narrative(`We said goodbye and went our ways.`)
                } else if (6) {
                    Player.dialogue(`Damn, I think I'm too drunk to drive back home now ... Would you mind if I stay over?`, `Sad`)
                    Actor.dialogue(`Of course not ... I have a spare bedroom.`, `Happy`)
                    if (Actor.isInterestedIn(Player) && (Actor.isDominantSex(Player) || Actor.attractionToPlayer + Actor.perversion > random(50, 150) || Actor.intoxication > 70)) {
                        scene.setBackground("home")
                        narrative(`It's midnight and <Actor.name> just snuck into my bedroom and started groping me as if I wouldn't notice ... Is <Actor.he_or_she> just that drunk? Or is this the start of something more than friendship?`)
                        option([
                            {text: `Let <Actor.him_or_her>`},
                            {text: `Stop <Actor.him_or_her>`},
                        ])
                        if (0) {
                            scene.sex(Actor, Player)
                        } else {
                            Player.dialogue(`Behave yourself, <Actor.name>. Let's not ruin our friendship.`, `Anxious`)
                            Actor.dialogue(`Oh my god, what am I doing? I'm so sorry ... I had too much to drink ...`, `Sad`)
                        }
                        choice = 6
                    }
                } else {
                    Actor.rapportwithplayer += random(0, 0.5)
                    Actor.attractionToPlayer += random(0, 0.5)
                    if (0) {
                        narrative(`We simply sat and chat for a while ...`)
                    } else if (1) {
                        narrative(`We made some quick snacks and enjoyed them together ...`)
                        ate = true
                    } else if (2) {
                        narrative(`We watched a movie together ...`)
                    } else if (3) {
                        narrative(`We had a drink together ...`)
                        Player.intoxication += random(0, 20)
                        Actor.intoxication += random(0, 20)
                    } else if (4) {
                        Kissed = true
                    }


                    if (Kissed || (!hadSex && Actor.isInterestedIn(Player) && Actor.attractionToPlayer > random(30, 200))) {
                        Player.animatePair(Player, Actor, "Kissing")
                        Player.dialogue(`...`, `Kiss`)
                        Actor.dialogue(`...`, `Kiss`)
                        narrative(`We had a kiss, an awkward one at first, but soon moving towards a more passionate direction.`)
                        Player.karma -= 1
                        narrative(`Should I let this escalate further?`)
                        option([
                            {text: `Make out`},
                            {text: `Stop`},
                        ])
                        if (0) {
                            if (Actor.isInterestedIn(Player) && (Actor.isDominantSex(Player) || Actor.attractionToPlayer + Actor.perversion > random(75, 200) || Actor.intoxication > 90)) {
                                narrative(`Our kiss got more and more steamy and soon we were making out, our hands all over each other.`)
                                hadSex = true
                                Player.perversion += random(0, 1)
                                scene.sex(Player, Actor)
                                Actor.show(2)
                                narrative(`The sex was amazing, I guess we're more than friends now ...`)
                                choice = 5
                            } else {
                                narrative(`Unfortunately for me, <Actor.name> didn't seem interested in letting things escalate any further and pulled away.`)
                                Actor.dialogue(`<Player.name>, you know we really shouldn't have done that. It would have ruined our friendship.`, `Anxious`)
                                choice = 5
                            }
                        } else {
                            narrative(`I decided to stop it there and not go any further.`)
                        }
                    } else if (random(0, 100) < 20) {
                        Player.dialogue(`I've gotta go now. Thank you for the night out and for inviting me back to your place.`, `Happy`)
                        narrative(`We parted ways.`)
                        choice = 5
                    }
                }
            }
        }
    })
    scene.timeout(200, "night_out_cms")
})
module.exports = scene