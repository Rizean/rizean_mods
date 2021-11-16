// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_vi_shower.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_vi_shower'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["bathe"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Dating")
        $IF(!Actor.isRelative() && random(75, 300) < Actor.attractionToPlayer + Actor.perversion)
    })
    scene.other(($IF) => {
        $IF(Player.isAtDatingHome())
    })


    scene.start(() => {
        scene.setBackground("shower")
        scene.filter("Shower")
        scene.sex(Player)
        Actor.show(2)
        Actor.dialogue(`Damn it baby, taking the shower with the door unlocked - you got me all horny. Mind if I join you in there?`, `Flirty`)
        option([
            {text: `Let <Actor.him_or_her> in`},
            {text: `Turn <Actor.him_or_her> down`},
        ])
        if (0) {
            scene.sex(Actor, Player)
            Player.perversion += random(0, 0.5)
            Actor.attractionToPlayer += random(0, 0.5)
        } else {
            Player.dialogue(`Sorry baby, but I'm not in the mood.`, `Sad`)
            Actor.attractionToPlayer -= random(0, 0.25)
        }
    })
    scene.timeout(100, "co_vi_shower")
})
module.exports = scene