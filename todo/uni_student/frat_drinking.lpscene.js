// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\frat_drinking.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'frat_drinking'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["fraternity"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        narrative(`Being part of a <Player.fraternity_or_sorority>, I can't remember the last time I managed to remain sober for a whole day ... It's just constant partying and binge drinking every single day of the week.`)
        narrative(`I can feel that my body is feeling the pressure of the massive amount of alcohol I've been consuming.`)
        option([
            {text: `Drink strategically`},
            {text: `Go hard or go home`},
        ])
        if (0) {
            narrative(`I can't really turn down all the offers from my <Player.brothers_or_sisters> to drink, but I've learned to how to appear to be downing a lot of booze without actually drinking much. That way, I can save my poor body without being anti-social.`)
            Player.masochist += random(0, 0.25)
        } else {
            narrative(`That's the life of a <Player.fraternity_or_sorority> <Player.boy_or_girl>! I'm sure I'm more than capable of handling my alcohol.`)
            Player.fitness -= random(0, 1)
            Player.masochist -= random(0, 1)
        }


    })
    scene.timeout(250, "frat_drinking")
})
module.exports = scene