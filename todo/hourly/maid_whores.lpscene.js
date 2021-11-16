// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\maid_whores.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'maid_whores'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_hourly"])
    scene.where(["hotel"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(50, 1000) < Player.attractiveness && Player.perversion < random(0, 100))
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Actor2 = scene.generatePersonTemporary([])
        Player.dialogue(`Housekeeper!`, `Happy`)
        Actor = scene.generatePersonTemporary([])
        while (!Actor.isInterestedIn(Player)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dress()
        Actor.dialogue(`Coming!`)
        Actor.show(2)
        Actor.dialogue(`Oh, you must be the housekeeper. Come right in!`, `Happy`)
        Player.dialogue(`Thank you. This should only take 15 minutes.`, `Happy`)
        Actor.hide()


        narrative(`I proceeded to clean the room, starting from the bathroom.`)
        narrative(`The moment I stepped out of the bathroom to clean the rest of the room though, I was greeted by an interesting sight ...`)
        Actor.strip()
        Actor.show(2)
        Player.dialogue(`Excuse me ... what are you naked?`, `Embarrassed`)
        Actor.dialogue(`You know: You're such a sight to behold - I couldn't help myself. Why don't we have some fun? I'll make it extra worthwhile for you - much more so than earning lousy wages cleaning rooms ...`, `Flirty`)
        scene.option([
            {text: `Accept`, condition: Player.perversion > 30},
            {text: `Storm off`},
        ])
        if (0) {
            Player.dialogue(`Oh well, I'm kinda short on money right now ... so I guess it's your lucky day. But don't think I'm the type that does this to all guests.`, `Flirty`)
            Player.perversion += random(0, 1)
            scene.sex(Actor, Player)
            Player.money += random(100, 500)
            Actor.show(2)
            Player.show(0)
            Actor2 = scene.generatePersonTemporary([])
            while (!Actor2.isInterestedIn(Player)) {
                Actor2 = scene.generatePersonTemporary([])
            }
            Actor2.dress()
            Actor2.show(3)
            Actor2.dialogue(`Well, well, well. Having some fun with the housekeeper there, <Actor.name>? All without your roommate!`, `Flirty`)
            Actor.dialogue(`As always ... you're free to join us ... I'm sure this whore will be okay with it for an extra tip.`, `Flirty`)
            option([
                {text: `Okay ...`},
                {text: `No way`},
            ])
            if (0) {
                Player.dialogue(`Well ... I've gone this far anyway so ...`, `Embarrassed`)
                Player.money += random(100, 500)
                scene.sex(Actor, Player, Actor2)
                Player.perversion += random(0, 1)
            } else {
                Player.dialogue(`No way. I told you I wouldn't do this to just any guest!`, `Angry`)
            }
        } else {
            Actor.hide()
            narrative(`I stormed off from the pervert's room. Oh god, I really hate my job! Lousy money and creepy guests ...`)
            Player.masochist -= random(0, 0.5)
        }
    })
    scene.timeout(100, "maid_whores")


})
module.exports = scene