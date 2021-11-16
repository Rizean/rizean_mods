// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\vi_2female_rape_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vi_2female_rape_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([0, 24])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!CurrentCompanion.isMale() && CurrentCompanion.masochist < -50 && CurrentCompanion.perversion > 70 && !CurrentCompanion.isDating())
    })
    scene.other("none")


    scene.start(() => {
        let Actor2 = scene.generatePersonTemporary([])
        let Loc = Actor.getBuilding("home")
        narrative(`<Actor.name> is not your ordinary lady. She's been making so many jokes about raping me recently that I've started to think those are more threats than jokes and she has some sort of a rape fetish.`)
        option([
            {text: `Be more careful`},
            {text: `It's just a weird sense of humour`},
        ])
        if (0) {
            narrative(`I decided to be more careful around <Actor.name> so even if those dark desires are there, there are no oppotunities to act upon them.`)
        } else {
            if (random(40, 200) < Actor.attractionToPlayer) {
                Actor2 = scene.generatePersonTemporary([])
                while (Actor2.isMale()) {
                    Actor2 = scene.generatePersonTemporary([])
                }
                Actor2.dress()
                Actor2.show()
                narrative(`<Actor.name> decided to invite me into <Actor.his_or_her> apartment for drinks tonight. We were soon joined by one of <Actor.name>'s friends, called <Actor2.name>. They've been extremely generous with the alcohol and I'm feeling quite tipsy already.`)
                Loc = Actor.getBuilding("home")
                Player.moveTo(Loc)
                Player.dialogue(`Thank you for inviting me into your apartment and for the drinks, but I think I should leave now. Would you mind calling me a taxi? I'm so drunk ...`, `Pain`)


                if (random(50, 250) > Actor.attractionToPlayer) {
                    Actor.dialogue(`Sure, I'll get you a cab right away. Should be here in ten minutes.`, `Happy`)
                    Actor.rapportwithplayer += random(0, 2)
                } else {
                    narrative(`All of a sudden, <Actor.name> grabbed me ...`)
                    Player.animatePair(Player, Actor, "Kissing")
                    Actor.dialogue(`...`, `Kiss`)
                    Player.dialogue(`<Actor.name>! What the hell are you doing? You know I'm not into you that way! We're only friends.`, `Angry`)
                    Actor.rapportwithplayer -= random(0, 5)
                    Player.dialogue(`I'm leaving! I can't believe you just forced a kiss on me like that!`, `Angry`)


                    if (random(-100, 0) < Player.masochist) {
                        Actor.dialogue(`I'm sorry ... It was a moment of passion. I didn't know what I was doing ...`, `Embarrassed`)
                    } else {
                        Actor.dialogue(`Nobody rejects me like that! Let's see if I can't change your mind after a hard pounding!`, `Furious`)
                        Player.dialogue(`Get your hands off me! Have you gone crazy? Help!`, `Angry`)
                        if (Player.martial * 0.5 > Actor.martial) {
                            narrative(`Unfortunately for <Actor.name> and <Actor2.name>, even drunk, I was more than a handful for them to subdue. After a brief struggle, I managed to get away from them and escaped <Actor.his_or_her> apartment.`)
                        } else {
                            narrative(`Outnumbered and affected by the alcohol, I never stood a chance and <Actor.name> and <Actor2.name> managed to overcome my struggles easily. Soon, they were ripping my clothes off and proceeded to force themselves upon me.`)
                            Player.dialogue(`No! Please stop ... I trusted you ... Somebody help ...`, `Crying`)
                            scene.talkNonConsensual()
                            scene.sexNoAffair(Actor, Player, Actor2)
                            Actor.hide()
                            Player.mood = 0
                        }


                        Actor.rapportwithplayer = -100
                        Player.blockContact(Actor)
                        narrative(`They were lucky to avoid jail time as I never reported them to the police, but I blocked <Actor.him_or_her> and never wanted to see <Actor.name> again.`)
                    }
                }
                Player.endDate()
            }
        }
    })
    scene.timeout(400, "vi_2female_rape_cms")
})
module.exports = scene