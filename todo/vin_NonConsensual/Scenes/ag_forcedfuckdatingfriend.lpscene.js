// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\ag_forcedfuckdatingfriend.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'ag_forcedfuckdatingfriend'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Dating")
    let Actor2 = scene.getPerson("true")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Dating")
        Actor2 = scene.getPerson("true")
        $IF(random(50, 200) < Actor2.rapportwithplayer && scene.isModEnabled("vin_NTR") && Actor.perversion < random(0, 100) * random(0, 1) && random(50, 200) < Actor2.perversion && random(50, 100) < Player.masochist && random(80, 500) < Player.perversion)
    })
    scene.other("none")


    scene.start(() => {
        narrative(`<Actor2.name> is one of my best friends and I can tell <Actor2.he_or_she> really finds my <Actor.boyfriend_or_girlfriend> <Actor.name> attractive. I don't mind it so much really. In fact, my biggest fantasy is to watch <Actor2.name> fuck <Actor.name>. There's no way <Actor.name> would ever agree to that willingly though ...`)
        option([
            {text: `It's just a fantasy`},
            {text: `Trick <Actor.name>`},
        ])
        if (0) {
            narrative(`It's just a fantasy. <Actor.name> will never consent to it and it will never happen.`)
        } else {
            Actor.dress()
            Actor.show(2)
            Player.dialogue(`Darling, my biggest fantasy has always been making love to you while you're tied up and blindfolded ...`, `Flirty`)
            if (random(50, 200) < Actor.attractionToPlayer + Player.interpersonal) {
                Actor.dialogue(`I guess I can try it ... only for you.`, `Flirty`)
                Player.dialogue(`You're the best <Actor.boyfriend_or_girlfriend> ever ... I love you!`, `Excited`)
                narrative(`Tonight is the night ...`)
                narrative(`I tied <Actor.name> up so well <Actor.he_or_she> could barely move. And this blindfold should keep <Actor.him_or_her> from seeing a thing ...`)
                Player.dialogue(`Darling, here I go ...`, `Flirty`)
                Actor2.dress()
                Actor2.show(3)
                narrative(`I had no intention to enjoy my <Actor.boyfriend_or_girlfriend> tonight of course. Instead, I waved a signal to <Actor2.name>, who has been hiding in the closet the whole time, to finally come out and enjoy my generous gift. Soon, <Actor2.his_or_her> hands were all over <Actor.him_or_her>.`)
                Actor.dialogue(`<Actor.name>, what the hell is going on? I know it's not you ...`, `Angry`)
                narrative(`The act's over. I decided to remove <Actor.name>'s blindfold and <Actor.he_or_she> was soon overcome with a look of horror when <Actor.he_or_she> realized who had been feeling <Actor.him_or_her> up.`)
                Actor2.dialogue(`You have no idea how long I have been wanting to fuck you hard. Thankfully I have the best friend in the world. Sharing is caring after all!`, `Flirty`)
                Actor.dialogue(`<Player.name>! <Actor2.name>! Enough of this perverted joke. Get my hands untied this instance!`, `Furious`)
                narrative(`Unfortunately for <Actor.name>, this was no joke. Soon enough, <Actor2.name> ripped <Actor.his_or_her> clothes off and forced <Actor2.himself_or_herself> on my <Actor.boyfriend_or_girlfriend>, helplessly tied to the bed. Meanwhile, I just stood there and watched, even cheering on my friend.`)
                scene.filter("Aggressive")
                scene.talkNonConsensual()
                scene.sexNoAffair(Actor2, Actor)
                Actor2.hide()
                Actor.show(2)
                Player.show(0)
                narrative(`<Actor.name> had to endure <Actor2.name>'s brutal pounding until it was all over. But is our relationship also over with this? Surely, <Actor.he_or_she> will never forgive me for this?`)
                Player.karma -= 20
                if (random(0, 100) < Actor.masochist) {
                    Actor.attractionToPlayer = -100
                    narrative(`Of course <Actor.name> said it was all over. <Actor.He_or_She> trusted me and I tricked <Actor.him_or_her> into getting violated by my best friend just to satisfy some perverse fantasy.`)
                    if (Player.isPlayerMarried()) {
                        Actor.dialogue(`I cannot put up with this abusive marriage any longer ...`, `Crying`)
                        Player.mood -= 100
                        Player.divorce()
                        Player.loseDating()
                        if (Player.isDominantSex(Actor) && Player.money > 1000) {
                            narrative(`Unfortunately for me, the court awarded half of my hard-earned fortune to <Actor.name> ... What a disaster of a marriage that was ...`)
                            Player.money -= Player.money * 0.5
                        }
                    } else {
                        Player.loseDating()
                        Player.mood -= 50
                    }
                    Player.blockContact(Actor)
                    narrative(`However, after everything we've been through together as a couple, <Actor.name> didn't quite have it to report what happened to the cops, sparing me and <Actor2.name> jail time.`)
                } else {
                    narrative(`I don't know how, but even after what happened, <Actor.name> didn't have the heart to break up with me ... I wonder if I should take this as consent for <Actor.him_or_her> to be a fuck toy on demand for all my friends.`)
                }
            } else {
                Actor.dialogue(`Honey, I've told you many times before: I'm not comfortable doing that for you.`, `Angry`)
            }
        }
    })
    scene.timeout(1000, "ag_forcedfuckdatingfriend")


})
module.exports = scene