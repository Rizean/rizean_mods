// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\crime\catches_pickpocket.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'catches_pickpocket'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["all", " -home"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 1 && random(0, 100) < Player.sneak)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        narrative(`Hmm, what's that?`)
        Player.dialogue(`Stop, what are you doing!`, `Angry`)
        Actor = scene.generatePersonTemporary([])
        Actor.dress()
        Actor.show()
        narrative(`I caught a pickpocket red-handed.`)
        option([
            {text: `Let <Actor.him_or_her> go`},
            {text: `Blackmail <Actor.him_or_her> for sex`},
            {text: `Call the cops`},
        ])
        if (0) {
            Actor.dialogue(`Oh really? You're so kind, thank you. I only did this out of desperation ...`)
            Player.karma += 2
        } else if (1) {
            Actor.dialogue(`Okay ... I guess I have no other choice. I don't want to go to prison.`)
            scene.sex(Player, Actor)
        } else {
            narrative(`I called the cops to take the pickpocket away. Justice has been served!`)
        }
    })
    scene.timeout(200, "catches_pickpocket")


})
module.exports = scene