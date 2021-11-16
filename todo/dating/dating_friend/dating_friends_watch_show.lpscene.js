// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_friend\dating_friends_watch_show.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_friends_watch_show'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([17, 22])
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
        let Drunk = false
        let choice = -1
        let ate = false
        let hadSex = false
        let Kissed = false
        Dating.dress()
        Dating.show(2)
        Dating.dialogue(`Baby, my friend <Actor.name> is coming over tonight to watch a movie. Do you want to join us?`, `Happy`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            Actor.rapportwithplayer += random(0, 2)
            Actor.attractionToPlayer += random(0, 2)
            Player.dialogue(`I'd love to. It would be a good opportunity to get to know your friend better.`, `Excited`)
            scene.setBackgroundCustom("livingroom")
            narrative(`Later on ...`)
            Actor.dress()
            Actor.show(3)
            narrative(`The three of us were enjoying a movie night together. We ordered pizza and had a few drinks already. I noticed that <Dating.name> had been drinking much faster than <Dating.he_or_she> normally does.`)
            option([
                {text: `Convince <Dating.name> to go easy on the booze`},
                {text: `Let <Dating.him_or_her> be`},
            ])
            if (0) {
                Player.dialogue(`Baby, you've drank too much already. You'll pass out at this rate.`, `Happy`)
                if (random(0, 100) < Player.interpersonal) {
                    Dating.dialogue(`You're right. I'm well over the limit. Don't want to embarass myself in front of <Actor.name>, do I?`, `Sad`)
                    Drunk = false
                } else {
                    Dating.dialogue(`What are you talking about? I'm not drunk, not even tipsy.`, `Irritated`)
                    Drunk = true
                }
            } else {
                Drunk = true
            }


            if (Drunk) {
                narrative(`Soon enough, <Dating.name> passed out from all the alcohol. <Actor.name> helped me put <Dating.name> to bed.`)
                Dating.hide()
                Actor.dialogue(`I told <Dating.him_or_her> that <Dating.he_or_she> shouldn't drink so much ... We didn't even finish the movie. Oh well, I guess I'll head off and leave you two to it then.`, `Anxious`)
                option([
                    {text: `Ask <Actor.name> to stay`},
                    {text: `Go to bed`},
                ])
                if (0) {
                    Player.dialogue(`Please, don't leave. <Dating.name> might have passed out but <Dating.he_or_she> will be okay after a good night's sleep. I'm still here. Let's finish the movie at least.`, `Surprised`)
                    Actor.dialogue(`As you wish then.`, `Happy`)
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
                                        narrative(`The sex was amazing. However, <Actor.name> immediately realized what <Actor.he_or_she> had done: breaking the first rule of friendship just a few meters away from <Actor.his_or_her> drunken friend, and was overcome with guilt. <Actor.He_or_She> left in a hurry.`)
                                        choice = 5
                                    } else {
                                        narrative(`Unfortunately for me, <Actor.name> didn't seem interested in letting things escalate any further and pulled away.`)
                                        Actor.dialogue(`<Player.name>, you know we really shouldn't have done that. What if <Dating.name> finds out? <Dating.He_or_She> was literally a few steps away in the bedroom. Sorry ... I've got to go now.`, `Anxious`)
                                        choice = 5
                                    }
                                } else {
                                    narrative(`I decided to stop it there and not go any further.`)
                                }
                            } else if (random(0, 100) < 20) {
                                Actor.dialogue(`I've gotta go now. Thank you for keeping me company.`, `Happy`)
                                narrative(`We parted ways.`)
                                choice = 5
                            }
                        }
                    }
                } else {
                    Player.dialogue(`Alright then, good night. Thank you for hanging out with us. Sorry about <Dating.name> being such a drunken mess.`, `Happy`)
                    narrative(`I'm feeling quite drunk myself. I'd rather just kick <Actor.name> out and head to bed.`)
                    if (scene.isModEnabled("vin_NTR") && Actor.isInterestedIn(Dating)) {
                        Actor.dialogue(`Actually, on second thought, I hope you don't mind, but I think I'm too drunk to drive back home. Would you mind if I crash on the sofa for the night?`, `Happy`)
                        Player.dialogue(`Oh ... sure, since you're <Dating.name>'s friend.`, `Surprised`)
                        narrative(`Whatever I guess ... don't want to be rude to <Dating.name>'s friend`)
                        scene.setBackground("home")
                        Actor.hide()
                        Dating.hide()
                        narrative(`Hmm, what's that strange noise coming out from the living room?`)
                        option([
                            {text: `Check it out`},
                            {text: `Continue sleeping`},
                        ])
                        if (0) {
                            scene.setBackgroundCustom("livingroom")
                            Player.dialogue(`What the fuck!`, `Shocked`)
                            scene.sex(Actor, Dating)
                            scene.setBackgroundCustom("livingroom")
                            Player.show(0)
                            Actor.show(2)
                            Dating.show(3)
                            Player.masochist += 2
                            narrative(`I caught <Actor.name> and <Dating.name> having sex in the living room. They're more than buddies apparently.`)
                            option([
                                {text: `Get upset`},
                                {text: `Join`},
                                {text: `Continue watching`},
                            ])
                            if (0) {
                                Player.dialogue(`What the fuck are you two doing? <Dating.name>, you cheating <Dating.asshole_or_bitch>!`, `Surprised`)
                                Dating.attractionToPlayer -= 20
                            } else if (1) {
                                Player.dialogue(`Looks like you guys are having fun there. Mind if I join?`, `Flirty`)
                                scene.sex(Actor, Dating, Player)
                            } else {
                                narrative(`Let's continue hiding and enjoy the show.`)
                                scene.sex(Dating, Actor)
                                Player.masochist += 2
                            }
                        } else {
                            narrative(`Probably nothing, I'm too drunk to get up right now.`)
                        }
                    }
                }
            }
        } else {
            Player.dialogue(`Wouldn't <Actor.name> feel like a third wheel if I was there? Don't worry about me, you <Dating.boys_or_girls> have fun!`, `Happy`)
        }


    })
    scene.timeout(200, "dating_friends_watch_show")
})
module.exports = scene