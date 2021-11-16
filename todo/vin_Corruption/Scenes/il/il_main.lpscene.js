// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\il\il_main.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'il_main'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let stage = scene.getGlobal(`il_stage`)
        let Actor = scene.getActorAlias(`VicA`)
        if (Player.isWithCompanion()) {
            Player.endDate()
        }
        stage = scene.getGlobal(`il_stage`)
        Actor = scene.getActorAlias(`VicA`)
        Actor.dress()
        Actor.show()
        Actor.startDate()
        Actor.show()
        narrative(`Let's continue corrupting the innocent <Actor.name> ...`)


        if (stage == 1) {
            scene.followUp("co_ag_dickpic")
        } else if (stage == 2) {
            scene.followUp("co_ag_erotica")
        } else if (stage == 3) {
            scene.followUp("co_ag_gift")
        } else if (stage == 4) {
            scene.followUp("co_ag_masturbate")
        } else if (stage == 5) {
            scene.followUp("co_ag_strippoker")
        } else if (stage == 6) {
            scene.followUp("co_ag_stripclub")
        } else if (stage == 7) {
            scene.followUp("co_ag_pornin")
        } else if (stage == 8) {
            scene.followUp("co_ag_pornout")
        } else if (stage == 9) {
            scene.followUp("co_ag_sex_shop")
        } else if (stage == 10) {
            scene.followUp("co_ag_changingroom")
        } else if (stage == 11) {
            scene.followUp("co_ag_publicsex")
        } else {
            narrative(`After a lot of effort, I believe I have fully awakened the sexual side inside <Actor.name>. <Actor.He_or_She> is now as perverted as I am ...`)
            Actor.perversion = Player.perversion
            Actor.makeInterested(Player)
            Actor.attractionToPlayer = 100
            scene.questEnd()
        }
        stage += 1
        Actor.perversion += 5
        Actor.attractionToPlayer += 10
        scene.setGlobal(`il_stage`, `stage`)
    })
})
module.exports = scene