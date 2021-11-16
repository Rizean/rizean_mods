// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\difficult_lecture.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'difficult_lecture'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["attend_lectures"])
    scene.where(["university:school"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Lecturer")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Lecturer")
        $IF(!Actor.isContactExchanged() && Player.intelligence < random(0, 50))
    })
    scene.other("none")


    scene.start(() => {
        scene.dressFormal()
        Actor.dress()
        Actor.show(2)
        narrative(`Gosh, I'm really struggling with this <Actor.Major> class. It's such a complicated subject that I could barely understand a thing. If this keeps going, I'm afraid I might fail the exam.`)
        option([
            {text: `Ask Dr <Actor.name_last> for help`},
            {text: `Do more reading`},
        ])
        if (0) {
            narrative(`I decided to come up to Dr <Actor.name_last> after class and admitted my struggles with the subject matter.`)
            Actor.dialogue(`I hope that clears things up a bit for you. If you have any more questions, you can come see me during my office hours and I'll be happy to help.`, `Happy`)
            option([
                {text: `Can I ask you questions via text instead?`},
                {text: `Thank you!`},
            ])
            if (0) {
                if (random(0, 200) < Actor.attractionToPlayer + Actor.rapportwithplayer + Actor.perversion + Player.interpersonal) {
                    Actor.dialogue(`Well, that's quite an unprofessional form of communication with a student, but I guess it's efficient. Fine, you can contact me via this number.`, `Happy`)
                    Player.exchangeContact(Actor)
                } else {
                    Actor.dialogue(`That's rather ... inappropriate. As I said, just come see me in my office if you need me.`, `Surprised`)
                }
            }
        }
    })
    scene.timeout(200, "difficult_lecture")
})
module.exports = scene