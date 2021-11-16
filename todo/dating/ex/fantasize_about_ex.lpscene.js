// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\ex\fantasize_about_ex.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'fantasize_about_ex'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["masturbate"])
    scene.where(["all"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("ExDating")
    scene.who(($IF) => {
        $IF(Actor = scene.getSpecific("ExDating"))
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < Player.perversion)
    })


    scene.start(() => {
        narrative(`I was pleasuring myself when a thought about someone suddenly came to my head: my ex <Actor.name>.`)
        option([
            {text: `Fantasize about us`},
            {text: `Force that thought away`},
        ])
        if (0) {
            narrative(`Fantasies don't hurt ...`)
            scene.sexNoAffair(Player, Actor)
        } else {
            narrative(`I've moved on from <Actor.him_or_her> now. I shouldn't fantasize about the past ...`)
        }


    })
    scene.timeout(200, "fantasize_about_ex")


})
module.exports = scene