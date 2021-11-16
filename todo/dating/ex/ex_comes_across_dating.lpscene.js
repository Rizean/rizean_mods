// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\ex\ex_comes_across_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'ex_comes_across_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion} = scene

    scene.what(["all"])
    scene.where(["all", " -home"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("ExDating")
    scene.who(($IF) => {
        Actor = scene.getSpecific("ExDating")
        $IF(Actor.attractionToPlayer > 0)
    })
    scene.other(($IF) => {
        $IF(Player.isWithCompanion() && CurrentCompanion.isDating())
    })


    scene.start(() => {
        narrative(`I was walking hand in hand with my <CurrentCompanion.boyfriend_or_girlfriend> <CurrentCompanion.name> when I spotted a familiar figure.`)
        Actor.dress()
        Actor.show(2)
        narrative(`It's my ex <Actor.name>! <Actor.He_or_She> recognized me right away and looked visibly hurt from seeing me with another <CurrentCompanion.man_or_woman>.`)
        option([
            {text: `Kiss <CurrentCompanion.name>`},
            {text: `Stop holding hands`},
        ])
        if (0) {
            narrative(`Let's rub it in a bit to make it clear to <Actor.name> that <Actor.he_or_she> has no hopes of getting back with me.`)
            Player.animatePair(Player, CurrentCompanion, "Kissing")
            Player.dialogue(`...`, `Kiss`)
            CurrentCompanion.dialogue(`...`, `Kiss`)
            Actor.attractionToPlayer -= random(0, 5)
            narrative(`As expected, <Actor.name> looked devastated seeing <Actor.his_or_her> ex being so intimate with another <CurrentCompanion.man_or_woman>.`)
            Player.karma -= 2.5
        } else {
            narrative(`This is too mean to <Actor.name>. We've had some good time together after all. I decided to let go of <CurrentCompanion.name>'s hand for a while until <Actor.name> has walked past us.`)
            Actor.attractionToPlayer += random(0, 5)
        }


    })
    scene.timeout(1000, "ex_comes_across_dating")
})
module.exports = scene