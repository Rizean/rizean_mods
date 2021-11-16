// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_ag_publicsex.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_ag_publicsex'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([20, 4])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!Actor.isRelative() && Player.isInterestedIn(Actor) && (Player.perversion - Actor.perversion > 40 || Actor.isVirgin()) && Actor.attractionToPlayer > 10)
    })
    scene.other("none")


    scene.start(() => {
        let Couple1 = scene.generatePersonTemporary([])
        let Couple2 = scene.generatePersonTemporary([])
        if (!Actor.isValid() || scene.forcedTrigger()) {
            Actor = Player.getCompanion()
        }
        scene.setBackground("street")
        narrative(`<Actor.name> is such an innocent <Actor.guy_or_girl>. I reckon a little visit to that secret alley where couples come to have public sex could help <Actor.him_or_her> open up a bit ...`)
        if (Actor.isVirgin()) {
            narrative(`Maybe this is my opportunity to seduce my way into deflowering this innocent virgin ...`)
        }
        narrative(`Should I?`)
        option([
            {text: `Take <Actor.him_or_her> to a dark alley`},
            {text: `Not a good idea`},
        ])
        if (0) {
            narrative(`A while later ...`)
            Actor.dialogue(`<Player.name>, where are you taking me to? This doesn't look safe ...`, `Surprised`)
            Player.dialogue(`Come on. Trust me. I'm here to protect you.`, `Flirty`)
            if (random(0, 200) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                Actor.dialogue(`Fine ... I trust you.`, `Embarrassed`)
                Actor.masochist += random(0, 0.25)
                Actor.perversion += random(0, 0.25)
                Actor.dialogue(`Wait, are those two people ... having sex?`, `Shocked`)
                Couple1 = scene.generatePersonTemporary([])
                Couple2 = scene.generatePersonTemporary([])
                while (Couple2.isSameGender(Couple1)) {
                    Couple2 = scene.generatePersonTemporary([])
                }
                Actor.hide()
                Player.hide()
                scene.sex(Couple1, Couple2)
                Couple1.hide()
                Couple2.hide()
                Player.show(0)
                Actor.show(4)
                narrative(`<Actor.name> is clearly turned on by the steamy intercourses unfolding in front of <Actor.him_or_her>. Maybe it's my chance to get lucky?`)
                option([
                    {text: `Try to make out with <Actor.him_or_her>`},
                    {text: `Maybe not`},
                ])
                if (0) {
                    Player.dialogue(`You're sweating a lot, <Actor.name>. Seeing these couples go at it is turning you on, isn't it?`, `Flirty`)
                    Player.animatePair(Player, Actor, "Kissing")
                    Player.dialogue(`...`, `Kiss`)
                    if (random(100, 300) < Player.interpersonal + Actor.attractionToPlayer + Actor.incest + Actor.perversion + Actor.masochist) {
                        Actor.dialogue(`...`, `Kiss`)
                        scene.sex(Player, Actor)
                        Actor.perversion += random(0, 1)
                        Actor.dress()
                    } else {
                        Actor.dialogue(`Get off me! I'm not that easy!`, `Angry`)
                    }
                }
            } else {
                Actor.dialogue(`Hey, where are you taking me? No way I'm going in there!`, `Angry`)
                Player.masochist -= random(0, 0.25)
                Actor.attractionToPlayer -= random(0, 0.5)
            }
        } else {
            narrative(`Let's take this slow ... No way <Actor.he_or_she> would agree to go in such a place.`)
        }


    })
    scene.timeout(200, "co_ag_publicsex")
})
module.exports = scene