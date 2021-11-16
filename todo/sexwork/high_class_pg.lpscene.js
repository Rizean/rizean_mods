// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\high_class_pg.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'high_class_pg'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["whore_out", " whore_out_brothel", " whore_out_online"])
    scene.where(["all"])
    scene.when([8, 21])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 150) < Player.pornfame + Player.attractiveness + Player.intelligence)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Actor2 = scene.generatePersonTemporary([])
        narrative(`One of the most well-paid gigs for sex workers like me is to accompany powerful businesspeople to high-class events and help seal business deals`)
        narrative(`Of course, this usually involves both signining a contract and having a celebratory threesome.`)
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.makeInterested(Player)
        scene.dressFormal()
        Actor.dress()
        scene.secondScreen(Actor)
        Actor.show()
        narrative(`<Actor.name> is one such client, who is requesting my service tonight and is willing to pay generously for it.`)
        option([
            {text: `Go with <Actor.name> to meet <Actor.his_or_her> client`},
            {text: `Not tonight`},
        ])
        if (0) {
            scene.secondScreen()
            scene.setBackground("restaurant")
            narrative(`I was asked to meet <Actor.name> at a fine dining restaurant.`)
            Actor.show()
            Actor.moveToPerson(Player)


            Actor2 = scene.generatePersonTemporary([])
            while (!Player.isInterestedIn(Actor2)) {
                Actor2 = scene.generatePersonTemporary([])
            }


            narrative(`After a few minutes, the client showed up too.`)
            Actor2.dress()
            Actor2.show()
            Actor2.moveToPerson(Actor)
            Player.moveToPersonStand(Actor)


            narrative(`The portions at this expensive restaurant are ridiculously small. Might as well, since <Actor.name> and <Actor2.name> weren't doing much eating.`)
            narrative(`After some intense negotiations during which I just stood there like a trophy, they finally seemed to come to an agreement.`)
            narrative(`They signed the contract and <Actor.name> suggested that they should celebrate back in a hotel room`)
            scene.setBackground("home")
            narrative(`I guess this is where my job begins ....`)
            scene.sex(Actor, Player, Actor2)
            Player.money += 750
        }
    })
    scene.timeout(300, "high_class_pg")
})
module.exports = scene