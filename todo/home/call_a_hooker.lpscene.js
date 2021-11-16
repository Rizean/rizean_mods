// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\call_a_hooker.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'call_a_hooker'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -go_to_the_bathroom", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([18, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.isAtHome() && Player.arousal > 50 && Player.perversion > 30)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Actor2 = scene.getPerson()
        let Actor3 = scene.generatePersonTemporary([])
        let Actor4 = scene.generatePersonTemporary([])
        narrative(`I'm so horny, damn it! Maybe I should just get a hooker and get my needs taken care of?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            if ($WHERE.eq("brothel")) {
                narrative(`After looking around, I found a hooker that is within my budget.`)
            } else {
                narrative(`I did some digging on the internet and found a hooker that does outcalls and is within my budget.`)
            }
            Actor = scene.generatePersonTemporary([])
            while (!Player.isInterestedIn(Actor)) {
                Actor = scene.generatePersonTemporary([])
            }
            scene.$random(() => {
                Actor.blendPreset("twenties")
                Actor.blendPreset("thirties")
            })
            Actor.randomizeHairs()
            Actor.randomizeFace()


            Actor.dressUniform("sexwork")
            Actor.show(2)


            narrative(`Should I arrange to have sex with this hooker?`)
            option([
                {text: `Yes`},
                {text: `No`},
                {text: `Get another one`},
            ])
            Actor2 = scene.getPerson()
            if (0) {
                if ($WHERE.eq("brothel")) {
                    narrative(`I guided the hooker into one of the brothel's bedrooms and we got it on right away.`)
                } else {
                    narrative(`In no time at all, the hooker arrived and we got it on immediately.`)
                }
                scene.sex(Player, Actor)
                Player.perversion += random(0, 0.5)
                Player.money -= random(100, 300)
                Actor.show(2)
                Actor2 = scene.getCreature()
                if ($WHERE.eq("home") && scene.isModEnabled("vin_Bestiality") && Actor2.isValid() && Actor2.isCreatureType("Dog")) {
                    Actor2.show()
                    narrative(`Too occupied with fucking the prostitute, I didn't notice that our intense love making session has got my pet dog <Actor2.name> all excited.`)
                    narrative(`It's clear that <Actor2.he_or_she> got horny from watching us and wants a piece of the action. Unless satisfied, <Actor2.he_or_she> will spend the night barking and won't let me sleep, I'm sure.`)
                    option([
                        {text: `Relieve <Actor2.name> myself`},
                        {text: `Pay the hooker extra to do it`},
                        {text: `Pay the hooker to have a threesome with me and the dog`, condition: !Actor.isMale() && !Player.isMale()},
                        {text: `Do nothing`},
                    ])
                    if (0) {
                        scene.sex(Actor, Player)
                    } else if (1) {
                        Actor.dialogue(`Okay, it's easy cash I guess.`)
                        Player.money -= random(100, 300)
                        scene.sex(Actor2, Actor)
                    } else if (2) {
                        Actor.dialogue(`Okay, it's easy cash I guess.`)
                        Player.money -= random(100, 300)
                        scene.sex(Actor2, Actor, Player)
                    } else {
                        Actor2.rapportwithplayer -= 2
                    }
                } else {
                    narrative(`I paid the hooker and we parted ways. Good service that was!`)
                }
            } else if (1) {
                narrative(`Nah, <Actor.he_or_she> isn't my type.`)
            } else {
                Actor2 = scene.generatePersonTemporary([])
                while (!Player.isInterestedIn(Actor2)) {
                    Actor2 = scene.generatePersonTemporary([])
                }
                scene.$random(() => {
                    Actor2.blendPreset("twenties")
                    Actor2.blendPreset("thirties")
                })
                Actor2.randomizeHairs()
                Actor2.randomizeFace()
                Actor2.dressUniform("sexwork")
                Actor2.show(3)


                narrative(`Should I arrange to have sex with these hookers?`)
                option([
                    {text: `Yes`},
                    {text: `No`},
                    {text: `Get another one`},
                ])
                if (0) {
                    if ($WHERE.eq("brothel")) {
                        narrative(`I guided the two prostitutes into one of the brothel's bedrooms and we got it on right away.`)
                    } else {
                        narrative(`In no time at all, the two prostitutes arrived and we got it on immediately.`)
                    }


                    scene.sex(Player, Actor, Actor2)
                    Player.perversion += random(0, 1)
                    Player.money -= random(200, 600)
                    Actor.show(2)
                    Actor2.show(3)
                    narrative(`I paid the hookers and we parted ways. Good service that was!`)
                } else if (2) {
                    Actor3 = scene.generatePersonTemporary([])
                    while (!Player.isInterestedIn(Actor3)) {
                        Actor3 = scene.generatePersonTemporary([])
                    }
                    scene.$random(() => {
                        Actor3.blendPreset("twenties")
                        Actor3.blendPreset("thirties")
                    })
                    Actor3.randomizeHairs()
                    Actor3.randomizeFace()
                    Actor3.dressUniform("sexwork")
                    Actor3.show(4)


                    narrative(`Should I arrange to have sex with these hookers?`)
                    option([
                        {text: `Yes`},
                        {text: `No`},
                        {text: `Get another one`},
                    ])
                    if (0) {
                        if ($WHERE.eq("brothel")) {
                            narrative(`I guided the three prostitutes into one of the brothel's bedrooms and we got it on right away.`)
                        } else {
                            narrative(`In no time at all, the three prostitutes arrived and we got it on immediately.`)
                        }


                        scene.sex(Player, Actor, Actor2, Actor3)
                        Player.perversion += random(0, 1)
                        Player.money -= random(300, 900)
                        Actor.show(2)
                        Actor2.show(3)
                        Actor3.show(4)
                        narrative(`I paid the hookers and we parted ways. Good service that was!`)
                    } else if (2) {
                        Actor4 = scene.generatePersonTemporary([])
                        while (!Player.isInterestedIn(Actor4)) {
                            Actor4 = scene.generatePersonTemporary([])
                        }
                        scene.$random(() => {
                            Actor4.blendPreset("twenties")
                            Actor4.blendPreset("thirties")
                        })
                        Actor4.randomizeHairs()
                        Actor4.randomizeFace()
                        Actor4.dressUniform("sexwork")
                        Actor4.show(5)


                        narrative(`Should I arrange to have sex with these hookers?`)
                        option([
                            {text: `Yes`},
                            {text: `No`},
                        ])
                        if (0) {
                            if ($WHERE.eq("brothel")) {
                                narrative(`I guided the four prostitutes into one of the brothel's bedrooms and we got it on right away.`)
                            } else {
                                narrative(`In no time at all, the four prostitutes arrived and we got it on immediately.`)
                            }


                            scene.sex(Player, Actor, Actor2, Actor3, Actor4)
                            Player.perversion += random(0, 1)
                            Player.money -= random(400, 1200)
                            Actor.show(2)
                            Actor2.show(3)
                            Actor3.show(4)
                            Actor4.show(5)
                            narrative(`I paid the hookers and we parted ways. Good service that was!`)
                        }
                    }
                }
            }
        } else {
            narrative(`No way. I'm not so desperate that I have to pay to get laid.`)
        }


    })
    scene.timeout(96, "call_a_hooker")
})
module.exports = scene