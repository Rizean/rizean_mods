// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\coursemate_dating_another.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'coursemate_dating_another'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["university:school", " university:work"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Coursemate")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Coursemate")
        $IF(!Actor.isDating() && !Actor.isAsexual() && !Actor.hasRelationship("Spouses", "Dating") && Actor.attractionToPlayer < 40)
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
        if ($WHERE.eq("university:school")) {
            narrative(`My classmate <Actor.name> has been hanging out with this <Actor2.name> <Actor2.guy_or_girl> studying <Actor2.Major> a lot these days ... I wonder if they are an item now ...`)
        } else {
            narrative(`My student <Actor.name> has been hanging out with this <Actor2.guy_or_girl>, who I don't think is one of my students, a lot these days after class ... I wonder if they are an item now ...`)
        }
        option([
            {text: `Good for them`},
            {text: `That's a shame`},
        ])
        scene.addNpcRelationship("Dating", Actor, Actor2)
    })
    scene.timeout(1000, "coursemate_dating_another")
})
module.exports = scene