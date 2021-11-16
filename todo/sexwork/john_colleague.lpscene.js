// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\john_colleague.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'john_colleague'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["whore_out", " whore_out_brothel"])
    scene.where(["sexwork", " brothel"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Colleague")
        $IF(Actor.perversion > 60 && Actor.isInterestedIn(Player) && Player.isInterestedIn(Actor))
    })
    scene.other("none")


    scene.start(() => {
        let Dice = random(200, 300)
        let P1C = Dice.convertToLocalCurrency("true")
        let P2 = Dice / 2
        let P2C = P2.convertToLocalCurrency("true")
        let P3 = Dice / 3
        let P3C = P3.convertToLocalCurrency("true")
        let Plaything = scene.getGlobal(`Plaything`)
        let Actor2 = scene.getSpecific("Boss")
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
        Actor.dialogue(`My God! Isn't it you, <Player>? From the office. I had no idea you have this as your second job ...`)
        narrative(`Oh dear ... I can't believe I ran into a colleague from my day job ... This is embarassing ...`)


        narrative(`Should I be professional as a sex worker and service <Actor.him_or_her> anyway?`)
        option([
            {text: `Turn <Actor.him_or_her> down`},
            {text: `Service <Actor.him_or_her> anyway`},
        ])
        if (0) {
            Player.dialogue(`Sorry, but it's too weird ... I see you every day at work ... I can't do this.`, `Sad`)
        } else {
            Player.dialogue(`But we aren't at the office, are we? So let's forget about that and get on with it!`)
            Actor.dialogue(`Of course, darling.`, `Flirty`)
            if ($WHERE.eq("brothel")) {
                narrative(`Soon enough, I was following <Actor.him_or_her> to one of the brothel's rooms.`)
            } else {
                narrative(`Soon enough, I was following <Actor.him_or_her> to a nearby motel room.`)
                scene.setBackground("home")
            }
            scene.sex(Actor, Player)
            Player.money = Player.money + Dice
            Plaything = scene.getGlobal(`Plaything`)
            if (Plaything == 0) {
                narrative(`<Actor.name> paid me fairly but I'm now afraid <Actor.he_or_she> might tell the boss from the my office job about this second gig that I have ...`)
                option([
                    {text: `Beg <Actor.name> to not tell my boss`},
                    {text: `Let <Actor.him_or_her> do whatever`},
                ])
                if (0) {
                    Actor.dialogue(`Fine ... I gave me good service. I'll keep my mouth shut.`)
                } else {
                    scene.setBackground("work")
                    Actor2 = scene.getSpecific("Boss")
                    scene.dressFormal()
                    Actor2.dress()
                    Actor2.show()
                    narrative(`As expected, <Actor.name> ran <Actor.his_or_her> mouth to the boss, who called me in for a chat. Oh god, am I about to get fired ...?`)
                    Actor2.dialogue(`<Player.name>, <Actor.name> told me about this interesting second job you have ... and about how good you are at it.`)
                    Actor2.dialogue(`Since you obviously are in need of money, I have a proposal.`)
                    Actor2.dialogue(`I can pay you a large sum of money upfront now in the condition that from now on, you will be the office plaything.`)
                    Actor2.dialogue(`That way, office morale would be kept high and with this money, you won't need that second job anymore, you can do whatever you're already doing as a prostitute right here in the office.`)
                    option([
                        {text: `Accept the payment`},
                        {text: `Reject the offer`},
                    ])
                    if (0) {
                        Actor2.dialogue(`Good, now your first assignment is to service me ...`)
                        scene.sex(Actor2, Player)
                        scene.setGlobal(`Plaything`, `1`)
                    } else {
                        Actor2.dialogue(`Fine, but then you will be treated just like any other employees so don't let your job performance be affected by staying up all night for this second gig, or you'll be fired!`)
                        Player.jobperformance -= 10
                    }
                }
            }
        }


    })
    scene.timeout(200, "john_colleague")
})
module.exports = scene