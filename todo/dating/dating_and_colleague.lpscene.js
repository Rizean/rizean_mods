// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_and_colleague.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_and_colleague'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    let Colleague = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        Colleague = scene.getSpecific("Colleague")
        $IF(Colleague.isContactExchanged() && Colleague.attractionToPlayer > 20 && Dating.attractionToPlayer > 40)
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && !Player.openRelationship())
    })


    scene.start(() => {
        Dating.dress()
        Colleague.dress()


        Dating.show(2)
        Colleague.show(3)


        narrative(`<Dating.name> and my colleague <Colleague.name> clearly don't like each other. <Dating.name> has not stopped accusing <Colleague.name> of harboring romantic intention on me, while <Colleague.name> thinks an intelligent <Player.man_or_woman> like me could do better than <Dating.name>.`)
        option([
            {text: `Spend more time with <Dating.name>, my <Dating.boyfriend_or_girlfriend>`},
            {text: `Get even closer to <Colleague.name> at work`},
            {text: `Try to mediate`},
        ])
        if (0) {
            narrative(`I decided to be on <Dating.name>'s side on this and spent more time with <Dating.him_or_her>. <Dating.He_or_She> is my <Dating.boyfriend_or_girlfriend> after all! Of course, this also sent a message to <Colleague.name>.`)
            Dating.attractionToPlayer += random(0, 5)
            Colleague.attractionToPlayer -= random(0, 5)
        } else if (1) {
            narrative(`I decided to be on <Colleague.name>'s side on this and spent more time with <Colleague.him_or_her> at work. Of course, my blatant betrayal clearly upset <Dating.name>.`)
            Dating.attractionToPlayer -= random(0, 5)
            Colleague.attractionToPlayer += random(0, 5)
        } else {
            narrative(`I'd rather not have to choose. I tried instead to find a resolution to their conflict.`)
            if (random(0, 100) < Player.interpersonal) {
                narrative(`My effort worked out, their relationship has improved somewhat. They still aren't thrilled to see each other but at least they have stopped going at each other all the time.`)
                Dating.attractionToPlayer += random(0, 2)
                Colleague.attractionToPlayer += random(0, 2)
            } else {
                narrative(`My effort failed miserably. Not only did their relationship not get any better, they were both annoyed that I tried to make them friends and refused to pick a side.`)
                Dating.attractionToPlayer -= random(0, 5)
                Colleague.attractionToPlayer -= random(0, 5)
            }
        }


        scene.timeout(500, "dating_and_colleague")
    })
})
module.exports = scene