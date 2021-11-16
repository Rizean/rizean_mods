// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\consequences\contract_STD.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'contract_STD'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        narrative(`I haven't been feeling so good recently ... My body is aching all over and blisters are starting to appear on my skin.`)
        option([
            {text: `See a doctor`},
        ])
        scene.setBackground("hospital")
        Player.dialogue(`No .....`, `Crying`)
        narrative(`Oh no, after some extensive testing, it's official: I've been diagnosed with a common sexually transmitted disease ... I guess the unprotected intercourses I've been having finally lead to consequences.`)
        narrative(`This STD, while never fatal, will have a drastic impact on my level of fitness and energy throughout the day. I will also look like crap after a few years.`)
        option([
            {text: `Accept my fate`},
            {text: `Get cured by the world's best doctor (consume ~50 karma)`},
        ])
        if (0) {
            Player.contractSTD()
        } else {
            Player.karma -= 50
        }
    })
})
module.exports = scene