// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\social\vomiting_drunk.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vomiting_drunk'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["nightclub", " bar"])
    scene.when([23, 4])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 5)
    })


    scene.start(() => {
        let Actor = scene.generatePerson()
        Actor = scene.generatePerson()
        Actor.dress()
        Actor.show(2)


        narrative(`I couldn't help but notice there's a completely hammered <Actor.guy_or_girl> vomiting on the floor. Someone clearly couldn't handle their alcohol!`)
        option([
            {text: `Ignore`},
            {text: `Scold <Actor.him_or_her>`},
        ])
        if (0) {
            narrative(`It's none of my business. Some people just drink too much. The staff will clean that up.`)
            Player.masochist += random(0, 0.5)
        } else {
            Player.dialogue(`That's disgusting. If you can't handle alcohol, don't drink or you'll ruin everyone else's night!`, `Angry`)
            Player.masochist -= random(0, 0.5)
            Actor.rapportwithplayer -= random(0, 5)
            Player.karma -= 1
        }


    })
    scene.timeout(24, "vomiting_drunk")
})
module.exports = scene