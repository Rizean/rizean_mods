// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\stripclub_live_sex_show_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'stripclub_live_sex_show_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["strip"])
    scene.where(["stripclub"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(30, 100) < Player.perversion)
    })


    scene.start(() => {
        let count = 0
        let Actor = scene.generatePersonTemporary([])
        narrative(`I just finished one of my performances when I was approached by the club owner who asked me to participate in tonight's live sex show, where I have to fuck some random customers in front of everyone. The tips will be very generous though.`)
        option([
            {text: `Okay`},
            {text: `I don't do that ...`},
        ])
        if (0) {
            count = 0
            while (count < 3) {
                Actor = scene.generatePersonTemporary([])
                while (!Player.isInterestedIn(Actor)) {
                    Actor = scene.generatePersonTemporary([])
                }
                Actor.show()
                narrative(`Here's the next customer who participates in tonight's live sex show ...`)
                scene.sex(Actor, Player)
                Player.money += random(100, 300)
                count += 1
            }
        }
    })
    scene.timeout(300, "stripclub_live_sex_show_cms")
})
module.exports = scene