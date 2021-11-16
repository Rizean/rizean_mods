// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\john_approaches_pimp.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'john_approaches_pimp'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion, choice} = scene

    let Actor = scene.passedInActor()
    scene.what(["pimp_out"])
    scene.where(["sexwork"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 150) * random(0, 150) < CurrentCompanion.attractiveness * CurrentCompanion.attractiveness)
    })


    scene.start(() => {
        let Dice = random(100, 500)
        let P1C = Dice.convertToLocalCurrency("true")
        let P2 = Dice / 2
        let P2C = P2.convertToLocalCurrency("true")
        let P3 = Dice / 3
        let P3C = P3.convertToLocalCurrency("true")


        Dice = random(100, 500)
        P1C = Dice.convertToLocalCurrency("true")
        P2 = Dice / 2
        P2C = P2.convertToLocalCurrency("true")
        P3 = Dice / 3
        P3C = P3.convertToLocalCurrency("true")


        scene.setBackground("street")
        Actor = scene.generatePersonTemporary([])
        while (!CurrentCompanion.isInterestedIn(Actor) && !CurrentCompanion.isAsexual()) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dress()
        Actor.show(2)
        narrative(`Here comes a John ...`)
        Actor.dialogue(`How much for your <CurrentCompanion.handsome_or_pretty> <CurrentCompanion.stud_or_girl>?`, `Flirty`)
        option([
            {text: `Turn <Actor.him_or_her> down`},
            {text: `Rip <Actor.him_or_her> off (<P1C>)`},
            {text: `Offer a fair price (<P2C>)`},
            {text: `Give <Actor.him_or_her> a bargain (<P3C>)`},
        ])
        if (0) {
            Player.dialogue(`Sorry, but <CurrentCompanion.he_or_she> is not working right now ...`, `Sad`)
        } else if (choice * CurrentCompanion.attractiveness > Actor.intelligence + Actor.interpersonal) {
            Actor.dialogue(`It looks like we have a deal.`, `Flirty`)
            narrative(`Soon enough, we were following <Actor.him_or_her> to a nearby motel room.`)
            scene.setBackground("home")
            Dice = Dice * 0.5
            Player.money = Player.money + Dice / choice
            CurrentCompanion.perversion += 0.25
            option([
                {text: `Leave them to it`},
                {text: `Peep a bit`},
            ])
            if (1) {
                scene.sex(Actor, CurrentCompanion)
            }
        } else {
            Actor.dialogue(`No way, that's too expensive! You have too high an opinion of your whore. I'll find myself another whore elsewhere.`, `Angry`)
        }


    })
})
module.exports = scene