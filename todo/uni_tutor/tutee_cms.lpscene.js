// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_tutor\tutee_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'tutee_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getPerson("tag_Tutee")
    scene.who(($IF) => {
        $IF(Actor = scene.getPerson("tag_Tutee"))
    })
    scene.other("none")


    scene.start(() => {
        let Dest = Actor.getBuilding("Home")
        let Actor2 = Player.getRelatedPerson("Spouses", "Dating")
        narrative(`Should I have a private tutoring session with <Actor.name> today?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            Dest = Actor.getBuilding("Home")
            Player.moveTo(Dest)
            scene.setBackground("home")
            Actor.dress()
            Actor.show()
            narrative(`I showed up at <Actor.name>'s place and we had a tutoring session.`)
            Player.intelligence += 0.1
            Actor.intelligence += 0.25


            if (scene.isModEnabled("vin_Netori") && !Actor.isAsexual()) {
                if (Actor.hasRelationship("Spouses", "Dating")) {
                    Actor2 = Player.getRelatedPerson("Spouses", "Dating")
                    Player.dialogue(`Let's have a short break.`)
                    Actor.dialogue(`Let me go out for a cigarette.`)
                    Actor2.dress()
                    Actor2.show()
                    Actor2.dialogue(`Oh, hello there, <Player.name>, you're here to tutor <Actor.name> again?`)
                    narrative(`It's <Actor2.name>, <Actor.name>'s <Actor2.boyfriend_or_girlfriend>.`)
                    option([
                        {text: `Make a move on <Actor2.him_or_her>`},
                        {text: `Stay professional`},
                    ])
                    if (0) {
                        if (Actor2.perversion + Actor2.attractionToPlayer > 100) {
                            narrative(`<Actor2.name> is very receptive to my advances. Looks like it's my lucky day. What a nice bonus to my meagre tutoring wages.`)
                            scene.sex(Player, Actor2)
                        } else {
                            narrative(`<Actor2.name> rebuffed my advances unfortunately.`)
                        }
                    }
                } else {
                    Actor2 = scene.generatePersonTemporary([])
                    while (!Actor.isInterestedIn(Actor2)) {
                        Actor2 = scene.generatePersonTemporary([])
                    }
                    Actor2.dress()
                    Actor2.show()
                    Actor.dialogue(`Let me introduce you to my <Actor2.boyfriend_or_girlfriend>, <Actor2.name>.`)
                    Actor2.dialogue(`Nice to meet you.`)
                    Player.dialogue(`Nice to meet you too.`)
                }
            }
        }
    })
    scene.timeout(168, "tutee_cms")
})
module.exports = scene