// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\porn_shoot_pimp.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'porn_shoot_pimp'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["all", " -work"])
    scene.when([8, 18])
    let Actor3 = scene.getSpecific("Prostitute")
    scene.who(($IF) => {
        Actor3 = scene.getSpecific("Prostitute")
        $IF(random(1, 150) < Actor3.pornfame)
    })
    scene.other("none")


    scene.start(() => {
        let Dice = random(500, 2000)
        let P1C = Dice.convertToLocalCurrency("true")
        let P2 = Dice / 2
        let P2C = P2.convertToLocalCurrency("true")
        let P3 = Dice / 3
        let P3C = P3.convertToLocalCurrency("true")
        let Actor = scene.generatePersonTemporary([])
        Dice = random(500, 2000)
        P1C = Dice.convertToLocalCurrency("true")
        P2 = Dice / 2
        P2C = P2.convertToLocalCurrency("true")
        P3 = Dice / 3
        P3C = P3.convertToLocalCurrency("true")
        Actor = scene.generatePersonTemporary([])
        Actor.dress()
        Actor.show(2)
        narrative(`A porn director wants to book <Actor3.name> for a SCENE with <Actor.name> ...`)
        option([
            {text: `Turn down the offer`},
            {text: `Rip the director off (<P1C>)`},
            {text: `Offer a fair price (<P2C>)`},
            {text: `Give the director a bargain (<P3C>)`},
        ])
        if (0) {
            Player.dialogue(`Sorry, but <Actor3.he_or_she> has a holiday planned on the day of the shoot ...`, `Sad`)
        } else if (3 || random(0, 100) < choice * Actor3.pornfame) {
            narrative(`The porn director accepted my demands and soon enough we were meeting at the shoot location that we agreed on.`)
            scene.$random(() => {
                scene.setBackground("home")
                scene.setBackground("bar")
                scene.setBackground("hairdresser")
                scene.setBackground("cafe")
                scene.setBackground("clothes")
                scene.setBackground("dentist")
                scene.setBackground("doctor")
                scene.setBackground("hotel")
                scene.setBackground("laundry")
                scene.setBackground("marketplace")
                scene.setBackground("musical_instrument")
                scene.setBackground("nightclub")
                scene.setBackground("work")
                scene.setBackground("place_of_worship")
                scene.setBackground("police")
                scene.setBackground("prison")
                scene.setBackground("pub")
                scene.setBackground("restaurant")
                scene.setBackground("shoes")
                scene.setBackground("sports_centre")
                scene.setBackground("supermarket")
                scene.setBackground("theatre")
                scene.setBackground("toilets")
            })
            Actor3.dress()
            scene.sex(Actor, Actor3)
            Dice = Dice * 0.5
            Player.money = Player.money + Dice / choice
            Actor3.pornfame += 0.5
            Actor3.perversion += 0.25
        } else {
            narrative(`No way, that's way above the market rate for this type of shoots! You have too high an opinion of your talent. You should ask the other agents how much they charge.`)
        }


    })
    scene.timeout(48, "porn_shoot_pimp")
})
module.exports = scene