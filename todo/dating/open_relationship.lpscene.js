// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\open_relationship.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'open_relationship'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion} = scene

    let Companion = scene.passedInActor()
    scene.what(["all", " -go_to_the_bathroom"])
    scene.where(["all", " -toilets", " -PC", " -office"])
    scene.when([0, 24])
    scene.who(($IF) => {
        Companion = Player.getCompanion()
        $IF(CurrentCompanion.isDating() && CurrentCompanion.attractionToPlayer > 10)
    })
    scene.other(($IF) => {
        $IF(!Player.openRelationship() && random(0, 100) < Player.perversion)
    })


    scene.start(() => {
        CurrentCompanion.show(2)


        narrative(`Being quite open-minded, I sometimes feel a traditional relationship is too restricted. The commitment and the possessiveness just don't feel right. Should I propose to my <CurrentCompanion.boyfriend_or_girlfriend> that we open up our relationship? So that I can sleep with whoever I want and <CurrentCompanion.name> can also sleep with whoever <CurrentCompanion.he_or_she> wants.`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            if (random(50, 200) < CurrentCompanion.attractionToPlayer + CurrentCompanion.perversion + CurrentCompanion.masochist) {
                CurrentCompanion.dialogue(`You know what, honey? I have been feeling the same. Let's just make sure we tell each other all the dirty details!`, `Flirty`)
                Player.startOpenRelationship()
                Player.karma += 10
            } else {
                CurrentCompanion.dialogue(`What on earth are you on about? Open up our relationship? No way! I can't bear the thought of you sleeping with other <CurrentCompanion.men_or_women> freely.`, `Angry`)
                CurrentCompanion.attractionToPlayer -= random(0, 2)
            }
        } else {
            narrative(`Nope, it may sound nice in theory but jealousy would kill our relationship.`)
        }
    })
    scene.timeout(300, "open_relationship")
})
module.exports = scene