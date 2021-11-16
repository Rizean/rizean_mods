// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\vip_stripping.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vip_stripping'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["strip"])
    scene.where(["stripclub"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 150) < Player.attractiveness + Player.perversion)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let count = 0
        narrative(`I just finished one of my performances when I was approached by one of the VIP clients.`)
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.makeInterested(Player)
        scene.dressFormal()
        Actor.dress()
        Actor.show()
        Actor.dialogue(`That was very hot, why don't you join me in the VIP room for a private dance?`)
        option([
            {text: `Okay`},
            {text: `I don't do that ...`},
        ])
        if (0) {
            scene.setBackground("brothel")
            narrative(`As soon as we're in the private VIP room, I started a striptease.`)
            Player.animate("dance")
            count = 0
            while (!Player.isNaked() && count < 10) {
                Player.stripOne()
                narrative(`Off this goes ...`)
                count += 1
            }
            Player.money += 100
            Actor.dialogue(`Oh ... you got me all horny, baby. Would you mind getting physical? We're in a private room after all so no such thing as 'No Touching' policy in here ...`)
            Actor.dialogue(`I'll be very generous if you do ...`)
            option([
                {text: `Have sex with <Actor.name>`},
                {text: `I don't do that ...`},
            ])
            if (0) {
                scene.sex(Actor, Player)
                Player.money += 300
            }
        }
    })
    scene.timeout(150, "vip_stripping")
})
module.exports = scene