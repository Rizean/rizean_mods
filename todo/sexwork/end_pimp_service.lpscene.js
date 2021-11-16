// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\end_pimp_service.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'end_pimp_service'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        scene.setBackground("street")
        narrative(`<CurrentCompanion.name> isn't making me too much money in an increasingly competitive sex industry. Maybe it's time to drop <CurrentCompanion.him_or_her> and find some fresh blood to pimp?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`Enough is enough. <CurrentCompanion.name> isn't bringing in the dough, <CurrentCompanion.he_or_she> isn't worth my time investment.`)
            CurrentCompanion.removeProstitute()
        } else {
            narrative(`No, <CurrentCompanion.he_or_she> might not be bringing in as much revenue as before, but still a valuable asset for my business.`)
        }


    })
})
module.exports = scene