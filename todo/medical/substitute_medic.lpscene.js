// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\medical\substitute_medic.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'substitute_medic'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["hospital:work"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Doctor", "Only")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Doctor", "Only")
        $IF(Actor.rapportwithplayer > 10)
    })
    scene.other("none")


    scene.start(() => {
        Actor.dressUniform()
        Actor.show(2)
        Actor.dialogue(`<Player.name>, could you perhaps cover for me and keep an eye on the emergency room today? I've got to run. Something urgent popped up.`, `Happy`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            Player.dialogue(`Of course, I'll be happy to help.`, `Happy`)
            Actor.rapportwithplayer += random(0, 2.5)
            Player.karma += 2.5
        } else {
            Player.dialogue(`Sorry, I'm quite busy at the moment. You should ask another <Player.Job> perhaps?`, `Sad`)
            Actor.rapportwithplayer -= random(0, 2)
        }
    })
    scene.timeout(350, "substitute_medic")
})
module.exports = scene