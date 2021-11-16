// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\bartender_frisky.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'bartender_frisky'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_hourly"])
    scene.where(["bar", " nightclub", " pub", " biergarten"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF()
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])


        Actor = scene.generatePersonTemporary([])
        while (!Actor.isInterestedIn(Player)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dress()
        Actor.show()
        narrative(`One of the customers I serve seem clearly attracted to me and is really trying to make a conversation.`)
        if (random(0, 100) < Actor.perversion) {
            Actor.dialogue(`You make me so horny, darling. How about coming back home with me after work? I'll make it worth your while`)
            option([
                {text: `Fuck the customer`},
                {text: `Report to the bouncer`},
            ])
            if (0) {
                scene.setBackground("home")
                scene.sex(Player, Actor)
                Player.money += 200
            } else {
                narrative(`I'm not a prostitute! I immediately went to the bouncer, who forcefully asked the frisky patron to leave.`)
            }
        } else {
            narrative(`Thankfully, the customer was well behaved and never harassed me in any way even when intoxicated, just some harmless flirting here and there. <Actor.He_or_She> even left me a big tip.`)
            Player.money += 10
        }
    })
    scene.timeout(50, "bartender_frisky")
})
module.exports = scene