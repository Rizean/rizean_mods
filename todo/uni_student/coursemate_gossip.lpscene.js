// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\coursemate_gossip.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'coursemate_gossip'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["university:school", " university:work"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Lecturer")
    let Actor2 = scene.getSpecific("Coursemate")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Lecturer")
        Actor2 = scene.getSpecific("Coursemate")
        $IF(!Actor.isDating() && !Actor2.isDating() && Actor2.isInterestedIn(Actor) && Actor2.rapportwithplayer < 50)
    })
    scene.other("none")


    scene.start(() => {
        Actor2.dress()
        Actor2.show(3)
        scene.dressFormal()
        Actor.dress()
        Actor.show(2)


        if ($WHERE.eq("university:school")) {
            narrative(`Wait, is that my coursemate <Actor2.name> and Dr <Actor.name_last> walking together back to <Actor.his_or_her> office?`)
        } else {
            narrative(`Wait, is that my student <Actor2.name> and Dr <Actor.name_last> walking together back to <Actor.his_or_her> office?`)
        }
        narrative(`What should I do?`)
        option([
            {text: `Gossip`},
            {text: `No big deal`},
        ])
        if (0) {
            if ($WHERE.eq("university:school")) {
                narrative(`Could they be having an affair? Having sex with a lecturer, <Actor2.name> is such a <Actor2.stud_or_slut>!`)
                narrative(`I decided to spread the rumour to the rest of the course, which <Actor2.name> firmly denied.`)
            } else {
                narrative(`Could they be having an affair? Having sex with a student, <Actor.name> is such a <Actor.stud_or_slut>!`)
                narrative(`I decided to spread the rumour to the rest of the Department, which <Actor.name> firmly denied.`)
            }
            Actor.rapportwithplayer -= random(0, 2.5)
            Actor2.rapportwithplayer -= random(0, 5)
        } else {
            narrative(`Who cares? <Actor.name> is probably just asking for help with coursework.`)
        }


    })
    scene.timeout(200, "coursemate_gossip")
})
module.exports = scene