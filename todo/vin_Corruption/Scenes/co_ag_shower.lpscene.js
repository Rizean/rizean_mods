// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\co_ag_shower.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'co_ag_shower'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Dating")
        $IF(Actor.attractionToPlayer > 0)
    })
    scene.other(($IF) => {
        $IF(Player.isAtDatingHome() && random(50, 300) < Player.perversion + Player.sneak)
    })


    scene.start(() => {
        narrative(`That's the sound of water running. My <Actor.boyfriend_or_girlfriend> <Actor.name> must be using the shower.`)
        option([
            {text: `Peep on <Actor.him_or_her>`},
            {text: `I'd rather do something else now`},
        ])
        if (0) {
            Actor.show(2)
            scene.setBackground("shower")
            scene.filter("Shower")
            Player.arousal += random(0, 20)
            scene.sex(Actor)
            Actor.show(2)
            Player.show(0)
            narrative(`Wow that was hot watching <Actor.him_or_her>. I'm <Actor.his_or_her> <Player.boyfriend_or_girlfriend> after all, maybe I can just join <Actor.him_or_her>?`)
            option([
                {text: `Join in`},
                {text: `Leave`},
            ])
            if (0) {
                Player.dialogue(`Damn it baby, taking the shower with the door unlocked - you got me all horny. Mind if I join you in there?`, `Flirty`)
                if (random(0, 200) < Player.interpersonal + Actor.attractionToPlayer + Actor.perversion) {
                    scene.sex(Player, Actor)
                    Actor.perversion += random(0, 0.5)
                    Actor.attractionToPlayer += random(0, 0.5)
                } else {
                    Actor.dialogue(`Sorry baby, but I'm not in the mood.`, `Sad`)
                    Actor.attractionToPlayer -= random(0, 0.25)
                }
            }
        }
    })
    scene.timeout(100, "co_ag_shower")
})
module.exports = scene