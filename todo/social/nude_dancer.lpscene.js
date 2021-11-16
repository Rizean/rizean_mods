// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\social\nude_dancer.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'nude_dancer'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -go_to_the_bathroom"])
    scene.where(["nightclub"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 1)
    })


    scene.start(() => {
        let Actor = scene.generatePerson()
        Actor = scene.generatePerson()
        Actor.show(2)


        narrative(`I'm in the club and I couldn't help but notice there's a completely naked <Actor.guy_or_girl> dancing shamelessly on the floor.`)
        option([
            {text: `Ignore`},
            {text: `Scold <Actor.him_or_her>`},
        ])
        if (0) {
            narrative(`It's bemusing but none of my business. Some people are exhibitionists, supporting some causes or just don't care.`)
            Player.masochist += random(0, 0.5)
        } else {
            Player.dialogue(`Have some decency, damn it. Put some clothes on!`, `Angry`)
            Player.masochist -= random(0, 0.5)
            Actor.rapportwithplayer -= random(0, 5)
        }


    })
    scene.timeout(300, "nude_dancer")
})
module.exports = scene