// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\refer_a_friend.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'refer_a_friend'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([8, 19])
    let Actor = scene.getPerson("true")
    scene.who(($IF) => {
        Actor = scene.getPerson("true")
        $IF(!Actor.isColleague() && !Actor.isBoss() && Actor.rapportwithplayer > 20 && Actor.intelligence > random(50, 100))
    })
    scene.other(($IF) => {
        $IF(random(0, 1000) < Player.jobexperience)
    })


    scene.start(() => {
        Actor.dress()
        narrative(`In an effort to attract talent, my company is asking their current employees to refer people they know to be interviewed for positions. If they turn out to be the successful candidate, the person who introduced them would receive a bonus.`)
        Actor.show(2)
        narrative(`This made me think of <Actor.name> right away, who I knew was smart and unhappy with <Actor.his_or_her> current job.`)
        narrative(`Should I recommend <Actor.name> to my company?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`I decided to go ahead and wrote a letter to recommend <Actor.name> for the company, which earned <Actor.him_or_her> an interview.`)
            Player.karma += 2.5
            narrative(`A few weeks later ...`)
            if (random(0, 100) < Actor.intelligence) {
                narrative(`Great news! <Actor.name> has been successful in the interview and will join my company soon. We are now also colleagues. What's more: I received a small bonus for having recommended a new staff member.`)
                Actor.rapportwithplayer += random(0, 10)
                Actor.attractionToPlayer += random(0, 3)
                Player.money += random(500, 4000)
                Actor.addColleague()
            } else {
                narrative(`Unfortunately, <Actor.name> couldn't quite live up to the company's expectations in the interview and had no choice but to stay at <Actor.his_or_her> current job. This reflected a bit badly on me.`)
                Player.jobperformance -= random(0, 0.5)
            }
        } else {
            narrative(`On second thought, I'm not entirely sure if <Actor.name> is a good fit for this company.`)
        }


    })
    scene.timeout(2000, "refer_a_friend")
})
module.exports = scene