// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\cms_vi_fm_work.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'cms_vi_fm_work'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([20, 5])
    let Actor = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Colleague")
        $IF(Actor.isFemale() && Actor.isInterestedIn(Player) && Actor.perversion > 70 && Actor.masochist < -50 && !Actor.hadSex())
    })
    scene.other(($IF) => {
        $IF(Player.isMale() && random(20, 100) < Player.masochist)
    })


    scene.start(() => {
        Actor.dress()
        Actor.show()
        narrative(`I'm working late tonight, the only other colleague still in the office working with me is <Actor.name>.`)
        narrative(`Despite being a woman, <Actor.name> always strikes me as extremely dominant, I wouldn't be surprised if she has a secret job as a dominatrix somewhere.`)
        narrative(`The work isn't done yet but I'm getting so tired and sleepy already. Maybe it's best to go home now and come back early tomorrow's morning to finish this up. If I keep going, I can't guarantee that I won't just fall asleep at the desk.`)
        option([
            {text: `Go home`},
            {text: `Stay and work`},
        ])
        if (0) {
            Player.moveTo("home")
        } else {
            narrative(`Despite my best effort, soon enough, I fell asleep at the desk ...`)
            Player.closeEyes("true")
            Actor.dialogue(`Asleep already? Good! Sleep well, little boy, because you and I are going to have some fun whether you like it or not.`, `Evil`)
            scene.talkNonConsensual()
            scene.filter("AggressiveFM")
            scene.sexNoAffair(Player, Actor)
        }
    })
    scene.timeout(500, "cms_vi_fm_work")
})
module.exports = scene