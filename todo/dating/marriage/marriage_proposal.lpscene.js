// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\marriage\marriage_proposal.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'marriage_proposal'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion, choice} = scene

    let Companion = scene.passedInActor()
    scene.what(["all", " -go_to_the_bathroom"])
    scene.where(["all", " -toilets", " -PC", " -office"])
    scene.when([0, 24])
    scene.who(($IF) => {
        Companion = Player.getCompanion()
        $IF(CurrentCompanion.isDating() && CurrentCompanion.attractionToPlayer > random(65, 100))
    })
    scene.other(($IF) => {
        $IF(!Player.isPlayerMarried())
    })


    scene.start(() => {
        let Engaged = false
        let Cheated = false
        let Stripper = scene.generatePersonTemporary([])
        let Stripper2 = scene.generatePersonTemporary([])
        let Actor = scene.getSpecific("ExDating")
        let choice = -1
        let ate = false
        let hadSex = false
        let Kissed = false
        let Affair = scene.getSpecific("Affair")
        let Master = scene.generatePersonTemporary([])
        CurrentCompanion.show(2)
        Engaged = false


        if (scene.forcedTrigger() || (Player.isDominantSex(CurrentCompanion) || (Player.interpersonal > random(90, 100) && Player.masochist < -70))) {
            narrative(`I think I'm in love with <CurrentCompanion.name>, and I know <CurrentCompanion.name> feels the same. However, have I ever imagined <CurrentCompanion.him_or_her> as my <CurrentCompanion.husband_or_wife>?`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (0) {
                if (CurrentCompanion.isExRelative()) {
                    narrative(`Even though we're related and incest is both frowned upon and forbidden, I cannot help but see myself spending the rest of my days with <CurrentCompanion.him_or_her> as my life partner.`)
                } else {
                    narrative(`I can definitely see myself spending the rest of my days with <CurrentCompanion.him_or_her> indeed.`)
                }
                narrative(`But is this the right time to have the courage to propose to <CurrentCompanion.him_or_her>?`)
                option([
                    {text: `Yes`},
                    {text: `No`},
                ])
                if (0) {
                    scene.setBackground("restaurant")
                    Player.dialogue(`Baby, I have something really important to tell you ...`, `Anxious`)
                    CurrentCompanion.dialogue(`Of course, <Player.name>. What is it?`, `Curious`)


                    if (Player.interpersonal < 50) {
                        narrative(`Alright, this is the moment. <Player.name>, you can do this! Be brave. Keep calm ... Keep calm ... Don't screw this up!`)
                    }


                    Player.dialogue(`You know, although we haven't been in a relationship with each other for too long, I am totally in love with you and I know you feel the same ...`, `Happy`)
                    Player.dialogue(`I would love nothing more than to take our relationship to the next level and be able to call you my <CurrentCompanion.husband_or_wife>.`, `Happy`)
                    Player.dialogue(`<CurrentCompanion.name>, will you marry me?`, `Happy`)
                    CurrentCompanion.dialogue(`<Player.name>! I ...`, `Surprised`)


                    if (CurrentCompanion.attractionToPlayer > random(75, 100)) {
                        CurrentCompanion.dialogue(`Yes! Yes! Of course, I'll be your <CurrentCompanion.husband_or_wife>! I'd love nothing more than spending the rest of my life with you`, `Happy`)
                        Engaged = true
                        Player.mood += 100
                        narrative(`So we embraced and kissed, treasuring our first moment as an engaged couple.`)
                        scene.sex(Player, CurrentCompanion)
                    } else {
                        if (CurrentCompanion.isExRelative() && !scene.isQuestCompleted("legalized")) {
                            CurrentCompanion.dialogue(`<Player.name> ... I love you too ... but I'm not sure a marriage will ever be possible. We're related after all ... and incest is illegal in this country.`, `Surprised`)
                        } else {
                            CurrentCompanion.dialogue(`<Player.name> ... I love you too ... but I'm not quite ready for marriage yet. We're too young for that.`, `Surprised`)
                        }
                        narrative(`And ... I've been rejected ... My heart is broken and I don't know how to feel about this ... We're still a couple, although this rejection has put some serious doubt on the strength of our relationship.`)
                        Player.mood -= 100
                        CurrentCompanion.attractionToPlayer -= random(0, 20)
                    }
                } else {
                    if (CurrentCompanion.isExRelative()) {
                        narrative(`No way we could get away with getting married. We're already playing around with the law with our current incest relationship.`)
                    } else {
                        narrative(`No, it's still too early. I want to spend more time in a relationship with <CurrentCompanion.name> before thinking about the next step ...`)
                    }
                }
            } else {
                narrative(`Nope, I don't see <CurrentCompanion.name> as <CurrentCompanion.husband_or_wife> material.`)
            }
        } else {
            scene.setBackground("restaurant")
            CurrentCompanion.dialogue(`Baby, I have something really important to tell you ...`, `Anxious`)
            narrative(`<CurrentCompanion.name> has taken me to a fancy restaurant but been acting rather weirdly today, as if he had something important to say to me all day.`)
            Player.dialogue(`Of course, darling. What is it?`, `Curious`)


            if (CurrentCompanion.interpersonal > random(0, 30)) {
                CurrentCompanion.dialogue(`You know, although we haven't been in a relationship with each other for too long, I am totally in love with you and I know you feel the same ...`, `Happy`)
                CurrentCompanion.dialogue(`I would love nothing more than to take our relationship to the next level and be able to call you my <Player.husband_or_wife>.`, `Happy`)
                CurrentCompanion.dialogue(`<Player.name>, will you marry me?`, `Happy`)
                Player.dialogue(`<CurrentCompanion.name>! I ...`, `Surprised`)
                option([
                    {text: `Agree to marry <CurrentCompanion.name>`},
                    {text: `Reject <CurrentCompanion.him_or_her>`},
                ])
                if (0) {
                    Player.dialogue(`Yes! Yes! Of course, I'll be your <Player.husband_or_wife>! I'd love nothing more than spending the rest of my life with you.`, `Happy`)
                    Engaged = true
                    Player.mood += 100
                    narrative(`So we embraced and kissed, treasuring our first moment as an engaged couple.`)
                    scene.sex(CurrentCompanion, Player)
                } else {
                    Player.dialogue(`<CurrentCompanion.name> ... I love you too ... but I'm not quite ready for marriage yet. We're too young for that.`, `Surprised`)
                    Player.mood -= 30
                    narrative(`It was a difficult conversation to have. We're still a couple, although this rejection has put some serious doubt on the strength of our relationship.`)
                    CurrentCompanion.attractionToPlayer -= random(0, 40)
                }
            } else {
                CurrentCompanion.dialogue(`I ... I ... Actually, can you believe it? I completely forgot what I wanted to say. Nevermind me!`, `Scared`)
                narrative(`And so <CurrentCompanion.name> went back to acting weird for the rest of the day ...`)
            }
        }


        if (Engaged) {
            Cheated = false
            CurrentCompanion.hide()
            scene.setBackground("home")
            narrative(`With our wedding coming up, should I have a <Player.bachelor_or_bachelorette> party without my fiance?`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (0) {
                narrative(`Why not? I might not have many more chances to let loose after our wedding.`)
                narrative(`With that decision made, one of my best friends, a party animal, immediately volunteered to organize a <Player.bachelor_or_bachelorette> party for us. <Player.He_or_She> didn't tell me the details of what's going to happen on the day, but told me to expect some pleasant surprises.`)
                scene.setBackground("nightclub")
                narrative(`Tonight is the night. My friend got us a nice limousine to take us to the most expensive nightclub in the city. We had so much booze on the limousine that by the time we arrived at the club, we were already quite drunk.`)
                narrative(`I can't believe it! My friend managed to book the nightclub's VIP area all for us. This must have cost a fortune! I knew I could rely on my friend ...`)
                narrative(`After many more rounds of expensive alcohol, I was told to close my eyes for the surprise of the night that my friends had in store for me. Being quite drunk already, I happily obliged.`)
                Stripper = scene.generatePersonTemporary([])
                while (!Player.isInterestedIn(Stripper)) {
                    Stripper = scene.generatePersonTemporary([])
                }
                Stripper2 = scene.generatePersonTemporary([])
                while (!Player.isInterestedIn(Stripper2)) {
                    Stripper2 = scene.generatePersonTemporary([])
                }
                Stripper.blendPreset("twenties")
                Stripper2.blendPreset("twenties")


                if (Stripper.isMale()) {
                    Stripper.blendPreset("bodybuilder")
                } else {
                    Stripper.blendPreset("hourglass1_F")
                }
                Stripper.randomizeFace()
                Stripper.randomizeHairs()


                if (Stripper2.isMale()) {
                    Stripper2.blendPreset("bodybuilder")
                } else {
                    Stripper2.blendPreset("hourglass1_F")
                }
                Stripper2.randomizeFace()
                Stripper2.randomizeHairs()


                Stripper.show(2)
                Stripper2.show(3)
                narrative(`My friends then told me to open my eyes, and I couldn't believe what I was seeing ... Two hot strippers are dancing in front of me with all my friends cheering them on.`)
                narrative(`My best friend whispered into my ear, assuring me that the strippers have already been paid for some 'extra service'. <Player.He_or_She> suggested I have one last threesome with these hotties before being tied down to one <CurrentCompanion.man_or_woman> for the rest of my life.`)
                option([
                    {text: `Yes`},
                    {text: `No`},
                ])
                if (0) {
                    narrative(`Oh well, as long as <CurrentCompanion.name> doesn't find out, this would be an experience I'll never forget. People do this on <Player.bachelor_or_bachelorette> parties all the time, I'm sure ...`)
                    Player.karma -= 20
                    scene.sex(Stripper, Player, Stripper2)
                    Player.show(0)
                    Cheated = true
                } else {
                    narrative(`No way, this is going way too far. I must remain faithful to my fiance and not give in to peer pressure. I can't risk our marriage just for a few minutes of wild fun.`)
                    narrative(`Having made my decision, I sent the strippers on their way. My friends were clearly disappointed and the whole thing was a bit of a killjoy for the rest of the party.`)
                }
                Stripper.hide()
                Stripper2.hide()
            } else {
                CurrentCompanion.attractionToPlayer += random(0, 5)
                narrative(`No, nothing good would come out of it. Let's just focus on making the proper preparations for the wedding.`)
            }


            Actor = scene.getSpecific("ExDating")
            if (Actor.isValid() && Actor.isContactExchanged() && Actor.masochist > 0 && Actor.rapportwithplayer > 0 && Actor.attractionToPlayer > 20) {
                scene.setBackground("home")
                narrative(`I heard a knock on my door. I wonder who it might be.`)
                Actor.dress()
                Actor.show(2)
                narrative(`It's my ex <Actor.name>!`)


                Actor.dialogue(`<Player.name>, I found out from Facebook ... you're getting married to <CurrentCompanion.name> ...`, `Happy`)
                narrative(`As far as exes go, we're still on quite good terms, but I obviously didn't invite <Actor.name> to the wedding. Not exactly the easiest announcement to make to an ex.`)
                Actor.dialogue(`I guess it's your life and you have every right to make that choice ... I'm glad you found a <CurrentCompanion.man_or_woman> to settle down with ... I'm happy for you ...`, `Sad`)
                narrative(`<Actor.name>'s facial expression certainly didn't scream out 'happy'. Poor <Actor.guy_or_girl>, maybe deep inside <Actor.name> still has feelings for me ... and to be honest, maybe I do feel the same.`)
                option([
                    {text: `Just thank <Actor.him_or_her>`},
                    {text: `Invite <Actor.him_or_her> in`},
                ])
                if (0) {
                    Player.dialogue(`Thank you ... You should go though. It would be troublesome if my fiance sees you here.`, `Sad`)
                    Actor.attractionToPlayer -= random(0, 3)
                } else {
                    Player.dialogue(`Thank you ... That's very kind of you.`, `Sad`)
                    narrative(`Feeling sorry for my ex, I decided to invite <Actor.him_or_her> inside to chat a bit. I told myself nothing would happen and I was only doing it out of sympathy.`)
                    Player.dialogue(`Actually, do you want to come inside for a bit? We're still friends right?`, `Sad`)
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


                            if (Kissed || (!hadSex && Actor.attractionToPlayer > random(30, 200))) {
                                Player.animatePair(Player, Actor, "Kissing")
                                Player.dialogue(`...`, `Kiss`)
                                Actor.dialogue(`...`, `Kiss`)
                                narrative(`We had a kiss, an awkward one at first, but soon moving towards a more passionate direction.`)
                                Player.karma -= 2
                                narrative(`Should I let this escalate further?`)
                                option([
                                    {text: `Make out`},
                                    {text: `Stop`},
                                ])
                                if (0) {
                                    narrative(`Our kiss got more and more steamy and soon we were making out, our hands all over each other.`)
                                    hadSex = true
                                    Player.perversion += random(0, 1)
                                    Player.karma -= 20
                                    scene.sex(Player, Actor)
                                    Actor.hide()
                                    Player.show(0)
                                    Cheated = true
                                    narrative(`Why did I do that? I let the old flame spark again ... I can only hope that my fiance will never find out about it.`)
                                    choice = 5
                                } else {
                                    narrative(`I decided to stop it there and not go any further. This could have destroyed my future marriage.`)
                                }
                            } else if (random(0, 100) < 15) {
                                Actor.dialogue(`I've gotta go now. Thank you for inviting me in.`, `Happy`)
                                narrative(`We parted ways.`)
                                choice = 5
                            }
                        }
                    }
                }
                Actor.hide()
            }


            Affair = scene.getSpecific("Affair")
            if (Player.intelligence < CurrentCompanion.intelligence * random(0, 1) && (Cheated || Affair.isValid())) {
                scene.setBackground("home")
                CurrentCompanion.show(2)
                CurrentCompanion.dialogue(`<Player.name>, we need to talk!`, `Angry`)
                CurrentCompanion.attractionToPlayer -= random(0, 50)
                narrative(`This can't be good ...`)
                Player.dialogue(`Yes, darling, what is it? You don't look too happy ...`, `Anxious`)
                CurrentCompanion.dialogue(`Of course I don't, and you know damn well why!`, `Angry`)
                CurrentCompanion.dialogue(`I know about your little romp. You <Player.asshole_or_slut>, you were sleeping around behind my back! I trusted you. I loved you. I wanted to spend the rest of my life with you, yet you betrayed me!`, `Furious`)
                narrative(`And just like that, <CurrentCompanion.name> called off the engagement and broke up with me ... not too long before our planned wedding date. I found out later that <CurrentCompanion.he_or_she> also blocked my number.`)
                Player.loseDating()
                Player.mood -= 100
                Player.blockContact("Dating")
            } else {
                scene.setBackground("work")
                Master = scene.generatePersonTemporary([])
                while (!Master.isMale()) {
                    Master = scene.generatePersonTemporary([])
                }
                Master.dress()


                scene.setBackground("biergarten")
                narrative(`The most important day of my life is here ...`)
                if (CurrentCompanion.isExRelative()) {
                    if (scene.isQuestCompleted("legalized")) {
                        narrative(`Thanks to the recent legalization of incest, we had no problem registering the marriage with the government and have a proper public wedding. Incest being legal doesn't stop some close-minded people from talking shit about us of course, but we couldn't care less about that.`)
                    } else {
                        narrative(`Registering this marriage with the government is a no-goer - incest is illegal in this country so that would just send us straight to jail ... Still, we wanted to have a proper wedding, so we only only invited a few particularly open-minded family and friends, as well as guests who met us after we became a couple and had no idea we were related.`)
                    }
                }
                Player.show(0)
                CurrentCompanion.show(1)
                Master.show(3)
                Player.dressUniform("Wedding")
                CurrentCompanion.dressUniform("Wedding")
                Master.dialogue(`Today, <Player.name> and <CurrentCompanion.name> honored you with their invitation to be present with them today for this ceremony.`, `Happy`)
                Master.dialogue(`And so, this day, they declare before all of us that they shall live together in marriage.`, `Happy`)
                Master.dialogue(`In the traditional way, they entered into their marriage with the joining of hands, the making of vows and promises, and the giving and receiving of rings, an outward symbol of their voluntary commitment to one another.`, `Happy`)
                Master.dialogue(`Therefore, it is my pleasure, that I now pronounce them <Player.husband_or_wife> and <CurrentCompanion.husband_or_wife>.`, `Happy`)
                if (CurrentCompanion.isMale() && Player.isMale()) {
                    Master.dialogue(`You may now kiss your husband!`, `Happy`)
                } else {
                    Master.dialogue(`You may now kiss your bride!`, `Happy`)
                }
                Player.animatePair(Player, CurrentCompanion, "Kissing")
                Player.dialogue(`...`, `Kiss`)
                CurrentCompanion.dialogue(`...`, `Kiss`)
                Master.hide()
                scene.setBackground("home")
                narrative(`And that's it - it's official, we're married! <CurrentCompanion.name> is now my dear <CurrentCompanion.husband_or_wife>. The rest of the wedding ceremony went without issues, although honestly, both of us couldn't wait for it to end and the guests to leave so that we can begin our intimate wedding night.`)
                Player.karma += 20
                if (CurrentCompanion.isDominantSex(Player)) {
                    Player.matchLastName(CurrentCompanion)
                } else {
                    CurrentCompanion.matchLastName(Player)
                }
                CurrentCompanion.setActorVar("tag_Married", 1)
                Player.getMarried()
                scene.sex(Player, CurrentCompanion)
                if (Player.playerHasHome() && Player.datingHasHome()) {
                    CurrentCompanion.show(2)
                    Player.show(0)
                    CurrentCompanion.dialogue(`Baby, now that we're married: Why don't you move in to live with me? Surely as a married couple, we must live together ...`, `Happy`)
                    narrative(`Start living together?`)
                    option([
                        {text: `Yes`},
                        {text: `No`},
                        {text: `Ask <CurrentCompanion.name> to move in instead`},
                    ])
                    if (0) {
                        narrative(`I accepted <CurrentCompanion.name>'s offer.`)
                        Player.loseHome()
                        CurrentCompanion.attractionToPlayer += random(0, 10)
                    } else if (1) {
                        narrative(`I turned down <CurrentCompanion.name>'s offer.`)
                        CurrentCompanion.attractionToPlayer -= random(0, 2)
                    } else {
                        narrative(`Actually, I think it's more appropriate that <CurrentCompanion.name> moves in with me instead. After a short discussion, <CurrentCompanion.he_or_she> accepted my offer.`)
                        Player.loseHomeDating()
                    }
                    scene.timeout(500, "move_in_with_dating")
                }
            }
        }


        Player.endDate()
    })
    scene.timeout(1000, "marriage_proposal")
})
module.exports = scene