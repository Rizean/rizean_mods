// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\porn_shoot_public_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'porn_shoot_public_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["all", " -work"])
    scene.when([8, 18])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(1, 150) < Player.pornfame)
    })


    scene.start(() => {
        let Dice = random(500, 2000)
        let P1C = Dice.convertToLocalCurrency("true")
        let P2 = Dice / 2
        let P2C = P2.convertToLocalCurrency("true")
        let P3 = Dice / 3
        let P3C = P3.convertToLocalCurrency("true")
        let Actor = scene.generatePersonTemporary([])
        let Actor2 = scene.generatePersonTemporary([])
        let Actor3 = scene.generatePersonTemporary([])
        Dice = random(500, 2000)
        P1C = Dice.convertToLocalCurrency("true")
        P2 = Dice / 2
        P2C = P2.convertToLocalCurrency("true")
        P3 = Dice / 3
        P3C = P3.convertToLocalCurrency("true")
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dress()
        Actor.show(2)
        narrative(`A porn director wants to book me for a SCENE with <Actor.name> ...`)
        narrative(`This SCENE will be shot in public, with hired bystanders as well.`)
        option([
            {text: `Turn down the offer`},
            {text: `Rip the director off (<P1C>)`},
            {text: `Offer a fair price (<P2C>)`},
            {text: `Give the director a bargain (<P3C>)`},
        ])
        if (0) {
            Player.dialogue(`Sorry, but I have a holiday planned on the day of the shoot ...`, `Sad`)
        } else if (3 || random(0, 100) < choice * Player.pornfame) {
            narrative(`The porn director accepted my demands and soon enough we were meeting at the shoot location that we agreed on.`)
            scene.setBackground("street")
            Actor.show()
            Actor2 = scene.generatePersonTemporary([])
            Actor3 = scene.generatePersonTemporary([])
            Actor2.dress()
            Actor2.show()
            Actor3.show()
            Actor3.dress()
            narrative(`Jeez, there are quite a few bystanders here. I suppose I was told beforehand.`)
            scene.sex(Actor, Player)
            Player.money = Player.money + Dice / choice
            Player.pornfame += 0.5
            Player.perversion += 0.25
            narrative(`The bystanders look very excited about my performance, some of them seem keen to join in the fun ...`)
            option([
                {text: `Fuck two bystanders too`},
                {text: `Not part of the agreement`},
            ])
            if (0) {
                narrative(`Porn fans love spontaneous sluts that would fuck anyone! This would do wonders for my popularity.`)
                scene.sex(Player, Actor2, Actor3)
                Player.pornfame += 2
            }
        } else {
            narrative(`No way, that's way above the market rate for this type of shoots! You have too high an opinion of yourself, honey. You should ask the other pornstars how much they charge.`)
        }


    })
    scene.timeout(200, "porn_shoot_public_cms")
})
module.exports = scene