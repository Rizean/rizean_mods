// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\fraternity_dating_another.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'fraternity_dating_another'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["fraternity"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Fraternity")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Fraternity")
        $IF(!Actor.isDating() && !Actor.isAsexual() && !Actor.hasRelationship("Spouses", "Dating"))
    })
    scene.other("none")


    scene.start(() => {
        let Actor2 = scene.generatePersonTemporary([])
        Actor.dress()
        Actor.show(2)
        Actor2 = scene.generatePersonTemporary([])
        while (!Actor.isInterestedIn(Actor2)) {
            Actor2 = scene.generatePersonTemporary([])
        }
        Actor2.makePermanent()
        Actor2.age = random(18, 22)
        Actor2.randomizeHairs()
        Actor2.randomizeFace()
        Actor2.setDifferentMajor()
        Actor2.dress()
        Actor2.show(3)


        narrative(`<Actor.Brother_or_Sister> <Actor.name> has been hanging out with this <Actor2.name> <Actor2.guy_or_girl> studying <Actor2.Major> a lot these days ... I wonder if they are an item now ...`)
        option([
            {text: `Good for them`},
            {text: `That's a shame`},
        ])
        scene.addNpcRelationship("Dating", Actor, Actor2)
    })
    scene.timeout(1000, "fraternity_dating_another")
})
module.exports = scene