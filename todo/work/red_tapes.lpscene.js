// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\red_tapes.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'red_tapes'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([8, 20])
    let Colleague = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        $IF(Colleague = scene.getSpecific("Colleague"))
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.1 * Player.intelligence)
    })


    scene.start(() => {
        narrative(`Every company has red tapes and overly bureaucratic procedures. The question is: should I do everything by the book at all time or use my creativity whenever possible?`)
        option([
            {text: `Follow the rules`},
            {text: `Be creative`},
        ])
        if (0) {
            narrative(`It's better to be on a safe side and follow all rules, as frustrating as that can be sometimes.`)
        } else {
            narrative(`Whenever possible, I try to use my judgment to be more efficient. Sometimes, that means breaking a few rules here and there.`)
            if (Player.intelligence > random(0, 100)) {
                narrative(`My good judgment and creativity in seeking out alternative ways to approach a problem allows me to improve my performance at work.`)
                Player.jobperformance += random(0, 2)
            } else {
                narrative(`Unfortunately, my judgment wasn't always sound enough to decide which rule can be broken. As a result, I didn't really improve efficiency. Instead, I earned the irritation of auditors and higher-ups for not doing everything by the book.`)
                Player.jobperformance -= random(0, 2)
            }
        }


    })
    scene.timeout(200, "red_tapes")
})
module.exports = scene