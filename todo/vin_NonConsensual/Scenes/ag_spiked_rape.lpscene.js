// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\ag_spiked_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'ag_spiked_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    let Actor = scene.passedInActor()
    scene.what(["all", " -go_to_the_bathroom"])
    scene.where(["bar", " nightclub"])
    scene.when([21, 4])
    let Actor2 = scene.getPerson()
    scene.who(($IF) => {
        Actor2 = scene.getPerson()
        $IF(!Player.isWithCompanion() && random(40, 500) < Player.perversion && random(-100, 0) > Player.masochist)
    })
    scene.other("none")


    scene.start(() => {
        let IRape = false
        let Actor3 = scene.generatePersonTemporary([])
        if (!Actor.isValid()) {
            Actor = scene.generatePersonTemporary([])
            while (!Player.isInterestedIn(Actor)) {
                Actor = scene.generatePersonTemporary([])
            }
            Actor.dress()
            Actor.show(2)
        }
        if (Actor.isTemporary()) {
            narrative(`Wow, what a <Actor.handsome_or_beautiful> <Actor.guy_or_girl> standing there at the bar.`)
        } else {
            narrative(`I'm hanging out with <Actor.name>.`)
        }
        narrative(`Should I offer <Actor.him_or_her> a drink?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            if (Actor.isDating()) {
                Actor2 = scene.generatePersonTemporary([])
                Actor2.dress()
                Actor2.show(4)
                Actor2.dialogue(`One Margarita and one Gin & Tonic coming ...`, `Happy`)
                Actor2.dialogue(`Listen buddy, I can tell you and your <Actor.boyfriend_or_girlfriend> has lost that spark for a while ... <Actor.He_or_She> is not up for a hot date tonight and you know it`, `Evil`)
                narrative(`What the hell! What rotten luck I have to receive some unsolicited reality check from a bartender ...`)
                Actor2.dialogue(`... unless you're smart enough to cheat. For a generous tip, I can put some special aphrodisiac powder in <Actor.his_or_her> Margarita that will guarantee to spice up your sex life ...`, `Evil`)
            } else {
                Player.dialogue(`I'm sorry if this is all too sudden. But you're the most <Actor.handsome_or_beautiful> <Actor.guy_or_girl> I've ever seen. I'd love nothing more than being able to buy you a drink.`, `Happy`)
                Actor.dialogue(`Of course! I'd love to have a drink with you.`, `Happy`)
                Actor2 = scene.generatePersonTemporary([])
                Actor2.dress()
                Actor2.show(4)
                Actor2.dialogue(`One Margarita and one Gin & Tonic coming ...`, `Happy`)
                Actor2.dialogue(`Listen buddy, I can tell you're trying to get with that <Actor.handsome_or_beautiful> <Actor.guy_or_girl>. I must say though <Actor.he_or_she> is kinda out of your league to be honest ...`, `Evil`)
                narrative(`What the hell! What rotten luck I have to receive some unsolicited reality check from a bartender ...`)
                Actor2.dialogue(`... unless you're smart enough to cheat. For a generous tip, I can put some special aphrodisiac powder in <Actor.his_or_her> Margarita that will guarantee you score tonight ... Come on buddy, you're the underdog - only a fool would play fair here.`, `Evil`)
            }
            narrative(`Should I spike <Actor.his_or_her> drink with aphrodisiac?`)
            option([
                {text: `Spike the drink`},
                {text: `No way`},
            ])
            if (0) {
                Player.money -= random(200, 500)
                Player.masochist -= random(0, 2)
                Player.perversion += random(0, 2)
                if (Actor.isDating()) {
                    narrative(`The bartender is right. Our sex life recently could do with some extra spice and this aphrodisiac drink can do the trick nicely`)
                } else {
                    narrative(`The bartender is right. This <Actor.man_or_woman> is so out of my league that spiking <Actor.his_or_her> drink is my only hope.`)
                }
                Player.karma -= 10
                Actor2.hide()
                narrative(`Soon enough, I was back with drinks for both of us. We enjoyed our drinks while having a pleasant conversation. `)
                narrative(`A while later ...`)
                narrative(`<Actor.His_or_Her> speech is becoming slurred now. <Actor.He_or_She> is also starting to sweat with arousal. It seems the drug is taking effect.`)
                IRape = false


                if (scene.isModEnabled("vin_NTR")) {
                    narrative(`After waiting a little while more, a unexpected situation occurred ...`)
                    Actor3 = scene.generatePersonTemporary([])
                    while (!Actor.isInterestedIn(Actor3)) {
                        Actor3 = scene.generatePersonTemporary([])
                    }
                    Actor3.dress()
                    Actor3.show()
                    Actor3.moveToPersonStand(Actor)
                    narrative(`Many other <Player.guys_or_girls> from the club keeps approaching and hitting on <Actor.name>, and it's clear the aphrodisiac I gave <Actor.him_or_her> is making <Actor.him_or_her> more and more interested in them.`)
                    option([
                        {text: `Intervene and claim <Actor.name> as my prize`},
                        {text: `Do nothing`},
                        {text: `Pretend to get a phone call and step outside`},
                        {text: `Encourage <Actor.name> to go for it`},
                    ])
                    if (0) {
                        IRape = true
                    } else if (1) {
                        if (Actor.isDating()) {
                            if (Player.masochist - Actor.masochist > 30) {
                                Actor.dialogue(`Hey, I'm gonna go to the bathroom and fuck this <Actor3.guy_or_girl>, you can wait here or come watch`)
                                scene.setBackground("shower")
                                scene.sex(Actor3, Actor)
                            } else if (Actor.perversion > 70 && Actor.attractionToPlayer < 20) {
                                Actor.dialogue(`Honey, can you get me another drink please?`)
                                scene.setBackground("shower")
                                narrative(`When I'm back with the drinks, <Actor.name> is no longer there and my instinct told me to check in the bathroom ...`)
                                scene.sex(Actor3, Actor)
                            } else {
                                Actor3.hide()
                                narrative(`Fortunately for me, <Actor.name> cut down all the other advances and stayed with me.`)
                                IRape = true
                            }
                        } else {
                            narrative(`<Actor.name> politely asked me to wait while they go have some fun with the next flirter.`)
                            narrative(`I had no choice but oblige.`)
                            scene.setBackground("shower")
                            scene.sex(Actor3, Actor)
                        }
                    } else if (2) {
                        scene.setBackground("shower")
                        scene.sex(Actor3, Actor)
                    } else {
                        scene.setBackground("shower")
                        scene.sex(Actor3, Actor)
                    }
                } else {
                    IRape = true
                }


                if (IRape) {
                    narrative(`Let's get <Actor.him_or_her> out of here and into the nearest hotel room.`)
                    narrative(`A while later ...`)
                    scene.setBackground("home")
                    Player.dialogue(`Now, let us have some fun, because you're gonna forget all about this in the morning!`, `Flirty`)
                    narrative(`<Actor.name> is so drugged up with aphrodisiac that <Actor.he_or_she> starts begging me to give it to <Actor.him_or_her.`)
                    scene.filter("Aggressive")
                    scene.talkNonConsensual()
                    scene.sexNoAffair(Player, Actor)
                }
            } else {
                Player.dialogue(`I'm not Bill Cosby! What kind of bartender are you?`, `Angry`)
                Actor2.hide()
                narrative(`Having turned down the bartender's evil plan, I returned to the <Actor.handsome_or_beautiful> <Actor.guy_or_girl> with the drinks and we had a brief conversation.`)
                narrative(`It didn't lead anywhere and I didn't even manage to get <Actor.his_or_her> number. <Actor.He_or_She> was out of my league.`)
                narrative(`Oh well ... at least I didn't use dodgy methods to try to sleep with <Actor.him_or_her> and I'm proud of my decision.`)
            }
        } else {
            narrative(`No way. <Actor.He_or_She> is way too hot for me and completely out of my league.`)
        }
    })
    scene.timeout(250, "ag_spiked_rape")
})
module.exports = scene