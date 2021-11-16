// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\misc\search_porn_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'search_porn_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["home"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.arousal > 50)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Actor2 = scene.generatePersonTemporary([])
        let Actor3 = scene.generatePersonTemporary([])
        let Actor4 = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        while (!Actor.isFemale()) {
            Actor = scene.generatePersonTemporary([])
        }
        Player.hide()
        narrative(`You are online and feeling horny so you decide to look for some porn. Do you choose ...`)
        option([
            {text: `STRAIGHT`},
            {text: `LESBIAN`},
            {text: `ANIMAL`, condition: scene.isModEnabled("vin_Bestiality")},
            {text: `NC`, condition: scene.isModEnabled("vin_NonConsensual")},
            {text: `None`},
        ])
        if (choice < 4) {
            if (0) {
                narrative(`What exactly?`)
                option([
                    {text: `Couple`},
                    {text: `MMF`},
                    {text: `MFF`},
                    {text: `Gangbang`},
                    {text: `Reverse Gangbang`},
                ])
                Actor2 = scene.generatePersonTemporary([])
                while (!Actor2.isMale()) {
                    Actor2 = scene.generatePersonTemporary([])
                }
                if (0) {
                    scene.sex(Actor2, Actor)
                } else if (1 || 3) {
                    Actor3 = scene.generatePersonTemporary([])
                    while (!Actor3.isMale()) {
                        Actor3 = scene.generatePersonTemporary([])
                    }
                    if (1) {
                        scene.sex(Actor3, Actor2, Actor)
                    } else {
                        Actor4 = scene.generatePersonTemporary([])
                        while (!Actor4.isMale()) {
                            Actor4 = scene.generatePersonTemporary([])
                        }
                        scene.sex(Actor4, Actor3, Actor2, Actor)
                    }
                } else if (2 || 4) {
                    Actor3 = scene.generatePersonTemporary([])
                    while (!Actor3.isFemale()) {
                        Actor3 = scene.generatePersonTemporary([])
                    }
                    if (2) {
                        scene.sex(Actor3, Actor2, Actor)
                    } else {
                        Actor4 = scene.generatePersonTemporary([])
                        while (!Actor4.isFemale()) {
                            Actor4 = scene.generatePersonTemporary([])
                        }
                        scene.sex(Actor4, Actor3, Actor2, Actor)
                    }
                }
            } else if (1) {
                Actor2 = scene.generatePersonTemporary([])
                while (!Actor2.isFemale()) {
                    Actor2 = scene.generatePersonTemporary([])
                }
                scene.sex(Actor, Actor2)
            } else if (2) {
                Actor2 = scene.generateCreatureTemporary()
                scene.sex(Actor2, Actor)
            } else if (3) {
                Actor2 = scene.generatePersonTemporary([])
                while (!Actor2.isMale()) {
                    Actor2 = scene.generatePersonTemporary([])
                }
                scene.filter("Aggressive")
                scene.talkNonConsensual()
                scene.sex(Actor2, Actor)
            }


            Actor.hide()
            Actor2.hide()
            Actor3.hide()
            Actor4.hide()
            Player.show()
            narrative(`It turns you on so much that you masturbate and bring yourself to a climax.`)
            scene.filter("Solo")
            scene.sex(Player)
            Player.arousal -= 25
            Player.perversion += 1
        }
    })
    scene.timeout(500, "search_porn_cms")
})
module.exports = scene