// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\misc\nudity_matters_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'nudity_matters_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all", " -home", " -fraternity", " -bathroom", " -prison"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.isNaked() && !Player.isAsexual())
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dress()
        Actor.perversion = random(70, 100)
        Actor.dialogue(`I see you like to walk around naked. You must be a <Player.fuckboy_or_slut>. Let's smash?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            scene.sex(Actor, Player)
        }
    })
    scene.timeout(100, "nudity_matters_cms")
})
module.exports = scene