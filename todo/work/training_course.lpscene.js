// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\training_course.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'training_course'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, actionDuration} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([7, 11])
    let Colleague = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague = scene.getSpecific("Colleague")
        $IF(Colleague.intelligence > 50)
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.01 * (Player.intelligence + Player.jobexperience + Player.jobperformance) * actionDuration)
    })


    scene.start(() => {
        let Boss = scene.getSpecific("Boss")
        let Going = false
        scene.setBackground("work")
        Boss = scene.getSpecific("Boss")
        Boss.dress()
        Boss.show(2)
        narrative(`There's a specialist training course being organized by HR tomorrow. Spaces are limited as those external trainers are expensive to hire, so my department can only send one person.`)
        Boss.dialogue(`So, who wants to sign up for this training course tomorrow?`, `Happy`)
        Colleague.dress()
        Colleague.show(4)


        Colleague.dialogue(`I would love to do it!`, `Happy`)
        option([
            {text: `Sign up`},
            {text: `Stay silent`},
        ])
        if (1) {
            narrative(`If <Colleague.name> wants to take the course, I'll be nice enough to not stand in <Colleague.his_or_her> way.`)
            Going = false
        } else {
            Player.dialogue(`I would really appreciate this opportunity!`, `Excited`)
            Colleague.rapportwithplayer -= random(0, 5)
            if (Player.intelligence - Colleague.intelligence > random(0, 20) || Boss.rapportwithplayer > random(50, 100) || Boss.isDating()) {
                Going = true
                Boss.dialogue(`Alright, <Player.name>, I feel this course would benefit you the most. <Colleague.name>, sorry, but next time we'll definitely consider you.`, `Happy`)
            } else {
                Going = false
                Boss.dialogue(`Sorry, <Player.name>, but we'll let <Colleague.name> take the course this time. Next time, we'll definitely consider you.`, `Sad`)
            }
        }


        Boss.hide()
        Colleague.hide()


        if (Going) {
            narrative(`I might have threatened my relationship with <Colleague.name>, but in exchange, I was able to participate in a fantastic training course. The knowledge I acquired and the people I met there was quite a boost to my career.`)
            Player.jobexperience += random(0, 2)
            Player.intelligence += random(0, 1)
            scene.timeout(800, "training_course")
        } else {
            narrative(`<Colleague.name> went to the training course. When <Colleague.he_or_she> came back, <Colleague.he_or_she> spent the whole lunch hour saying how great the course was and how much <Colleague.he_or_she> learned. If true, that was quite an opportunity missed for me ...`)
            scene.timeout(400, "training_course")
        }


    })
})
module.exports = scene