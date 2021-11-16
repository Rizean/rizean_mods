// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\romantic_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'romantic_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.attractionToPlayer > random(50, 100) && random(0, 100) < Dating.interpersonal)
    })
    scene.other("none")


    scene.start(() => {
        scene.secondScreenIfHidden(Dating)
        Dating.dress()
        Dating.show(2)


        narrative(`<Dating.name> is in love with me, but sometimes <Dating.he_or_she> is just too ... cheesy. <Dating.He_or_She> says things to me that sounds like they belong in a medieval poem, a Broadway musical or an Ed Sheeran's song!`)
        option([
            {text: `Play along`},
            {text: `Tell <Dating.him_or_her> to stop being so cheesy`},
        ])
        if (0) {
            narrative(`I like it that <Dating.name> is such a romantic soul. Besides, who doesn't fantasize about a fair-tale romance.`)
            Dating.attractionToPlayer += random(0, 2)
        } else {
            narrative(`I told <Dating.name> that <Dating.he_or_she> was being too cheesy and it made me uncomfortable.`)
            Dating.attractionToPlayer -= random(0, 2)
        }


        scene.timeout(200, "romantic_dating")
    })
})
module.exports = scene