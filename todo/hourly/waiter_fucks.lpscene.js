// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\waiter_fucks.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'waiter_fucks'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_hourly"])
    scene.where(["restaurant", " cafe", " biergarten", " pub"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 1)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Actor2 = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        while (!Actor.isInterestedIn(Player)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor2 = scene.generatePersonTemporary([])
        while (!Actor.isInterestedIn(Actor2)) {
            Actor2 = scene.generatePersonTemporary([])
        }
        Actor.dress()
        Actor2.dress()
        Actor.show(2)
        Actor2.show(3)
        Actor.dialogue(`(Angry shouting)`, `Furious`)
        Actor2.dialogue(`(Angry shouting)`, `Furious`)
        narrative(`The couple at the table I was serving was arguing the whole time they were having their meal. They are causing quite a SCENE.`)
        Actor.hide()
        narrative(`One of them stormed off and ran towards the bathroom, obviously not being able to hold back <Actor.his_or_her> tears.`)
        option([
            {text: `Check on <Actor.him_or_her>`},
            {text: `Ignore`},
        ])
        if (0) {
            Actor2.hide()
            Actor.show(2)
            Actor.dialogue(`...`, `Crying`)
            Player.dialogue(`Excuse me, <Actor.Sir_or_Madam>. Are you okay?`, `Anxious`)
            narrative(`I then consoled the customer and <Actor.he_or_she> seemed to feel better after a while.`)
            Actor.dialogue(`Thank you ... You're a nice <Player.guy_or_girl>. Unlike my <Actor2.boyfriend_or_girlfriend>. I'm <Actor.name> by the way.`, `Happy`)
            option([
                {text: `Exchange numbers`},
                {text: `Excuse myself`},
                {text: `Offer sex`, condition: scene.isModEnabled("vin_VanillaPorn") && Player.perversion > 30},
            ])
            if (0) {
                Actor.makePermanent()
                Actor.attractionToPlayer += 10
                narrative(`We chat for a while more before exchanging numbers. Seeing now that <Actor.name> will inevitably break up with <Actor.his_or_her> <Actor2.boyfriend_or_girlfriend>, maybe there could be something between us.`)
                Player.exchangeContact(Actor)
            } else if (1) {
                narrative(`I told <Actor.name> that I needed to get back to work and excused myself.`)
            } else {
                Player.dialogue(`You know ... I just thought of a perfect way for you to get revenge on your <Actor2.boyfriend_or_girlfriend>.`, `Flirty`)
                Player.perversion += random(0, 1)
                if (random(0, 100) < Actor.perversion + Actor.attractionToPlayer) {
                    Actor.dialogue(`I think I know what you're talking about ... You know what? Screw my <Actor2.boyfriend_or_girlfriend> - let's do it.`, `Flirty`)
                    scene.sex(Player, Actor)
                } else {
                    Actor.dialogue(`Yet I thought for a moment there that you were a nice <Player.guy_or_girl>. I'm pissed at my <Actor2.boyfriend_or_girlfriend>, but that doesn't mean you can take advantage of me!`, `Angry`)
                }
            }
        } else {
            narrative(`I'd better not get involved in all this drama.`)
        }
    })
    scene.timeout(200, "waiter_fucks")
})
module.exports = scene