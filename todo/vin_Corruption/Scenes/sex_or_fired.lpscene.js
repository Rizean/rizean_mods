// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\sex_or_fired.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'sex_or_fired'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([8, 21])
    let Actor = scene.getSpecific("Boss")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Boss")
        $IF(Actor.isInterestedIn(Player) && (Actor.perversion > 70 || Actor.attractionToPlayer > 40 || Actor.hadSex()) && Actor.masochist < 0)
    })
    scene.other(($IF) => {
        $IF(Player.jobperformance < 20)
    })


    scene.start(() => {
        Actor.dress()
        Actor.show()
        narrative(`I was called into the boss's office ... this can't be good ...`)
        Player.moveToPerson(Actor)
        Actor.dialogue(`I'll be brief: your recent job  performance has been subpar and I'm seriously considering firing you ...`)
        Actor.dialogue(`Fortunately for you, I haven't had much sex recently and you're pleasing enough to my eyes to do a job in taking care of that. So, I might consider giving you another chance if you give me some pleasure ...`)
        option([
            {text: `Fuck my boss to save my job`},
            {text: `Get fired`},
        ])
        if (0) {
            Player.dialogue(`Okay ... I really need this job ...`)
            Player.perversion += 1
            Player.jobperformance += 10
            scene.sex(Actor, Player)
        } else {
            Player.perversion -= 1
            Player.dialogue(`No way, this is sexual harassment ...`)
            Actor.dialogue(`Then you're fired!`)
            Player.loseJob()
            narrative(`Oh well ... so that was it. I should look for another job. Maybe office work isn't for me. There must be other ways to make money in this city.`)
        }
    })
    scene.timeout(300, "sex_or_fired")
})
module.exports = scene