// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_friend\dating_friend_visits.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_friend_visits'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([8, 22])
    let Dating = scene.getSpecific("Dating")
    let Actor = scene.getSpecific("Dating_Friend")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        Actor = scene.getSpecific("Dating_Friend")
        $IF(random(0, 100) < Dating.interpersonal)
    })
    scene.other(($IF) => {
        $IF(Player.isAtDatingHome())
    })


    scene.start(() => {
        let choice = -1
        let ate = false
        let hadSex = false
        let Kissed = false
        narrative(`I heard a knock on the door.`)
        Player.dialogue(`Coming!`, `Surprised`)
        narrative(`It's <Actor.name>, a close friend of <Dating.name>.`)
        Actor.dress()
        Actor.show(2)
        Actor.dialogue(`Oh hey, <Player.name>. Is <Dating.name> home?`, `Happy`)
        Player.dialogue(`<Dating.He_or_She> is away for the day, I'm afraid.`, `Sad`)
        Actor.dialogue(`Oh, that's a shame. No matter, I'll just come back tomorrow.`, `Irritated`)
        option([
            {text: `Invite <Actor.him_or_her> inside`},
            {text: `Say farewell`},
        ])
        if (0) {
            Player.dialogue(`Actually, do you want to come in for a drink? I'd like to get to know my <Dating.boyfriend_or_girlfriend>'s friend better anyway.`, `Happy`)
            if (Actor.attractionToPlayer > 10 || Actor.rapportwithplayer > 10) {
                Actor.dialogue(`Of course, it wouldn't be too polite of me if I turn down a friendly offer from my close friend's <Player.boyfriend_or_girlfriend>, would it?`, `Wink`)


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
                        {text: `Politely ask <Actor.him_or_her> to leave`},
                    ])
                    if (5) {
                        narrative(`We said goodbye and went our ways.`)
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
                            Player.intoxication += random(0, 10)
                            Actor.intoxication += random(0, 10)
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
                                    narrative(`The sex was amazing. However, <Actor.name> immediately realized what <Actor.he_or_she> had done: breaking the first rule of friendship, and was overcome with guilt. <Actor.He_or_She> left in a hurry.`)
                                    choice = 5
                                } else {
                                    narrative(`Unfortunately for me, <Actor.name> didn't seem interested in letting things escalate any further and pulled away.`)
                                    Actor.dialogue(`<Player.name>, you know we really shouldn't have done that. What if <Dating.name> finds out? Sorry ... I've got to go now.`, `Anxious`)
                                    choice = 5
                                }
                            } else {
                                narrative(`I decided to stop it there and not go any further.`)
                            }
                        } else if (random(0, 100) < 20) {
                            Actor.dialogue(`I've gotta go now. Thank you for inviting me in.`, `Happy`)
                            narrative(`We parted ways.`)
                            choice = 5
                        }
                    }
                }
            } else {
                Actor.dialogue(`That's okay. Don't worry. I've got to go.`, `Happy`)
            }
        } else {
            Player.dialogue(`I'll see you soon then!`, `Happy`)
        }


    })
    scene.timeout(72, "dating_friend_visits")
})
module.exports = scene