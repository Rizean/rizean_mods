// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\john_threesome_online_pimp.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'john_threesome_online_pimp'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([16, 2])
    let Actor3 = scene.getSpecific("Prostitute")
    scene.who(($IF) => {
        Actor3 = scene.getSpecific("Prostitute")
        $IF(random(0, 350) * random(0, 350) < Actor3.attractiveness * Actor3.attractiveness)
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion())
    })


    scene.start(() => {
        let Dice = random(150, 750) + Player.pornfame * 7
        let P1C = Dice.convertToLocalCurrency("true")
        let P2 = Dice / 2
        let P2C = P2.convertToLocalCurrency("true")
        let P3 = Dice / 3
        let P3C = P3.convertToLocalCurrency("true")
        let Actor = scene.generatePersonTemporary([])
        let Actor2 = scene.generatePersonTemporary([])
        Dice = random(150, 750) + Player.pornfame * 7
        P1C = Dice.convertToLocalCurrency("true")
        P2 = Dice / 2
        P2C = P2.convertToLocalCurrency("true")
        P3 = Dice / 3
        P3C = P3.convertToLocalCurrency("true")
        Actor = scene.generatePersonTemporary([])
        Actor.dress()
        Actor.show(2)
        Actor2 = scene.generatePersonTemporary([])
        Actor2.dress()
        Actor2.show(3)
        narrative(`Two Johns messaged me on Adultwork ...`)
        Actor.dialogue(`How much for <Actor3.name> to have fun with both of us?`, `Flirty`)
        option([
            {text: `Turn <Actor.him_or_her> down`},
            {text: `Rip <Actor.him_or_her> off (<P1C>)`},
            {text: `Offer a fair price (<P2C>)`},
            {text: `Give <Actor.him_or_her> a bargain (<P3C>)`},
        ])
        if (0) {
            Player.dialogue(`Sorry, but <Actor3.he_or_she>'s not in town today ...`, `Sad`)
        } else if (choice * Actor3.attractiveness > Actor.intelligence + Actor.interpersonal) {
            Actor.dialogue(`It looks like we have a deal.`, `Flirty`)
            narrative(`Soon enough, we were meeting at a motel room that we agreed on.`)
            Actor3.dress()
            Actor3.show(1)
            scene.setBackground("home")
            Dice = Dice * 0.5
            Player.money = Player.money + Dice / choice
            Actor3.perversion += 0.5
            option([
                {text: `Leave them to it`},
                {text: `Peep a bit`},
            ])
            if (1) {
                scene.sex(Actor, Actor3, Actor2)
            }
        } else {
            Actor.dialogue(`No way, that's too expensive! You have too high an opinion of your whore. You should look at the others' profiles and see how much they charge.`, `Angry`)
        }


    })
    scene.timeout(3, "john_online_pimp", "john_threesome_online_pimp")
})
module.exports = scene