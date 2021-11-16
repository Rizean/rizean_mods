// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\workmate_harrasses.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'workmate_harrasses'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_hourly"])
    scene.where(["all"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(30, 1000) < Player.attractiveness)
    })


    scene.start(() => {
        narrative(`I attract quite a bit of attention at work. One of my coworkers is quite a pervert and has been getting touchy with me at every given opportunity recently.`)
        option([
            {text: `Complain to the manager`},
            {text: `Ignore`},
        ])
        if (0) {
            Player.masochist -= random(0, 0.25)
            narrative(`I told the boss all about my perverted coworker, accusing <Player.her_or_him> of sexual harassments. The <Player.girl_or_guy> didn't get fired but get a warning, enough to put <Player.her_or_him> off me, at least for the time being.`)
        } else {
            narrative(`It's just some harmless workplace flirting. Besides, I kinda enjoy the attention.`)
            Player.masochist += random(0, 0.25)
            Player.perversion += random(0, 0.1)
        }
    })
    scene.timeout(100, "workmate_harasses")
})
module.exports = scene