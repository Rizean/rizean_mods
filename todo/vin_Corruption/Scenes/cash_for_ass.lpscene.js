// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\cash_for_ass.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'cash_for_ass'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all", " -home"])
    scene.when([18, 4])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < Player.attractiveness && !Player.isProstitute() && !Player.isWithCompanion())
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Loc = scene.findNearbyBuilding("hotel")
        Actor = scene.generatePersonTemporary([])
        Actor.makeInterested(Player)
        Actor.dress()
        Actor.show()
        narrative(`I was going about my business when suddenly a <Actor.man_or_woman> approached me ...`)
        Actor.dialogue(`How much?`)
        narrative(`<Actor.name> must have mistaken me for a prostitute ... or maybe this <Actor.man_or_woman> just goes around offering pretty <Player.guys_or_girls> money to sleep with <Actor.him_or_her>.`)
        option([
            {text: `Not for sale`},
            {text: `Negotiate a price`},
            {text: `I'll do it for free`},
        ])
        if (0) {
            Player.dialogue(`Sorry, I'm not that type of <Player.guy_or_girl>.`)
            Player.perversion -= 1
        } else {
            if (1) {
                narrative(`Maybe this could be the start of a new career for me?`)
                Player.money += random(200, 400)
                Player.perversion += 1
            } else {
                Player.perversion += 2
                narrative(`I can't believe I'm doing this ... but the thrill of just randomly having sex with someone I just met was too much for me to refuse ...`)
            }
            Loc = scene.findNearbyBuilding("hotel")
            Player.moveTo(Loc)
            scene.setBackground("home")
            narrative(`Soon, we were back in a local hotel to conduct our little 'transaction'.`)
            scene.sex(Actor, Player)
        }
    })
    scene.timeout(200, "cash_for_ass")
})
module.exports = scene