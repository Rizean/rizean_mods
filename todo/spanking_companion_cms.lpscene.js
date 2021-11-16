// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\spanking_companion_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'spanking_companion_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([0, 24])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(Player.martial - Player.masochist + Actor.masochist - Actor.martial > random(50, 200))
    })
    scene.other("none")


    scene.start(() => {
        narrative(`I'm much more dominant than my <Actor.name>. Maybe I should spank <Actor.him_or_her> to show who's the boss.`)
        option([
            {text: `Spank <Actor.him_or_her>`},
            {text: `This is too silly`},
        ])
        if (0) {
            Player.dialogue(`You've been naughty. Prepare for a spanking!`, `Evil`)
            if (Player.martial - Player.masochist + Actor.masochist - Actor.martial > random(50, 200)) {
                Actor.dialogue(`I must admit I have become somewhat of a sub and have started enjoying it.`)
                narrative(`I spanked <Actor.name> many times before letting me off.`)
                Actor.masochist += 1
            } else {
                Actor.dialogue(`This is going too far!`, `Angry`)
                Actor.masochist -= 1
                Actor.attractionToPlayer -= 1
            }
        }
    })
    scene.timeout(200, "spanking_companion_cms")
})
module.exports = scene