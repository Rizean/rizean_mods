// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_at_work.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_at_work'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([8, 19])
    let Actor = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Dating")
        $IF(Actor.isColleague())
    })
    scene.other("none")


    scene.start(() => {
        Actor.dress()
        Actor.show(2)
        Player.jobperformance -= random(0, 2)
        narrative(`Dating someone at work is not all that uncommon but still somewhat taboo. At the very least, a workplace relationship attracts plenty of gossip. I can feel that these gossips are affecting both <Actor.name>'s performance and mine.`)
        narrative(`Perhaps for the sake of each other's career and of our relationship together, one of us should move jobs?`)
        option([
            {text: `Quit my job`},
            {text: `Ask <Actor.name> to quit`},
            {text: `Do nothing`},
        ])
        if (0) {
            narrative(`I'll make the sacrifice and be the one to look for somewhere else to work. It's best for both of us.`)
            Player.loseJob()
            Actor.attractionToPlayer += random(0, 5)
        } else if (1) {
            if (random(50, 200) < Player.interpersonal + Actor.attractionToPlayer) {
                Actor.dialogue(`You're right ... One of us must move on for the sake of our relationship and our careers. And I'm happy to be the one to sacrifice.`, `Sad`)
                Actor.removeColleague()
            } else {
                Actor.dialogue(`What? How comes I'm the one that has to make the sacrifice? You're being very selfish, you know that?`, `Angry`)
                Actor.attractionToPlayer -= random(0, 5)
            }
        } else {
            narrative(`What's the harm in a bit of office gossip? Yes, we're colleagues and yes, we're dating. People don't like it? That's their problem.`)
        }


    })
    scene.timeout(500, "dating_at_work")
})
module.exports = scene