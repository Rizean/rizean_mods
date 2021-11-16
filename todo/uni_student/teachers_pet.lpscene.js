// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\teachers_pet.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'teachers_pet'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["attend_lectures"])
    scene.where(["university:school"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Lecturer")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Lecturer")
        $IF(!Actor.isContactExchanged() && Player.intelligence > random(50, 100))
    })
    scene.other("none")


    scene.start(() => {
        scene.dressFormal()
        Actor.dress()
        Actor.show(2)
        narrative(`This <Actor.Major> class is one of my favourites. It's a subject matter I'm really passionate about and a possible topic for my final thesis. However, I feel like what Dr <Actor.name_last> is teaching in class is too basic to ensure everyone can get up to speed - I want the more advanced stuffs!`)
        option([
            {text: `Ask Dr <Actor.name_last> for help`},
            {text: `Find advanced books in the library`},
        ])
        if (0) {
            narrative(`I decided to come up to Dr <Actor.name_last> after class and showed my interest in more advanced reading materials about the subject matter.`)
            Actor.dialogue(`I think these book recommendations should keep you occupied for a while. If you have any questions or fail to understand anything while reading these, you can come see me during my office hours and I'll be happy to help.`, `Happy`)
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
    scene.timeout(200, "teachers_pet")
})
module.exports = scene