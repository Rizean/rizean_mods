// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\social\house_party.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'house_party'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, timePassed} = scene

    scene.what(["all", " -sleep", " -sleep_hotel", " -organize_a_house_party"])
    scene.where(["all"])
    scene.when([18, 22])
    let Host = scene.getPerson("true")
    scene.who(($IF) => {
        Host = scene.getPerson("true")
        $IF(Host.rapportwithplayer > random(0, 20))
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && random(0, 1) < Player.interpersonal / 500)
    })


    let PlayerHosting = scene.forcedTrigger()
    PlayerHosting = scene.forcedTrigger()


    scene.start(() => {
        let Guest1 = Player.getSelectedNPC()
        let Guest2 = Player.getSelectedNPC()
        let Guest3 = Player.getSelectedNPC()
        let Guest4 = Player.getSelectedNPC()
        let Guest5 = Player.getSelectedNPC()
        let Accepted = true
        let Loc = Host.getBuilding("home")
        let PartyOngoing = true
        let Drank = false
        let SitWith = Guest1
        let KissBack = false


        if (PlayerHosting) {
            narrative(`Should I hand-pick guests for the party? Or should I just make a public event on Facebook that allows my friends to bring their friends along?`)
            option([
                {text: `Hand-pick guests`},
                {text: `I'd rather meet new people`},
            ])
            if (0) {
                narrative(`Who should be my first guest?`)
                Player.selectNPC()
                Guest1 = Player.getSelectedNPC()
                if (!Guest1.isValid()) {
                    narrative(`I can't quite decide on who to invite.`)
                } else if (Guest1.rapportwithplayer > 0 || Guest1.attractionToPlayer > 0) {
                    Guest1.hide()
                    narrative(`<Guest1.name> happily accepted my invitation.`)
                } else {
                    Guest1.hide()
                    narrative(`<Guest1.name> turned down my invitation. Oh well ...`)
                    Guest1.delete()
                }


                narrative(`Who else should I invite?`)
                Player.selectNPC()
                Guest2 = Player.getSelectedNPC()
                if (!Guest2.isValid()) {
                    narrative(`I can't quite decide on who to invite.`)
                } else if (Guest2.rapportwithplayer > 0 || Guest2.attractionToPlayer > 0) {
                    Guest2.hide()
                    narrative(`<Guest2.name> happily accepted my invitation.`)
                } else {
                    Guest2.hide()
                    narrative(`<Guest2.name> turned down my invitation. Oh well ...`)
                    Guest2.delete()
                }


                narrative(`Who else should I invite?`)
                Player.selectNPC()
                Guest3 = Player.getSelectedNPC()
                if (!Guest3.isValid()) {
                    narrative(`I can't quite decide on who to invite.`)
                } else if (Guest3.rapportwithplayer > 0 || Guest3.attractionToPlayer > 0) {
                    Guest3.hide()
                    narrative(`<Guest3.name> happily accepted my invitation.`)
                } else {
                    Guest3.hide()
                    narrative(`<Guest3.name> turned down my invitation. Oh well ...`)
                    Guest3.delete()
                }


                narrative(`Who else should I invite?`)
                Player.selectNPC()
                Guest4 = Player.getSelectedNPC()
                if (!Guest4.isValid()) {
                    narrative(`I can't quite decide on who to invite.`)
                } else if (Guest4.rapportwithplayer > 0 || Guest4.attractionToPlayer > 0) {
                    Guest4.hide()
                    narrative(`<Guest4.name> happily accepted my invitation.`)
                } else {
                    Guest4.hide()
                    narrative(`<Guest4.name> turned down my invitation. Oh well ...`)
                    Guest4.delete()
                }


                narrative(`Who else should I invite?`)
                Player.selectNPC()
                Guest5 = Player.getSelectedNPC()
                if (!Guest5.isValid()) {
                    narrative(`I can't quite decide on who to invite.`)
                } else if (Guest5.rapportwithplayer > 0 || Guest5.attractionToPlayer > 0) {
                    Guest5.hide()
                    narrative(`<Guest5.name> happily accepted my invitation.`)
                } else {
                    Guest5.hide()
                    narrative(`<Guest5.name> turned down my invitation. Oh well ...`)
                    Guest5.delete()
                }
            }
            scene.setBackgroundCustom("livingroom")
            narrative(`My preparations are all done. It's time to welcome the guests!`)
            Player.dialogue(`Come in, everyone! Don't be shy. Everything's ready.`, `Happy`)
        } else {
            narrative(`My phone rang! It's <Host.name>. I wonder what <Host.he_or_she> is calling me for?`)
            scene.secondScreen(Host)
            Host.dress()
            Host.show(2)
            Host.dialogue(`Hey, <Player.name>. We're having a house party tonight. Do you want to come?`, `Excited`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (0) {
                Accepted = true
                Player.dialogue(`Of course. Count me in! I can't wait for the party to start ...`, `Excited`)
                Host.dialogue(`Glad to hear. See you soon then!`, `Happy`)
                narrative(`A while later ...`)
                Loc = Host.getBuilding("home")
                Player.moveTo(Loc)
                scene.setBackgroundCustom("livingroom")
                scene.secondScreen()
                Host.show()
                Player.dress()
                Host.dialogue(`Come in, everyone! Don't be shy. Everything's ready.`, `Happy`)
            } else {
                Accepted = false
                Player.dialogue(`I'm busy tonight I'm afraid. You guys have fun though ...`, `Sad`)
                Host.dialogue(`Oh, that's a shame. Maybe next time then.`, `Sad`)
            }
        }


        if (PlayerHosting || Accepted) {
            if (!Guest1.isValid()) {
                scene.$random(() => {
                    Guest1 = scene.getPerson()
                    Guest1 = scene.generatePerson()
                })
                if (!Guest1.isValid()) {
                    Guest1 = scene.generatePerson()
                }
            }
            Guest1.dress()
            narrative(`<Guest1.name> showed up.`)
            Guest1.show(1)


            if (!Guest2.isValid()) {
                scene.$random(() => {
                    Guest2 = scene.getPerson()
                    Guest2 = scene.generatePerson()
                })
                if (!Guest2.isValid()) {
                    Guest2 = scene.generatePerson()
                }
            }
            Guest2.dress()
            narrative(`<Guest2.name> came in.`)
            Guest2.show(2)


            if (!Guest3.isValid()) {
                scene.$random(() => {
                    Guest3 = scene.getPerson()
                    Guest3 = scene.generatePerson()
                })
                if (!Guest3.isValid()) {
                    Guest3 = scene.generatePerson()
                }
            }
            Guest3.dress()
            narrative(`<Guest3.name> arrived.`)
            Guest3.show(3)


            if (!Guest4.isValid()) {
                scene.$random(() => {
                    Guest4 = scene.getPerson()
                    Guest4 = scene.generatePerson()
                })
                if (!Guest4.isValid()) {
                    Guest4 = scene.generatePerson()
                }
            }
            Guest4.dress()
            narrative(`Another guest invited was <Guest4.name>.`)
            Guest4.show(4)


            if (!Guest5.isValid()) {
                scene.$random(() => {
                    Guest5 = scene.getPerson()
                    Guest5 = scene.generatePerson()
                })
                if (!Guest5.isValid()) {
                    Guest5 = scene.generatePerson()
                }
            }
            Guest5.dress()
            narrative(`<Guest5.name> was the final guest to arrive at the party.`)
            Guest5.show(5)


            narrative(`Everyone is here now. The party has started!`)


            PartyOngoing = true
            while (PartyOngoing) {
                scene.passTime(0.2, 0.6)
                Drank = false
                Guest1.intoxication += random(0, 10)
                Guest2.intoxication += random(0, 10)
                Guest3.intoxication += random(0, 10)
                Guest4.intoxication += random(0, 10)
                Guest5.intoxication += random(0, 10)
                if (!PlayerHosting) {
                    Host.intoxication += random(0, 10)
                }


                narrative(`What should I do now?`)
                option([
                    {text: `Drink alcohol`},
                    {text: `Sit with <Guest1.name>`},
                    {text: `Sit with <Guest2.name>`},
                    {text: `Sit with <Guest3.name>`},
                    {text: `Sit with <Guest4.name>`},
                    {text: `Sit with <Guest5.name>`},
                    {text: `Sit with the host`, condition: !PlayerHosting},
                    {text: `End the party`, condition: PlayerHosting && timePassed > 1},
                ])
                if (0) {
                    Player.intoxication += random(0, 15)
                    narrative(`I poured myself a drink and enjoyed it thoroughly.`)
                } else if (7) {
                    narrative(`As the host, I decided that the party had run its course and ended it. Everyone promptly left ...`)
                    PartyOngoing = false
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
                    } else if (6) {
                        SitWith = Host
                    }


                    Player.moveToPerson(SitWith)
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
                        Player.intoxication += random(0, 15)
                        SitWith.intoxication += random(0, 15)
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
                            scene.option([
                                {text: `Have sex right here`, condition: (PlayerHosting || SitWith.isSameAs(Host) || scene.isModEnabled("vin_VanillaPorn"))},
                                {text: `Invite <SitWith.him_or_her> home`, condition: !PlayerHosting && !SitWith.isSameAs(Host)},
                                {text: `Stop it there`},
                            ])
                            if (0) {
                                narrative(`I needed to feel <SitWith.him_or_her> right here, right now.`)
                                narrative(`We dragged each other to the bedroom and started making out intensely. Things were escalating quickly ...`)
                                Player.perversion += random(0, 0.2)
                                scene.sex(SitWith, Player)
                                SitWith.show(2)
                                narrative(`The sex was amazing. We put our clothes back on and went back to rejoin the party. We must have made plenty of noises, the look on everyone's faces suggested as much.`)
                            } else if (1) {
                                narrative(`As much as I'd love to have <SitWith.him_or_her> right here. It was not my house and I didn't want to upset <Host.name>.`)
                                Player.dialogue(`Hey, not here. Let's go back to my place ...`, `Flirty`)
                                SitWith.dialogue(`Of course, let's go!`, `Excited`)
                                narrative(`We excused ourselves from the party and started heading back to my apartment. Our feet were very eager indeed.`)
                                scene.setBackground("street")
                                narrative(`A while later ...`)
                                scene.passTime(0.2, 1)
                                Player.moveTo("Home")
                                scene.setBackground("home")
                                narrative(`As soon as we were inside, our hands were all over each other and we started passionately making out.`)
                                Player.perversion += random(0, 0.2)
                                scene.sex(SitWith, Player)
                                narrative(`The sex was amazing. <SitWith.name> excused <SitWith.himself_or_herself> after we were done and I went to bed ... At least we didn't do it in front of everyone.`)
                                PartyOngoing = false
                            } else {
                                narrative(`I enjoyed the kiss but didn't feel like going any further ...`)
                            }
                        }
                    }
                }


                if (PartyOngoing && timePassed > random(2.5, 5)) {
                    narrative(`It was getting very late. The party wound down and everyone left ...`)
                    PartyOngoing = false
                }
            }
            scene.timeout(72, "house_party")
        } else {
            scene.timeout(24, "house_party")
        }
    })
})
module.exports = scene