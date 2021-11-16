// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\anniversary.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'anniversary'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([16, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        $IF(Dating = scene.getSpecific("Dating"))
    })
    scene.other("none")


    scene.start(() => {
        let Loc = scene.findNearbyBuilding("restaurant")


        narrative(`Today is the anniversary of me and <Dating.name>. We decided to go to a fancy restaurant together.`)
        Player.karma += 10
        Loc = scene.findNearbyBuilding("restaurant")
        Player.moveTo(Loc)
        Dating.dress()
        Dating.show(2)
        narrative(`The dinner was great and <Dating.name> also gave me an expensive gift, but it's obvious what <Dating.name> truly wants from me as an anniversary gift ...`)
        option([
            {text: `Invite <Dating.him_or_her> home for sex`},
            {text: `Say goodbye`},
        ])
        if (0) {
            Dating.attractionToPlayer += random(0, 2)
            Player.moveTo("home")
            scene.sex(Player, Dating)
            Dating.show(2)
            narrative(`Anniversary sex is the best! I feel like nothing can separate us right now. May our relationship continue forever ....`)
            Player.karma += 2.5
        } else {
            narrative(`I just don't feel like it today. After the dinner, we went back to our respective homes instead. <Dating.name> was clearly disappointed.`)
            Dating.attractionToPlayer -= random(0, 10)
        }


        scene.timeoutPrecise(8760, "anniversary")
    })
})
module.exports = scene