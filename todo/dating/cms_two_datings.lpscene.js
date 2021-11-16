// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\cms_two_datings.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'cms_two_datings'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Dating")
    let Actor2 = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Dating")
        Actor2 = scene.getSpecific("Dating")
        $IF(Actor.isInterestedIn(Actor2) && Actor2.isInterestedIn(Actor))
    })
    scene.other(($IF) => {
        $IF(scene.isModEnabled("vin_Polyamorous"))
    })


    scene.start(() => {
        narrative(`I was going about my business when I was interrupted by hearing my name moaned from <Actor.name>'s room. So I went investigate.`)
        scene.sex(Actor, Actor2)
        narrative(`My two lovers are having some fun without me. I'm sure they wouldn't mind if I join them though.`)
        option([
            {text: `Join them`},
            {text: `No`},
        ])
        if (0) {
            narrative(`It's part of the fun of a polyamorous relationship.`)
            scene.sex(Player, Actor, Actor2)
        }
    })
    scene.timeout(200, "cms_two_datings")
})
module.exports = scene