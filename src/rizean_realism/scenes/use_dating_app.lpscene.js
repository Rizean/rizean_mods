// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\social\spiced_drink.lpscene

const {LPScene} = require('LifePlayjs')

const scene = new LPScene({name: 'use_dating_app'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
    })


    scene.start(() => {
        narrative(`Which dating app should I use?`)
        option([
            {text: `OK! Love`},
            {text: `Seeker (Young and Old)`, condition: Player.likes_older > 15},
            {text: 'Never mind'},
        ])

        if (0) {
            scene.followUp('fantasy_dating_app')
        } else if (1) {
            scene.followUp('oldyoung_dating_app')
        }

    })

})
module.exports = scene