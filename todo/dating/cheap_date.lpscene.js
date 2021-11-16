// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\cheap_date.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'cheap_date'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([17, 21])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.isWithCompanion() && CurrentCompanion.isDating() && CurrentCompanion.isDominantSex(Player) && CurrentCompanion.attractionToPlayer + CurrentCompanion.intelligence + CurrentCompanion.interpersonal < random(0, 200))
    })


    scene.start(() => {
        CurrentCompanion.show(2)
        scene.setBackground("fast_food")


        narrative(`<CurrentCompanion.name> can be quite cheap sometimes - <CurrentCompanion.he_or_she> took me to a horrible fast food chain for dinner tonight. I didn't enjoy it at all.`)
        option([
            {text: `Thank <CurrentCompanion.him_or_her> anyway`},
            {text: `Complain`},
        ])
        if (0) {
            narrative(`I'm no gold-digger. It doesn't matter how expensive the dates <CurrentCompanion.name> takes me on, what matters is the person. I thanked <CurrentCompanion.name> anyway for taking me out.`)
            CurrentCompanion.attractionToPlayer += random(0, 2)
            Player.karma += 2.5
        } else {
            narrative(`This was unacceptable. I called <CurrentCompanion.him_or_her> out for being cheap and <CurrentCompanion.he_or_she> seemed visibly embarrassed.`)
            CurrentCompanion.attractionToPlayer -= random(0, 1)
        }


        scene.timeout(500, "cheap_date")
    })
})
module.exports = scene