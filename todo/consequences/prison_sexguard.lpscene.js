// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\consequences\prison_sexguard.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'prison_sexguard'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["prison"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) > Player.energy + Player.mood)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Actor2 = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        Actor.dressUniform("Police")
        Actor.show(2)
        narrative(`One of the guards is offering preferential treatment in exchange for sex with <Player.male_or_female> inmates like me. Some of the other inmates already took <Actor.him_or_her> up on the offer, getting much better food and much easier labour as the result.`)
        option([
            {text: `Accept the deal`},
            {text: `Endure the harsh conditions`},
            {text: `Stand up against the guard`},
        ])
        if (0) {
            Player.mood += 25
            Player.energy += 50
            scene.sex(Actor, Player)
        } else if (2) {
            Player.dialogue(`This is not okay! You either back off and stop abusing your power against the other inmates. Or I'll make sure your superiors know what kind of fucked-up operation you're running here.`, `Angry`)
            Actor.dialogue(`Okay, okay ... just keep your mouth shut.`, `Scared`)
            Actor.hide()
            Actor2 = scene.generatePersonTemporary([])
            while (!Actor2.isSameGender(Player)) {
                Actor2 = scene.generatePersonTemporary([])
            }
            Actor2.show(2)
            Actor2.dialogue(`Thank you for standing against the prison guard ... You're my hero! And I'm sure others feel the same too.`, `Happy`)
            Player.masochist -= 2
            Player.interpersonal += 2
        }
    })
    scene.timeout(200, "prison_sexguard")
})
module.exports = scene