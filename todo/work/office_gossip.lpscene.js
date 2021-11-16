// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\office_gossip.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'office_gossip'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([8, 20])
    let Colleague = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        $IF(Colleague = scene.getSpecific("Colleague"))
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.1 * Player.interpersonal)
    })


    scene.start(() => {
        narrative(`Office gossip is commonplace everywhere and my company is no exception. The question is: should I engage in it?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`Why not? It's a fun distraction from all the hard work and I would be seen as a prude by my colleagues otherwise.`)
            Player.interpersonal += random(0, 0.5)
            Player.jobperformance -= random(0, 1)
            Colleague.rapportwithplayer += random(0, 5)
            Player.karma -= 2.5
        } else {
            narrative(`I try my best to avoid gossiping and being gossiped about. I feel this is the best thing to do. I don't need such a distraction from actual work.`)
            Player.jobperformance += random(0, 2)
        }


    })
    scene.timeout(200, "office_gossip")
})
module.exports = scene