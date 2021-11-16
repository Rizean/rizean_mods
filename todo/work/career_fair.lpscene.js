// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\career_fair.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'career_fair'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([7, 11])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.jobexperience > 20 && random(0, 100) < 0.01 * (Player.interpersonal + Player.jobexperience))
    })


    scene.start(() => {
        let Student = scene.generatePerson()


        narrative(`I've been asked to represent the company at a career fair of a local university. Should I accept this opportunity?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`Why not? It's a good experience and a chance to meet the industry's next generation.`)
            narrative(`I went and had a successful day, meeting and talking to students about the company. Some of them even printed and handed out their resumes. As they were just students, the contact numbers on these were just their personal mobile numbers, which I could use for professional purposes only ... or not!`)
            narrative(`Should I save their numbers in my personal phone before returning to the office with the resumes?`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (0) {
                narrative(`Why not? There are a few interesting ones ... and a few cute ones too!`)
                Student = scene.generatePerson()
                Student.blendPreset("twenties")
                Student.randomizeHairs()
                Player.exchangeContact(Student)
                Student = scene.generatePerson()
                Student.blendPreset("twenties")
                Student.randomizeHairs()
                Player.exchangeContact(Student)
                Student = scene.generatePerson()
                Student.blendPreset("twenties")
                Student.randomizeHairs()
                Player.exchangeContact(Student)
            } else {
                narrative(`I shouldn't. It's very unprofessional.`)
            }
            Player.interpersonal += random(0, 0.5)
            Player.jobexperience += random(0, 1)
        } else {
            narrative(`I made some excuses not to go. They picked one of my colleagues to represent the company instead.`)
        }


    })
    scene.timeout(500, "career_fair")
})
module.exports = scene