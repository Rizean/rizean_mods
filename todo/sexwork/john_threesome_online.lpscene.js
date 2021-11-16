// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\john_threesome_online.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'john_threesome_online'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["whore_out_online"])
    scene.where(["sexwork"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 250) * random(0, 250) < Player.attractiveness * Player.attractiveness)
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
        let BroMu = 1
        let Illegal = Player.getActorVar("sexwork_illegal")
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
        Actor.dialogue(`How much for you to have fun with both of us?`, `Flirty`)
        option([
            {text: `Turn <Actor.him_or_her> down`},
            {text: `Rip <Actor.him_or_her> off (<P1C>)`},
            {text: `Offer a fair price (<P2C>)`},
            {text: `Give <Actor.him_or_her> a bargain (<P3C>)`},
        ])
        if (0) {
            Player.dialogue(`Sorry, but I'm not in town today ...`, `Sad`)
        } else if (choice * Player.attractiveness > Actor.intelligence + Actor.interpersonal) {
            Actor.dialogue(`It looks like we have a deal, darling.`, `Flirty`)
            narrative(`Soon enough, we were meeting at a motel room that we agreed on.`)
            scene.setBackground("home")
            scene.sex(Actor, Player, Actor2)
            BroMu = 1
            if (random(0, 0.5) * Actor.fitness < Player.fitness * BroMu) {
                Player.money = Player.money + Dice / choice


                if (random(5, 30) < Actor.attractionToPlayer) {
                    narrative(`Aside from our agreed fee, the John also gave me a big tip.`)
                    Player.money += Dice / choice / 2
                    narrative(`I can't help but notice how smitten this John has become with me after sex ... looks like <Actor.he_or_she> is going to become a regular customer ...`)
                    Actor.makePermanent()
                    Actor.setActorVar("tag_john", 1)
                }


                Illegal = Player.getActorVar("sexwork_illegal")
                if (Illegal > 0) {
                    if (random(0, 50) < Player.sneak * BroMu) {
                        narrative(`Even though prostitution is now illegal in this country, I got away with this particular transaction without incident`)
                    } else if (random(0, 100) < 20) {
                        narrative(`Unfortunately for me, prostitution is illegal in this country and I wasn't sneaky enough.`)
                        narrative(`As soon as I put my clothes back on, I realized the cops were there waiting for me ...`)
                        Player.sentence = 30
                        scene.followUp("imprisoned")
                    }
                }
            } else {
                Actor.hide()
                Actor2.hide()
                narrative(`Oh no, the Johns made a run for it and disappeared before paying me ...`)
                narrative(`Damn it! Can't keep working for free like this. Maybe I should improve my fitness in case I need to chase down Johns like this in the future`)
                Player.mood -= 5
            }
        } else {
            Actor.dialogue(`No way, that's too expensive! You have too high an opinion of yourself, honey. You should look at the others' profiles and see how much they charge.`, `Angry`)
        }


    })
})
module.exports = scene