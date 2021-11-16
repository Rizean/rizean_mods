// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\dress_revealing.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dress_revealing'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["clothes", " department_store", " shoes", " sports"])
    scene.when([9, 21])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(Actor.perversion > 70 && Actor.attractiveness > 70)
    })
    scene.other(($IF) => {
        $IF(Player.perversion < 50)
    })


    scene.start(() => {
        narrative(`I'm going shopping with <Actor.name>, who is not shy to point out that my fashion style is way too traditional.`)
        Actor.dialogue(`<Player.Man_or_Girl>, you dress like my <Player.grandpa_or_grandma>.`)
        narrative(`<Actor.name> picked out some more revealing clothes for me that leave very little to the imagination ...`)
        option([
            {text: `Follow <Actor.name>'s fashion advice`},
            {text: `Stick to my principle`},
        ])
        if (0) {
            Player.dress()
            Actor.rapportwithplayer += 2
            Player.perversion += 1
        } else {
            Actor.rapportwithplayer -= 1
        }
    })
    scene.timeout(200, "dress_revealing")
})
module.exports = scene