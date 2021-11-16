// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\mediate_conflict.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'mediate_conflict'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([8, 20])
    let Colleague1 = scene.getSpecific("Colleague")
    let Colleague2 = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague1 = scene.getSpecific("Colleague")
        Colleague2 = scene.getSpecific("Colleague")
        $IF(Colleague1.rapportwithplayer > 0 && Colleague2.rapportwithplayer > 0)
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.1 * Player.interpersonal)
    })


    scene.start(() => {


        scene.setBackground("work")
        Colleague1.dress()
        Colleague2.dress()
        Colleague1.show(2)
        Colleague2.show(3)


        narrative(`Two of my colleagues, <Colleague1.name> and <Colleague2.name>, recently had a major argument over a project. As a result, they stopped talking and are acting openly hostile towards each other in the office.`)
        option([
            {text: `Try to mediate via talking`},
            {text: `Try to mediate through sex`},
            {text: `Maybe not`},
        ])
        if (0) {
            narrative(`I decided to talk to both of them and be the middle <Player.man_or_woman> to resolve the conflict.`)
            if (random(0, 200) < Player.interpersonal + Colleague1.rapportwithplayer + Colleague2.rapportwithplayer) {
                narrative(`I managed to talk them into resolving the conflict and return to talking terms. News of my successful effort greatly pleased the boss.`)
                Colleague1.rapportwithplayer += random(0, 3)
                Colleague2.rapportwithplayer += random(0, 3)
                Player.jobperformance += random(0, 2)
            } else {
                narrative(`My mediation effort did not go well at all ... Not only do they still hate each other, my relationship with each of them also suffered.`)
                Colleague1.rapportwithplayer -= random(0, 2)
                Colleague2.rapportwithplayer -= random(0, 2)
            }
        } else if (1) {
            if (Colleague1.perversion > 50 && Colleague2.perversion > 50) {
                narrative(`They may have their differences, but I know they share the same passion for sex. I managed to convince them to make things up with a threesome`)
                Colleague1.rapportwithplayer += random(0, 3)
                Colleague2.rapportwithplayer += random(0, 3)
                Player.jobperformance += random(0, 2)
                scene.sex(Player, Colleague1, Colleague2)
            } else {
                narrative(`Unfortunately, I couldn't get both of them to agree to a threesome.`)
            }
        } else {
            narrative(`I decided not to get involved. It's a problem to be resolved between the two of them.`)
        }


    })
    scene.timeout(500, "mediate_conflict")


})
module.exports = scene