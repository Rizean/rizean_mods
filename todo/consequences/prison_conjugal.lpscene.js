// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\consequences\prison_conjugal.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'prison_conjugal'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["prison"])
    scene.when([8, 22])
    let Actor = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Dating")
        $IF(random(0, 200) < Actor.attractionToPlayer)
    })
    scene.other("none")


    scene.start(() => {
        let Actor2 = scene.generatePersonTemporary([])
        narrative(`In prison, I'm only allowed the occasional conjugal visit from my <Actor.boyfriend_or_girlfriend> <Actor.name>.`)
        Actor.dress()
        Actor.show(2)
        Actor.dialogue(`Baby, I miss you! I can't wait for the day you can come home.`, `Happy`)
        option([
            {text: `Just talk`},
            {text: `Have sex`},
        ])
        if (1) {
            scene.sex(Player, Actor)
            Actor.attractionToPlayer += random(0, 1)


            if (random(0, 100) < 10 && scene.isModEnabled("vin_NTR")) {
                Player.show(0)
                Actor.show(2)
                Actor2 = scene.generatePersonTemporary([])
                Actor2.dressUniform("Police")
                Actor2.show(3)
                Actor2.dialogue(`Having some fun there, I see?`, `Evil`)
                narrative(`It's a guard. What does <Actor2.he_or_she> want now?`)
                Actor2.dialogue(`Listen, sex isn't exactly allowed in these conjugal visits anymore. Would be a shame if this gets reported and you'll never get any visits again, wouldn't it?`, `Evil`)
                Player.dialogue(`Cut the crap, <Actor2.name>. What do you want?`, `Angry`)
                Actor2.dialogue(`Let's cut to the chase then: you two got me quite turned on, I need to release now ... on your <Actor.boyfriend_or_girlfriend>.`, `Flirty`)
                option([
                    {text: `Okay ...`},
                    {text: `Fuck you!`},
                ])
                if (0) {
                    Player.masochist += random(0, 1)
                    scene.sex(Actor2, Actor)
                } else {
                    Player.masochist -= random(0, 1)
                    Actor2.dialogue(`Then I suggest you get used to never seeing your <Actor.boyfriend_or_girlfriend> again!`, `Angry`)
                    scene.timeout(2000, "prison_conjugal")
                }
            }
        }


    })
    scene.timeout(200, "prison_conjugal")
})
module.exports = scene