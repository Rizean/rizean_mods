// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\boring_lecture.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'boring_lecture'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["attend_lectures"])
    scene.where(["university:school"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Lecturer")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Lecturer")
        $IF(Actor.interpersonal < random(0, 45))
    })
    scene.other("none")


    scene.start(() => {
        scene.dressFormal()
        Actor.dress()
        Actor.show(2)
        narrative(`What a boring lecture! I hate this <Actor.Major> class. The lecturer, Dr <Actor.name_last>, is knowledgeable but just rubbish at teaching.`)
        option([
            {text: `Try to focus`},
            {text: `Play with my phone`},
        ])
        if (0) {
            narrative(`Let's just try my best to concentrate here. Boring or not, I don't want to fail this class.`)
            Player.mood -= random(0, 25)
        } else {
            narrative(`Damn it, I give up! There's no way I can concentrate with Dr <Actor.name_last>'s monotone voice. Let's just play with my phone a bit, saving myself from falling asleep at least!`)
            Player.intelligence -= random(0, 0.25)
        }
    })
    scene.timeout(48, "boring_lecture")
})
module.exports = scene