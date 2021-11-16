// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\vi_wake_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vi_wake_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["sleep"])
    scene.where(["home"])
    scene.when([22, 4])
    scene.who("none")
    scene.other(($IF) => {
        $IF(!Player.isAsexual() && random(0, 100) < 5)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Rape = true
        Player.animate("na_sleep")
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dressUniform("Crime")
        Actor.show()
        narrative(`In the middle of the night ...`)
        Actor.animate("na_sleep")
        narrative(`I was suddenly awakened to the sight of horror, some stranger trying to rape me ...`)
        option([
            {text: `Resist`},
            {text: `I might enjoy this actually ...`},
        ])
        if (0) {
            if (Player.martial < Actor.martial) {
                narrative(`Unfortunately, my assailant was too strong for me ...`)
                Rape = true
            } else {
                narrative(`I managed to push my assailant off me. Defeated, <Actor.he_or_she> promptly jumped out of the window and made a run for it ...`)
                narrative(`Phew, that was close ...`)
                Rape = false
            }
        } else {
            Rape = true
            Player.masochist += 2
        }
        if (Rape) {
            if (!Actor.isMale() && Player.isMale()) {
                scene.filter("AggressiveFM")
            } else {
                scene.filter("Aggressive")
            }
            scene.talkNonConsensual()
            scene.sex(Actor, Player)
        }
    })
    scene.timeout(200, "vi_wake_cms")
})
module.exports = scene