// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\customer_approaches.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'customer_approaches'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_hourly"])
    scene.where(["all"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(30, 1000) < Player.attractiveness)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        while (!Actor.isInterestedIn(Player)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.attractionToPlayer += 10
        Actor.dress()
        Actor.show(2)
        narrative(`A customer approached me and discreetly asked for my number ...`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`I discreetly exchanged numbers with the customer before getting back to work.`)
            Actor.makePermanent()
            Player.exchangeContact(Actor)
            Actor.hide()
            if (random(0, 100) > Player.sneak) {
                narrative(`Unfortunately for me, my boss caught me flirting with the customer and fined me a day's wage for breaking work policy.`)
                Player.money -= 70
            }
        } else {
            narrative(`This is unprofessional. I found some excuses to not give <Actor.him_or_her> my number.`)
        }
    })
    scene.timeout(24, "customer_approaches")
})
module.exports = scene