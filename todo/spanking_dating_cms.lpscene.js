// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\spanking_dating_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'spanking_dating_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Dating")
        $IF(Player.martial - Player.masochist + Actor.masochist - Actor.martial > random(50, 200))
    })
    scene.other("none")


    scene.start(() => {
        narrative(`I'm much more dominant than my <Actor.boyfriend_or_girlfriend> <Actor.name>. Maybe I should spank <Actor.him_or_her> to show who's the boss in this relationship.`)
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
    scene.timeout(200, "spanking_dating_cms")
})
module.exports = scene