// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\misc\show_npc_porn_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'show_npc_porn_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor5 = Player.getCompanion()
    let Actor6 = scene.getCreature("Dog")
    scene.who(($IF) => {
        Actor5 = Player.getCompanion()
        Actor6 = scene.getCreature("Dog")
        $IF(Player.isInterestedIn(Actor5) && Actor5.isFemale() && Actor6.isMale())
    })
    scene.other(($IF) => {
        $IF(Player.isFemale())
    })


    scene.start(() => {
        let Best = false
        let Actor = scene.generatePersonTemporary([])
        let Actor2 = scene.generatePersonTemporary([])
        let Actor3 = scene.generatePersonTemporary([])
        let Actor4 = scene.generatePersonTemporary([])
        narrative(`You are feeling horny and you think that <Actor5.name> is too. Do you want to try and take things further and put on a porn movie in that hope that it will spice things up?`)
        option([
            {text: `NO`},
            {text: `YES`},
        ])
        if (1) {
            Best = false
            Player.hide()
            Actor5.hide()
            Actor = scene.generatePersonTemporary([])
            while (!Actor.isFemale()) {
                Actor = scene.generatePersonTemporary([])
            }
            narrative(`What type?`)
            option([
                {text: `STRAIGHT`},
                {text: `LESBIAN`},
                {text: `ANIMAL`, condition: scene.isModEnabled("vin_Bestiality")},
                {text: `NC`, condition: scene.isModEnabled("vin_NonConsensual")},
            ])
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
                Best = true
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
            Actor5.show()
            narrative(`You decide to watch a porn movie with <Actor5.name>. The action on the screen turns you both on.`)
            if (random(0, 100) < Actor5.perversion + Actor5.attractionToPlayer) {
                narrative(`After watching the film you both feel incredibly turned on. You look at <Actor5.name> and she looks at you. You make a move. She reciprocates. Before you know it, you are both overcome with passion.`)
                scene.sex(Player, Actor5)
                if (Best) {
                    narrative(`You begin to think about the movie you just watched. You remember how turned on you were at seeing those dogs fucking those women. You want to try and see it in real life. Do you ...`)
                    option([
                        {text: `DECIDE TO LEAVE IT AS A FANTASY`},
                        {text: `SUGGEST GETTING YOUR OWN DOG INVOLVED`},
                    ])
                    if (1) {
                        Actor6.show()
                        narrative(`You'll probably say no... but how about I bring <Actor6.name> in and you and me try doing what we just watched in that film?`)
                        Actor5.dialogue(`Oh my God... Jesus... I'm so horny... yes! LET'S DO IT!`)
                        scene.sex(Actor6, Player)
                        scene.sex(Actor6, Actor5)
                        scene.sex(Actor6, Player, Actor5)
                    }
                }
            } else {
                narrative(`You both enjoy the film but not quite enough for it to lead to anything else. You hope to have better luck next time.`)
            }
            Player.perversion += 2
        }
    })
    scene.timeout(500, "show_npc_porn_cms")


})
module.exports = scene