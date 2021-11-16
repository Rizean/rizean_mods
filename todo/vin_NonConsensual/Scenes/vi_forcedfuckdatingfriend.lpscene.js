// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\vi_forcedfuckdatingfriend.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vi_forcedfuckdatingfriend'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Dating")
    let Actor2 = scene.getSpecific("Dating_Friend")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Dating")
        Actor2 = scene.getSpecific("Dating_Friend")
        $IF(random(50, 100) < Actor.masochist && random(80, 1000) < Actor.perversion && random(70, 200) < Actor2.perversion)
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && Player.perversion < random(0, 100) * random(0, 1))
    })


    scene.start(() => {
        Actor.dress()
        Actor.show(2)
        Actor.dialogue(`Darling, my biggest fantasy has always been making love to you while you're tied up and blindfolded ...`, `Flirty`)
        option([
            {text: `We can try`},
            {text: `No way`},
        ])
        if (0) {
            Player.dialogue(`I guess I can try it ... only for you.`, `Flirty`)
            Actor.dialogue(`You're the best <Player.boyfriend_or_girlfriend> ever ... I love you!`, `Excited`)
            narrative(`Tonight is the night ...`)
            narrative(`Damn, <Actor.name> was serious about this. I got tied up so well I could barely move. Also, I cannot see a thing with this blindfold.`)
            Actor.dialogue(`Darling, here I go ...`, `Flirty`)
            narrative(`There is my <Actor.boyfriend_or_girlfriend> feeling me up all over ... Wait ... this doesn't feel like <Actor.him_or_her> at all!`)
            Player.dialogue(`<Actor.name>, what the hell is going on? I know it's not you ...`, `Angry`)
            narrative(`My blindfold was removed and to my horror, the <Actor2.man_or_woman> who has been feeling me up isn't <Actor.name>, but <Actor2.name>, one of <Actor.name>'s best friends!`)
            Actor2.dress()
            Actor2.show(3)
            Actor2.dialogue(`You have no idea how long I have been wanting to fuck you hard. Thankfully I have the best friend in the world. Sharing is caring after all!`, `Flirty`)
            Player.dialogue(`<Actor.name>! <Actor2.name>! Enough of this perverted joke. Get my hands untied this instance!`, `Furious`)
            narrative(`Unfortunately for me, this was no joke. Soon enough, <Actor2.name> ripped my clothes off and forced <Actor2.himself_or_herself> on me, helplessly tied to the bed. <Actor.name>, the <Actor.boyfriend_or_girlfriend> that I trust, stood there and watched, even cheering on <Actor.his_or_her> friend.`)
            scene.filter("Aggressive")
            scene.talkNonConsensual()
            scene.sexNoAffair(Actor2, Player)
            Player.mood = 0
            Actor2.hide()
            Actor.show(2)
            narrative(`I had to endure <Actor2.name>'s brutal pounding until it was all over. But is my relationship also over with this?`)
            option([
                {text: `Of course`},
                {text: `No ...`},
            ])
            if (0) {
                Player.masochist -= random(0, 2)
                narrative(`Of course it's all over with <Actor.name>. I trusted <Actor.him_or_her> and <Actor.he_or_she> tricked me into getting violated by <Actor.his_or_her> best friend just to satisfy some perverse fantasy or fulfil some bro pact.`)
                if (Player.isPlayerMarried()) {
                    Player.dialogue(`I cannot put up with this abusive marriage any longer ...`, `Crying`)
                    narrative(`And just like that, I divorced that abusive <Actor.husband_or_wife> of mine ...`)
                    Player.mood -= 100
                    Player.divorce()
                    Player.loseDating()
                    if (Player.isDominantSex(Actor) && Player.money > 1000) {
                        narrative(`Unfortunately for me, the court awarded half of my hard-earned fortune to <Actor.name> ... What a disaster of a marriage that was ...`)
                        Player.money -= Player.money * 0.5
                    }
                } else {
                    narrative(`I ran away from my abusive <Actor.boyfriend_or_girlfriend>, telling <Actor.him_or_her> it was all over.`)
                    Player.loseDating()
                    Player.mood -= 50
                }
                Player.blockContact(Actor)
                Player.blockContact(Actor2)
                narrative(`After everything we've been through together as a couple, I didn't quite have it to report what happened to the cops, sparing my ex and <Actor.his_or_her> friend jail time.`)
            } else {
                Player.masochist += random(0, 5)
                narrative(`I don't know why, but even after what happened, I didn't quite have the heart to break up with <Actor.name> ... I just hope <Actor.he_or_she> doesn't see this weakness as consent for me to be a fuck toy on demand for all <Actor.his_or_her> friends.`)
            }
        } else {
            Player.dialogue(`Honey, I've told you many times before: I'm not comfortable doing that for you.`, `Angry`)
        }
    })
    scene.timeout(1000, "vi_forcedfuckdatingfriend")


})
module.exports = scene