// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\petty_argument.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'petty_argument'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.attractionToPlayer < random(0, 70) * random(0, 1) * random(0, 1))
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion())
    })


    scene.start(() => {
        Dating.dress()
        Dating.show(2)


        narrative(`<Dating.name> and I are having a pretty silly argument over some trivial things. How should I act?`)
        option([
            {text: `Back down`},
            {text: `Try to win`},
        ])
        if (0) {
            narrative(`I decided to just let it go and went easy on <Dating.him_or_her> this time.`)
            Player.masochist += random(0, 0.5)
            Player.karma += 2.5
        } else {
            narrative(`No way I'm backing down. I made sure that <Dating.name> knew that I was not a pushover of a <Player.boyfriend_or_girlfriend>.`)
            Dating.rapportwithplayer -= random(0, 1)
        }


        scene.timeout(250, "petty_argument")
    })
})
module.exports = scene