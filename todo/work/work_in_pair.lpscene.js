// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\work_in_pair.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'work_in_pair'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([8, 18])
    let Colleague = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        $IF(Colleague = scene.getSpecific("Colleague"))
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.02 * Player.intelligence)
    })


    scene.start(() => {
        scene.setBackground("work")
        Colleague.dress()
        Colleague.show(2)


        narrative(`It's a common business practice to work in pair for a small project. Recently, I was in a project with <Colleague.name>. It was a success. However, in front of the higher-ups, how much credit should I take?`)
        scene.option([
            {text: `Give <Colleague.name> all the credits`, condition: Player.masochist > -50},
            {text: `Give myself all the credits`, condition: Player.masochist < 50},
            {text: `Split the credits equally`},
        ])
        if (0) {
            Colleague.rapportwithplayer += random(0, 5)
            narrative(`I gave <Colleague.name> all the credits. Our relationship seemed to have improved as a result.`)
            Player.masochist += random(0, 1)
        } else if (1) {
            Colleague.rapportwithplayer -= random(0, 5)
            Player.jobperformance += random(0, 3)
            narrative(`I gave myself all the credits, which no doubt upset <Colleague.name> quite a bit.`)
            Player.masochist -= random(0, 1)
        } else {
            Colleague.rapportwithplayer += random(0, 2)
            Player.jobperformance += random(0, 1)
            narrative(`I gave credits where they are due and both of us were praised by the bosses.`)
        }


    })
    scene.timeout(96, "work_in_pair")
})
module.exports = scene