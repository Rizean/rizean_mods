// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\misc\buy_alcohol_forget_ID.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'buy_alcohol_forget_ID'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["alcohol", " supermarket", " beverages"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 20)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        Actor.dress()
        Actor.show(2)
        Actor.dialogue(`Hey, could you please do me a favour?`, `Irritated`)
        Player.dialogue(`Yes, what is it?`, `Happy`)
        Actor.dialogue(`I was out to get a few packs of beers, but forgot my ID. Would you mind buying them for me? I have the money - I'll be waiting for you outside.`, `Angry`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            Player.dialogue(`I'd be glad to help. Silly regulations those are anyways. You're obviously old enough.`, `Happy`)
            Actor.hide()
            narrative(`I bought the beers as asked and just like we agreed, <Actor.he_or_she> handed me the money for them outside.`)
            if (Actor.age < 21) {
                Player.intelligence -= random(0, 0.5)
            } else {
                Player.intelligence += random(0, 0.5)
            }
        } else {
            Player.dialogue(`No sorry, I don't think you look old enough to be drinking ...`, `Angry`)
            if (Actor.age < 21) {
                Player.intelligence += random(0, 0.5)
            } else {
                Player.intelligence -= random(0, 0.5)
            }
        }


    })
    scene.timeout(96, "buy_alcohol_forget_ID")
})
module.exports = scene