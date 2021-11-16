// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\frat_homo.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'frat_homo'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["fraternity"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Fraternity")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Fraternity")
        $IF(Actor.isInterestedIn(Player) && Player.isInterestedIn(Actor) && random(20, 70) < Actor.attractionToPlayer && random(50, 100) < Actor.attractiveness)
    })
    scene.other("none")


    scene.start(() => {
        Actor.dress()
        Actor.show(2)
        narrative(`<Actor.name> and I are left alone in the chapter house today, watching TV together. Everyone else went on a trip. I must admit: I'm quite attracted to <Actor.name>, even though we're sworn <Actor.brothers_or_sisters>. Worse, I think <Actor.name> feels the same way for me.`)
        option([
            {text: `Kiss <Actor.him_or_her>`},
            {text: `We can't be <Player.gay_or_lesbians>`},
        ])
        if (0) {
            Player.animatePair(Player, Actor, "Kissing")
            Player.dialogue(`...`, `Kiss`)
            Actor.dialogue(`...`, `Kiss`)
            narrative(`Things are escalating very quickly ...`)
            option([
                {text: `Let it happen`},
                {text: `Stop it there`},
            ])
            if (0) {
                scene.sex(Player, Actor)
            }
        } else {
            narrative(`I'm not sure how the other <Player.brothers_or_sisters> will react to homosexuality within the <Player.fraternity_or_sorority> ... We could be kicked out of the house! Let's just keep these desires in check for now.`)
        }


    })
    scene.timeout(200, "frat_homo")
})
module.exports = scene