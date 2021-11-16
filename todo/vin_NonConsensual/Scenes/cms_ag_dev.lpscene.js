// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\cms_ag_dev.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'cms_ag_dev'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all", " -home", " -prison"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 10000) < 1)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dress()
        Actor.show()
        narrative(`By chance, I met some <Actor.guy_or_girl> who introduced <Actor.himself_or_herself> as an adult game developer. <Actor.He_or_She> then went on and on about the success <Actor.he_or_she> has been having on forums and such ... Pretty obnoxious ...`)
        option([
            {text: `Leave`},
            {text: `Beat <Actor.him_or_her> up and rape <Actor.him_or_her>`},
        ])
        if (1) {
            narrative(`I don't know why I'm doing this. I'm not even against adult game developers. Maybe <Actor.guy_or_girl> just has a punchable face and a fuckable ass.`)
            Player.animate("martialart")
            Actor.animate("fightlost")
            Actor.dialogue(`Ahhhh ... that hurts ...`)
            if (Actor.isMale() && !Player.isMale()) {
                scene.filter("AggressiveFM")
            } else {
                scene.filter("Aggressive")
            }
            scene.talkNonConsensual()
            scene.sex(Player, Actor)
        }
    })
    scene.timeout(200000, "cms_ag_dev")
})
module.exports = scene