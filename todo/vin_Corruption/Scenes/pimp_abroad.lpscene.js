// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\pimp_abroad.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'pimp_abroad'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all", " -home"])
    scene.when([8, 21])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(Actor.isDating() && (Actor.perversion > 70 || Player.openRelationship()))
    })
    scene.other(($IF) => {
        $IF(scene.isModEnabled("vin_NTR"))
    })


    scene.start(() => {
        let count = 0
        let Actor2 = scene.generatePersonTemporary([])
        narrative(`I was on a date with <Actor.name> when we were approached by a man in suit offering us a crazy deal ...`)
        narrative(`He offered us a free vacation to this famous beach resort for ultra-rich individuals that even in our wildest dreams, we could never afford.`)
        narrative(`Plus tons of cash too, if my <Actor.boyfriend_or_girlfriend> would sleep with some of his VIP clients on some of the nights ...`)
        narrative(`<Actor.name> seems open to the offer ...`)
        option([
            {text: `Let's go`},
            {text: `No way`},
        ])
        if (0) {
            narrative(`Soon enough, we were on a plane to paradise ...`)
            Player.money += 5000
            scene.setBackground("hotel")
            narrative(`Wow, this resort looks magnificent. But we're not here strictly on a vacation of course ... my <Actor.boyfriend_or_girlfriend> has some people to meet and some work to do ...`)
            scene.setBackground("home")
            scene.dressFormal()
            count = 0
            while (count < 3) {
                narrative(`Here's a VIP guest that <Actor.name> has been arranged to meet ...`)
                Actor2 = scene.generatePersonTemporary([])
                Actor2.makeInterested(Actor)
                Actor2.dress()
                narrative(`They get it on right away`)
                scene.sex(Actor2, Actor)
                count += 1
            }
        }
    })
    scene.timeout(2000, "pimp_abroad")
})
module.exports = scene