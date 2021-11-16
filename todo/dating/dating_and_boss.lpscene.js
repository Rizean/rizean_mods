// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_and_boss.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_and_boss'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    let Boss = scene.getSpecific("Boss")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        Boss = scene.getSpecific("Boss")
        $IF(Boss.isContactExchanged() && Boss.attractionToPlayer > 20 && Dating.attractionToPlayer > 40)
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && !Player.openRelationship())
    })


    scene.start(() => {
        Dating.dress()
        Boss.dress()


        Dating.show(2)
        Boss.show(3)


        narrative(`<Dating.name> and my boss <Boss.name> clearly don't like each other. <Dating.name> has not stopped accusing <Boss.name> of harboring romantic intention on me, while <Boss.name> thinks my relationship with <Dating.name> is having a negative impact on my work performance.`)
        option([
            {text: `Spend more time with <Dating.name>, my <Dating.boyfriend_or_girlfriend>`},
            {text: `Spend more time at work`},
            {text: `Try to mediate`},
        ])
        if (0) {
            narrative(`I decided to be on <Dating.name>'s side on this and spent more time with <Dating.him_or_her>. <Dating.He_or_She> is my <Dating.boyfriend_or_girlfriend> after all! Of course, this also sent a message to <Boss.name>.`)
            Dating.attractionToPlayer += random(0, 5)
            Boss.attractionToPlayer -= random(0, 5)
        } else if (1) {
            narrative(`I decided to be on <Boss.name>'s side on this and spent more time at work. Of course, my blatant betrayal clearly upset <Dating.name>.`)
            Dating.attractionToPlayer -= random(0, 5)
            Boss.attractionToPlayer += random(0, 5)
            Player.jobperformance += random(0, 2)
        } else {
            narrative(`I'd rather not have to choose. I tried instead to find a resolution to their conflict.`)
            if (random(0, 100) < Player.interpersonal) {
                narrative(`My effort worked out, their relationship has improved somewhat. They still aren't thrilled to see each other but at least they have stopped going at each other all the time.`)
                Dating.attractionToPlayer += random(0, 2)
                Boss.attractionToPlayer += random(0, 2)
            } else {
                narrative(`My effort failed miserably. Not only did their relationship not get any better, they were both annoyed that I tried to make them friends and refused to pick a side.`)
                Dating.attractionToPlayer -= random(0, 5)
                Boss.attractionToPlayer -= random(0, 5)
            }
        }


        scene.timeout(500, "dating_and_boss")
    })


})
module.exports = scene