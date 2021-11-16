// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\il\il_start.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'il_start'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    if (Player.isWithCompanion()) {
        Player.endDate()
    }
    scene.setGlobal(`il_stage`, `0`)
    scene.start(() => {
        let Actor = Player.getSelectedNPC()
        narrative(`Who is the innocent victim of my corruption?`)
        Player.selectNPC()
        Actor = Player.getSelectedNPC()


        if (!Actor.isValid() || Actor.isCreature() || Actor.perversion > Player.perversion) {
            narrative(`No valid NPC selected or NPC selected is already more perverted than player. Quest was not started.`)
            scene.questEnd()
        } else {
            Actor.dress()
            Actor.show(2)
            narrative(`I feel that <Actor.name> is far too innocent and inexperienced and would love to be one to awaken something sexual within <Actor.him_or_her>.`)
            Actor.setActorAlias(`VicA`)
            let B1 = scene.building.generateBuildingAlias(`B1`, `cafe`)
            scene.addObjective(`B1`, `il_obj`)
            scene.setGlobal(`il_stage`, `1`)
        }
    })
})
module.exports = scene