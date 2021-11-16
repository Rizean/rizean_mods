// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_tutor\tutor_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'tutor_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getPerson("tag_Tutor")
    scene.who(($IF) => {
        $IF(Actor = scene.getPerson("tag_Tutor"))
    })
    scene.other("none")


    scene.start(() => {
        let Actor2 = Player.getRelative()
        narrative(`Should I have a private tutoring session with <Actor.name> today?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            Actor.dress()
            Actor.show()
            narrative(`<Actor.name> showed up and we had a tutoring session.`)
            Player.intelligence += 0.25


            if (scene.isModEnabled("vin_NTR")) {
                scene.$random(() => {
                    Actor2 = Player.getRelative()
                    Actor2 = scene.getSpecific("Dating")
                })
                if (Actor2.isValid() && Actor.isInterestedIn(Actor2) && Actor2.isInterestedIn(Actor) && Actor2.perversion > 50 && Actor.perversion > 50) {
                    Actor.dialogue(`Let's take a short break.`)
                    Player.dialogue(`I'll head out for a bit of fresh air then.`)
                    Player.masochist += 1
                    scene.setBackgroundCustom("livingroom")
                    Actor.hide()
                    Actor2.hide()
                    narrative(`That was an intense study session, it's good to have a break.`)
                    option([
                        {text: `Take my time`},
                        {text: `Head back quickly`},
                    ])
                    if (0) {
                        narrative(`Let's relax a while longer out here. The tutor can wait.`)
                        scene.setBackground("home")
                        Actor.show()
                        Player.dialogue(`I hope I didn't keep you waiting for too long. Sorry I lost track of the time.`)
                        Actor.dialogue(`It's okay, let's continue our session.`)
                    } else {
                        scene.setBackground("home")
                        Player.dialogue(`What the ...`, `Surprised`)
                        scene.sex(Actor, Actor2)
                        if (Actor2.isRelative()) {
                            narrative(`My tutor is fucking my <Actor2.relationship>!`)
                        } else {
                            narrative(`My tutor is fucking my <Actor2.boyfriend_or_girlfriend>!`)
                        }
                        narrative(`What should I do about this?`)
                        option([
                            {text: `Stay quiet and pretend nothing happens`},
                            {text: `Make a fuss and fire the tutor`},
                        ])
                        if (0) {
                            Player.masochist += 1
                            narrative(`I'm a bit aroused by the sight actually ...`)
                        } else {
                            Player.dialogue(`Get out of my room now!`)
                            Actor.rapportwithplayer -= 50
                            Actor.setActorVar("tag_Tutor", 0)
                        }
                    }
                }
            }
        }
    })
    scene.timeout(168, "tutor_cms")
})
module.exports = scene