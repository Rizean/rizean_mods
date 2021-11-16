// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\afterwork_drinks.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'afterwork_drinks'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, actionDuration, timePassed} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([17, 21])
    let Colleague1 = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague1 = scene.getSpecific("Colleague")
        $IF(Colleague1.rapportwithplayer > 0)
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && random(0, 500) < Player.interpersonal * actionDuration)
    })


    scene.start(() => {
        let Colleague2 = scene.getSpecific("Colleague")
        let Colleague3 = scene.getSpecific("Colleague")
        let Colleague4 = scene.getSpecific("Colleague")
        let Colleague5 = scene.generatePerson()
        let PartyOngoing = true
        let Drank = false
        let SitWith = Colleague1
        let KissBack = false
        scene.setBackground("work")
        Colleague1.dress()
        Colleague1.show(2)


        Colleague1.dialogue(`<Player.name>! What are you doing still in the office this late in the evening?`, `Sarcastic`)
        Colleague1.dialogue(`Listen, a few of us are going to a bar nearby for a few drinks after work. Fancy coming? Work can wait till tomorrow - It's not like the boss is here to check on you.`, `Happy`)
        option([
            {text: `Join them`},
            {text: `Decline`},
        ])
        if (0) {
            Player.dialogue(`Of course I'll join you. Sounds like fun. I'll just wrap up quickly and see you guys there.`, `Excited`)
            Colleague1.dialogue(`Excellent. I'll see you there then!`, `Excited`)
            Colleague1.hide()


            Colleague2 = scene.getSpecific("Colleague")
            if (!Colleague2.isValid()) {
                Colleague2 = scene.generatePerson()
                Colleague2.addColleague()
            }
            Colleague2.dress()


            Colleague3 = scene.getSpecific("Colleague")
            if (!Colleague3.isValid()) {
                Colleague3 = scene.generatePerson()
                Colleague3.addColleague()
            }
            Colleague3.dress()


            Colleague4 = scene.getSpecific("Colleague")
            if (!Colleague4.isValid()) {
                Colleague4 = scene.generatePerson()
                Colleague4.addColleague()
            }
            Colleague4.dress()


            Colleague5 = scene.generatePerson()
            Colleague5.addColleague()
            Colleague5.dress()


            narrative(`A few minutes later ...`)
            scene.setBackground("bar")


            Colleague1.show(1)
            Colleague2.show(2)
            Colleague3.show(3)
            Colleague4.show(4)
            Colleague5.show(5)


            Colleague1.dialogue(`<Player.name>! We're here. Come!`, `Excited`)
            Player.dialogue(`Sorry I'm late, had to finish a few things first ...`, `Happy`)
            narrative(`My other colleagues, <Colleague2.name>, <Colleague3.name>, <Colleague4.name> and <Colleague5.name>, are all here too! This will be a good way to get to know them better.`)


            Colleague1.hide()
            Colleague2.hide()
            Colleague3.hide()
            Colleague4.hide()
            Colleague5.hide()


            PartyOngoing = true
            while (PartyOngoing) {
                scene.passTime(0.5, 1.5)
                Drank = false
                Colleague1.intoxication += random(0, 10)
                Colleague2.intoxication += random(0, 10)
                Colleague3.intoxication += random(0, 10)
                Colleague4.intoxication += random(0, 10)
                Colleague5.intoxication += random(0, 10)


                narrative(`What should I do now?`)
                option([
                    {text: `Drink alcohol`},
                    {text: `Chat with <Colleague1.name>`},
                    {text: `Chat with <Colleague2.name>`},
                    {text: `Chat with <Colleague3.name>`},
                    {text: `Chat with <Colleague4.name>`},
                    {text: `Chat with <Colleague5.name>`},
                    {text: `Leave`, condition: timePassed > 1},
                ])
                if (0) {
                    Player.intoxication += random(0, 15)
                    Player.money -= random(3, 10)
                    narrative(`I got myself a drink from the bar and enjoyed it thoroughly.`)
                } else if (6) {
                    Player.dialogue(`Sorry guys, I think it's about time that I go now. Don't want to have a hangover tomorrow morning!`, `Happy`)
                    Colleague1.dialogue(`Alright, have a safe journey home. Thanks for coming out with us!`, `Happy`)
                    PartyOngoing = false
                } else {
                    if (1) {
                        SitWith = Colleague1
                    } else if (2) {
                        SitWith = Colleague2
                    } else if (3) {
                        SitWith = Colleague3
                    } else if (4) {
                        SitWith = Colleague4
                    } else if (5) {
                        SitWith = Colleague5
                    }


                    SitWith.show(2)
                    narrative(`I spent some time chatting with <SitWith.name>`)
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
                                Player.dialogue(`I'm afraid I don't know you well enough yet for that. I tend to keep work and personal life separate.`, `Sad`)
                                SitWith.rapportwithplayer -= random(0, 3)
                            }
                        } else {
                            narrative(`Should I ask <SitWith.name> for <SitWith.his_or_her> number?`)
                            option([
                                {text: `Ask for <SitWith.his_or_her> number`},
                                {text: `Maybe not`},
                            ])
                            if (0) {
                                Player.dialogue(`You know what? Let's exchange numbers so that we can hang out outside of work.`, `Happy`)
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
                        narrative(`<SitWith.name> offered me another drink. Shall I?`)
                    } else {
                        narrative(`Should I offer <SitWith.name> a drink?`)
                    }
                    narrative(`Have another drink?`)
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
                            Player.animatePair(Player, SitWith, "Kissing")
                            narrative(`All of a sudden, <SitWith.name> grabbed me and leaned in for a kiss`)
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
                                narrative(`Perhaps not ... It would be extremely embarrassing to be rejected in front of everyone from work. I wouldn't want to come in the office afterwards.`)
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
                                narrative(`As much as I'd love to have <SitWith.him_or_her> right here, it would be extremely unprofessional and I don't want to be the center of office gossip tomorrow.`)
                                Player.dialogue(`Let's go back to my place ...`, `Flirty`)
                                SitWith.dialogue(`Of course, let's go!`, `Excited`)
                                narrative(`We excused ourselves from the party, trying to raise as little suspicions as possible that we were going home together, and started heading back to my apartment. Our feet were very eager indeed.`)
                                scene.setBackground("street")
                                narrative(`A while later ...`)
                                scene.passTime(0.2, 1)
                                Player.moveTo("Home")
                                scene.setBackground("home")
                                narrative(`As soon as we were inside, our hands were all over each other and we started passionately making out.`)
                                Player.perversion += random(0, 0.2)
                                scene.sex(SitWith, Player)
                                SitWith.hide()
                                narrative(`The sex was amazing. <SitWith.name> excused <SitWith.himself_or_herself> after we were done and I went to bed ... At least we didn't do it in front of everyone.`)
                                PartyOngoing = false
                            } else {
                                narrative(`I enjoyed the kiss but didn't feel like going any further ...`)
                            }
                        }
                    }


                    SitWith.hide()
                }


                if (PartyOngoing && timePassed > random(1, 4)) {
                    narrative(`It was getting very late. Eventually, each person made their excuse to leave. It was a fun way to get to know my colleagues on a more personal level ...`)
                    PartyOngoing = false
                }
            }
        } else {
            Player.dialogue(`I still have plenty that I have to finish tonight, I'm afraid. You guys go have fun though!`, `Sad`)
        }


        scene.timeout(168, "afterwork_drinks")
    })
})
module.exports = scene