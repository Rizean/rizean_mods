// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\teambuilding_day.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'teambuilding_day'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, actionDuration} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([7, 11])
    let Colleague1 = scene.getSpecific("Colleague")
    let Colleague2 = scene.getSpecific("Colleague")
    let Colleague3 = scene.getSpecific("Colleague")
    let Colleague4 = scene.getSpecific("Colleague")
    let Colleague5 = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague1 = scene.getSpecific("Colleague")
        Colleague2 = scene.getSpecific("Colleague")
        Colleague3 = scene.getSpecific("Colleague")
        Colleague4 = scene.getSpecific("Colleague")
        Colleague5 = scene.getSpecific("Colleague")
    })
    scene.other(($IF) => {
        $IF(Player.fitness > 50 && random(0, 100) < 0.01 * Player.fitness * actionDuration)
    })


    scene.start(() => {
        scene.setBackground("sports_centre")
        Colleague1.dress()
        Colleague2.dress()
        Colleague3.dress()
        Colleague4.dress()
        Colleague5.dress()
        Player.dress()
        scene.setBackground("biergarten")
        Colleague1.show(1)
        Colleague2.show(2)
        Colleague3.show(3)
        Colleague4.show(4)
        Colleague5.show(5)


        narrative(`Today is another corporate teambuilding day. They run a lot of cheesy exercises, hoping to improve relationships between staff. I guess the exercises could be classed as 'sport', although lots of office guys aren't that young or in good shape, so they are laughably easy for a relatively athletic person like me.`)
        narrative(`Should I take this opportunity to impress my colleagues with my athletic ability? I don't usually get a chance to do that sitting in the office all day.`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (1) {
            narrative(`I'd better not show off ... or risk coming across as a douchebag! Let's just be like everyone else.`)
            Colleague1.rapportwithplayer += random(0, 2)
            Colleague2.rapportwithplayer += random(0, 2)
            Colleague3.rapportwithplayer += random(0, 2)
            Colleague4.rapportwithplayer += random(0, 2)
            Colleague5.rapportwithplayer += random(0, 2)
            narrative(`I spent the day barely breaking a sweat, but it was enjoyable and my relationship with co-workers seemed to have improved.`)
        } else {
            narrative(`Why not? I keep myself healthy for a reason!`)
            narrative(`I wasn't shy to show off my athletic prowess all day, making the older and less in-shape guys in the office look silly in comparison. I must admit I did come across as a bit of a douche, but the fellow sport nuts in the company seemed to be impressed.`)
            if (Colleague1.fitness > 50) {
                Colleague1.rapportwithplayer += random(0, 5)
                if (Colleague1.isInterestedIn(Player)) {
                    Colleague1.attractionToPlayer += random(0, 5)
                }
            } else {
                Colleague1.rapportwithplayer -= random(0, 2)
            }


            if (Colleague2.fitness > 50) {
                Colleague2.rapportwithplayer += random(0, 5)
                if (Colleague2.isInterestedIn(Player)) {
                    Colleague2.attractionToPlayer += random(0, 5)
                }
            } else {
                Colleague2.rapportwithplayer -= random(0, 2)
            }


            if (Colleague3.fitness > 50) {
                Colleague3.rapportwithplayer += random(0, 5)
                if (Colleague3.isInterestedIn(Player)) {
                    Colleague3.attractionToPlayer += random(0, 5)
                }
            } else {
                Colleague3.rapportwithplayer -= random(0, 2)
            }


            if (Colleague4.fitness > 50) {
                Colleague4.rapportwithplayer += random(0, 5)
                if (Colleague4.isInterestedIn(Player)) {
                    Colleague4.attractionToPlayer += random(0, 5)
                }
            } else {
                Colleague4.rapportwithplayer -= random(0, 2)
            }


            if (Colleague5.fitness > 50) {
                Colleague5.rapportwithplayer += random(0, 5)
                if (Colleague5.isInterestedIn(Player)) {
                    Colleague5.attractionToPlayer += random(0, 5)
                }
            } else {
                Colleague5.rapportwithplayer -= random(0, 2)
            }
        }


    })
    scene.timeout(1500, "teambuilding_day")
})
module.exports = scene