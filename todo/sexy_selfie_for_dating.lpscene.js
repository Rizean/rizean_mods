// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\sexy_selfie_for_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'sexy_selfie_for_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all", " -work"])
    scene.when([18, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(random(50, 400) < Dating.perversion + Dating.attractionToPlayer)
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion())
    })


    scene.start(() => {


        narrative(`I just received a text message. It's from <Dating.name>.`)
        Dating.dress()
        Dating.show(2)
        Dating.dialogue(`Baby, send me a sexy selfie!`, `Flirty`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`I found a private place to snap a sexy selfie for my <Dating.boyfriend_or_girlfriend>.`)
            Dating.dialogue(`Wow baby, that was quick ... and very nice indeed.`, `Flirty`)
            Player.dialogue(`Only for you, love.`, `Flirty`)
            Player.perversion += random(0, 0.25)
            Dating.attractionToPlayer += random(0, 0.5)
        } else {
            narrative(`I ignored <Dating.name>'s peverted request and got on with my day.`)
            Dating.attractionToPlayer -= random(0, 0.5)
        }


        scene.timeout(48, "sexy_selfie_for_dating")
    })
})
module.exports = scene