// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\generous_tip.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'generous_tip'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_hourly"])
    scene.where(["bar", " pub", " nightclub", " restaurant", " cafe", " coffee", " hotel"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 1000) < Player.interpersonal)
    })


    scene.start(() => {
        narrative(`A guest left me a very generous tip. It's good people like this that makes this job bearable.`)
        Player.money += random(5, 50)
        Player.mood += 20
    })
    scene.timeout(24, "generous_tip")
})
module.exports = scene