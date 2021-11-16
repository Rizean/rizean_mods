// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\neighbour_fixes.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'neighbour_fixes'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Neighbour")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Neighbour")
        $IF(Actor.intelligence < random(0, 60))
    })
    scene.other(($IF) => {
        $IF(Player.isAtHome() && Player.intelligence > random(0, 100))
    })


    scene.start(() => {
        let Actor2 = scene.getSpecific("Dating")
        let choice = -1
        let ate = false
        let hadSex = false
        let Kissed = false
        Actor.dress()
        Actor.show(2)


        Actor2 = scene.getSpecific("Dating")


        narrative(`I was walking back to my apartment when I found my neighbour <Actor.name> hurriedly walking in the opposite direction, looking a bit annoyed.`)
        Player.dialogue(`<Actor.name>, what's the matter? You don't look too happy ...`, `Happy`)
        Actor.dialogue(`My laptop just stopped working all of a sudden. You know I'm hopeless with technology so I'm taking it to a repair shop. Last time I did that, they took ages to fix it so I'll probably have to live without my laptop for a while.`, `Sad`)
        option([
            {text: `Wish <Actor.him_or_her> luck`},
            {text: `Offer help`},
            {text: `Maybe <Actor2.name> can help`, condition: scene.isModEnabled("vin_NTR") && Actor2.isValid()},
        ])
        if (0) {
            Player.dialogue(`Oh, that sucks. Good luck with the laptop. Hopefully they won't take so long this time.`, `Sad`)
            Actor.dialogue(`Thank you.`, `Sad`)
        } else if (1) {
            Player.dialogue(`There's no need to take it to the repair shop. I know a thing or two about computers. I can have a look for you. Might be able to fix it right away.`, `Happy`)
            Player.karma += 2.5
            Actor.dialogue(`Oh really? That would be awesome. Come in my apartment, I can show you what's wrong.`, `Excited`)
            narrative(`<Actor.name> opened <Actor.his_or_her> apartment's door and invited me in to have a look at the laptop. <Actor.He_or_She> switched it on and showed me the issues.`)
            if (random(0, 100) < Player.intelligence) {
                narrative(`It turned out to be an easy fix and I managed to return <Actor.name>'s laptop to working condition in no time at all.`)
                Actor.rapportwithplayer += random(0, 3)
                Actor.attractionToPlayer += random(0, 3)
                Actor.dialogue(`Oh my god! You're a life saver. Please, would you stay for a drink or two? I don't know how else to thank you.`, `Happy`)
                option([
                    {text: `Stay`},
                    {text: `Leave`},
                ])
                if (0) {
                    Player.dialogue(`I'll be glad to stay for a drink.`, `Excited`)
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
                        ])
                        if (5) {
                            Player.dialogue(`Thank you for the drink, but I've got to go now.`, `Happy`)
                            Actor.dialogue(`Alright, thank you again for the laptop.`, `Happy`)
                            narrative(`We said goodbye and went our separate ways.`)
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
                                narrative(`Should I let this escalate further?`)
                                option([
                                    {text: `Make out`},
                                    {text: `Stop`},
                                ])
                                if (0) {
                                    if (Actor.isInterestedIn(Player) && (Actor.isDominantSex(Player) || Actor.attractionToPlayer + Actor.perversion > random(50, 200) || Actor.intoxication > 80)) {
                                        narrative(`Our kiss got more and more steamy and soon we were making out, our hands all over each other.`)
                                        hadSex = true
                                        Player.perversion += random(0, 1)
                                        scene.sex(Player, Actor)
                                        Actor.show(2)
                                        narrative(`The sex was amazing. We put our clothes back on afterwards and continued our date.`)
                                    } else {
                                        narrative(`Unfortunately for me, <Actor.name> didn't seem interested in letting things escalate any further and pulled away.`)
                                    }
                                } else {
                                    narrative(`I decided to stop it there and not go any further.`)
                                }
                            } else if (random(0, 100) < 20) {
                                Actor.dialogue(`I've gotta go somewhere in a minute. Do you mind ...`, `Happy`)
                                Player.dialogue(`Oh, no problem. See you around!`, `Happy`)
                                narrative(`We parted ways.`)
                                choice = 5
                            }
                        }
                    }
                } else {
                    Player.dialogue(`That's okay. I'm glad I was able to help. But I have some plans today that I'd better head to soon. Thanks for the offer though.`, `Happy`)
                }
            } else {
                narrative(`Unfortunately, I never managed to even figure out what the issue was and <Actor.name> had no choice but to take the laptop to a professional anyway.`)
            }
        } else {
            Player.dialogue(`I'm no good with a computer but maybe my <Actor2.boyfriend_or_girlfriend> can help.`)
            Actor.dialogue(`That's very kind of you two. I'll wait for <Actor2.name> to come over.`)


            narrative(`It's been a long time since <Actor2.name> came over to look into <Actor.name>'s computer. I wonder why it's taking so long, is the problem with the PC that serious?`)
            Actor.hide()
            Actor2.hide()


            narrative(`I'm feeling a bit uneasy, maybe I should have a look?`)
            option([
                {text: `Check`},
                {text: `Just wait`},
            ])
            if (0 && Actor.isInterestedIn(Actor2) && Actor2.isInterestedIn(Actor) && random(50, 100) < Actor2.perversion - Actor2.attractionToPlayer) {
                scene.sex(Actor, Actor2)
                Player.show(0)
                Actor.show(2)
                Actor.show(3)
                narrative(`Instead of fixing the computer, my <Actor2.boyfriend_or_girlfriend> is fucking the owner of the computer! Not sure how I feel about this?`)
                option([
                    {text: `Join them`},
                    {text: `Continue watching`},
                    {text: `Get angry`},
                ])
                if (0) {
                    Player.dialogue(`Mind if I join?`, `Flirty`)
                    scene.sex(Player, Actor2, Actor)
                } else if (1) {
                    scene.sex(Actor, Actor2)
                } else {
                    Player.dialogue(`How dare you! You took advantage of my kindness to seduce my <Actor2.boyfriend_or_girlfriend>?`, `Angry`)
                    Actor2.attractionToPlayer -= 20
                }
            } else {
                narrative(`A while later ...`)
                Actor.show(2)
                Actor.dialogue(`Thank you so much. <Actor2.name> is very skilled with computers indeed. <Actor2.He_or_She> managed to fix the problem.`, `Happy`)
            }
        }


    })
    scene.timeout(1000, "neighbour_fixes", "family_fixes")
})
module.exports = scene