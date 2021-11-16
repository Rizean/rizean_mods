// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\workaholic_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'workaholic_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.attractionToPlayer < random(0, 50) && random(50, 100) < Dating.intelligence && Dating.interpersonal < random(0, 50))
    })
    scene.other("none")


    scene.start(() => {
        scene.secondScreenIfHidden(Dating)
        Dating.dress()
        Dating.show(2)


        narrative(`<Dating.name> is a workaholic, rarely leaving the office, and has been neglecting me recently.`)
        option([
            {text: `Accept it`},
            {text: `Demand <Dating.him_or_her> to spend more time with me`},
        ])
        if (0) {
            narrative(`I like it that <Dating.name> is such a career-oriented person. I'll be happy to see my <Dating.boyfriend_or_girlfriend> become successful thanks to <Dating.his_or_her> hard work.`)
            Dating.attractionToPlayer += random(0, 2)
            Player.karma += 2.5
        } else {
            narrative(`I complained about how little time <Dating.name> had been spending with me recently and accused <Dating.him_or_her> of priotizing <Dating.his_or_her> career over me.`)
            Dating.attractionToPlayer -= random(0, 2)
        }


        scene.timeout(200, "workaholic_dating")
    })
})
module.exports = scene