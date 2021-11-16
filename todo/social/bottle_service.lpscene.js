// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\social\bottle_service.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'bottle_service'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -go_to_the_bathroom"])
    scene.where(["nightclub"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 1000) < Player.intelligence + Player.interpersonal && Player.money > 5000)
    })


    scene.start(() => {
        let Actor = scene.generatePerson()
        narrative(`I do have some money to spare. Should I go for a VIP table and bottle service?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`Why not? I'm rich and I want people to know it.`)
            Player.money -= random(500, 4000)
            narrative(`My lavish spending impressed my good-looking club-goers and promoters who came to my table to introduce themselves. I happily exchanged numbers with a few interesting ones.`)
            Actor = scene.generatePerson()
            Player.exchangeContact(Actor)
            Actor = scene.generatePerson()
            Player.exchangeContact(Actor)
            Actor = scene.generatePerson()
            Player.exchangeContact(Actor)
            Actor = scene.generatePerson()
            Player.exchangeContact(Actor)
            Actor = scene.generatePerson()
            Player.exchangeContact(Actor)
        } else {
            narrative(`I'd better not show off too much or risk making a pretentious idiot of myself.`)
        }


    })
    scene.timeout(24, "bottle_service")
})
module.exports = scene