// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\crime\report_to_boss.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'report_to_boss'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Actor = scene.getSpecific("Criminal")
        let Boss = scene.getSpecific("CrimeBoss")
        let Job = 0
        let Actor2 = scene.generatePersonTemporary([])
        let Outcome = 1
        let outcome = 1
        let Actor3 = scene.generatePersonTemporary([])
        let Total = random(3, 10)
        let count = 0
        Actor = scene.getSpecific("Criminal")
        scene.dressFormal()
        if (Actor.isValid()) {
            scene.setBackground("restaurant")
            Boss = scene.getSpecific("CrimeBoss")
            Boss.dress()
            Boss.show(2)
            Player.dialogue(`Boss, I'm here for the next heist.`, `Happy`)
            if (scene.isTimingOut("report_to_boss")) {
                Boss.dialogue(`You have some <Player.balls_or_gall> coming back here so soon after screwing up so badly last time.`, `Angry`)
                Boss.dialogue(`I'm not sure I can continue to trust you.`, `Angry`)
                Boss.dialogue(`Fine ... come back in a few days and I might have something for you.`, `Angry`)
            } else {
                Boss.dialogue(`And I have something for you. I suggest you get to it immediately.`, `Evil`)
                Actor.dressUniform("Crime")
                Actor.show(3)
                Boss.dialogue(`<Actor.name> will be your partner for this. Try not to get you both busted, will you?`, `Evil`)


                scene.$random(() => {
                    Job = 0
                    Job = 1
                    Job = 2
                    Job = 3
                    Job = 4
                    Job = 5
                    Job = 6
                })


                if (Job == 0) {
                    Boss.dialogue(`We found out that a bank branch is holding an unusually large reverse of cash. The security there is lackluster.`, `Evil`)
                    Boss.dialogue(`You're going there and you're going to rob it, plain and simple.`, `Evil`)
                    Boss.dialogue(`Just scare them bank employees shitless and take the money. Beat them up if they're stubborn but I don't want to hear about any murders, okay?`, `Evil`)
                    Player.dialogue(`Of course, Boss. I won't disappoint you.`, `Evil`)
                    Player.karma -= 5
                    Boss.hide()
                    Actor.show(4)
                    Actor.dialogue(`Let's go, <Player.name>. No time to waste before the bank's management grows a brain and adds more security,`, `Evil`)
                    scene.setBackground("bank")
                    Actor2 = scene.generatePersonTemporary([])
                    Actor2.dress()
                    Actor2.show(2)
                    Actor.dialogue(`That must be the branch manager. Let's get this party started!`, `Evil`)
                    Player.animate("gun")
                    Actor.animate("gun")
                    Player.dialogue(`Hands up! Everyone, hands up or I'll shoot each and everyone here.`, `Evil`)
                    Player.dialogue(`Now you, hand over all the cash! Or things are getting ugly right quick.`, `Evil`)
                    if (Actor2.masochist > 0) {
                        Actor2.dialogue(`Please, don't shoot. I'll get the money you want ...`, `Scared`)
                        narrative(`Well, that was easy ...`)


                        Outcome = 1
                    } else {
                        Actor2.animate("martialart")
                        Actor2.moveToPersonStand(Player, 100)
                        Actor2.dialogue(`I'm not giving up without a fight, thug!`, `Furious`)
                        narrative(`The foolish bank manager threw <Actor2.himself_or_herself> forward and tried to tackle me.`)
                        option([
                            {text: `Shoot <Actor2.him_or_her>`},
                            {text: `Beat <Actor2.him_or_her> up`},
                        ])
                        if (0) {
                            narrative(`Pow!`)
                            Actor2.hide()
                            narrative(`I shot the bank manager in the head in cold blood. The gunshot was followed by screams all around me`)
                            Player.dialogue(`Who else wants to join the fool in Hell? Hand over the money, now!`, `Furious`)
                            Player.karma -= 50


                            Outcome = 2
                        } else {
                            scene.faceEachOther(Actor2, Player)
                            Player.animate("martialart")


                            if (Player.martial < Actor2.martial) {
                                Player.animate("fightlost")
                                narrative(`Unfortunately, the branch manager turned out to be a handful and <Actor2.he_or_she> managed to knock me off my gun.`)
                                narrative(`Worse, there's now the sound of police siren coming. Someone must have taken advantage of the chaos of the brawl to call the cops.`)
                                Actor.dialogue(`Fuck! The cops are here. Let's get out of here!`, `Scared`)
                                Player.animate()
                                Outcome = 3
                            } else {
                                Actor2.animate("fightlost")
                                Player.dialogue(`Don't try to be the hero next time!`, `Evil`)
                                narrative(`The branch manager was no match for me in a fight.`)
                                Player.dialogue(`Anybody else wants to be a hero? Hand over the money, now!`, `Furious`)


                                Outcome = 1
                            }
                        }
                    }


                    if (Outcome == 1) {
                        Actor2.hide()
                        scene.setBackground("restaurant")
                        Boss.show(2)
                        Boss.dialogue(`A job well done. Couldn't have done it any more perfectly myself. Here's your share.`, `Evil`)
                        Player.money += random(1000, 3000)
                    } else if (Outcome == 2) {
                        Actor2.hide()
                        scene.setBackground("restaurant")
                        Boss.show(2)
                        Boss.dialogue(`You did a job, but I would have preferred that you didn't kill the branch manager. I can't take the piss out of the cops too much.`, `Angry`)
                        Boss.dialogue(`Here's your share. Remember to follow my instructions to the letter next time if you want a bigger share.`, `Angry`)
                        Player.money += random(500, 1000)
                    } else if (random(0, 100) < 20) {
                        narrative(`Sure enough, the cops promptly arrived at the SCENE.`)
                        narrative(`'Hands in the air, now!'`)
                        option([
                            {text: `Run`},
                            {text: `Surrender`},
                        ])
                        if (0) {
                            if (random(0, 100) < Player.fitness) {
                                narrative(`I managed to lose the cops. Phew, that was close.`)
                            } else {
                                Player.dialogue(`You're not taking me alive.`, `Angry`)
                                narrative(`Pow!`)
                                Player.hide()
                                narrative(`A cop fired his gun. It was a perfect shot ...`)
                                scene.followUp("death")
                            }
                        } else {
                            Player.animate("fightlost")
                            Player.dialogue(`Please, don't shoot!`, `Scared`)
                            narrative(`I put my hands up and surrendered to the overwhelming number of cops.`)
                            Player.sentence = 3650
                            scene.followUp("imprisoned")
                        }
                    }


                } else if (Job == 1) {
                    Boss.dialogue(`One of the local business owners have been paying us for years for protection ... With the increased presence of the cops in the area, the owner has become a bit too ... bold and stopped paying.`, `Evil`)
                    Boss.dialogue(`You will go there and show that piece of shit how foolish it is to not honor an arrangement with our Family.`, `Evil`)


                    Player.dialogue(`Of course, Boss. I won't disappoint you.`, `Evil`)
                    Player.karma -= 5
                    Boss.hide()
                    Actor.show(4)
                    Actor.dialogue(`Let's go, <Player.name>. No time to waste for such an easy task`, `Evil`)
                    scene.$random(() => {
                        scene.setBackground("bar")
                        scene.setBackground("nightclub")
                        scene.setBackground("alcohol")
                        scene.setBackground("tobacco")
                    })
                    Actor2 = scene.generatePersonTemporary([])
                    Actor2.dress()
                    Actor2.show(2)
                    Actor.dialogue(`That must be the owner. I'll keep guard at the door to warn you of any cops! You go there and beat <Actor2.him_or_her> up.`, `Evil`)
                    Actor.hide()
                    Player.animate("martialart")
                    Player.moveToPersonStand(Actor2, 100)
                    Player.dialogue(`I'll teach you a lesson for not paying your dues on time!`, `Furious`)
                    Player.animate()
                    Actor2.animate()
                    if (Player.martial > Actor2.martial) {
                        Actor2.animate("fightlost")
                        Actor2.dialogue(`Enough! Enough! I'll pay. Tell <Boss.name> I'm sorry.`, `Crying`)
                        outcome = 1
                    } else {
                        Player.animate("fightlost")
                        narrative(`Unfortunately, the <Actor2.bastard_or_bitch> turned out to be a handful and <Actor2.he_or_she> managed to knock me out. Thankfully, <ACtor.name> was there to save my ass in the end.`)
                        outcome = 2
                    }


                    if (outcome == 1) {
                        Actor2.hide()
                        scene.setBackground("restaurant")
                        Boss.show(2)
                        Boss.dialogue(`Well done. That should teach <Actor2.him_or_her> not to mess with us again! Here's your reward.`, `Evil`)
                        Player.money += random(100, 500)
                    } else if (random(0, 100) < 20) {
                        narrative(`Sure enough, the cops promptly arrived at the SCENE.`)
                        narrative(`'Hands in the air, now!'`)
                        option([
                            {text: `Run`},
                            {text: `Surrender`},
                        ])
                        if (0) {
                            if (random(0, 100) < Player.fitness) {
                                narrative(`I managed to lose the cops. Phew, that was close.`)
                            } else {
                                Player.dialogue(`You're not taking me alive.`, `Angry`)
                                narrative(`Pow!`)
                                Player.hide()
                                narrative(`A cop fired his gun. It was a perfect shot ...`)
                                scene.followUp("death")
                            }
                        } else {
                            Player.dialogue(`Please, don't shoot!`, `Scared`)
                            narrative(`I put my hands up and surrendered to the overwhelming number of cops.`)
                            Player.sentence = 365
                            scene.followUp("imprisoned")
                        }
                    }


                } else if (Job == 2) {
                    scene.dressFormal()
                    Actor2 = scene.generatePersonTemporary([])
                    Actor2.age = random(18, 25)
                    Actor2.randomizeFace()
                    Actor2.randomizeHairs()
                    Boss.dialogue(`The <Actor2.heir_or_heiress> to one of the biggest business empires in the city is a party animal who frequents high-society bars and nightclubs late into the night.`, `Evil`)
                    Boss.dialogue(`You will go find <Actor2.him_or_her> and kidnap <Actor2.him_or_her>. I bet the rich daddy would pay any price to have the spoit <Actor.brat_or_slut> back.`, `Evil`)


                    Player.dialogue(`Of course, Boss. I won't disappoint you.`, `Evil`)
                    Player.karma -= 5
                    Boss.hide()
                    Actor.show(4)
                    Actor.dialogue(`Let's go, <Player.name>. I've been tracking <Actor2.him_or_her> down for months. I know exactly where <Actor2.he_or_she>'s right now`, `Evil`)
                    scene.setBackground("bar")
                    Actor2.dress()
                    Actor2.show(2)
                    Actor.dialogue(`That's the target, sitting by the bar. <Actor2.He_or_She> has two bodyguards with <Actor2.him_or_her> though. There's a perfect spot behind the bar for ambush. I will be waiting for you to lure <Actor2.him_or_her> out there! Try to earn <Actor2.his_or_her> trust ... or lust.`, `Evil`)
                    Actor.hide()
                    Player.dialogue(`Excuse me, was there anyone sitting here?`, `Happy`)
                    Actor2.dialogue(`No ... go ahead.`, `Happy`)
                    Player.dialogue(`I'm <Player.Brett_or_Alexandra> by the way.`, `Happy`)
                    option([
                        {text: `Act cool`},
                        {text: `Try to seduce <Actor2.him_or_her>`},
                    ])
                    narrative(`Half an hour later ...`)
                    if (0 && random(0, 100) < Actor2.rapportwithplayer + Player.interpersonal) {
                        Actor2.dialogue(`Wow! That's amazing that you already traveled so much all over the world.`, `Surprised`)
                        Actor2.dialogue(`My father would never allow me that freedom ...`, `Sad`)
                        narrative(`<Actor2.name> totally bought into the stories I've been telling <Actor2.him_or_her> to make me look like the coolest human on earth. It's time to act.`)
                        Player.dialogue(`You know what? I can't take you traveling around the world with me, but I have some good stuffs in my car right now ... I'll be happy to get high with you.`, `Happy`)
                        Actor2.dialogue(`I don't know ... my father wouldn't allow me to go anywhere without these bodyguards.`, `Sad`)
                        Player.dialogue(`Come on! Don't be so boring ...`, `Happy`)
                        narrative(`Peer pressure is the true downfall of rich kids ...`)
                        Actor2.dialogue(`What the hell ... Fine! Let's get out of here before my useless bodyguards notice.`, `Happy`)
                        outcome = 1
                    } else if (1 && random(0, 100) < Actor2.attractionToPlayer + Actor2.perversion) {
                        Actor2.dialogue(`Oh gosh, you're such a <Player.handsome_or_beautiful> <Player.guy_or_girl>. It must be my lucky night ...`, `Flirty`)
                        Player.dialogue(`While your bodyguards aren't paying attention, how about us sneaking out of here and I'll give you a night to remember.`, `Flirty`)
                        Actor2.dialogue(`You're so naughty and direct ... I like that.`, `Flirty`)
                        outcome = 1
                    } else {
                        Actor2.dialogue(`Sorry, but I've got to go ... Nice to have met you.`, `Sad`)
                        narrative(`Damn, my charm offensive didn't work at all. <Actor2.name> clearly couldn't wait to get away from me.`)
                        outcome = 2
                    }


                    if (outcome == 1) {
                        Actor2.show(4)
                        scene.setBackground("street")
                        Actor.show(2)
                        Actor.dialogue(`Well, well, well, you managed to lure the rich kid out here after all ...`, `Evil`)
                        Actor2.dialogue(`Who's this, <Player.Brett_or_Alexandra>? What's going on here?`, `Surprised`)
                        Actor2.dialogue(`Ah.....`, `Pain`)
                        Actor2.hide()
                        Actor.dialogue(`That should shut you up ... Now, let's throw <Actor2.him_or_her> onto the van and drive back to HQ.`, `Evil`)
                        Player.dialogue(`Good night, little <Actor2.prince_or_princess>.`, `Evil`)


                        Actor.hide()
                        scene.setBackground("restaurant")
                        Boss.show(2)
                        Boss.dialogue(`A job well done. Couldn't have done it any more perfectly myself. Here's your share of the ransom.`, `Evil`)
                        Player.money += random(500, 1000)
                    } else {
                        Actor2.hide()
                        scene.setBackground("restaurant")
                        Boss.show(2)
                        Boss.dialogue(`I'm extremely disappointed in your showing today. Go away and have a long hard look at yourself!`, `Angry`)
                        scene.timeout(200, "report_to_boss")
                    }


                } else if (Job == 3) {
                    Boss.dialogue(`Our Family unfortunately had a traitor recently who has been selling us out to the cops.`, `Evil`)
                    Boss.dialogue(`You will go find and kill that piece of shit. Let them all remember that the Oath of the Family must never be broken.`, `Evil`)


                    Player.dialogue(`Of course, Boss. I won't disappoint you.`, `Evil`)
                    Player.karma -= 5
                    Boss.hide()
                    Actor.show(4)
                    Actor.dialogue(`Let's go, <Player.name>. I can't wait to see that traitor dead myself.`, `Evil`)
                    scene.setBackground("street")
                    Actor2 = scene.generatePersonTemporary([])
                    Actor2.dress()
                    Actor2.show(2)
                    Actor.dialogue(`That's the target, walking down a dark alley ... as if <Actor2.he_or_she> is asking to be an easy target. I'll keep guard here to warn you of any cops! You sneak behid <Actor2.him_or_her> and once within range, shoot the <Actor2.bastard_or_bitch> to death, okay?`, `Evil`)
                    Actor.hide()
                    Player.animate("sneak")
                    narrative(`Alright, I must be very quiet here as to not alert <Actor2.him_or_her> ...`)
                    narrative(`Just a few more steps and it will be perfect range for a headshot ...`)
                    Player.animate("gun")
                    scene.sneakGame()
                    if (random(0, 100) < Player.sneak) {
                        narrative(`Perfect ... It's time to end this.`)
                        narrative(`Pow!`)
                        Actor2.hide()
                        narrative(`Perfect headshot ... the traitor was sent straight to Hell. Now, let's get out of here before the cops arrive.`)


                        scene.setBackground("restaurant")
                        Boss.show(2)
                        Boss.dialogue(`A job well done. Here's your reward. That should serve as a warning to anyone thinking about betraying our Family.`, `Evil`)
                        Player.money += random(500, 1000)
                        Player.karma -= 20
                    } else {
                        Actor2.dialogue(`Help! Somebody help!`, `Furious`)
                        Actor2.hide()
                        narrative(`Pow!`)
                        narrative(`Damn it, I wasn't sneaky enough. The target was alerted and immediately ran off. In panic, I completely misfired my shot.`)
                        Actor.hide()


                        if (random(0, 100) < 20) {
                            narrative(`Sure enough, the cops promptly arrived at the SCENE.`)
                            narrative(`'Hands in the air, now!'`)
                            option([
                                {text: `Run`},
                                {text: `Surrender`},
                            ])
                            if (0) {
                                if (random(0, 100) < Player.fitness) {
                                    narrative(`I managed to lose the cops. Phew, that was close.`)
                                } else {
                                    Player.dialogue(`You're not taking me alive.`, `Angry`)
                                    narrative(`Pow!`)
                                    Player.hide()
                                    narrative(`A cop fired his gun. It was a perfect shot ...`)
                                    scene.followUp("death")
                                }
                            } else {
                                Player.animate("fightlost")
                                Player.dialogue(`Please, don't shoot!`, `Scared`)
                                narrative(`I put my hands up and surrendered to the overwhelming number of cops.`)
                                Player.sentence = 1825
                                scene.followUp("imprisoned")
                            }
                        }
                    }


                } else if (Job == 4) {
                    Boss.dialogue(`A priceless jewel is currently on exhibition at a museum on the other side of town.`, `Evil`)
                    Boss.dialogue(`You will break into the museum after hours, steal it and leave a note. I imagine the press coverage of this incident would give us the notoriety for a few new recruits.`, `Evil`)


                    Player.dialogue(`Of course, Boss. I won't disappoint you.`, `Evil`)
                    Player.karma -= 5
                    Boss.hide()
                    Actor.hide()
                    scene.setBackground("art")
                    narrative(`There's the jewel ... A guard is right nearby though.`)
                    Player.animate("sneak")
                    narrative(`Alright, I must be very quiet here as to not alert the guard ...`)
                    narrative(`Just a few more steps and I can grab it ...`)
                    Player.animate()
                    scene.sneakGame()
                    if (random(0, 100) < Player.sneak) {
                        narrative(`Gotcha!`)
                        narrative(`Let's just leave this note as the Boss asked me to.`)


                        scene.setBackground("restaurant")
                        Boss.show(2)
                        Boss.dialogue(`A job well done. Here's your reward.`, `Evil`)
                        Player.money += random(500, 1000)
                    } else {
                        Player.dialogue(`Shit ...`, `Scared`)
                        narrative(`Damn it, I wasn't sneaky enough. The guard was alerted and immediately chased after me. In panic, I had no choice but run to escape.`)
                        Actor.hide()


                        if (random(0, 100) < 20) {
                            narrative(`Sure enough, the cops promptly arrived at the SCENE.`)
                            narrative(`'Hands in the air, now!'`)
                            option([
                                {text: `Run`},
                                {text: `Surrender`},
                            ])
                            if (0) {
                                if (random(0, 100) < Player.fitness) {
                                    narrative(`I managed to lose the cops. Phew, that was close.`)
                                } else {
                                    Player.dialogue(`You're not taking me alive.`, `Angry`)
                                    narrative(`Pow!`)
                                    Player.hide()
                                    narrative(`A cop fired his gun. It was a perfect shot ...`)
                                    scene.followUp("death")
                                }
                            } else {
                                Player.animate("fightlost")
                                Player.dialogue(`Please, don't shoot!`, `Scared`)
                                narrative(`I put my hands up and surrendered to the overwhelming number of cops.`)
                                Player.sentence = 365
                                scene.followUp("imprisoned")
                            }
                        }
                    }


                } else if (Job == 5) {
                    Actor2 = scene.generatePersonTemporary([])
                    Boss.dialogue(`One of the district chiefs have been a pain in the ass for us recently. Newly elected, the scum is rather over-zealous with combating organized crime.`, `Evil`)
                    Boss.dialogue(`Thankfully, no-one is perfect and 'the conservative hero on a God's mission' has actually been having an extra-marital affair ...`, `Evil`)
                    Boss.dialogue(`If you were to take pictures of some of the steamy actions, we would be able to use them to blackmail the chief into looking the other way from our activities ...`, `Evil`)


                    Player.dialogue(`Of course, Boss. I won't disappoint you.`, `Evil`)
                    Player.karma -= 5
                    Boss.hide()
                    Actor.show(4)
                    Actor.dialogue(`Let's go, <Player.name>. I know exactly where <Actor2.he_or_she> usually meets <Actor2.his_or_her> lover.`, `Evil`)
                    scene.setBackground("hotel")


                    Actor2.dress()
                    Actor2.show(2)
                    Actor3 = scene.generatePersonTemporary([])
                    Actor3.dress()
                    Actor3.show(3)
                    Actor.dialogue(`That's the district chief and <Actor2.his_or_her> lover ... not so discreet, eh? I'll keep guard here! You sneak behind them and follow them to their room and once they get down and dirty, snap a few lovely family photos, okay?`, `Evil`)
                    Actor.hide()
                    Player.animate("sneak")
                    narrative(`Alright, I must be very quiet here as to not alert <Actor2.him_or_her> ...`)
                    narrative(`Just a few more steps to their bedroom ...`)
                    scene.sneakGame()
                    if (random(0, 100) < Player.sneak) {
                        scene.setBackground("home")
                        narrative(`Perfect ... .`)
                        Player.hide()
                        scene.sex(Actor2, Actor3)
                        Actor2.strip()
                        Actor2.show(2)
                        Actor3.strip()
                        Actor3.show(3)


                        Player.show(0)
                        narrative(`Plenty of blackmail material ... The Boss would be very pleased.`)
                        Actor2.hide()
                        Actor3.hide()


                        Player.animate()
                        scene.setBackground("restaurant")
                        Boss.show(2)
                        Boss.dialogue(`A job well done. Here's your reward. These compromising photos should keep the <Actor2.bastard_or_bitch> off our asses for good.`, `Evil`)
                        Player.money += random(500, 1000)
                    } else {
                        Actor2.dialogue(`<Actor3.name>, I think we're being followed. Let's meet another night.`, `Scared`)
                        Actor2.hide()
                        Actor3.hide()


                        Player.animate()
                        narrative(`Damn it, I wasn't sneaky enough. The target was alerted.`)
                        Actor.hide()


                        scene.setBackground("restaurant")
                        Boss.show(2)
                        Boss.dialogue(`Damn it, I should have known better than trusting you!`, `Furious`)
                        scene.timeout(200, "report_to_boss")
                    }


                } else if (Job == 6) {
                    Boss.dialogue(`This job is simple: I want to fuck you and show you who's the boss that needs to be served faithfully.`, `Happy`)
                    option([
                        {text: `Yes boss ...`},
                        {text: `Anything but that ...`},
                    ])
                    if (0) {
                        if (random(0, 100) < 50) {
                            Boss.dialogue(`Let's do it in front of the rest of the family, right now, right here.`, `Happy`)
                        } else {
                            Boss.dialogue(`Let's go somewhere private.`, `Happy`)
                            scene.setBackground("home")
                        }
                        scene.sex(Boss, Player)
                        scene.sex(Boss, Player, Actor)
                    } else {
                        Boss.dialogue(`Then fuck off. If you can't even show your loyalty with such a simple service, you're not welcome here.`, `Furious`)
                        scene.timeout(200, "report_to_boss")
                    }
                }


                if (!scene.isTimingOut("report_to_boss") && Job < 6) {
                    narrative(`That was a job well done. Perhaps, I should demand some other payment aside from money.`)
                    option([
                        {text: `Demand sex as reward.`},
                        {text: `That's a surefire way to get myself killed.`},
                    ])
                    if (0) {
                        if (Boss.masochist > 50 || Boss.perversion > 70) {
                            Boss.dialogue(`I guess my best right hand <Player.man_or_woman> deserves some more 'personal' compensation ...`, `Flirty`)
                            scene.sex(Boss, Player)
                        } else {
                            Boss.dialogue(`Is this a joke? Who do you think you are to demand sex from me? Your recent little success has got to your head too much?`, `Furious`)
                            scene.timeout(500, "report_to_boss")
                            if (random(0, 100) < 20) {
                                Boss.animate("gun")
                                Boss.dialogue(`You know what else will get to your head? My fucking bullet.`, `Furious`)
                                narrative(`The boss pulled out <Boss.his_or_her> revolver ...`)
                                narrative(`Pow!`)
                                scene.followUp("death")
                            } else {
                                narrative(`Fuck off, you're not welcome here. Be thankful that I spared your life.`)
                            }
                        }
                    } else {
                        narrative(`Yeah, that's a very bad and dangerous idea ... Let's not try that.`)
                    }
                }
            }
        } else {
            narrative(`Am I seriously considering joining the Mafia?`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (0) {
                narrative(`My mind is made up. Let's go and find the local Mafia boss.`)
                scene.setBackground("restaurant")
                Boss = scene.getSpecific("CrimeBoss")
                if (Boss.isValid()) {
                    Boss.dress()
                    Boss.show(2)
                    Boss.dialogue(`So, thought it over? Ready to take the oath to join the Family?`, `Evil`)
                } else {
                    Boss = scene.generatePerson()
                    Boss.age += 20
                    Boss.randomizeHairs()
                    Boss.randomizeFace()
                    Boss.attractionToPlayer = -100
                    Boss.setCrimeBoss()
                    Boss.dress()
                    Boss.show(2)
                    Boss.dialogue(`So, you want to join our Family? Have you actually thought this through or are you just another wasting my time?`, `Evil`)
                    Boss.dialogue(`Remember, the oath of allegiance to our Family is an oath till death. Once you're part of the Family, you're always one of us. If you want out, we'll hunt you down and make sure you die a painful death. Wouldn't want to risk you working with the government against us, would we?`, `Evil`)
                    Boss.dialogue(`We look after each other. If you ever get busted on the job, we'll make sure you won't end up in prison. Although if you're useless enough to get caught frequently, maybe we'll just leave you rot ...`, `Evil`)
                    Boss.dialogue(`And most importantly: you do the job and get the share that I decide to give you, no arguments or negotiations.`, `Evil`)
                    Boss.dialogue(`So, still interested?`, `Evil`)
                }


                narrative(`Join the Mafia? As the boss said, there's no coming back from this decision. Once I'm in, death is the only way out.`)
                option([
                    {text: `Yes`},
                    {text: `No`},
                ])
                if (0) {
                    Player.dialogue(`I'll be honored to swear my life to the Family, <Boss.Sir_or_Madam>.`, `Happy`)
                    Boss.dialogue(`Finally! Let's not waste any more time and get your initiation over and done with, shall we?`, `Happy`)
                    narrative(`My initiation ritual first involves me being led into the presence of other Mafia members and presented by the Boss. The Family's strict rules were read out before my finger was pricked with a needle by the Bos. A few drops of my blood were spilled on a card bearing the Family's patron saint, which was then set on fire. The burning card is passed rapidly from hand to hand, while I took the oath of loyalty to the Family.`)
                    narrative(`Now that I'm officially a member of the family, let's introduce myself to the rest.`)
                    Player.karma -= 5
                    Boss.hide()
                    Player.exchangeContact(Boss)


                    Total = random(3, 10)
                    count = 0
                    while (count < Total) {
                        Actor = scene.generatePerson()
                        Actor.addCriminal()
                        Actor.dress()
                        Actor.show(2)
                        narrative(`A gang member approached me.`)
                        Actor.dialogue(`So, you're the new <Player.boy_or_girl>? Watch yourself out there, novice. I'm <Actor.name>. Maybe we can work together sometimes.`, `Evil`)
                        Player.dialogue(`I won't let the Family down, <Actor.name>.`, `Happy`)
                        Player.exchangeContact(Actor)
                        Actor.hide()
                        Actor.saveAndDelete()
                        count += 1
                    }
                } else {
                    Player.dialogue(`Can I ... think this over, <Boss.Sir_or_Madam>?`, `Scared`)
                    Boss.dialogue(`Piss off then. If you're such an indecisive coward, you're probably not suited for our kind of business.`, `Angry`)
                }
            }
        }


    })
})
module.exports = scene