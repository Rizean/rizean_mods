// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\sttt\sttt_start.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'sttt_start'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    if (Player.isWithCompanion()) {
        Player.endDate()
    }
    scene.setGlobal(`sttt_stage`, `0`)
    scene.start(() => {
        let Actor = scene.getSpecific("Boss")
        Actor = scene.getSpecific("Boss")


        if (Actor.isValid()) {
            narrative(`Should I start my quest towards replacing my boss <Actor.name> and become the Department Head? Power and money awaits ...`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (1) {
                scene.questEnd()
            } else {
                let B1 = scene.building.generateBuildingAlias(`B1`, `work`)
                scene.addObjective(`B1`, `sttt_obj`)
                scene.setGlobal(`sttt_stage`, `1`)
            }
        } else {
            narrative(`I must be working in an office job under a boss to start this quest. Quest was not started.`)
            scene.questEnd()
        }
    })
})
module.exports = scene