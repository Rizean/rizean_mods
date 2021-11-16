// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\teacher_sex_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'teacher_sex_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["attend_lectures"])
    scene.where(["university:school"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Lecturer")
    scene.who(($IF) => {
        $IF(Actor = scene.getSpecific("Lecturer"))
    })
    scene.other("none")


    scene.start(() => {
        scene.dressFormal()
        Actor.dress()
        Actor.show(2)
        narrative(`It's every student's fantasy to fuck a lecturer but is Dr <Actor.name_last>, teaching <Actor.Major>, someone that I want to sleep with?`)
        option([
            {text: `Get close to Dr <Actor.name_last>`},
            {text: `Ew, not <Actor.him_or_her>`},
        ])
        if (0) {
            narrative(`I decided to come up to Dr <Actor.name_last> after class and showed my interest in more advanced reading materials about the subject matter.`)
            Actor.dialogue(`I think these book recommendations should keep you occupied for a while. If you have any questions or fail to understand anything while reading these, you can come see me during my office hours and I'll be happy to help.`, `Happy`)
            option([
                {text: `Flirt`},
                {text: `Thank you!`},
            ])
            if (0) {
                Actor.attractionToPlayer += 1
                if (Actor.attractionToPlayer > 50) {
                    Actor.dialogue(`I know what you want! I can't resist this temptation anymore. Let's fuck right here, right now.`)
                    option([
                        {text: `Fuck <Actor.him_or_her> on university grounds`},
                        {text: `Take <Actor.him_or_her> home first`},
                        {text: `That's going too far`},
                    ])
                    if (2) {
                        Player.dialogue(`Sorry, but you understand me wrong. I thought it was just some harmless flirting. I never intended this to go further than that.`)
                    } else {
                        if (1) {
                            Player.moveTo("home")
                            scene.setBackground("home")
                        }
                        scene.sex(Player, Actor)
                    }
                }
            }
        } else {
            narrative(`Ew, I don't fancy <Actor.him_or_her> at all.`)
        }
    })
    scene.timeout(200, "teacher_sex_cms")
})
module.exports = scene