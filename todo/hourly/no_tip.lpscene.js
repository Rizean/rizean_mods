// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\no_tip.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'no_tip'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_hourly"])
    scene.where(["bar", " pub", " nightclub", " restaurant", " cafe", " coffee", " hotel"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 1000) < Player.interpersonal)
    })


    scene.start(() => {
        narrative(`A guest left me no tip, despite receiving the best service I could deliver.`)
        option([
            {text: `Show my annoyance`},
            {text: `Stay professional`},
        ])
        if (0) {
            narrative(`If every customer is like this, I would be broke. How am I expected to survive on my lousy wages alone?`)
            narrative(`Without saying anything rude, I clearly expressed my annoyance on my face. The customer seemed to get the message. He'd better tip well next time.`)
            Player.masochist -= random(0, 0.1)
            Player.mood -= 20
        } else {
            narrative(`Oh well, not everyone will tip I suppose. I have to stay professional nevertheless.`)
            Player.masochist += random(0, 0.1)
            Player.mood -= 10
        }
    })
    scene.timeout(24, "no_tip")
})
module.exports = scene