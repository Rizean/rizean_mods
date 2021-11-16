// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\john_dom.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'john_dom'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["whore_out", " whore_out_brothel"])
    scene.where(["all"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(!Player.isGay())
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Dice = random(200, 400)
        let P1C = Dice.convertToLocalCurrency("true")
        let P2 = Dice / 2
        let P2C = P2.convertToLocalCurrency("true")
        let P3 = Dice / 3
        let P3C = P3.convertToLocalCurrency("true")
        Actor = scene.generatePersonTemporary([])
        while (Actor.isSameGender(Player)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dress()
        Actor.show(2)
        narrative(`Here comes a John ...`)
        narrative(`<Actor.He_or_She> is wanting to roleplay a rape fantasy ...`)
        if (random(0, 100) < 50) {
            scene.filter("Aggressive")
            if (Player.isMale()) {
                narrative(`More precisely, a situation where I'm the one raping <Actor.him_or_her>.`)
            } else {
                narrative(`More precisely, a situation where <Actor.he_or_she> is the one raping me.`)
            }
        } else {
            scene.filter("AggressiveFM")
            if (Player.isMale()) {
                narrative(`More precisely, a femdom situation where <Actor.he_or_she> is the one raping me.`)
            } else {
                narrative(`More precisely, a femdom situation where I'm the one raping <Actor.him_or_her>.`)
            }
        }


        Dice = random(200, 400)
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
            Player.money = Player.money + Dice / choice
            if (random(5, 30) < Actor.attractionToPlayer) {
                narrative(`Aside from our agreed fee, the John also gave me a big tip.`)
                Player.money += Dice / choice / 2
                narrative(`I can't help but notice how smitten this John has become with me after sex ... looks like <Actor.he_or_she> is going to become a regular customer ...`)
                Actor.makePermanent()
                Actor.setActorVar("tag_john", 1)
            }
        } else {
            Actor.dialogue(`No way, that's too expensive! You have too high an opinion of yourself, honey. I'll find myself another whore elsewhere.`, `Angry`)
        }
    })
    scene.timeout(150, "john_dom")
})
module.exports = scene