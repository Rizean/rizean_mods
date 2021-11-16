// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\booty_call.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'booty_call'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -go_to_the_bathroom", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([18, 24])
    let Actor = scene.getPerson("true")
    scene.who(($IF) => {
        Actor = scene.getPerson("true")
        $IF(!Actor.isDating() && Player.isInterestedIn(Actor) && Actor.perversion > 80 && Actor.attractionToPlayer > 10)
    })
    scene.other(($IF) => {
        $IF(Player.isAtHome() && Player.arousal > 50 && Player.perversion > 30)
    })


    scene.start(() => {
        let Actor2 = scene.getPerson("true")
        Actor.dress()
        scene.secondScreen(Actor)
        Actor.show(2)
        Actor2 = scene.getPerson("true")
        while (Actor2.isValid() && (!Player.isInterestedIn(Actor2) || Actor2.perversion < 60 || Actor2.attractionToPlayer < 5 || Actor.isDating())) {
            Actor2 = scene.getPerson("true")
        }
        narrative(`I'm so horny, damn it! Maybe I should give <Actor.name> a booty call? Being a free spirit, I'm sure <Actor.he_or_she> will be down.`)
        option([
            {text: `Yes`},
            {text: `No`},
            {text: `Call another fuckbuddy for a threesome`, condition: Actor2.isValid()},
        ])
        if (0) {
            scene.secondScreen()
            Actor.show()
            narrative(`In no time at all, <Actor.name> arrived and we didn't bother with any dating bullshit, but just got it on immediately.`)
            scene.sex(Player, Actor)
            Player.perversion += random(0, 0.5)
            Actor.hide()
            narrative(`<Actor.name> satisfied my needs, I satisfied <Actor.his_or_hers>. It's a win-win for both sides!`)
        } else if (1) {
            narrative(`No way. I'm not so desperate that I would just fuck anyone I know.`)
        } else {
            narrative(`Lucky me! <Actor.name> isn't the only one on my contact list that is a potential booty call. <Actor2.name> too I'm sure will be up for it.`)
            scene.secondScreen()
            Actor.show()
            Actor2.dress()
            Actor2.show(3)
            narrative(`In no time at all, <Actor.name> and <Actor2.name> arrived and we didn't bother with any dating bullshit, but just got it on immediately.`)
            scene.sex(Player, Actor, Actor2)
            Player.perversion += random(0, 1)
            Actor.hide()
            Actor2.hide()
            narrative(`<Actor.name>, <Actor2.name> and I satisfied each other's needs. It's a win-win for all three sides!`)
        }


    })
    scene.timeout(96, "booty_call")
})
module.exports = scene