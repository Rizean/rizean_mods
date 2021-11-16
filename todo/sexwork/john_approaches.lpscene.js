// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\john_approaches.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'john_approaches'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["whore_out", " whore_out_brothel"])
    scene.where(["sexwork", " brothel"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 75) * random(0, 75) < Player.attractiveness * Player.attractiveness)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Dice = random(200, 300)
        let P1C = Dice.convertToLocalCurrency("true")
        let P2 = Dice / 2
        let P2C = P2.convertToLocalCurrency("true")
        let P3 = Dice / 3
        let P3C = P3.convertToLocalCurrency("true")
        let BroMu = 10
        let Illegal = Player.getActorVar("sexwork_illegal")
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dress()
        Actor.show(2)
        narrative(`Here comes a John ...`)


        Dice = random(200, 300)
        if (random(0, 100) < 35 && (Actor.isMale() || (Actor.isTrans() && !Player.isMale()))) {
            if (random(0, 100) < 50) {
                Actor.dialogue(`How much for a blowjob?`, `Flirty`)
                Actor.likes_oral = random(50, 100)
                scene.filter("Blowjob")
            } else {
                Actor.dialogue(`How much for a handjob?`, `Flirty`)
                Dice = random(100, 200)
                scene.filter("Handjob")
            }
        } else if (Actor.isFemale() && random(0, 100) < 15) {
            Actor.dialogue(`How much for you to eat my pussy?`, `Flirty`)
            Actor.likes_oral = random(50, 100)
            Dice = random(200, 300)
            scene.filter("LickPussy")
        } else {
            if (random(0, 100) < 80 || (Player.isFemale() && !Actor.isMale())) {
                Actor.dialogue(`How much for me to do whatever I want to you?`, `Flirty`)
                Dice = random(300, 400)
            } else {
                Actor.dialogue(`How much for anal?`, `Flirty`)
                Actor.likes_anal = random(50, 100)
                Dice = random(400, 500)
                scene.filter("Anal")
            }
        }


        P1C = Dice.convertToLocalCurrency("true")
        P2 = Dice / 2
        P2C = P2.convertToLocalCurrency("true")
        P3 = Dice / 3
        P3C = P3.convertToLocalCurrency("true")


        narrative(`How much should I charge <Actor.him_or_her>?`)
        option([
            {text: `Turn <Actor.him_or_her> down`},
            {text: `Rip <Actor.him_or_her> off (<P1C>)`},
            {text: `Offer a fair price (<P2C>)`},
            {text: `Give <Actor.him_or_her> a bargain (<P3C>)`},
        ])
        if (0) {
            Player.dialogue(`Sorry, but I'm not working right now ...`, `Sad`)
        } else if (choice * Player.attractiveness > Actor.intelligence + Actor.interpersonal) {
            Actor.dialogue(`It looks like we have a deal, darling.`, `Flirty`)
            if ($WHERE.eq("brothel")) {
                narrative(`Soon enough, I was following <Actor.him_or_her> to one of the brothel's rooms.`)
            } else {
                narrative(`Soon enough, I was following <Actor.him_or_her> to a nearby motel room.`)
                scene.setBackground("home")
            }
            scene.sex(Actor, Player)
            if ($WHERE.eq("brothel")) {
                BroMu = 10
            } else {
                BroMu = 1
            }
            if (random(0, 0.5) * Actor.fitness < Player.fitness * BroMu) {
                Player.money = Player.money + Dice / choice


                if (random(5, 30) < Actor.attractionToPlayer) {
                    narrative(`Aside from our agreed fee, the John also gave me a big tip.`)
                    Player.money += Dice / choice / 2
                    narrative(`I can't help but notice how smitten this John has become with me after sex ... looks like <Actor.he_or_she> is going to become a regular customer ...`)
                    Actor.makePermanent()
                    Actor.setActorVar("tag_john", 1)
                }


                if ($WHERE.eq("brothel")) {
                    narrative(`I picked up this John directly from a brothel so I had to pay back a cut of the payment to the house.`)
                    Player.money = Player.money - Dice / choice / 4
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
                narrative(`Oh no, the John made a run for it and disappeared before paying me ...`)
                narrative(`Damn it! Can't keep working for free like this. Maybe I should improve my fitness in case I need to chase down Johns like this in the future`)
                Player.mood -= 5
            }
        } else {
            Actor.dialogue(`No way, that's too expensive! You have too high an opinion of yourself, honey. I'll find myself another whore elsewhere.`, `Angry`)
        }


    })
})
module.exports = scene