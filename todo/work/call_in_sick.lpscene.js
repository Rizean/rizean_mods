// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\call_in_sick.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'call_in_sick'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Actor = scene.getSpecific("Colleague")
        if (scene.isTimingOut("call_in_sick")) {
            narrative(`It's not a good idea to call in sick more than once a week.`)
        } else {
            narrative(`I'm feeling under the weather today. Maybe I should call in sick and take the day off? This shouldn't have any effect on my job performance as sick leave is part of the contract after all.`)
            option([
                {text: `Call in sick`},
                {text: `Not necessary`},
            ])
            if (0) {
                scene.timeoutPrecise(168, "call_in_sick")
                narrative(`I decided to take the day off.`)
                Player.jobperformance += 1
                scene.dressFormal()
                Actor = scene.getSpecific("Colleague")
                if (Actor.isValid() && Actor.attractionToPlayer > 30) {
                    narrative(`An hour later, my phone rang. Who could this be? Normally I don't get a lot of personal calls during office hours.`)
                    Actor.dress()
                    scene.secondScreen(Actor)
                    Actor.show()
                    narrative(`It's my colleague <Actor.name>, who has been rather attentive to me at work as of late.`)
                    Actor.dialogue(`<Player.name>, I heard you got sick and had to take a day off work.`)
                    Actor.dialogue(`Maybe I can come over after work with some healthy takeout and help take care of you.`)
                    option([
                        {text: `That would be nice`},
                        {text: `I'd rather not have visitors today`},
                    ])
                    if (0) {
                        scene.secondScreen()
                        scene.setBackgroundCustom("livingroom")
                        Actor.show()
                        narrative(`Just as <Actor.he_or_she> had promised, <Actor.name> came over to my place after work with some healthy recovery food, medicine and even some 'Get Well Soon' flowers. A bit of an overkill for a simple sick leave to be honest.`)
                        narrative(`It's clear that <Actor.he_or_she> sees me as more than a normal colleague.`)
                        option([
                            {text: `Thank <Actor.him_or_her> and say goodbye`},
                            {text: `Thank <Actor.him_or_her> with sex`},
                        ])
                        if (1) {
                            scene.sex(Actor, Player)
                        }
                    } else {
                        Player.dialogue(`That's really kind of you, but I think I'd rather just rest and not have anyone over.`)
                        Actor.dialogue(`Okay, makes sense. Get well soon!`)
                    }
                }
            }
        }
    })


})
module.exports = scene