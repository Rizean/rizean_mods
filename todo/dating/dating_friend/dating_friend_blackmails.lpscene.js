// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_friend\dating_friend_blackmails.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_friend_blackmails'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    let Affair = scene.getSpecific("Affair")
    let Actor = scene.getSpecific("Dating_Friend")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        Affair = scene.getSpecific("Affair")
        Actor = scene.getSpecific("Dating_Friend")
        $IF(Actor.rapportwithplayer < 10 && Actor.isInterestedIn(Player) && Actor.perversion > 50 && random(0, 100) < Actor.intelligence - Player.intelligence)
    })
    scene.other(($IF) => {
        $IF(Player.isAtDatingHome())
    })


    scene.start(() => {
        let breakup = false
        narrative(`I heard a knock on the door. I wonder who it is.`)
        Actor.dress()
        Actor.show(2)


        narrative(`It's <Actor.name>, my <Dating.boyfriend_or_girlfriend> <Dating.name>'s friend. <Actor.He_or_She> must be looking for <Dating.name>.`)
        Player.dialogue(`Oh, it's you, <Actor.name>. What a shame though, <Dating.name> just went out and won't be back for another few hours.`, `Sad`)
        Actor.dialogue(`Yes, I know. <Dating.He_or_She> told me. However, that's exactly why I'm here. I'm here for you!`, `Happy`)
        Player.dialogue(`Oh really? Come inside then.`, `Surprised`)
        narrative(`<Actor.name> came inside and sat down in the living room. This is certainly unusual. What on earth does <Actor.he_or_she> want to talk to me about?`)
        Player.dialogue(`So, <Actor.name>, what do you want to talk to me about? You're acting quite mysterious ...`, `Anxious`)


        Actor.dialogue(`I'll keep it short then: I know all about your little affair with <Affair.name>. And it's going to cost you if you want to keep my mouth shut in front of <Dating.name>.`, `Evil`)
        option([
            {text: `Bribe`},
            {text: `Offer sex`, condition: Player.perversion > 10},
            {text: `Stay firm`},
        ])
        if (0) {
            Player.dialogue(`Alright, you got me. Will this be enough?`, `Sad`)
            Actor.dialogue(`Thank you. Wow, you're generous today, aren't you? That should be enough actually.`, `Evil`)
            Player.money -= random(200, 1000)
            Player.mood -= 30
        } else if (1) {
            Player.dialogue(`Maybe I can keep your mouth shut if I give you some of the same treatments that <Affair.name> got?`, `Flirty`)
            Actor.dialogue(`How could I say no?`, `Flirty`)
            scene.sex(Player, Actor)
        } else {
            Player.dialogue(`Go ahead and tell <Dating.him_or_her> then. We'll see who <Dating.he_or_she> will believe: <Dating.his_or_her> <Player.boyfriend_or_girlfriend> or a random friend.`, `Angry`)
            Actor.dialogue(`As you wish then!`, `Angry`)
            Actor.hide()
            narrative(`<Actor.name> stormed off, swearing that <Actor.he_or_she> would tell <Dating.name> everything ...`)
            narrative(`A few hours later ...`)
            Dating.dress()
            Dating.show(2)
            Dating.dialogue(`<Actor.name> called me! <Actor.He_or_She> told me everything about your affair. What do you have to say for yourself?`, `Angry`)
            option([
                {text: `Deny`},
                {text: `Confess and apologize`},
                {text: `Admit unapologetically`, condition: Player.masochist < 0},
            ])
            if (0) {
                Player.dialogue(`Baby! You must trust me. Don't believe those baseless rumours. Your friend tried to sleep with me but I stayed faithful to you so <Actor.he_or_she> is now trying to sabotage our relationship in revenge. <Affair.name> and I - we didn't do anything!`, `Angry`)
                if (Player.intelligence - Dating.intelligence > random(0, 50)) {
                    Dating.dialogue(`Maybe you're right. I'm sorry - I shouldn't have believed those lies from <Actor.name>. In fact, <Actor.he_or_she> will no longer be my friend ...`, `Sad`)
                    breakup = false
                    Actor.removeDatingFriend()
                } else {
                    Dating.dialogue(`You still want to continue lying to me? Do you take me for a fool?`, `Furious`)
                    breakup = true
                }
            } else if (1) {
                Player.dialogue(`Baby! It was a terrible mistake. I didn't mean to hurt you. I have felt guilty about it everday since ... Please don't leave me - it will never happen again.`, `Crying`)
                if (Dating.attractionToPlayer + Player.interpersonal > random(0, 200)) {
                    Dating.dialogue(`... Fine. For everything we've done together, I might as well give you one final chance. I hope I won't regret this later.`, `Sad`)
                    breakup = false
                } else {
                    Dating.dialogue(`Of course you would say that. They always say it's a mistake. You know what? I made a mistake getting in a relationship with someone like you in the first place.`, `Furious`)
                    breakup = true
                }
            } else {
                Player.dialogue(`It's about time you find out ... So I fucked <Affair.him_or_her>. What's the matter? So what are you going to do? Break up with me? As if a loser like you could find someone better!`, `Evil`)
                Player.masochist -= random(0, 2)
                if (Dating.masochist > random(30, 100)) {
                    Dating.dialogue(`How could you? I'm your <Dating.boyfriend_or_girlfriend> ... But I guess you're right ... I couldn't bear to break up with you.`, `Shocked`)
                    Dating.masochist += random(0, 10)
                    breakup = false
                } else {
                    Dating.dialogue(`Now I get to see your true colors! Are you not at least a bit sorry? Yes, I'm indeed breaking up with you. Get the fuck out of my life.`, `Furious`)
                    breakup = true
                }
            }


            if (breakup) {
                if (Player.isPlayerMarried()) {
                    Dating.dialogue(`I'm afraid this marriage isn't working ...`, `Sad`)
                    narrative(`And just like that, <Dating.name> divorced me ...`)
                    Player.mood -= 100
                    Player.divorce()
                    Player.loseDating()
                    if (Player.isDominantSex(Dating) && Player.money > 1000) {
                        narrative(`To make matters worse, the court awarded half of my hard-earned fortune to <Dating.name> ... What a disaster of a marriage that was ...`)
                        Player.money -= Player.money * 0.5
                    }
                } else {
                    narrative(`And just like that, <Dating.name> broke up with me ... What's more - I found out later that <Dating.he_or_she> also blocked my number.`)
                    Player.loseDating()
                    Player.mood -= 50
                }
                Player.blockContact(Dating)
            } else if (Affair.isContactExchanged() && Dating.masochist < 30) {
                Dating.dialogue(`I can forgive you, with one condition ...`, `Angry`)
                Dating.dialogue(`You must end all contacts with <Affair.name> - no meeting, call, social media, the rest of it!`, `Angry`)
                option([
                    {text: `Block <Affair.name>`},
                    {text: `No`},
                ])
                if (0) {
                    Player.dialogue(`I guess I don't have another choice ...`, `Sad`)
                    Player.blockContact(Affair)
                } else {
                    Player.dialogue(`I'm afraid I can't do that ... <Affair.name> is an important person in my life.`, `Sad`)
                    Dating.dialogue(`More important than your own <Dating.boyfriend_or_girlfriend> apparently ... Fine, then it's over between us!`, `Furious`)
                    if (Player.isPlayerMarried()) {
                        Dating.dialogue(`I'm afraid this marriage isn't working ...`, `Sad`)
                        narrative(`And just like that, <Dating.name> divorced me ...`)
                        Player.mood -= 100
                        Player.divorce()
                        Player.loseDating()
                        if (Player.isDominantSex(Dating) && Player.money > 1000) {
                            narrative(`To make matters worse, the court awarded half of my hard-earned fortune to <Dating.name> ... What a disaster of a marriage that was ...`)
                            Player.money -= Player.money * 0.5
                        }
                    } else {
                        narrative(`And just like that, <Dating.name> broke up with me ... What's more - I found out later that <Dating.he_or_she> also blocked my number.`)
                        Player.loseDating()
                        Player.mood -= 50
                    }
                    Player.blockContact(Dating)
                }
            }


            Dating.hide()


            if (Dating.isDating()) {
                Player.forgiveAffairs()
                if (Affair.isContactExchanged()) {
                    narrative(`Phew ... that was a relief. <Dating.He_or_She> didn't break up with me even after what happened.`)
                    if (Player.perversion > 50) {
                        narrative(`Suddenly, a perverted and evil idea came to mind: I could celebrate by calling <Affair.name> over and continuing to get away with the affair!`)
                        option([
                            {text: `Call <Affair.name> over`},
                            {text: `I should not`},
                        ])
                        if (0) {
                            Player.perversion += random(0, 1)
                            Player.masochist -= random(0, 2)
                            narrative(`A while later ...`)
                            Affair.dress()
                            Affair.show(2)
                            Affair.dialogue(`Hah, what a placemat of a <Dating.boyfriend_or_girlfriend> you have! I would love to see <Dating.his_or_her> face if <Dating.he_or_she> knew that you went off to me right away after the loser forgave you ...`, `Evil`)
                            scene.sex(Affair, Player)
                            Affair.hide()
                            narrative(`I enjoyed that much more than usual. Maybe it was the blatant shamelessness of cheating on my <Dating.boyfriend_or_girlfriend> that added spices to the sex.`)
                        } else {
                            narrative(`That's fucked up. I shouldn't toy with my chances like that ... It's best if I avoid seeing <Affair.name> for a while at least.`)
                        }
                    }
                }
            } else if (Player.perversion > 30 && Affair.isContactExchanged()) {
                narrative(`Now that it's all over, a perverted idea came to my mind: Should I call <Affair.name> over to ... cheer me up?`)
                option([
                    {text: `Call <Affair.name> over`},
                    {text: `I should not`},
                ])
                if (0) {
                    narrative(`I'll show that fool <Dating.name> that it's all <Dating.his_or_her> loss!`)
                    narrative(`A while later ...`)
                    Affair.dress()
                    Affair.show(2)
                    Affair.dialogue(`Hah, what a loser of a <Dating.boyfriend_or_girlfriend> you had - good riddance! I would love to see <Dating.his_or_her> face if <Dating.he_or_she> knew that you went off to me right away after the <Dating.idiot_or_bitch> broke up with you ...`, `Evil`)
                    scene.sex(Affair, Player)
                    Affair.hide()
                    narrative(`I enjoyed that much more than usual. Sweet revenge certainly added spices to the sex.`)
                    Player.perversion += random(0, 1)
                    Player.masochist -= random(0, 2)
                } else {
                    narrative(`That would be an evil thing to do and an insult to my memories with <Dating.name>. I may have cheated but I'm not completely shameless ...`)
                }
            }
        }


    })
    scene.timeout(500, "dating_friend_blackmails")


})
module.exports = scene