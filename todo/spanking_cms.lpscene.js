// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\spanking_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'spanking_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Dating")
        $IF(Actor.martial - Actor.masochist + Player.masochist - Player.martial > random(50, 200))
    })
    scene.other("none")


    scene.start(() => {
        Actor.dialogue(`You've been naughty. Prepare for a spanking!`, `Evil`)
        narrative(`It's no secret that <Actor.name> is a bit of a dom.`)
        option([
            {text: `Take it`},
            {text: `Resist`},
        ])
        if (0) {
            narrative(`I must admit I have become somewhat of a sub and have started enjoying it.`)
            narrative(`<Actor.name> spanked me many times before letting me off.`)
            Player.masochist += 1
        } else {
            Player.dialogue(`This is going too far!`, `Angry`)
            Player.masochist -= 1
        }
    })
    scene.timeout(200, "spanking_cms")
})
module.exports = scene