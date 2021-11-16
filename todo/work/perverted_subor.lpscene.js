// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\perverted_subor.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'perverted_subor'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Colleague")
        $IF(Player.jobexperience - Actor.jobexperience > 30 && random(50, 100) < Actor.perversion && Actor.attractionToPlayer > 20 && !Actor.isDating())
    })
    scene.other("none")


    scene.start(() => {
        let SugarBabe = scene.getGlobal(`SugarBabe`)


        if (!Actor.isValid()) {
            Actor = scene.getSpecific("PassedOn")
        }
        Actor.dress()
        Actor.show()
        if (Actor.hadSex()) {
            narrative(`I've slept with <Actor.name>, one of my subordinates in the office. <Actor.He_or_She> seems to be dropping hints today that <Actor.he_or_she> is ready for our next passionate session after work ...`)
            option([
                {text: `Go for it`},
                {text: `Restrain from it`},
            ])
            if (0) {
                scene.setBackground("home")
                narrative(`As soon as work finishes, I went back to <Actor.name>'s place for some supervisor-subordinate bonding ...`)
                scene.sex(Player, Actor)
                Actor.attractionToPlayer += 2


                if (random(0, 100) < 30) {
                    SugarBabe = scene.getGlobal(`SugarBabe`)
                    if (!scene.isTimingOut("recommend_promotion") && random(50, 100) < Actor.intelligence) {
                        narrative(`Once we're done being intimate, <Actor.he_or_she> finally gets around to discussing what <Actor.he_or_she> really wants ...`)
                        narrative(`<Actor.name> is asking that I make a strong case for <Actor.his_or_her> promotion in front of the boss ...`)
                        option([
                            {text: `Recommend <Actor.name> for promotion`},
                            {text: `Turn <Actor.him_or_her> down`},
                        ])
                        if (0) {
                            narrative(`I kinda had to accept <Actor.his_or_her> request. After all, I've been banging my subordinate on a regular and I don't want that to be public knowledge.`)
                            scene.setBackground("work")
                            narrative(`First thing the next morning in the office, as promised, I recommended to my boss that <Actor.name> should get promoted.`)
                            Actor.jobexperience += 20
                            narrative(`This was approved, much to <Actor.his_or_her> delight.`)
                            scene.timeoutPrecise(336, "recommend_for_promotion")
                        } else {
                            narrative(`<Actor.name> abruptly changed <Actor.his_or_her> attitude and got mad at me, accusing me of taking advantage of <Actor.him_or_her> ...`)
                            Actor.attractionToPlayer -= 20
                        }
                    } else if (Actor.jobexperience < 50 && SugarBabe == 0) {
                        narrative(`Once we're done being intimate, <Actor.he_or_she> told me about <Actor.his_or_her> recent financial struggles. In contrast, <Actor.He_or_She> has discovered how much I was earning in my position. Since I have obviously been enjoying <Actor.his_or_her> company and body so much, <Actor.he_or_she> offers <Actor.himself_or_herself> to me as a sugarbabe.`)
                        narrative(`Become <Actor.name>'s <Player.sugardaddy_or_sugarmama>?`)
                        option([
                            {text: `Yes`},
                            {text: `No`},
                        ])
                        if (0) {
                            narrative(`We agreed on a sugar dating arrangement from now on ...`)
                            SugarBabe = Actor.getID()
                            scene.setGlobal(`SugarBabe`, `SugarBabe`)
                        }
                    } else if (random(25, 100) < Actor.attractionToPlayer) {
                        narrative(`<Actor.name> is being even more intimate during sex tonight more than usual ...`)
                        narrative(`After some awkwardness after sex, <Actor.name> finally confessed <Actor.his_or_her> feeling for me ...`)
                        option([
                            {text: `Ask <Actor.name> to become my <Actor.boyfriend_or_girlfriend>`},
                            {text: `Reject <Actor.him_or_her>`},
                        ])
                        if (0) {
                            Actor.setDating()
                            Actor.attractionToPlayer += 10
                            narrative(`<Actor.name> and I are now dating. Our relationship has become a whole lot more than professional.`)
                        } else {
                            narrative(`<Actor.name> seems heartbroken by my rejection. Maybe I should stop sleeping with <Actor.him_or_her>, otherwise I would just be exploiting <Actor.his_or_her> feeling for my pleasure.`)
                        }
                    }
                }
            } else {
                Actor.attractionToPlayer -= 5
            }
        } else {
            narrative(`<Actor.name> has recently <Actor.he_or_she> really upped <Actor.his_or_her> flirting game towards me and couldn't make it much clearer that if I want to sleep with <Actor.him_or_her>, I could. I can't tell if <Actor.he_or_she> is genuinely interested in me as a person or is just trying to sleep with <Actor.his_or_her> boss for some career benefits.`)
            option([
                {text: `Take my chance to fuck <Actor.name>`},
                {text: `Keep things professional`},
            ])
            if (0) {
                narrative(`I responded to <Actor.name>'s flirting in kind. As if <Actor.he_or_she> has been waiting for the opportunity for a while, <Actor.He_or_she> took no hesitation and invited me back to <Actor.his_or_her> place after work.`)
                scene.setBackground("home")
                narrative(`And I happily obliged ...`)
                scene.sex(Player, Actor)
                narrative(`To my surprise, <Actor.name> didn't ask for anything work-related after sex. Maybe that will come later ... Or maybe I'm reading too much into this and <Actor.name> is simply attracted to me ...`)
            } else {
                Actor.attractionToPlayer -= 5
            }
        }


    })
    scene.timeout(150, "perverted_subor")
})
module.exports = scene