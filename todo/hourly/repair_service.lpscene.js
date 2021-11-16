// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\repair_service.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'repair_service'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_hourly"])
    scene.where(["computer", " copyshop", " department_store", " doityourself", " electronics", " furniture", " musical_instrument", " photo", " sports"])
    scene.when([8, 20])
    scene.who("none")
    scene.other(($IF) => {
        $IF()
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        narrative(`My place I work at offers warranties and repair services for all products and sometimes due to the size and weight of the product, it's not reasonable to ask the customer to bring it back to the store for repairs. I've been asked to go to a customer's home to take a look at a malfunctioning product of ours ... Not my favorite part of the job, but it must be done.`)
        scene.setBackgroundCustom("livingroom")
        Actor = scene.generatePersonTemporary([])
        if (random(0, 100) < Actor.perversion) {
            Actor.show()
            Actor.makeInterested(Player)
            Actor.attractionToPlayer = 30
            narrative(`The customer opened the door to welcome me, completely naked!`)
            Actor.dialogue(`You know ... your product is actually working just fine ... It's just I've been very lonely recently after my last breakup ... having the house all to myself. You wouldn't mind keeping me company for a while, would you? After all, you do repairs, so you must have some magic hands.`)
            option([
                {text: `Fuck the customer`},
                {text: `Just leave`},
            ])
            if (0) {
                scene.sex(Player, Actor)
            }
        } else {
            Actor.dress()
            Actor.show()
            narrative(`It was just an usual repair and I even received some tips.`)
            Player.money += 5
        }
    })
    scene.timeout(50, "repair_service")
})
module.exports = scene