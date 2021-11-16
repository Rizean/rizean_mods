// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\check_legal.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'check_legal'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        narrative(`It's a huge shock but the government recently decided to make prostitution in this country ...`)
        option([
            {text: `Legal`},
            {text: `Illegal`},
        ])
        if (0) {
            narrative(`Now, I can work without worrying about getting arrested`)
            Player.setActorVar("sexwork_illegal", 0)
        } else {
            narrative(`Now, there's a risk of getting arrested while working as a prostitute. Most brothels already move quickly to bribe their local cops though so the risk is much lower if I restrict all my work to inside brothels only.`)
            narrative(`I should learn to be more sneaky from now on.`)
            Player.setActorVar("sexwork_illegal", 1)
        }
    })
})
module.exports = scene