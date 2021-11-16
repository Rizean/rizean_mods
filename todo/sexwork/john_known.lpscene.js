// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\john_known.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'john_known'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["whore_out", " whore_out_brothel"])
    scene.where(["sexwork", " brothel"])
    scene.when([0, 24])
    let Actor = scene.getPerson("true")
    scene.who(($IF) => {
        Actor = scene.getPerson("true")
        $IF(Actor.perversion > 60 && Actor.isInterestedIn(Player) && Player.isInterestedIn(Actor) && !Actor.isDating())
    })
    scene.other("none")


    scene.start(() => {
        let Dice = random(200, 300)
        let P1C = Dice.convertToLocalCurrency("true")
        let P2 = Dice / 2
        let P2C = P2.convertToLocalCurrency("true")
        let P3 = Dice / 3
        let P3C = P3.convertToLocalCurrency("true")
        Actor.dress()
        Actor.show(2)
        narrative(`Here comes a John ...`)


        if (random(0, 100) < 35 && (Actor.isMale() || (Actor.isTrans() && !Player.isMale()))) {
            if (random(0, 100) < 50) {
                Actor.dialogue(`How much for a blowjob?`, `Flirty`)
                Actor.likes_oral = random(50, 100)
                Dice = random(200, 300)
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


        Actor.dialogue(`Wait ...`)
        Actor.dialogue(`My God! Isn't it you, <Player>? I had no idea you're earning a living this way ...`)
        narrative(`Oh dear ... I can't believe I ran into someone I know from my personal life ... This is embarassing ...`)


        narrative(`Should I be professional as a sex worker and service <Actor.him_or_her> anyway?`)
        option([
            {text: `Turn <Actor.him_or_her> down`},
            {text: `Service <Actor.him_or_her> anyway`},
        ])
        if (0) {
            Player.dialogue(`Sorry, but it's too weird ... I know you personally ... I can't do this.`, `Sad`)
        } else {
            Player.dialogue(`Yes, it's me, but I'm not embarrassed of using my body to make money. And I'm sure I can give the best time of your life.`)
            Actor.attractionToPlayer += 15
            Actor.dialogue(`Of course, darling.`, `Flirty`)
            if ($WHERE.eq("brothel")) {
                narrative(`Soon enough, I was following <Actor.him_or_her> to one of the brothel's rooms.`)
            } else {
                narrative(`Soon enough, I was following <Actor.him_or_her> to a nearby motel room.`)
                scene.setBackground("home")
            }
            scene.sex(Actor, Player)
            Player.money = Player.money + Dice
            if (Actor.attractionToPlayer > 15) {
                narrative(`Aside from our agreed fee, <Actor.name> also gave me a big tip.`)
                Player.money += Dice / 2
                narrative(`I can't help but notice how smitten <Actor.name> has become with me after sex ... looks like <Actor.he_or_she> is going to become a regular customer ...`)
                Actor.setActorVar("tag_john", 1)
            }
        }


    })
    scene.timeout(200, "john_known")
})
module.exports = scene