// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_vi_publicsex.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_vi_publicsex'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all", " -home"])
    scene.when([20, 4])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(!Actor.isRelative() && Actor.isInterestedIn(Player) && Actor.perversion > 70 && Actor.attractionToPlayer > 10)
    })
    scene.other("none")


    scene.start(() => {
        let Couple1 = scene.generatePersonTemporary([])
        let Couple2 = scene.generatePersonTemporary([])
        scene.setBackground("street")


        narrative(`I was hanging out with <Actor.name> when <Actor.he_or_she> insisted that I followed <Actor.him_or_her> somewhere. I have a feeling that <Actor.he_or_she> is up to no good ...`)
        narrative(`A while later ...`)
        narrative(`I knew it! My <Actor.sleazy_or_slutty> date is trying to take me to some dark alley. It couldn't possibly look any dodgier ...`)
        option([
            {text: `Refuse to go in`},
            {text: `I trust <Actor.him_or_her>`},
        ])
        if (0) {
            Player.dialogue(`Hey, where are you taking me? No way I'm going in there!`, `Angry`)
            narrative(`The cheek of <Actor.him_or_her> ... taking a classy <Player.gentleman_or_lady> like me to some dark alley.`)
            Player.masochist -= random(0, 0.25)
            Actor.attractionToPlayer -= random(0, 0.5)
        } else {
            Player.masochist += random(0, 0.25)
            Player.perversion += random(0, 0.25)
            narrative(`Wait, are those two people ... having sex?`)
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
            narrative(`Oh god, as it turns out, this seems to an alley where couples come to have sex ... I was immediately surrounded by the sound of passionate moaning.`)
            narrative(`I must admit though, seeing so many people enjoying public sex here is making me so aroused now. Let's just make sure <Actor.name> doesn't notice my rising arousal or my classy image will be ruined.`)
            Actor.dialogue(`You're sweating a lot, <Player.name>. Seeing these couples go at it is turning you on, isn't it?`, `Flirty`)
            narrative(`Damn it! I couldn't hide it from <Actor.him_or_her>.`)
            Player.animatePair(Player, Actor, "Kissing")
            Actor.dialogue(`...`, `Kiss`)
            narrative(`<Actor.name> is trying to make out with me ... It's also clear that <Actor.he_or_she> is looking for more than a kiss.`)
            option([
                {text: `Let it happen`},
                {text: `Stop right there`},
            ])
            if (0) {
                Player.dialogue(`...`, `Kiss`)
                scene.sex(Actor, Player)
                Player.perversion += random(0, 2)
                Actor.dress()
            } else {
                Player.dialogue(`Let's get out this dark alley. I don't feel comfortable with all of this.`, `Embarrassed`)
            }
        }
    })
    scene.timeout(200, "co_vi_publicsex")
})
module.exports = scene