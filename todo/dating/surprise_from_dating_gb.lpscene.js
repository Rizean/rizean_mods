// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\surprise_from_dating_gb.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'surprise_from_dating_gb'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([0, 24])
    let Actor = Player.getCompanion()
    scene.who(($IF) => {
        Actor = Player.getCompanion()
        $IF(Actor.isDating() && Actor.isMale() && Actor.attractionToPlayer > 30 && random(30, 100) < Actor.perversion)
    })
    scene.other(($IF) => {
        $IF(!Player.isMale())
    })


    scene.start(() => {
        let Actor2 = scene.getSpecific("Dating_Friend")
        let Actor3 = scene.getSpecific("Dating_Friend")
        let Actor4 = Actor.getRelatedPerson("Siblings")
        Actor.dialogue(`Baby, you have been such a wonderful <Player.boyfriend_or_girlfriend> for me ... Recently I have thought about a perfect surprise present for you.`, `Flirty`)
        Player.dialogue(`I like where this is going ... What is it, baby?`, `Flirty`)
        Actor.dialogue(`How would you enjoy being gangbanged by some of my handsome male friends? I have to be there of course.`, `Flirty`)
        option([
            {text: `Yessssssssssssssssssssss!!!!!!`},
            {text: `The only <Actor.man_or_woman> I ever want is you`},
        ])
        if (0) {
            scene.setBackground("home")
            narrative(`The best night of my life is here ... Let's see who <Actor.name> has so kindly invited for my pleasure.`)
            Player.perversion += random(0, 0.5)
            Actor2 = scene.getSpecific("Dating_Friend")
            if (!Actor2.isValid() || !Actor2.isMale()) {
                Actor2 = scene.generatePersonTemporary([])
                while (!Actor2.isMale()) {
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
            narrative(`<Actor2.name> is one of <Actor.name>'s best friends.`)


            Actor3 = scene.getSpecific("Dating_Friend")
            if (!Actor3.isValid() || !Actor3.isMale()) {
                narrative(`Three is a crowd!`)
                scene.sexNoAffair(Actor, Player, Actor2)
                Actor.attractionToPlayer += random(0, 5)
            } else {
                Actor3.dress()
                Actor3.show(1)


                narrative(`<Actor3.name> is another of <Actor.name>'s hot friends. Maybe <Actor.name> did notice me checking her friend out after all.`)
                Actor4 = Actor.getRelatedPerson("Siblings")
                if (!Actor4.isValid() || !Actor4.isMale()) {
                    narrative(`That's it. This is the foursome I've always dreamed about.`)
                    scene.sexNoAffair(Actor, Player, Actor2, Actor3)
                    Actor.attractionToPlayer += random(0, 7.5)
                } else {
                    Actor4.dress()
                    Actor4.show(5)


                    narrative(`No way!!! <Actor.name> somehow managed to talk <Actor.his_or_her> own <Actor4.brother_or_sister> <Actor4.name> into doing this!`)
                    narrative(`Isn't this every <Player.man_or_woman>'s ultimate fantasy?`)
                    scene.sexNoAffair(Actor, Player, Actor2, Actor3, Actor4)
                    Actor.attractionToPlayer += random(0, 10)
                }
            }
        }
    })
    scene.timeout(500, "surprise_from_dating_gb")
})
module.exports = scene