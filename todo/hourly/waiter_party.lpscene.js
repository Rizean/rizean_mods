// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\waiter_party.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'waiter_party'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_hourly"])
    scene.where(["restaurant", " cafe", " biergarten", " pub"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF()
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        narrative(`My place I work at offers catering services for parties at private homes too. I've been asked to serve at one today ... Not my favorite part of the job, but it must be done.`)
        scene.setBackgroundCustom("fraternity")
        Actor = scene.generatePersonTemporary([])
        if (random(0, 100) < Actor.perversion) {
            Actor.dress()
            Actor.show()
            Actor.makeInterested(Player)
            Actor.attractionToPlayer = 30
            narrative(`One of the party goer has been checking out the whole time during the party. Already quite intoxicated, <Actor.he_or_she> is now heading for the bathroom, winking at me before <Actor.he_or_she> leaves.`)
            option([
                {text: `Follow and fuck the customer`},
                {text: `Stay professional`},
            ])
            if (0) {
                scene.setBackground("shower")
                scene.sex(Player, Actor)
            }
        } else {
            narrative(`In the end, the party went without incidents and I even received some tips.`)
            Player.money += 20
        }
    })
    scene.timeout(100, "waiter_party")
})
module.exports = scene