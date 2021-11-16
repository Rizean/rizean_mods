// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_tutor\offer_tutor.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'offer_tutor'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    let Actor = scene.passedInActor()
    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Tutor = Actor.getActorVar("tag_Tutor")
        let Tutee = Actor.getActorVar("tag_Tutee")
        Tutor = Actor.getActorVar("tag_Tutor")
        Tutee = Actor.getActorVar("tag_Tutee")
        if (Tutor + Tutee > 0) {
            narrative(`A tutoring arrangement is already in place with this person`)
        } else {
            narrative(`What kind of tutoring arrangement with <Actor.name> do I have in mind?`)
            option([
                {text: `<Actor.name> as the tutor`},
                {text: `Me as the tutor`},
            ])
            if (0) {
                Actor.setActorVar("tag_Tutor", 1)
            } else {
                Actor.setActorVar("tag_Tutee", 1)
            }
            narrative(`<Actor.name> accepted my offer.`)
        }
    })
})
module.exports = scene