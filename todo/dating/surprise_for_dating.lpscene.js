// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\surprise_for_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'surprise_for_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([0, 24])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(Actor.isDating() && Actor.isMale() && Actor.attractionToPlayer > 0)
    })
    scene.other(($IF) => {
        $IF(!Player.isMale() && random(0, 200) < Player.perversion)
    })


    scene.start(() => {
        let Actor2 = Player.getSelectedNPC()
        let Actor3 = Player.getSelectedNPC()
        let Actor4 = Player.getSelectedNPC()
        scene.setBackground("home")
        narrative(`<Actor.name> has been such a wonderful <Actor.boyfriend_or_girlfriend> for me ... Recently I have thought about a perfect surprise present for <Actor.him_or_her>.`)
        option([
            {text: `Organize a passionate night with <Actor.him_or_her> and other girls.`},
            {text: `Forget it`},
        ])
        if (0) {
            Player.karma += 5
            Player.perversion += random(0, 0.5)
            narrative(`Who is the first girl I should invite?`)
            Player.selectNPC()
            Actor2 = Player.getSelectedNPC()
            if (!Actor2.isValid() || Actor2.isMale()) {
                narrative(`I couldn't quite find any girl I know that would be interested, so I arranged for a hooker instead.`)
                Actor2 = scene.generatePersonTemporary([])
                while (Actor2.isMale()) {
                    Actor2 = scene.generatePersonTemporary([])
                }
                scene.$random(() => {
                    Actor2.blendPreset("twenties")
                    Actor2.blendPreset("thirties")
                })
                Actor2.randomizeHairs()
                Actor2.randomizeFace()
            }
            Actor2.dress()
            Actor2.show(3)


            narrative(`Who is the second girl I should invite?`)
            Player.selectNPC()
            Actor3 = Player.getSelectedNPC()
            if (!Actor3.isValid() || Actor3.isMale()) {
                narrative(`I couldn't quite find any girl I know that would be interested. Anyway, a threesome should be plenty to please <Actor.name>.`)
                scene.sexNoAffair(Actor, Player, Actor2)
                Actor.attractionToPlayer += random(0, 5)
            } else {
                Actor3.dress()
                Actor3.show(4)


                narrative(`Who is the third girl I should invite?`)
                Player.selectNPC()
                Actor4 = Player.getSelectedNPC()
                if (!Actor4.isValid() || Actor4.isMale()) {
                    narrative(`I couldn't quite find any girl I know that would be interested. Anyway, a foursome should be plenty to please <Actor.name>.`)
                    scene.sexNoAffair(Actor, Player, Actor2, Actor3)
                    Actor.attractionToPlayer += random(0, 7.5)
                } else {
                    Actor4.dress()
                    Actor4.show(5)


                    narrative(`I've got plenty of beautiful women for <Actor.name>. Let's make this an unforgettable night for <Actor.him_or_her>`)
                    scene.sexNoAffair(Actor, Player, Actor2, Actor3, Actor4)
                    Actor.attractionToPlayer += random(0, 10)
                }
            }
        }
    })
    scene.timeout(500, "surprise_for_dating")
})
module.exports = scene