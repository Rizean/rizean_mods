// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\crime\public_indecency.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'public_indecency'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        narrative(`That was rather risky doing that in public. I hope there weren't any cops around`)
        if (random(0, 50) > Player.sneak) {
            narrative(`Sure enough, the cops promptly arrived at the SCENE.`)
            narrative(`'Hands in the air, now! You're under arrest of public indecency'`)
            option([
                {text: `Run`},
                {text: `Surrender`},
            ])
            if (0) {
                if (random(0, 30) < Player.fitness) {
                    narrative(`I managed to lose the cops. Phew, that was close.`)
                } else {
                    Player.dialogue(`You're not taking me alive.`, `Angry`)
                    narrative(`Pow!`)
                    Player.hide()
                    narrative(`A cop fired his gun. It was a perfect shot ...`)
                    scene.followUp("death")
                }
            } else {
                Player.animate("fightlost")
                Player.dialogue(`Please, don't shoot!`, `Scared`)
                narrative(`I put my hands up and surrendered to the overwhelming number of cops.`)
                Player.sentence = random(30, 90)
                scene.followUp("imprisoned")
            }
        }
    })
})
module.exports = scene