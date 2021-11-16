// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\plasticsurgeryrequest.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'plasticsurgeryrequest'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.isDominantSex(Player) && Dating.perversion > random(50, 100) && Dating.masochist < -50 && Dating.interpersonal + Dating.intelligence > random(100, 200))
    })
    scene.other(($IF) => {
        $IF(Player.attractiveness < random(0, 80))
    })


    scene.start(() => {
        let Loc = scene.findNearbyBuilding("hospital")
        scene.secondScreenIfHidden(Dating)
        Dating.dress()
        Dating.show(2)


        narrative(`<Dating.name> is that type of <Dating.boyfriend_or_girlfriend> that goes 'You would look really hot if ...' an awful lot. In fact, <Dating.He.or_She> has been trying to get me to get some plastic surgery which, to be fair, <Dating.he_or_she> offers to pay for.`)
        option([
            {text: `Accept`},
            {text: `Decline`},
        ])
        if (0) {
            narrative(`Free silicone! Yay!`)
            Loc = scene.findNearbyBuilding("hospital")
            Player.moveTo(Loc)
            Player.attractiveness += random(0, 5)
            Dating.attractionToPlayer += random(0, 10)
            Player.fitness -= random(0, 2.5)
            Player.masochist += random(0, 10)
            narrative(`The surgery is done. Now that I look better, I hope that <Dating.name> will love me more.`)
        } else {
            narrative(`No way I'm doing that! <Dating.name> doesn't get to control how I look and what I do with my body.`)
            Dating.attractionToPlayer -= random(0, 3)
            Player.masochist -= random(0, 2)
        }


        scene.timeout(2000, "plasticsurgeryrequest")
    })
})
module.exports = scene