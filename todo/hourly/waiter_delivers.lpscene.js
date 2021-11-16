// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\waiter_delivers.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'waiter_delivers'}, (scene) => {
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
        narrative(`My place I work at offers a delivery menu as well. I've been asked to make a takeout delivery ... Not my favorite part of the job, but it must be done.`)
        scene.setBackgroundCustom("livingroom")
        Actor = scene.generatePersonTemporary([])
        if (random(0, 100) < Actor.perversion) {
            Actor.show()
            Actor.makeInterested(Player)
            Actor.attractionToPlayer = 30
            narrative(`The customer opened the door to receive the delivery, completely naked!`)
            Actor.dialogue(`You know ... I've been very lonely recently after my last breakup ... having to eat takeout all alone. You wouldn't mind keeping me company for a while, would you?`)
            option([
                {text: `Fuck the customer`},
                {text: `Just take the money and leave`},
            ])
            if (0) {
                scene.sex(Player, Actor)
            }
        } else {
            Actor.dress()
            Actor.show()
            narrative(`It was just an usual delivery and I even received some tips.`)
            Player.money += 5
        }
    })
    scene.timeout(50, "waiter_delivers")
})
module.exports = scene