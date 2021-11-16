// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\frat_party.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'frat_party'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, timePassed} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["fraternity"])
    scene.when([18, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Guest1 = scene.getSpecific("Student")
        let Guest2 = scene.getSpecific("Student")
        let Guest3 = scene.getSpecific("Student")
        let Guest4 = scene.getSpecific("Student")
        let Guest5 = scene.getSpecific("Student")
        let PartyOngoing = true
        let Drank = false
        let SitWith = Guest1
        let KissBack = false
        narrative(`My <Player.fraternity_or_sorority> is throwing another party tonight. The <Player.girls_or_guys> from the <Player.sorority_or_fraternity> down the road are invited. Should I join my <Player.brothers_or_sisters>?`)
        option([
            {text: `Of course`},
            {text: `Chicken out`},
        ])
        if (0) {
            Guest1 = scene.getSpecific("Student")
            if (!Guest1.isValid() || Guest1.isSameGender(Player)) {
                Guest1 = scene.generatePersonTemporary([])
                while (Guest1.isSameGender(Player)) {
                    Guest1 = scene.generatePersonTemporary([])
                }
                Guest1.makePermanent()
                Guest1.age = random(18, 22)
                Guest1.randomizeHairs()
                Guest1.randomizeFace()
                Guest1.setDifferentMajor()
            }
            Guest1.dress()
            narrative(`<Guest1.name> showed up.`)
            Guest1.show(1)


            Guest2 = scene.getSpecific("Student")
            if (!Guest2.isValid() || Guest2.isSameGender(Player)) {
                Guest2 = scene.generatePersonTemporary([])
                while (Guest2.isSameGender(Player)) {
                    Guest2 = scene.generatePersonTemporary([])
                }
                Guest2.makePermanent()
                Guest2.age = random(18, 22)
                Guest2.randomizeHairs()
                Guest2.randomizeFace()
                Guest2.setDifferentMajor()
            }
            Guest2.dress()
            narrative(`<Guest2.name> came in.`)
            Guest2.show(2)


            Guest3 = scene.getSpecific("Student")
            if (!Guest3.isValid() || Guest3.isSameGender(Player)) {
                Guest3 = scene.generatePersonTemporary([])
                while (Guest3.isSameGender(Player)) {
                    Guest3 = scene.generatePersonTemporary([])
                }
                Guest3.makePermanent()
                Guest3.age = random(18, 22)
                Guest3.randomizeHairs()
                Guest3.randomizeFace()
                Guest3.setDifferentMajor()
            }
            Guest3.dress()
            narrative(`<Guest3.name> arrived.`)
            Guest3.show(3)


            Guest4 = scene.getSpecific("Student")
            if (!Guest4.isValid() || Guest4.isSameGender(Player)) {
                Guest4 = scene.generatePersonTemporary([])
                while (Guest4.isSameGender(Player)) {
                    Guest4 = scene.generatePersonTemporary([])
                }
                Guest4.makePermanent()
                Guest4.age = random(18, 22)
                Guest4.randomizeHairs()
                Guest4.randomizeFace()
                Guest4.setDifferentMajor()
            }
            Guest4.dress()
            narrative(`Another guest invited was <Guest4.name>.`)
            Guest4.show(4)


            Guest5 = scene.getSpecific("Student")
            if (!Guest5.isValid() || Guest5.isSameGender(Player)) {
                Guest5 = scene.generatePersonTemporary([])
                while (Guest5.isSameGender(Player)) {
                    Guest5 = scene.generatePersonTemporary([])
                }
                Guest5.makePermanent()
                Guest5.age = random(18, 22)
                Guest5.randomizeHairs()
                Guest5.randomizeFace()
                Guest5.setDifferentMajor()
            }
            Guest5.dress()
            narrative(`<Guest5.name> was the final guest to arrive at the party.`)
            Guest5.show(5)


            narrative(`Everyone is here now. The party has started!`)


            Guest1.hide()
            Guest2.hide()
            Guest3.hide()
            Guest4.hide()
            Guest5.hide()


            PartyOngoing = true
            while (PartyOngoing) {
                scene.passTime(0.15, 0.5)
                Drank = false
                Guest1.intoxication += random(0, 20)
                Guest2.intoxication += random(0, 20)
                Guest3.intoxication += random(0, 20)
                Guest4.intoxication += random(0, 20)
                Guest5.intoxication += random(0, 20)


                narrative(`What should I do now?`)
                option([
                    {text: `Drink alone`},
                    {text: `Stand with <Guest1.name>`},
                    {text: `Stand with <Guest2.name>`},
                    {text: `Stand with <Guest3.name>`},
                    {text: `Stand with <Guest4.name>`},
                    {text: `Stand with <Guest5.name>`},
                ])
                if (0) {
                    Player.intoxication += random(0, 25)
                    narrative(`I poured myself a drink and enjoyed it thoroughly.`)
                } else {
                    if (1) {
                        SitWith = Guest1
                    } else if (2) {
                        SitWith = Guest2
                    } else if (3) {
                        SitWith = Guest3
                    } else if (4) {
                        SitWith = Guest4
                    } else if (5) {
                        SitWith = Guest5
                    }


                    SitWith.show(2)
                    narrative(`I spent some time chatting with <SitWith.name>`)
                    if (SitWith.isInterestedIn(Player) && random(0, 100) < Player.attractiveness) {
                        SitWith.attractionToPlayer += random(-1, 2)
                    } else {
                        SitWith.rapportwithplayer += random(-1, 2)
                    }


                    if (!SitWith.isContactExchanged()) {
                        if ((SitWith.isDominantSex(Player) || !SitWith.isInterestedIn(Player)) && (SitWith.attractionToPlayer > random(0, 30) || SitWith.rapportwithplayer > random(0, 30))) {
                            SitWith.dialogue(`Hey, I just realized I didn't have your number. Do you mind ...`, `Happy`)
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
                                Player.dialogue(`You know what? Let's exchange numbers so that we can keep in touch after the party.`, `Happy`)
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
                        Player.intoxication += random(0, 30)
                        SitWith.intoxication += random(0, 30)
                    }


                    if (SitWith.isInterestedIn(Player) && Player.isInterestedIn(SitWith) && (SitWith.attractionToPlayer > 50 || Player.intoxication > 70)) {
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
                                if (SitWith.intoxication > random(50, 100) || (SitWith.attractionToPlayer > random(0, 100) && SitWith.perversion > random(0, 100))) {
                                    SitWith.dialogue(`...`, `Kiss`)
                                    narrative(`Wow, that's quite a pleasant surprise. <SitWith.name> was totally receptive to my advance. In fact, <SitWith.he_or_she> certainly showed that <SitWith.he_or_she> wanted something more ...`)
                                    KissBack = true
                                } else {
                                    narrative(`<SitWith.name> pulled away from my advances. Embarrassed, I retreated, pretending for the rest of the party as if nothing happened ...`)
                                }
                            } else {
                                narrative(`Perhaps not ... It would be extremely embarrassing to be rejected in front of everyone.`)
                            }
                        }


                        if (KissBack) {
                            Player.dialogue(`...`, `Kiss`)
                            narrative(`I responded in kind and we indulged ourselves in a passionate kiss.`)
                            SitWith.attractionToPlayer += random(0, 1)
                            option([
                                {text: `Take <SitWith.name> to bed`},
                                {text: `Stop it there`},
                            ])
                            if (0) {
                                narrative(`I needed to feel <SitWith.him_or_her> right here, right now.`)
                                narrative(`We dragged each other to the bedroom and started making out intensely. Things were escalating quickly ...`)
                                Player.perversion += random(0, 0.2)
                                scene.sex(SitWith, Player)
                                SitWith.show(2)
                                narrative(`The sex was amazing. We put our clothes back on and went back to rejoin the party. We must have made plenty of noises, the look on everyone else's faces suggested as much. Some of my <Player.brothers_or_sisters> were winking at me as a sign of approval.`)
                            } else {
                                narrative(`I enjoyed the kiss but didn't feel like going any further ...`)
                            }
                        }
                    }


                    SitWith.hide()
                }


                if (PartyOngoing && timePassed > random(2.5, 5)) {
                    narrative(`It was getting very late. The party wound down and everyone left ...`)
                    PartyOngoing = false
                }
            }
        }
    })
    scene.timeout(100, "frat_party")


})
module.exports = scene