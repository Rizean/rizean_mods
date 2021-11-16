// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\modeling\find_a_modeling_agency.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'find_a_modeling_agency'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
let Actor = scene.generatePersonTemporary([])
            scene.setBackground("modeling")
            narrative(`After a lot of searching, I finally managed to get in touch with a model agency.`)
            Actor = scene.generatePersonTemporary([])
            Actor.age = random(35, 60)
            Actor.randomizeHairs()
            Actor.randomizeFace()
            Actor.dress()
            Actor.show(2)
            narrative(`This agency is headed by a <Actor.guy_or_woman> called <Actor.name> <Actor.name_last>.`)
            if (Actor.interpersonal < 25) {
                    narrative(`The agency is not well known at all. Even its website looks amateurish.`)
            } else if (Actor.interpersonal < 50) {
                    narrative(`The agency is somewhat known in the industry, but hardly anything to get excited about.`)
            } else if (Actor.interpersonal < 75) {
                    narrative(`The agency is fairly well known and has a few up-and-coming models on their roster.`)
            } else {
                    narrative(`The agency is famous all over the world and has some true supermodels as its clients. Being represented by them would be a huge boost to my career.`)
            }


            narrative(`Should I go meet with the agent?`)
            option([
                {text: `Yes`},
                {text: `No`},
                    ])
            if (0) {
                    if (Actor.interpersonal < random(0.25, 1)* Player.attractiveness) {
                            Actor.dialogue(`You look like you've got some potential in you to make it in this industry. We'll be happy to represent you.`, `Happy`)
                            option([
                                {text: `Accept`},
                                {text: `Turn <Actor.him_or_her> down`},
                                                    ])
                            if (0) {
                                    Player.dialogue(`Of course, let us look forward to a fruitful partnership!`, `Happy`)
                                     Player.modelfame  += Actor.interpersonal*0.2
                            } else {
                                    Player.dialogue(`Actually, I don't think we would be a good fit. Thank you for your time.`, `Sad`)
                            }
                    } else {
                            Actor.dialogue(`I'm afraid our agency only represents the highest calibre of models working for the biggest-budget campaigns, and you don't quite have the look that the big brands of today are looking for.`, `Sad`)
                            option([
                                {text: `Thank <Actor.him_or_her> for the opportunity`},
                                {text: `Offer sex`},
                                                    ])
                            if (0) {
                                    Player.dialogue(`That's a shame. Thank you for your time anyway.`, `Sad`)
                            } else {
                                    Player.dialogue(`Please, I really wanted to be represented by your agency ... I'm willing to do whatever it takes ...`, `Flirty`)
                                     Player.perversion  += random(0, 0.5)
                                    Player.animatePair(Player, Actor, "Kissing")
                                    narrative(`I proceeded to eye-bang the agent while caressing <Actor.his_or_her> thigh, doing my best to seduce <Actor.him_or_her>.`)
                                    if (random(50, 200) < Actor.perversion + Actor.attractionToPlayer) {
                                            Actor.dialogue(`Well you see ... this is one of the perks of being a model agent ... A perk that I'll gladly take full advantage of.`, `Flirty`)
                                            scene.sex(Actor, Player)
                                            Actor.show(2)
                                            Player.show(0)
                                            Actor.dialogue(`I can see that whatever you lack in appearance, you can make up for it in determination. Fine, I guess I can give you a chance in this industry.`, `Evil`)
                                             Player.modelfame  += Actor.interpersonal*0.2
                                    } else {
                                            Actor.dialogue(`Trust me, you're not the first one to try this tactic, honey. Unfortuately for you, it may work with some amateur agents, not with me.`, `Sarcastic`)
                                            Actor.dialogue(`So now if you excuse me, I have other more self-respecting potential clients to meet today.`, `Angry`)
                                    }
                            }
                    }
            }


    })
})
module.exports = scene