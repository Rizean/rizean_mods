// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\shy_colleague.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'shy_colleague'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, actionDuration} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([8, 18])
    let Colleague = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague = scene.getSpecific("Colleague")
        $IF(Colleague.interpersonal < Player.interpersonal && Colleague.rapportwithplayer > 0)
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.02 * (Player.interpersonal * actionDuration))
    })


    scene.start(() => {
        scene.setBackground("Work")
        Colleague.dress()
        Colleague.show(2)


        Player.dialogue(`What's the matter, <Colleague.name>? You don't look too happy!`, `Curious`)
        Colleague.dialogue(`I've got an important presentation tomorrow. I'm so nervous! You know I always freeze when it comes to public speaking.`, `Drained`)
        option([
            {text: `Wish <Colleague.him_or_her> luck`},
            {text: `Offer help`},
        ])
        if (0) {
            Player.dialogue(`Oh yeah, presentations can be nerve-wracking. Good luck anyways!`, `Sad`)
            Colleague.dialogue(`Yeah, I definitely need some luck to not make a fool of myself in front of everyone tomorrow.`, `Sad`)
            Colleague.rapportwithplayer -= random(0, 2)
            if (Colleague.isInterestedIn(Player)) {
                Colleague.attractionToPlayer += (random(0, 3) * Colleague.masochist / 100)
            }
        } else {
            Player.dialogue(`I actually don't have too much on my plates right now. I can help you rehearse for the presentation, if you want?`, `Happy`)
            Player.karma += 2.5
            Colleague.dialogue(`Oh thank you! I wouldn't mind having someone as my test audience and to give me feedback.`, `Excited`)
            Colleague.rapportwithplayer += random(0, 5)
            if (Colleague.isInterestedIn(Player)) {
                Colleague.attractionToPlayer -= (random(0, 10) * Colleague.masochist / 100)
            }
            scene.passTime(0.5, 2)
            narrative(`Having practiced the presentation in front of me and received useful feedback on it, <Colleague.name> eventually managed to achieve an acceptable delivery. <Colleague.He_or_She> was very grateful.`)
            if (Player.interpersonal < random(0, 100)) {
                Player.jobperformance -= random(0, 1)
                narrative(`Unfortunately, I spent too much time helping <Colleague.name> with the presentation that I forgot to do some of my own work.`)
            }
        }


    })
    scene.timeout(48, "shy_colleague")
})
module.exports = scene