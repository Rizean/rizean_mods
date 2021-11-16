// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\coffee_break_spill.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'coffee_break_spill'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Colleague")
        $IF(Player.isInterestedIn(Actor) && Actor.isInterestedIn(Player))
    })
    scene.other("none")


    scene.start(() => {
        narrative(`All this work is driving me crazy. Let's take a little coffee break ...`)
        Player.animate("drinktea")
        Actor.dress()
        Actor.show()
        Actor.moveToPersonStand(Player)
        narrative(`Looks like my colleague <Actor.name> has the same idea and and is going for a coffee as well.`)
        Actor.animate("drinktea")
        narrative(`Since we're both there, we started chatting while having our coffee.`)
        if (random(10, 50) < Actor.attractionToPlayer && random(40, 70) < Actor.perversion) {
            Actor.dialogue(`Oh my god! I'm so sorry!`)
            narrative(`Oh no, my clumsy colleague spilled coffee on me. It wasn't too hot to burn me fortunately, but it's a mess nevertheless`)
            Actor.dialogue(`Oh no, the coffee is spilling down towards your crotch. Quick, let me help you clean`)
            if (Player.isMale()) {
                Player.animatePair(Actor, Player, "Blowjob")
            } else {
                Player.animatePair(Actor, Player, "LickPussy")
            }
            narrative(`I can't believe <Actor.name> just licked the coffee clean from my crotch right in the office pantry. Did <Actor.he_or_she> spill coffee on me on purpose?`)
            option([
                {text: `Say nothing`},
                {text: `Get angry`},
                {text: `Invite <Actor.him_or_her> to the bathroom for more 'thorough cleaning'`},
            ])
            if (1) {
                Player.dialogue(`How dare you touch me like that? I could get you fired by reporting this to HR, you know that?`)
                Actor.attractionToPlayer -= 5
            } else if (2) {
                Player.dialogue(`If you wanted to play with me, you could have just said so. You didn't need to ruin my work clothes like this.`)
                Player.dialogue(`Now, follow me to the bathroom and make up for this!`)
                scene.setBackground("shower")
                scene.sex(Actor, Player)
            }
        } else {
            narrative(`The conversation is civil enough. Maybe I should spice things up by 'accidentally' spilling coffee on my poor colleague, only to then offer to lick it off <Actor.his_or_her> crotch?`)
            option([
                {text: `Spill coffee on <Actor.name>`},
                {text: `No way`},
            ])
            if (0) {
                Player.dialogue(`Oh my god! I'm so sorry! I'm so clumsy!`)
                Player.dialogue(`Oh no, the coffee is spilling down towards your crotch. Quick, let me help you clean`)
                if (Actor.isMale()) {
                    Player.animatePair(Player, Actor, "Blowjob")
                } else {
                    Player.animatePair(Player, Actor, "LickPussy")
                }
                narrative(`I proceeded to lick the coffee off <Actor.name>'s crotch right there in the office pantry.`)
                if (random(5, 30) < Actor.attractionToPlayer && random(20, 40) < Actor.perversion) {
                    Actor.dialogue(`If you wanted to play with me, you could have just said so. You didn't need to ruin my work clothes like this.`)
                    Actor.dialogue(`Now, follow me to the bathroom and make up for this!`)
                    scene.setBackground("shower")
                    scene.sex(Player, Actor)
                } else {
                    Actor.dialogue(`How dare you touch me like that? I could get you fired by reporting this to HR, you know that?`)
                    Actor.attractionToPlayer -= 5
                }
            }
        }


    })
    scene.timeout(300, "coffee_break_spill")
})
module.exports = scene