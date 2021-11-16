// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\consequences\prison_sex.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'prison_sex'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["prison"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        narrative(`Judging from the sounds of moaning, the inmate in the cell next door is having some sexy alone time.`)
        option([
            {text: `Peep`},
            {text: `No big deal`},
        ])
        if (0) {
            narrative(`Thankfully, there's a tiny hole between the cells that gives me great view of what's going on.`)
            Actor = scene.generatePersonTemporary([])
            scene.filter("Solo")
            scene.sex(Actor)
            Actor.dressUniform("Prison")
            Actor.show(2)
            Player.show(0)
            narrative(`<Actor.He_or_She> must be feeling lonely ... To be fair, so am I ...`)
            option([
                {text: `Offer to 'comfort' each other`},
                {text: `Nah`},
            ])
            if (0) {
                narrative(`I found the right opportunity to make the offer to <Actor.name>. Eventually, <Actor.he_or_she> accepted.`)
                scene.sex(Actor, Player)
                Player.karma += 1
            }
        }
    })
    scene.timeout(100, "prison_sex")
})
module.exports = scene