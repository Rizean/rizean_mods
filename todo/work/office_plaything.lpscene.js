// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\office_plaything.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'office_plaything'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Boss")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Boss")
        $IF(Actor.hadSex() && (Player.openRelationship() || !Actor.isDating()))
    })
    scene.other("none")


    scene.start(() => {
        let Plaything = scene.getGlobal(`Plaything`)
        let Actor2 = scene.getSpecific("Colleague")
        Plaything = scene.getGlobal(`Plaything`)
        if (Plaything == 1) {
            narrative(`I'm currently the office plaything. Everyone in the office knows it and those interested can use me whenever they want.`)
            option([
                {text: `Continue being the office plaything`},
                {text: `Quit being the office plaything`},
            ])
            if (0) {
                Actor2 = scene.getSpecific("Colleague")
                while (Actor2.isValid() && !Actor2.isInterestedIn(Player) && Actor2.perversion > 50) {
                    Actor2 = scene.getSpecific("Colleague")
                }
                if (!Actor2.isValid() || random(0, 100) < 30) {
                    Actor.dress()
                    Actor.show()
                    narrative(`It's the boss <Actor.himself_or_herself> that requires the office plaything's touch today.`)
                    option([
                        {text: `Fuck my boss in the office`},
                        {text: `I'm not in the mood today`},
                    ])
                    if (0) {
                        scene.sex(Actor, Player)
                        Player.perversion += 0.5
                        if (Player.jobperformance < 50) {
                            Player.jobperformance = 50
                        }
                        Player.jobperformance += 5
                    }
                } else {
                    Actor2.dress()
                    Actor2.show()
                    narrative(`It's my colleague <Actor2.name> that requires the office plaything's touch today.`)
                    option([
                        {text: `Fuck <Actor2.name> in the office`},
                        {text: `I'm not in the mood today`},
                    ])
                    if (0) {
                        scene.sex(Actor2, Player)
                        Player.perversion += 0.5
                        if (Player.jobperformance < 50) {
                            Player.jobperformance = 50
                        }
                        Player.jobperformance += 5


                        if (random(0, 100) < 33) {
                            Actor.dress()
                            Actor.show()
                            Actor.dialogue(`<Actor2.name>, I see you're taking full advantage of the company's benefits package.`)
                            Actor.dialogue(`And <Player.name>, I see you're excelling in your role as the office plaything ...`)
                            Actor.dialogue(`Since I'm paying you both, I hope you won't mind me joining me, would you?`)
                            Actor2.dialogue(`Of course not, boss ...`)
                            scene.sex(Actor, Actor2, Player)
                        }
                    }
                }
            } else {
                narrative(`I told my boss that I'd rather move on from this special role within the company and just be a normal employee from now on. Reluctantly, <Actor.he_or_she> called a meeting to make the announcement which was reacted to with many disappointed faces.`)
                Player.perversion -= 3
                scene.setGlobal(`Plaything`, `0`)
            }
        } else {
            Actor.dress()
            Actor.show()
            narrative(`I'm already sleeping with my boss. Maybe I should ask <Actor.him_or_her> to declare me as the office plaything and let the rest of my colleagues have their ways with it whenever they want.`)
            narrative(`This could be a good way to make sure I keep advancing in this company without actually doing much actual work. After all, keeping 'employee satisfaction' high would be my very crucial contribution to the business.`)
            option([
                {text: `Become the office plaything`},
                {text: `Let's think about this some more`},
                {text: `Never!`},
            ])
            if (0) {
                Player.perversion += 3
                Actor.dialogue(`Haha, it's good that you know your place and understand how best you can serve this company!`)
                Actor.dialogue(`Fine, let's schedule a team meeting soon where I will make an announcement about your new role.`)
                narrative(`My boss stuck to <Actor.his_or_her> words, at the meeting, I was declared as the office plaything, always ready to be used by any of the other employees. While this announcement shocked some of my more conservative colleagues, it's clear that others immediately became very interested in the prospect of taking advantage of this new and more sensual method for bonus compensation from the company.`)
                scene.setGlobal(`Plaything`, `1`)
            } else if (2) {
                scene.timeout(2000, "office_plaything")
            }
        }
    })
    scene.timeout(50, "office_plaything")
})
module.exports = scene