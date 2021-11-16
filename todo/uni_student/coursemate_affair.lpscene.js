// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\coursemate_affair.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'coursemate_affair'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["university:school", " university:work"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Lecturer")
    let Actor2 = scene.getSpecific("Coursemate")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Lecturer")
        Actor2 = scene.getSpecific("Coursemate")
        $IF(!Actor.isDating() && !Actor2.isDating() && Actor2.isInterestedIn(Actor) && Actor.isInterestedIn(Actor2) && Actor.perversion + Actor2.perversion > random(75, 150))
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
            {text: `Follow them`},
            {text: `No big deal`},
        ])
        if (0) {
            if ($WHERE.eq("university:school")) {
                narrative(`Could they be having an affair? Having sex with a lecturer, <Actor2.name> is such a <Actor2.stud_or_slut>!`)
            } else {
                narrative(`Could they be having an affair? Having sex with a student, <Actor.name> is such a <Actor.stud_or_slut>!`)
            }
            narrative(`What should I do now?`)
            option([
                {text: `Peep`},
                {text: `Leave it`},
            ])
            if (0) {
                scene.sneakGame()
                if (random(0, 100) < Player.sneak) {
                    narrative(`Luckily, they forgot to lock the door behind them, leaving me an easy opening to have a peek.`)
                    scene.sex(Actor, Actor2)
                    Actor.hide()
                    Actor2.hide()
                    Player.show(0)
                } else {
                    narrative(`Unfortunately, they locked the door as soon as they went inside the office and I couldn't see a thing.`)
                }
            }


            narrative(`Now, what should I do about what I saw?`)
            option([
                {text: `Tell everyone`},
                {text: `Stay silent`},
            ])
            if (0) {
                Player.karma -= 10
                if ($WHERE.eq("university:school")) {
                    narrative(`I decided to spread the rumour to the rest of the course, which <Actor2.name> firmly denied.`)
                } else {
                    narrative(`I decided to spread the rumour to the rest of the Department, which <Actor.name> firmly denied.`)
                }
                Actor.rapportwithplayer -= random(0, 5)
                Actor2.rapportwithplayer -= random(0, 10)
            } else {
                if ($WHERE.eq("university:school")) {
                    narrative(`Let's be honest: I would totally bang a lecturer myself if I have the chance. I feel for <Actor2.name> here. Let's not destroy <Actor2.his_or_her> reputation and Dr <Actor.name_last>'s career.`)
                } else {
                    narrative(`Let's be honest: I would totally bang a student myself if I have the chance. I feel for <Actor.name> here. Let's not destroy <Actor.his_or_her> career and <Actor2.name>'s reputation.`)
                }
            }
        } else {
            narrative(`Who cares? <Actor.name> is probably just asking for help with coursework.`)
        }


    })
    scene.timeout(500, "coursemate_affair")
})
module.exports = scene