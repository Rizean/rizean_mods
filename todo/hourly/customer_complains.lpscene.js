// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\customer_complains.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'customer_complains'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_hourly"])
    scene.where(["all"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) * random(0, 1) * random(0, 1) > Player.interpersonal)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        Actor.dress()
        Actor.show(2)
        Actor.dialogue(`This is terrible customer service! I want to see the manager!`, `Angry`)
        narrative(`Damn it. Some customers are annoying <Actor.assholes_or_bitches> who complain about absolutely everything!`)
        Player.mood -= random(0, 30)
        narrative(`How should I deal with the complaint?`)
        option([
            {text: `Apologize`},
            {text: `Hold my ground`},
        ])
        if (0) {
            Player.dialogue(`Please accept my sincerest apologies. We were just very busy so we couldn't attend to your request within an acceptable timeframe.`, `Anxious`)
            Player.masochist += random(0, 0.5)
        } else {
            narrative(`Customer is always right - my ass! I'm not getting shouted at for doing nothing wrong!`)
            narrative(`I argued back and made it clear to the entitled customer that I'm no pushover.`)
            Player.masochist -= random(0, 0.5)
        }
    })
    scene.timeout(24, "customer_complains")
})
module.exports = scene