// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\coursemates_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'coursemates_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["university:school", " university:work"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Coursemate")
    let Actor2 = scene.getSpecific("Coursemate")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Coursemate")
        Actor2 = scene.getSpecific("Coursemate")
        $IF(!Actor.isDating() && !Actor2.isDating() && Actor.isInterestedIn(Actor2) && Actor2.isInterestedIn(Actor) && !Actor.hasRelationship("Spouses", "Dating") && !Actor2.hasRelationship("Spouses", "Dating") && Actor.attractionToPlayer < 40 && Actor2.attractionToPlayer < 40)
    })
    scene.other("none")


    scene.start(() => {
        Actor.dress()
        Actor.show(2)
        Actor2.dress()
        Actor2.show(3)
        if ($WHERE.eq("university:school")) {
            narrative(`Two of my classmates <Actor.name> and <Actor2.name> have been seen together an awful lot these days, inside and outside of class ... I wonder if they are an item now ...`)
        } else {
            narrative(`Two of my students <Actor.name> and <Actor2.name> have been seen together an awful lot these days in class ... I wonder if they are an item now ...`)
        }
        narrative(`How should I feel about this?`)
        option([
            {text: `Good for them`},
            {text: `That's a shame`},
        ])
        scene.addNpcRelationship("Dating", Actor, Actor2)
    })
    scene.timeout(1000, "coursemates_dating")
})
module.exports = scene