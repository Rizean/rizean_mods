// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_pornaddiction.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_pornaddiction'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.perversion > random(50, 100))
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && random(0, 1000) < Player.intelligence)
    })


    scene.start(() => {


        narrative(`By accident, I came across <Dating.name>'s browser history, which was full of porn sites! In fact, I'm pretty sure watching porn is all <Dating.he_or_she> ever does when I'm not around. What should I do about this?`)
        option([
            {text: `Nothing`},
            {text: `Tell <Dating.him_or_her> off`},
            {text: `Encourage <Dating.him_or_her> to seek professional help`},
        ])
        if (0) {
            narrative(`What's the big deal? Who doesn't watch porn from time to time? In fact, I probably should take note of what <Dating.he_or_she> is into so that we can have more fun in bed!`)
            Player.perversion += random(0, 0.5)
        } else if (1) {
            narrative(`I decided to take the moral high ground and be quite judgemental to <Dating.him_or_her> about his porn habits. I hope that being embarrassed would stop <Dating.him_or_her> from watching so much porn all the time.`)
            Dating.attractionToPlayer -= random(0, 2)
        } else {
            narrative(`It's clear <Dating.name> has a bad porn addiction. <Dating.He_or_She> needs professional help!`)
            Dating.dress()
            Dating.show(2)
            Dating.dialogue(`Okay baby, I'm willing to give counseling a try.`, `Sad`)
            narrative(`After a few sessions, <Dating.name>'s addiction seems to have reduced a bit and <Dating.he_or_she> thanked me for encouraging <Dating.him_or_her> to seek help in the first place.`)
            Player.karma += 2.5
            Dating.perversion -= random(0, 2)
            Dating.attractionToPlayer += random(0, 2)
        }


        scene.timeout(200, "dating_pornaddiction")
    })
})
module.exports = scene