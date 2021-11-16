// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\secretary_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'secretary_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([0, 24])
    let Boss = scene.getSpecific("Boss")
    scene.who(($IF) => {
        $IF(Boss = scene.getSpecific("Boss"))
    })
    scene.other(($IF) => {
        $IF(Player.jobexperience > 70)
    })


    scene.start(() => {
        let Warning = false
        let Actor = scene.getPerson("tag_secretary")
        let stage = Actor.getActorVar("tag_secretary")
        let Actor2 = scene.getSpecific("Colleague")
        Warning = false
        Actor = scene.getPerson("tag_secretary")
        if (!Actor.isValid()) {
            narrative(`My boss called me into <Boss.his_or_her> office.`)
            Boss.dress()
            Boss.show()
            Boss.dialogue(`You're quite a senior employee now. You're entitled to your own office and a secretary to help you out. Why don't you interview a few candidates and hire the one you like?`)
            Boss.hide()
            narrative(`A few days later ...`)
            Actor = scene.generatePersonTemporary([])
            Actor.dress()
            Actor.show()
            Actor.dialogue(`Thank you for your consideration and for taking the time to interview me.`)
            narrative(`<Actor.name> seems to be the best candidate out of the ones I interview this time.`)
            if (Actor.isInterestedIn(Player) && Actor.perversion + Actor.attractionToPlayer > 100) {
                narrative(`I couldn't help but notice that <Actor.name> was hitting on me a bit during the interview. <Actor.He_or_She> is likely to be a flirty secretary in the future for sure.`)
            }
            narrative(`What should I do about this candidate for the secretary position?`)
            option([
                {text: `Hire <Actor.him_or_her>`},
                {text: `Look for another candidate next time`},
                {text: `I don't need a secretary actually`},
            ])
            if (0) {
                Actor.makePermanent()
                Actor.addColleague()
                Actor.setActorVar("tag_secretary", 1)
                Player.exchangeContact(Actor)
                narrative(`I decided to hire <Actor.name> as my secretary.`)
            } else if (1) {
                narrative(`Let's look for another candidate another day.`)
            } else {
                narrative(`Let's stop looking for a secretary altogether. I'm not used to having one.`)
                scene.timeout(2000, "secretary_cms")
            }
        } else {
            Actor.dress()
            Actor.show()
            narrative(`<Actor.name> is my current secretary.`)
            option([
                {text: `I'm happy with <Actor.him_or_her>`},
                {text: `Fire <Actor.him_or_her>`},
            ])
            if (0) {
                stage = Actor.getActorVar("tag_secretary")
                if (stage < 2) {
                    narrative(`What should I ask <Actor.name> to do today?`)
                    option([
                        {text: `Help me with admin work`},
                        {text: `Suggest a sexual relationship`},
                    ])
                    if (0) {
                        Player.jobperformance += Actor.intelligence * 0.01
                        Actor.attractionToPlayer += 1
                        narrative(`Should I flirt a bit with <Actor.name>?`)
                        option([
                            {text: `Yes`},
                            {text: `No`},
                        ])
                        if (0) {
                            Actor.attractionToPlayer += 2
                            narrative(`I took every opportunity we had working together to flirt with <Actor.name>.`)
                        }
                    } else {
                        if (Actor.perversion + Actor.attractionToPlayer > 100) {
                            Actor.dialogue(`Okay ... I guess that's how things work in these offices. I have to fit in with the corporate culture.`)
                            narrative(`From now on, <Actor.name> will be going beyond <Actor.his_or_her> duty as a secretary and serve me in other ways too.`)
                            Actor.setActorVar("tag_secretary", 2)
                        } else {
                            Actor.dialogue(`That's a joke, right?`)
                            narrative(`Oh well, at least <Actor.he_or_she> didn't report to HR.`)
                        }
                    }
                } else {
                    narrative(`What should I ask <Actor.name> to do today?`)
                    option([
                        {text: `Help me with admin work`},
                        {text: `Ask for sexual favours`},
                    ])
                    if (0) {
                        Player.jobperformance += Actor.intelligence * 0.01
                    } else {
                        narrative(`Where?`)
                        option([
                            {text: `In my private office`},
                            {text: `Right here`},
                        ])
                        if (0) {
                            Player.dialogue(`<Actor.name>, would you mind coming in my office for a moment?`, `Flirty`)
                            Actor.dialogue(`Of course, boss.`, `Flirty`)
                            narrative(`Judging from <Actor.his_or_her> face expression, <Actor.he_or_she> already knows exactly what I want.`)
                            scene.setBackground("community_centre")
                            Actor.dialogue(`What do you want me to do then, boss?`, `Flirty`)
                            option([
                                {text: `Oral`},
                                {text: `Sex`},
                            ])
                            if (0) {
                                scene.filter("Oral")
                                scene.sex(Player, Actor)
                                scene.$random(() => {
                                    Actor2 = scene.getSpecific("Colleague")
                                    Actor2 = scene.getSpecific("Dating")
                                    Actor2 = Player.getRelative()
                                })


                                if (Actor2.isValid()) {
                                    Actor.hide()
                                    Actor2.dress()
                                    Actor2.show()
                                    narrative(`While <Actor.name> and I were messing about, <Actor2.name> walked into my office with something to say. <Actor.name> quickly hid under the desk while continuing to service me.`)
                                    narrative(`<Actor2.name> and I started a conversation, with <Actor2.him_or_her> having no idea that my secretary is currently under my desk.`)
                                    narrative(`After the conversation, <Actor2.name> left.`)
                                    Actor2.hide()
                                    Actor.show()
                                    Actor.dialogue(`Wasn't that exciting? You were glad I didn't stop, weren't you?`)
                                    Actor.dialogue(`Now, let me bring you to orgasm.`)
                                    scene.filter("Oral")
                                    scene.sex(Player, Actor)
                                }
                            } else {
                                scene.sex(Player, Actor)
                                scene.$random(() => {
                                    Actor2 = scene.getSpecific("Colleague")
                                    Actor2 = Boss
                                })


                                if (Actor2.isValid() && random(0, 100) > Player.sneak) {
                                    Actor2.dress()
                                    Actor2.show()
                                    narrative(`While <Actor.name> and I were fucking, <Actor2.name> walked into my office and caught us red-handed.`)
                                    if (Actor2.masochist - Actor.perversion > 0) {
                                        Actor2.dialogue(`Oh my god, I'm so sorry ...`, `Embarrassed`)
                                        narrative(`<Actor2.name> ran away, clearly embarrassed.`)
                                    } else {
                                        Actor2.dialogue(`You two know you're not being very discrete, right?`)
                                        narrative(`How should I react to the situation?`)
                                        option([
                                            {text: `Invite <Actor2.name> to join`},
                                            {text: `Tell <Actor2.name> to leave my office`},
                                        ])
                                        if (0 && Actor2.perversion > 50) {
                                            Actor2.dialogue(`Don't mind if I do ...`)
                                            scene.sex(Player, Actor, Actor2)
                                        } else {
                                            Warning = true
                                        }
                                    }
                                }
                            }
                        } else {
                            narrative(`I've got too hot and heavy to go back to my office now, let's just fuck <Actor.him_or_her> right here at <Actor.his_or_her> desk.`)
                            scene.sex(Player, Actor)
                            scene.$random(() => {
                                Actor2 = scene.getSpecific("Colleague")
                                Actor2 = Boss
                            })


                            if (Actor2.isValid()) {
                                Actor2.dress()
                                Actor2.show()
                                narrative(`While <Actor.name> and I were fucking right out in the public office, <Actor2.name> caught us red-handed.`)
                                if (Actor2.masochist - Actor.perversion > 0) {
                                    Actor2.dialogue(`Oh my god, I'm so sorry ...`, `Embarrassed`)
                                    narrative(`<Actor2.name> ran away, clearly embarrassed.`)
                                } else {
                                    Actor2.dialogue(`You must have some <Player.balls_or_galls> fucking your secretary right in front of everyone in the office.`)
                                    narrative(`How should I react to the situation?`)
                                    option([
                                        {text: `Invite <Actor2.name> to join`},
                                        {text: `Tell <Actor2.name> to leave my office`},
                                    ])
                                    if (0 && Actor2.perversion > 50) {
                                        Actor2.dialogue(`Don't mind if I do ...`)
                                        scene.sex(Player, Actor, Actor2)
                                    } else {
                                        Warning = true
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                narrative(`I decided to fire <Actor.name> from the secretary position.`)
                Actor.removeColleague()
                Actor.setActorVar("tag_secretary", 0)
            }
        }


        if (Warning) {
            narrative(`For my recent indecent behavior with my secretary, I was given a warning from HR. This surely will impact my next performance review.`)
            Player.jobperformance -= 10
        }
    })
    scene.timeout(100, "secretary_cms")
})
module.exports = scene