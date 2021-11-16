// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\affair_with_boss.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'affair_with_boss'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([18, 22])
    let Boss = scene.getSpecific("Boss")
    scene.who(($IF) => {
        Boss = scene.getSpecific("Boss")
        $IF(Boss.perversion + Boss.attractionToPlayer > random(0, 100) && !Boss.isDating())
    })
    scene.other(($IF) => {
        $IF(Player.perversion > 20 && random(0, 100) < 0.1 * Player.perversion)
    })


    scene.start(() => {
        let SleepingWithBoss = scene.getGlobal(`SleepingWithBoss`)
        scene.setBackground("work")
        Boss.dress()
        Boss.show(2)
        SleepingWithBoss = scene.getGlobal(`SleepingWithBoss`)


        if (SleepingWithBoss == 0) {
            narrative(`It's obvious from the way <Boss.name> looks at me that <Boss.he_or_she> fancies me quite a bit. I've heard tales about young ambitious <Player.guy_or_girl> sleeping with <Player.his_or_her> boss to gain a career advantage. But is this the road that I want to go down?`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (0) {
                Player.perversion += random(0, 2)
                Player.karma -= 5
                narrative(`It's a competitive job market, I'll do whatever it takes to get ahead.`)
                narrative(`Late that evening, after everyone else has gone home ...`)
                Boss.dialogue(`You have no idea how much I have been waiting for you to offer me that since the day you started here!`, `Flirty`)
                Player.dialogue(`I'm glad to be of service ...`, `Flirty`)
                Player.jobperformance += random(0, 30)
                scene.sex(Boss, Player)
                Boss.show(2)
                Boss.dialogue(`That was amazing, babe. We must do it again soon, but we must wait until everyone else has left.`, `Flirty`)
                scene.setGlobal(`SleepingWithBoss`, `1`)
            } else {
                narrative(`No, I will achieve my ambitions based on merits alone.`)
                Boss.attractionToPlayer -= random(0, 20)
                scene.timeout(500, "affair_with_boss")
            }
        } else {
            narrative(`My boss is calling for me. It's very late in the evening and we're the the only two left in the office. It's obvious again what <Boss.he_or_she> wants tonight ...`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (0) {
                Player.karma -= 1
                narrative(`I can't risk jeopardizing my career by breaking our secret arrangement ... Of course, I'll give <Boss.him_or_her> what <Boss.he_or_she> wants again.`)
                Player.perversion += random(0, 0.2)
                Player.jobperformance += random(0, 4)
                scene.sex(Boss, Player)
                Boss.show(2)
                narrative(`You were great, as usual. Keep doing what you've been doing and you'll be promoted in no time!`)
            } else {
                narrative(`I just don't feel like it today. I excused myself out of my indecent duty. The boss was visibly upset.`)
                Player.jobperformance -= random(0, 2)
            }
        }


    })
    scene.timeout(100, "affair_with_boss")
})
module.exports = scene