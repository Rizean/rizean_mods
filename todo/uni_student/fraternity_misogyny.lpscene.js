// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\fraternity_misogyny.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'fraternity_misogyny'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["fraternity"])
    scene.when([21, 4])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.isMale())
    })


    scene.start(() => {
        narrative(`I'm in a middle of a frat party when some of my brothers started their favorite chants.`)
        narrative(`'No means Yes, Yes means Anal!'`)
        narrative(`'No means Yes, Yes means Anal!'`)
        narrative(`'No means Yes, Yes means Anal!'`)
        narrative(`'No means Yes, Yes means Anal!'`)
        option([
            {text: `Chant along`},
            {text: `Stay silent`},
        ])
        if (0) {
            Player.dialogue(`No means Yes, Yes means Anal!`, `Evil`)
            Player.masochist -= random(0, 0.5)
            Player.karma -= 2.5
        } else {
            Player.masochist += random(0, 0.25)
        }
    })
    scene.timeout(200, "fraternity_misogyny")
})
module.exports = scene