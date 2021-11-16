// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\waiter_clumsy.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'waiter_clumsy'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_hourly"])
    scene.where(["restaurant", " biergarten", " pub", " cafe"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 1000) < 1)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        Actor.dress()
        Actor.show(2)
        Player.dialogue(`Ah ....`, `Furious`)
        narrative(`I was carrying a tray of drinks when I tripped over a customer's leg and fell over. Some red wine was spilled all over the customer's clothes.`)
        Actor.dialogue(`Clumsy idiot! Look what you've done! You ruined my clothes. I want to see the manager!`, `Angry`)
        Player.mood -= random(0, 30)
        narrative(`How should I deal with the situation?`)
        option([
            {text: `Apologize`},
            {text: `Blame <Actor.him_or_her>`},
        ])
        if (0) {
            Player.dialogue(`Oh my god, I'm so sorry. It was a horrible accident!`, `Anxious`)
            Player.masochist += random(0, 0.5)
        } else {
            Player.dialogue(`Maybe you shouldn't have left your leg hanging like that then ...`, `Angry`)
            narrative(`Customer is always right - my ass! I'm not getting shouted at for doing nothing wrong!`)
            narrative(`I argued back and made it clear to the entitled customer that I'm no pushover.`)
            Player.masochist -= random(0, 0.5)
            Player.karma -= 2.5
        }
    })
    scene.timeout(72, "waiter_clumsy")
})
module.exports = scene