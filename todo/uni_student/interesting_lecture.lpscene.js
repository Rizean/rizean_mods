// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\interesting_lecture.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'interesting_lecture'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["attend_lectures"])
    scene.where(["university:school"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Lecturer")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Lecturer")
        $IF(random(70, 100) < Actor.interpersonal)
    })
    scene.other("none")


    scene.start(() => {
        scene.dressFormal()
        Actor.dress()
        Actor.show(2)
        narrative(`What an interesting lecture! I love this <Actor.Major> class. The lecturer, Dr <Actor.name_last>, is not only knowledgeable but also has a great sense of humour.`)
        option([
            {text: `Just pay attention`},
            {text: `Ask questions`},
        ])
        if (1) {
            narrative(`I decided to contribute to the class even more by asking good questions. Dr <Actor.name_last> is clearly happy that one of <Actor.his_or_her> students are so passionate about the subject matter.`)
            Actor.rapportwithplayer += random(0, 2)
            Player.intelligence += random(0, 0.25)
        }
    })
    scene.timeout(48, "interesting_lecture")
})
module.exports = scene