// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\rival_colleague.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'rival_colleague'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([8, 18])
    let Colleague = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague = scene.getSpecific("Colleague")
        $IF(Colleague.rapportwithplayer < -5)
    })
    scene.other(($IF) => {
        $IF(Player.interpersonal < random(0, 100) * random(0, 1) * random(0, 1))
    })


    scene.start(() => {
        scene.setBackground("work")
        Colleague.dress()
        Colleague.show(2)


        narrative(`It's no secret that <Colleague.name> doesn't like me very much. Should I do something about it?`)
        option([
            {text: `Do nothing`},
            {text: `Talk it out`},
            {text: `Sabotage <Colleague.his_or_her> work`},
        ])
        if (0) {
            narrative(`<Colleague.name> has every rights to hate me, just like I have the right to not give a shit.`)
            Colleague.rapportwithplayer -= random(0, 2)
        } else if (1) {
            narrative(`It's not good to have a bad relationship with someone at work. It's best if I can sit down and talk to <Colleague.him_or_her> about it maturely.`)
            if (Player.interpersonal > random(0, 100)) {
                narrative(`My reconciliation efforts paid off. Our relationship has improved somewhat since that chat.`)
                Colleague.rapportwithplayer += random(0, 5)
            } else {
                narrative(`Our chat led nowhere though and we remained on bad terms.`)
            }
        } else {
            narrative(`If you dare to cross me, you're going to suffer!`)
            narrative(`Whenever I can, I sneakily sabotaged <Colleague.his_or_her> work, making <Colleague.him_or_her> suffer from one setback and embarrassment after another.`)
            Colleague.rapportwithplayer -= random(0, 10)
            if (random(0, 100) < 0.05 * Player.intelligence) {
                narrative(`Incredibly, one of my sabotages worked better than I could ever dream of. <Colleague.name> screwed up a big project causing the company lots of money. As a result, <Colleague.He_or_She> was fired! Good riddance.`)
                Colleague.removeColleague()
            } else if (Player.intelligence < random(0, 100) * random(0, 1)) {
                narrative(`Unfortunately, my boss caught wind of one of my sabotage attempts and issued me a warning. I'm sure they'll bring this up again in the next performance review.`)
                Player.jobperformance -= random(0, 3)
            }
        }


    })
    scene.timeout(100, "rival_colleague")
})
module.exports = scene