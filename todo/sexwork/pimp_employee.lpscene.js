// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\pimp_employee.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'pimp_employee'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    let Actor = scene.passedInActor()
    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Dice = random(100, 500)
        let P1C = Dice.convertToLocalCurrency("true")
        let P2 = Dice / 2
        let P2C = P2.convertToLocalCurrency("true")
        let P3 = Dice / 3
        let P3C = P3.convertToLocalCurrency("true")
        let Actor2 = scene.generatePersonTemporary([])
        let Income = Dice / choice
        Dice = random(100, 500)
        P1C = Dice.convertToLocalCurrency("true")
        P2 = Dice / 2
        P2C = P2.convertToLocalCurrency("true")
        P3 = Dice / 3
        P3C = P3.convertToLocalCurrency("true")
        Actor2 = scene.generatePersonTemporary([])
        while (!Actor.isInterestedIn(Actor2)) {
            Actor2 = scene.generatePersonTemporary([])
        }
        Actor2.dress()
        Actor2.show(2)
        narrative(`Here comes a John ...`)
        Actor2.dialogue(`How much for your <Actor.handsome_or_pretty> <Actor.stud_or_girl>?`, `Flirty`)
        option([
            {text: `Turn <Actor2.him_or_her> down`},
            {text: `Rip <Actor2.him_or_her> off (<P1C>)`},
            {text: `Offer a fair price (<P2C>)`},
            {text: `Give <Actor2.him_or_her> a bargain (<P3C>)`},
        ])
        if (0) {
            Player.dialogue(`Sorry, but <Actor.he_or_she> is not working right now ...`, `Sad`)
        } else if (choice * Actor.attractiveness > Actor2.intelligence + Actor2.interpersonal) {
            Actor2.dialogue(`It looks like we have a deal.`, `Flirty`)
            narrative(`Soon enough, we were following <Actor2.him_or_her> to one of the private rooms.`)
            if ($WHERE.eq("stripclub:business") || $WHERE.eq("stripclub")) {
                scene.setBackground("home")
            }
            Dice = Dice * 0.5
            Income = Dice / choice
            Actor.perversion += 0.25
            option([
                {text: `Leave them to it`},
                {text: `Peep a bit`},
            ])
            if (1) {
                scene.sex(Actor2, Actor)
            }


            if (random(-100, 0) > Actor2.masochist && random(0, 100) > Actor.perversion && Player.isInterestedIn(Actor2)) {
                narrative(`<Actor2.name> is claiming <Actor2.he_or_she> isn't happy with <Actor.name>'s service and is refusing to pay ...`)
                option([
                    {text: `Persuade <Actor2.him_or_her> to pay`},
                    {text: `Threaten <Actor2.him_or_her>`},
                    {text: `Give <Actor2.name> some 'extra service' myself`},
                ])
                if (0 && random(0, 100) < Player.interpersonal) {
                    Actor2.dialogue(`Okay fine, you make some good points. I'll pay.`)
                    Player.money = Player.money + Income
                } else if (1 && random(0, 100) < Player.martial) {
                    Actor2.dialogue(`Alright ... alright ... calm down. You look like you could beat me up ...`)
                    Actor2.dialogue(`Here's the money ...`)
                    Player.money = Player.money + Income
                } else if (2) {
                    Actor2.dialogue(`That sounds good to me ... You must have way more experience with this than <Actor.name> since you run the place after all ...`)
                    scene.sex(Actor2, Player)
                    Player.money = Player.money + Income
                } else {
                    Actor2.dialogue(`Whatever you say, I'm not paying for such terrible service ...`)
                }
            } else {
                Player.money = Player.money + Income
            }
        } else {
            Actor2.dialogue(`No way, that's too expensive! You have too high an opinion of your whore. I'll find myself another whore elsewhere.`, `Angry`)
        }
    })
})
module.exports = scene