// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\neighbourhood_bbq.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'neighbourhood_bbq'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, timePassed} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([11, 19])
    let Actor1 = scene.getSpecific("Neighbour")
    scene.who(($IF) => {
        Actor1 = scene.getSpecific("Neighbour")
        $IF(Actor1.rapportwithplayer > random(0, 30))
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && random(0, 500) < Player.interpersonal)
    })


    scene.start(() => {
        let Actor2 = scene.getSpecific("Neighbour")
        let Actor3 = scene.getSpecific("Neighbour")
        let Actor4 = scene.getSpecific("Neighbour")
        let Actor5 = scene.generatePerson()
        let PartyOngoing = true
        let Drank = false
        let SitWith = Actor1
        let KissBack = false
        scene.secondScreen(Actor1)
        Actor1.dress()
        Actor1.show(2)


        Actor1.dialogue(`<Player.name>, the weather is lovely today, isn't it? Listen, a few of us in the building and in the neighbourhood are having a BBQ outside in the lawn. Fancy joining?`, `Happy`)
        option([
            {text: `Join them`},
            {text: `Decline`},
        ])
        if (0) {
            Player.dialogue(`Of course I'll join you. Sounds like fun. I'll see you guys downstairs.`, `Excited`)
            Actor1.dialogue(`Excellent. I'll see you soon then!`, `Excited`)
            scene.secondScreen()


            Actor2 = scene.getSpecific("Neighbour")
            if (!Actor2.isValid()) {
                Actor2 = scene.generatePerson()
                Actor2.addNeighbour()
            }
            Actor2.dress()


            Actor3 = scene.getSpecific("Neighbour")
            if (!Actor3.isValid()) {
                Actor3 = scene.generatePerson()
                Actor3.addNeighbour()
            }
            Actor3.dress()


            Actor4 = scene.getSpecific("Neighbour")
            if (!Actor4.isValid()) {
                Actor4 = scene.generatePerson()
                Actor4.addNeighbour()
            }
            Actor4.dress()


            Actor5 = scene.generatePerson()
            Actor5.addNeighbour()
            Actor5.dress()


            narrative(`A few minutes later ...`)
            scene.setBackground("street")


            Actor1.show(1)
            Actor2.show(2)
            Actor3.show(3)
            Actor4.show(4)
            Actor5.show(5)


            Actor1.dialogue(`<Player.name>! We're here. Come!`, `Excited`)
            Player.dialogue(`Sorry I'm late, had to finish a few things first ...`, `Happy`)
            narrative(`My other neighbours, <Actor2.name>, <Actor3.name>, <Actor4.name> and <Actor5.name>, are all here too! This will be a good way to get to know them better.`)


            PartyOngoing = true
            while (PartyOngoing) {
                scene.passTime(0.5, 1.5)
                Drank = false
                Actor1.intoxication += random(0, 10)
                Actor2.intoxication += random(0, 10)
                Actor3.intoxication += random(0, 10)
                Actor4.intoxication += random(0, 10)
                Actor5.intoxication += random(0, 10)


                narrative(`What should I do now?`)
                option([
                    {text: `Drink beer`},
                    {text: `Chat with <Actor1.name>`},
                    {text: `Chat with <Actor2.name>`},
                    {text: `Chat with <Actor3.name>`},
                    {text: `Chat with <Actor4.name>`},
                    {text: `Chat with <Actor5.name>`},
                    {text: `Leave`, condition: timePassed > 1},
                ])
                if (0) {
                    Player.intoxication += random(0, 15)
                    Player.money -= random(3, 10)
                    narrative(`I got myself a beer and drank it down with some tasty BBC.`)
                } else if (6) {
                    Player.dialogue(`Sorry guys, I think it's about time that I go now!`, `Happy`)
                    Actor1.dialogue(`Alright, we'll see you around!`, `Happy`)
                    PartyOngoing = false
                } else {
                    if (1) {
                        SitWith = Actor1
                    } else if (2) {
                        SitWith = Actor2
                    } else if (3) {
                        SitWith = Actor3
                    } else if (4) {
                        SitWith = Actor4
                    } else if (5) {
                        SitWith = Actor5
                    }


                    Player.moveToPerson(SitWith)
                    narrative(`I spent some time chatting with <SitWith.name>, while enjoying some nice BBQ.`)
                    if (SitWith.isInterestedIn(Player) && random(0, 100) < Player.attractiveness) {
                        SitWith.attractionToPlayer += random(-1, 2)
                    } else {
                        SitWith.rapportwithplayer += random(-1, 2)
                    }


                    if (!SitWith.isContactExchanged()) {
                        if ((SitWith.isDominantSex(Player) || !SitWith.isInterestedIn(Player)) && (SitWith.attractionToPlayer > random(20, 60) || SitWith.rapportwithplayer > random(20, 60))) {
                            SitWith.dialogue(`Hey, I just realized I didn't have your personal number. Do you mind ...`, `Happy`)
                            option([
                                {text: `Exchange contacts`},
                                {text: `Sorry but no`},
                            ])
                            if (0) {
                                Player.dialogue(`Of course! Let's exchange numbers!`, `Excited`)
                                Player.exchangeContact(SitWith)
                                SitWith.rapportwithplayer += random(0, 5)
                            } else {
                                Player.dialogue(`I'm afraid I don't know you well enough yet for that.`, `Sad`)
                                SitWith.rapportwithplayer -= random(0, 3)
                            }
                        } else {
                            narrative(`Should I ask <SitWith.name> for <SitWith.his_or_her> number?`)
                            option([
                                {text: `Ask for <SitWith.his_or_her> number`},
                                {text: `Maybe not`},
                            ])
                            if (0) {
                                Player.dialogue(`You know what? Let's exchange numbers. You never know when you'll need your neighbour.`, `Happy`)
                                if (SitWith.attractionToPlayer > random(0, 30) || SitWith.rapportwithplayer > random(0, 30) || SitWith.intoxication > random(50, 100)) {
                                    SitWith.dialogue(`Of course! Let's exchange numbers!`, `Excited`)
                                    Player.exchangeContact(SitWith)
                                } else {
                                    SitWith.dialogue(`I'm afraid I don't know you well enough yet for that. Maybe next time.`, `Sad`)
                                }
                            } else {
                                narrative(`Not yet. I want to get to know <SitWith.name> a bit better first ...`)
                            }
                        }
                    }


                    if (random(0, 100) < SitWith.perversion + SitWith.attractionToPlayer + SitWith.rapportwithplayer) {
                        narrative(`<SitWith.name> offered me another beer. Shall I?`)
                    } else {
                        narrative(`Should I offer <SitWith.name> a beer?`)
                    }
                    narrative(`Have another beer?`)
                    option([
                        {text: `Yes`},
                        {text: `No`},
                    ])
                    if (0) {
                        Player.intoxication += random(0, 15)
                        SitWith.intoxication += random(0, 15)
                    }


                    if (SitWith.isInterestedIn(Player) && Player.isInterestedIn(SitWith) && (SitWith.attractionToPlayer > 70 || Player.intoxication > 90)) {
                        KissBack = false


                        if (SitWith.isDominantSex(Player) && SitWith.perversion + SitWith.attractionToPlayer > random(0, 200)) {
                            narrative(`All of a sudden, <SitWith.name> grabbed me and leaned in for a kiss`)
                            Player.animatePair(Player, SitWith, "Kissing")
                            SitWith.dialogue(`...`, `Kiss`)
                            option([
                                {text: `Kiss back`},
                                {text: `Turn <SitWith.him_or_her> down`},
                            ])
                            if (0) {
                                KissBack = true
                            } else {
                                narrative(`I pulled myself away from <SitWith.him_or_her>. <SitWith.He_or_She> was visibly embarrassed.`)
                                SitWith.attractionToPlayer -= random(0, 1)
                            }
                        } else {
                            narrative(`From the way <SitWith.name> was checking me out, I could tell that <SitWith.he_or_she> was totally into me. Should I make my move now and kiss <SitWith.him_or_her>?`)


                            option([
                                {text: `Kiss <SitWith.name>`},
                                {text: `Maybe not`},
                            ])
                            if (0) {
                                Player.animatePair(Player, SitWith, "Kissing")
                                Player.dialogue(`...`, `Kiss`)
                                if (SitWith.intoxication > random(70, 100) || (SitWith.attractionToPlayer > random(30, 100) && SitWith.perversion > random(30, 100))) {
                                    SitWith.dialogue(`...`, `Kiss`)
                                    narrative(`Wow, that's quite a pleasant surprise. <SitWith.name> was totally receptive to my advance. In fact, <SitWith.he_or_she> certainly showed that <SitWith.he_or_she> wanted something more ...`)
                                    KissBack = true
                                } else {
                                    narrative(`<SitWith.name> pulled away from my advances. Embarrassed, I retreated, pretending for the rest of the drinks as if nothing happened ...`)
                                }
                            } else {
                                narrative(`Perhaps not ... It would be extremely embarassing to be rejected in front of all my neighbours.`)
                            }
                        }


                        if (KissBack) {
                            Player.dialogue(`...`, `Kiss`)
                            narrative(`I responded in kind and we indulged ourselves in a passionate kiss.`)
                            SitWith.attractionToPlayer += random(0, 1)
                            option([
                                {text: `Invite <SitWith.him_or_her> home`},
                                {text: `Stop it there`},
                            ])
                            if (0) {
                                Player.dialogue(`Let's go back to my place ...`, `Flirty`)
                                SitWith.dialogue(`Of course, let's go!`, `Excited`)
                                narrative(`We excused ourselves from the BBQ, trying to raise as little suspicions as possible and started heading back to my apartment. It was only a short walk.`)
                                scene.setBackground("home")
                                narrative(`As soon as we were inside, our hands were all over each other and a passionate makeout started.`)
                                Player.perversion += random(0, 0.2)
                                scene.sex(SitWith, Player)
                                SitWith.hide()
                                narrative(`The sex was amazing. <SitWith.name> excused <SitWith.himself_or_herself> after we were done ... At least we didn't do it in front of everyone.`)
                                PartyOngoing = false
                            } else {
                                narrative(`I enjoyed the kiss but didn't feel like going any further ...`)
                            }
                        }
                    }


                }


                if (PartyOngoing && timePassed > random(1, 4)) {
                    narrative(`It was getting very late. Eventually, each person made their excuse to leave and the BBQ ended. It was a fun way to get to know my neighbours on a more personal level ...`)
                    PartyOngoing = false
                }
            }
        } else {
            Player.dialogue(`I'd love to, but I'm afraid I have other plans already today. Maybe next time.`, `Sad`)
        }


        scene.timeout(300, "neighbourhood_bbq")
    })
})
module.exports = scene