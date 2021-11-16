// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\slow_day.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'slow_day'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([8, 20])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.1 * Player.jobperformance)
    })


    scene.start(() => {
        narrative(`It's a slow day at the office today. I have very little to do all day.`)
        option([
            {text: `Do some menial tasks`},
            {text: `Browse the web`},
        ])
        if (0) {
            narrative(`I endured the boredom and found some menial tasks to do.`)
            Player.mood -= random(0, 10)
            Player.jobperformance += random(0, 0.5)
        } else {
            narrative(`I entertained myself by browsing the web and watching YouTube videos, before going home early.`)
            Player.karma -= 1
            Player.mood += random(0, 30)
            Player.jobperformance -= random(0, 0.5)
        }


    })
    scene.timeout(200, "slow_day")


})
module.exports = scene