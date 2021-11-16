// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\relieve_boss.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'relieve_boss'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Boss")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Boss")
        $IF(Actor.hadSex() && random(0, 100) > Actor.intelligence)
    })
    scene.other("none")


    scene.start(() => {
        Actor.dress()
        Actor.show()
        narrative(`My boss has been very moody today, the company is seeing a lot of work coming in, which is good for the revenue but I think the stress is getting to <Actor.him_or_her>.`)
        option([
            {text: `Offer to relieve <Actor.his_or_her> stress with sex`},
            {text: `Maybe not`},
        ])
        if (0) {
            scene.sex(Actor, Player)
            Player.jobperformance += 5
            narrative(`Thanks to my efforts, the boss's mood improved and the company is producing even better results.`)
        } else {
            narrative(`I'll just let <Actor.him_or_her> deal with the problem. <Actor.He_or_She> is more than well compensated to deal with the stress.`)
        }
    })
    scene.timeout(200, "relieve_boss")
})
module.exports = scene