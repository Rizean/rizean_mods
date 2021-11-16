// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\crime\prison_warden_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'prison_warden_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, timePassed, choice} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Actor = scene.getPerson("tag_warden")
        let Fired = false
        let gender = 1
        let Actor2 = scene.generatePersonTemporary([])
        let Colleague1 = Actor
        let Colleague2 = scene.getPerson("tag_warden")
        let Colleague3 = scene.getPerson("tag_warden")
        let Colleague4 = scene.getPerson("tag_warden")
        let Colleague5 = scene.getPerson("tag_warden")
        let PartyOngoing = true
        let Drank = false
        let SitWith = Colleague1
        let KissBack = false
        let Actor3 = scene.generateCreatureTemporary("Dog")
        let count = 0
        scene.setBackground("police")
        Actor = scene.getPerson("tag_warden")
        if (scene.isTimingOut("prison_warden_cms")) {
            narrative(`I'm currently suspended from my prison warden job. I will have to wait a bit more before returning to work.`)
        } else if (Actor.isValid()) {
            Fired = false
            Player.money += 100
            narrative(`Which section of the prison should I patrol today?`)
            option([
                {text: `Men's`},
                {text: `Women's`},
            ])
            gender = 1
            if (0) {
                gender = 0
            }
            if (Actor.perversion > 50) {
                if (random(0, 100) < 10) {
                    narrative(`Whilst on my patrol rounds, I catch some moaning coming from a prisoners room`)
                    option([
                        {text: `Peek`},
                        {text: `Ignore`},
                    ])
                    if (0) {
                        scene.setBackground("prison")
                        if (gender == 0) {
                            Actor2 = scene.generatePersonTemporary([])
                            while (!Actor2.isMale()) {
                                Actor2 = scene.generatePersonTemporary([])
                            }
                        } else {
                            Actor2 = scene.generatePersonTemporary([])
                            while (Actor2.isMale()) {
                                Actor2 = scene.generatePersonTemporary([])
                            }
                        }
                        scene.sex(Actor, Actor2)
                        narrative(`It's Warden <Actor.name> fucking a prisoner.`)
                        option([
                            {text: `Continue watching`},
                            {text: `Join them`},
                            {text: `Walk away`},
                            {text: `Report`},
                        ])
                        if (0) {
                            scene.sex(Actor, Actor2)
                        } else if (1) {
                            scene.sex(Player, Actor, Actor2)
                        } else if (2) {
                            narrative(`This happens all the time ... Let's just get on with my patrol.`)
                        } else {
                            narrative(`<Actor.name> isn't my favorite colleague. This is the perfect opportunity to get <Actor.him_or_her> fired.`)


                            if (random(0, 100) < Actor.interpersonal) {
                                Fired = false
                                narrative(`I didn't get <Actor.name> fired. Instead, <Actor.he_or_she> now knows I'm the whistleblower and basically declares me as an enemy.`)
                                Actor.rapportwithplayer -= 50
                            } else {
                                Fired = true
                            }
                        }
                    }
                } else if (random(0, 100) < 10 && WHEN > 18) {
                    Colleague1 = Actor
                    Colleague1.dressUniform("Police")
                    Colleague1.show(2)


                    Colleague1.dialogue(`<Player.name>! What are you doing still in the prison office this late in the evening?`, `Sarcastic`)
                    Colleague1.dialogue(`Listen, a few of us are going to a bar nearby for a few drinks after work. Fancy coming? Work can wait till tomorrow - It's not like the boss is here to check on you.`, `Happy`)
                    option([
                        {text: `Join them`},
                        {text: `Decline`},
                    ])
                    if (0) {
                        Player.dialogue(`Of course I'll join you. Sounds like fun. I'll just wrap up quickly and see you guys there.`, `Excited`)
                        Colleague1.dialogue(`Excellent. I'll see you there then!`, `Excited`)
                        Colleague1.hide()


                        Colleague2 = scene.getPerson("tag_warden")
                        Colleague2.dressUniform("Police")


                        Colleague3 = scene.getPerson("tag_warden")
                        Colleague3.dressUniform("Police")


                        Colleague4 = scene.getPerson("tag_warden")
                        Colleague4.dressUniform("Police")


                        Colleague5 = scene.getPerson("tag_warden")
                        Colleague5.dressUniform("Police")


                        narrative(`A few minutes later ...`)
                        scene.setBackground("bar")


                        Colleague1.show(1)
                        Colleague2.show(2)
                        Colleague3.show(3)
                        Colleague4.show(4)
                        Colleague5.show(5)


                        Colleague1.dialogue(`<Player.name>! We're here. Come!`, `Excited`)
                        Player.dialogue(`Sorry I'm late, had to finish a few things in the prison first ...`, `Happy`)
                        narrative(`The other wardens, <Colleague2.name>, <Colleague3.name>, <Colleague4.name> and <Colleague5.name>, are all here too! This will be a good way to get to know them better.`)


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


                                Player.moveToPerson(SitWith)
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
                            }


                            if (PartyOngoing && timePassed > random(1, 4)) {
                                narrative(`It was getting very late. Eventually, each person made their excuse to leave. It was a fun way to get to know my colleagues on a more personal level ...`)
                                PartyOngoing = false
                            }
                        }
                    } else {
                        Player.dialogue(`I still have another patrol round to finish tonight, I'm afraid. You guys go have fun though!`, `Sad`)
                    }
                } else if (random(0, 100) < 10 && scene.isModEnabled("vin_Bestiality")) {
                    Actor2 = scene.generateCreatureTemporary("Dog")
                    narrative(`I was on my patrol when I noticed something unbelievable.`)
                    Player.dialogue(`What the fuck!`)
                    scene.setBackground("prison")
                    scene.sex(Actor, Actor2)
                    narrative(`It's <Actor.name>, one of the prison wardens, having sex with the prison dog, in one of the empty cells.`)
                    option([
                        {text: `Continue watching`},
                        {text: `Continue your patrol`},
                    ])
                    if (0) {
                        scene.sex(Actor, Actor2)
                        Actor.dialogue(`Saw that huh? Meh it gets lonely on shift and gotta keep 'em motivated, helps that it's fun too`)
                    } else {
                        narrative(`Well, some people have weird sexual tastes I suppose.`)
                    }
                } else {
                    narrative(`My shift in the prison today was quite uneventful.`)
                }


                if (Fired) {
                    Actor2.hide()
                    scene.setBackground("police")
                    Actor.setActorVar("tag_warden", 0)
                    narrative(`Warden <Actor.name> was fired.`)
                    Actor = scene.generatePerson()
                    Actor.setActorVar("tag_warden", 1)
                    narrative(`And replaced by a new warden called <Actor.name>.`)
                }
            } else {
                if (random(0, 100) < 10) {
                    scene.setBackground("prison")
                    if (gender == 0) {
                        Actor2 = scene.generatePersonTemporary([])
                        while (!Actor2.isMale()) {
                            Actor2 = scene.generatePersonTemporary([])
                        }
                    } else {
                        Actor2 = scene.generatePersonTemporary([])
                        while (Actor2.isMale()) {
                            Actor2 = scene.generatePersonTemporary([])
                        }
                    }
                    Actor2.dressUniform("Prison")
                    Actor2.show()
                    Actor2.dialogue(`Please help me!`)
                    Player.dialogue(`What's the matter?`)
                    Actor2.dialogue(`My prison account has not been topped up. Can you authorise emergency funds so I can get essential supplies?`)
                    Actor2.dialogue(`I'm willing to do anything ...`)
                    option([
                        {text: `No`},
                        {text: `Yes`},
                        {text: `Demand sex`},
                    ])
                    if (0) {
                        Player.dialogue(`I'm not paid enough to bother, sorry!`)
                    } else if (1) {
                        narrative(`Empathy is something all wardens should have.`)
                        Player.dialogue(`Okay, I'll do that for you. You don't have to do anything in exchange.`)
                        Actor2.dialogue(`Oh my god, you're the nicest warden ever.`)
                        Player.karma += 2
                    } else {
                        Actor2.dialogue(`Okay ... I know the drill by now. It seems you're no different from the other corrupt wardens.`)
                        scene.sex(Player, Actor2)
                    }


                } else if (random(0, 100) < 10 && scene.isModEnabled("vin_NonConsensual") && scene.isModEnabled("vin_Bestiality")) {
                    scene.setBackground("prison")
                    if (gender == 0) {
                        Actor2 = scene.generatePersonTemporary([])
                        while (!Actor2.isMale()) {
                            Actor2 = scene.generatePersonTemporary([])
                        }
                    } else {
                        Actor2 = scene.generatePersonTemporary([])
                        while (Actor2.isMale()) {
                            Actor2 = scene.generatePersonTemporary([])
                        }
                    }
                    Actor2.dressUniform("Prison")
                    Actor2.show()
                    narrative(`I was called to attend to a prisoner in <Actor.his_or_her> cell creating a SCENE, generally misbehaving, lotso of cursing, swearing and threats made to the other wardens and prisoners.`)
                    option([
                        {text: `Talk <Actor2.him_or_her> down`},
                        {text: `'Discipline' <Actor2.him_or_her> yourself`},
                        {text: `'Discipline' <Actor2.him_or_her> with the rest of the wardens' gang`},
                        {text: `Send a dog in`},
                    ])
                    if (0) {
                        narrative(`Didn't think that worked too well, but at least I tried to do my job properly.`)
                        narrative(`Maybe I should be more tough next time.`)
                    } else if (1) {
                        narrative(`I enter the cell myself with fellow wardens covering the entrance and not allowing other prisoners to see what's happening, but they can probably still hear and guess though.`)
                        Player.dialogue(`Maybe this will shut you up!`)
                        if (Player.isFemale() && Actor2.isMale()) {
                            scene.filter("AggressiveFM")
                        } else {
                            scene.filter("Aggressive")
                        }
                        scene.talkNonConsensual()
                        scene.sex(Player, Actor2)
                    } else if (2) {
                        narrative(`Actually, this is the perfect opportunity to let the team blow off some steam.`)
                        Player.dialogue(`Let's shut <Actor2.him_or_her> up together!`)
                        Actor.dressUniform("Police")
                        Actor.show()
                        Actor.dialogue(`Alright! Let's do it.`)
                        scene.sex(Player, Actor, Actor2)
                    } else {
                        Player.dialogue(`Since you're making a fuss like a bitch, I know how to deal with the likes of you.`)
                        Actor3 = scene.generateCreatureTemporary("Dog")
                        scene.sex(Actor3, Actor2)
                    }


                } else if (random(0, 100) < 5) {
                    scene.setBackground("prison")
                    if (gender == 0) {
                        Actor2 = scene.generatePersonTemporary([])
                        while (!Actor2.isMale()) {
                            Actor2 = scene.generatePersonTemporary([])
                        }
                    } else {
                        Actor2 = scene.generatePersonTemporary([])
                        while (Actor2.isMale()) {
                            Actor2 = scene.generatePersonTemporary([])
                        }
                    }
                    Actor2.dressUniform("Prison")
                    Actor2.show()
                    Actor2.dialogue(`Listen, I'll offer you a lot of money. Just sneak in my package for me!`)
                    Player.dialogue(`Let me guess, drugs?`)
                    narrative(`The money would be nice but if I'm not careful, this could get me suspended.`)
                    option([
                        {text: `Yes`},
                        {text: `No`},
                    ])
                    if (0) {
                        Player.dialogue(`Okay ... tell your people to give me the cash first though.`)
                        Actor2.dialogue(`Deal! You're the most understanding warden. I'm sure you and me will have a great working relationship going forward.`)
                        if (random(0, 125) < Player.intelligence + Player.sneak) {
                            narrative(`I was perfectly discreet with the transaction and got the money promised.`)
                            Player.money += 1000
                        } else {
                            narrative(`Unfortunately, I wasn't discreet enough and was caught red-handed by the boss. I was suspended from the job.`)
                            scene.timeout(840, "prison_warden_cms")
                        }
                    } else {
                        Player.dialogue(`You must have mistaken me for a currupt warden then.`)
                        Player.dialogue(`This is your last warning. I will report you next time and you might get your sentence extended!`)
                    }
                } else if (random(0, 100) < 1) {
                    Actor2 = scene.getPerson("tag_wardenboss")
                    Actor2.dressUniform("Police")
                    Actor2.show()
                    Actor2.dialogue(`<Player.name>, can we have a chat back in my office, please?`)
                    narrative(`Damn, is this good news or bad news? Seems serious.`)
                    Actor2.dialogue(`We've reviewed your performance ...`)
                    if (Player.jobperformance > 70) {
                        Actor2.dialogue(`Your performance has been very good. Congratulations!`)
                        Actor2.dialogue(`I hope that continues!`)
                        narrative(`That's it? No promotions, no bonuses?`)
                        option([
                            {text: `Ask for a bonus`},
                            {text: `Stay silent`},
                        ])
                        if (0) {
                            Actor2.dialogue(`Sorry, the prison budget is thin and we can't manage to get a bonus for anyone right now.`)
                            option([
                                {text: `Accept`},
                                {text: `I don't mind boning you for it.`},
                            ])
                            if (0) {
                                Player.dialogue(`I understand ...`)
                            } else {
                                Actor2.dialogue(`...`)
                                Actor2.dialogue(`Okay....that was corny...but I supposed you've earned it...`)
                                scene.sex(Actor2, Player)
                                Player.money += 1000
                            }
                        }
                    } else {
                        Actor2.dialogue(`Your performance has not been good enough.`)
                        Actor2.dialogue(`If you continue like this, you'll get fired.`)
                        option([
                            {text: `Accept`},
                            {text: `Argue that you've been performing well`},
                            {text: `Make it up with sex`},
                        ])
                        if (0) {
                            Player.dialogue(`I understand ... I will try harder`)
                        } else if (1) {
                            if (random(0, 100) < Player.interpersonal) {
                                Actor2.dialogue(`Fine, now that you've made your arguments, your performance wasn't that bad. I've adjusted the review.`)
                                Player.jobperformance += 10
                            } else {
                                Actor2.dialogue(`Sorry, you're making no sense.`)
                            }
                        } else {
                            Actor2.dialogue(`...`)
                            Actor2.dialogue(`Okay....that was corny...but I suppose I can wipe these bad performances off your record for some favour`)
                            scene.sex(Actor2, Player)
                            Player.jobperformance += 20
                        }
                    }
                } else if (random(0, 100) < 10) {
                    scene.setBackground("prison")
                    if (gender == 0) {
                        Actor2 = scene.generatePersonTemporary([])
                        while (!Actor2.isMale()) {
                            Actor2 = scene.generatePersonTemporary([])
                        }
                    } else {
                        Actor2 = scene.generatePersonTemporary([])
                        while (Actor2.isMale()) {
                            Actor2 = scene.generatePersonTemporary([])
                        }
                    }
                    Actor2.dressUniform("Prison")
                    Actor2.show()
                    Actor3 = scene.generatePersonTemporary([])
                    Actor3.dressUniform("Nurse")
                    Actor3.show()
                    narrative(`I was asked to stand guard as a jail nurse visits a prisoner for a health checkup.`)
                    narrative(`It was quite clear that there's some sexual tension between the prioner and the nurse.`)
                    Actor2.dialogue(`You know how lonely it is in jail, and you're such a <Actor3.handsome_or_beautiful> thing.`, `Flirty`)
                    Actor3.dialogue(`Please stop, you're making me ...`, `Flirty`)
                    Actor2.dialogue(`Horny? I know respected professionals like you all secretly have a thing for a bad <Actor3.boy_or_girl> in prison.`)
                    option([
                        {text: `Walk away and allow them some alone time`},
                        {text: `Say nothing and watch`},
                        {text: `Kick the prisoner out and fuck the nurse myself.`},
                    ])
                    if (2) {
                        Actor2.dialogue(`What are you doing? Why do I have to leave the cell all of the sudden.`)
                        Actor2.hide()
                        Player.dialogue(`You're already pretty horny, aren't you? Why don't you let me finish the job?`, `Evil`)
                        Actor3.dialogue(`Okay ...`)
                        scene.sex(Player, Actor3)
                        Actor3.hide()
                        Actor2.show()
                        Actor2.dialogue(`Fuck you, you're the worst warden here! That was so unfair! It was my checkup!`)
                        Player.dialogue(`Don't worry, I finished <Actor3.him_or_her> off for you`, `Sarcastic`)
                        Player.dialogue(`It's nice to get some release isn't it? well... for some of us anyway.`)
                    } else {
                        if (0) {
                            narrative(`Who knows prison wardens can be matchmakers ...`)
                            narrative(`Let's go outside and allow these two lovebirds some alone time.`)
                            Player.karma += 2
                        } else {
                            narrative(`They certainly take my silence for approval and pretty soon they were unashamedly undressing each other right in front of me.`)
                            scene.sex(Actor2, Actor3)
                        }
                        Actor3.hide()
                        Actor2.dialogue(`It feels so much better after this checkup.`)
                        Actor2.dialogue(`Thank you for not interrupting. You're the most understanding warden I know.`)
                    }
                } else if (random(0, 100) < 10) {
                    scene.setBackground("prison")
                    if (gender == 0) {
                        Actor2 = scene.generatePersonTemporary([])
                        while (!Actor2.isMale()) {
                            Actor2 = scene.generatePersonTemporary([])
                        }
                    } else {
                        Actor2 = scene.generatePersonTemporary([])
                        while (Actor2.isMale()) {
                            Actor2 = scene.generatePersonTemporary([])
                        }
                    }
                    Actor2.dressUniform("Prison")
                    Actor2.show()
                    Actor3 = scene.generatePersonTemporary([])
                    Actor3.dress()
                    Actor3.show()
                    narrative(`One of the prisoners is being visited by <Actor2.his_or_her> <Actor3.boyfriend_or_girlfriend> today.`)
                    option([
                        {text: `Leave them be`},
                        {text: `Take the <Actor3.boyfriend_or_girlfriend> somewhere private.`},
                    ])
                    if (1) {
                        Player.dialogue(`Sorry, I must search you first!`)
                        Actor3.dialogue(`Okay ...`)
                        Actor.hide()
                        Actor3.dialogue(`I didn't even bring anything so not sure why you would want to search me, but fine, do your job then.`)
                        option([
                            {text: `Do my job professionally.`},
                            {text: `Propose sex`},
                        ])
                        if (0) {
                            Player.dialogue(`Okay, you're all clear. You can go back to your <Actor2.boyfriend_or_girlfriend>'s cell now.`)
                            Actor3.dialogue(`Thank you.`)
                        } else {
                            Player.dialogue(`Actually, whether you're allowed to see your <Actor2.boyfriend_or_girlfriend> after the search doesn't depend on what you bring with you, but your own body ...`)
                            if (random(0, 100) < Actor3.perversion) {
                                Actor3.dialogue(`Alright, I've had to do this before with another warden. It's one of those unwritten rules I suppose. My <Actor2.boyfriend_or_girlfriend> is in prison and I don't have another choice.`)
                                scene.sex(Player, Actor3)
                            } else {
                                Actor3.dialogue(`Get your hand off me, you perv. I'm telling your boss about this!`)
                                Player.jobperformance -= 10
                            }
                        }
                    }
                } else {
                    narrative(`My shift in the prison today was quite uneventful.`)
                }
            }
        } else {
            narrative(`Should I apply for a job as a prison warden?`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (0) {
                Actor2 = scene.generatePerson()
                Actor2.setActorVar("tag_wardenboss", 1)
                Actor2.dressUniform("Police")
                Actor2.show()
                Actor2.dialogue(`I'm quite impressed with you today. When can you start?`)
                narrative(`The interview was pretty easy and I got the job, which pays per shift. After which I was introduced to my colleagues - fellow prison wardens.`)
                Player.jobperformance = 50
                count = 0
                while (count < 5) {
                    count += 1
                    Actor = scene.generatePerson()
                    Actor.setActorVar("tag_warden", 1)
                    Actor.dressUniform("Police")
                    Actor.show()
                    Actor.moveToPerson(Player)
                    Actor.dialogue(`Hi, I'm Warden <Actor.name> <Actor.name_last>. Nice to you meet you.`)
                    Player.dialogue(`Hi, I'm <Player.name> <Player.name_last>`)
                    Actor.saveAndDelete()
                }
            }
        }
    })
})
module.exports = scene