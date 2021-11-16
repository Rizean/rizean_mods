// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\offer_pimp_service.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'offer_pimp_service'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        scene.setBackground("street")
        narrative(`Should I try to convince <CurrentCompanion.name> to enter the sex industry with me as <CurrentCompanion.his_or_her> agent?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            if (random(0, 100) < Player.interpersonal && CurrentCompanion.perversion + CurrentCompanion.masochist > 50 && (CurrentCompanion.attractionToPlayer > 50 || CurrentCompanion.rapportwithplayer > 70) && CurrentCompanion.intelligence * 2 + CurrentCompanion.interpersonal < random(0, 300)) {
                CurrentCompanion.dialogue(`I guess you're right. This is probably the easiest way that I can make money ...`, `Sad`)
                narrative(`<CurrentCompanion.name> accepted my offer. I can now pimp <CurrentCompanion.him_or_her> out or advertise <CurrentCompanion.his_or_her> services to nude photographers and porn directors.`)
                CurrentCompanion.addProstitute()
            } else {
                narrative(`Despite my best effort, <CurrentCompanion.name> took offense to my suggestion. Our relationship has suffered as a result.`)
                CurrentCompanion.attractionToPlayer -= random(0, 10)
                CurrentCompanion.rapportwithplayer -= random(0, 10)
            }
        } else {
            narrative(`No, that's a crazy idea. There's no way <CurrentCompanion.he_or_she> would agree to this.`)
        }


    })
})
module.exports = scene