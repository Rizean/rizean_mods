// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\boss_discovers_hourly.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'boss_discovers_hourly'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_hourly"])
    scene.where(["all"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Boss")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Boss")
        $IF(random(0, 70) * random(0, 1) > Player.intelligence && !Actor.hadSex())
    })
    scene.other(($IF) => {
        $IF()
    })


    scene.start(() => {
        let Punished = true
        scene.dressFormal()
        Actor.dress()
        Actor.show()
        Actor.dialogue(`<Player.name>? What are you doing here? Are you ... working here?`)
        Actor.dialogue(`You're not supposed to have a side gig! You broke your employment contract!`)
        Punished = true
        narrative(`Damn it, I was just trying to make some extra income alongside my office job but my rotten luck had my boss walking in on my shift here today.`)
        option([
            {text: `Try to explain`},
            {text: `Calm <Actor.name> down with sex`},
        ])
        if (0) {
            narrative(`I made up some excuses and a sob story about how my financial situation forced me to go against company rules to make some extra income, and that it will never happen again.`)
            if (random(0, 50) < Actor.rapportwithplayer) {
                Punished = false
                Actor.dialogue(`Okay, I'm not insensitive to your situation. Just don't do it again!`)
            } else {
                narrative(`Unfortunately, the boss was having none of it.`)
            }
        } else {
            Actor.dialogue(`Please, don't fire me and just ignore this please. I really need the job at your office. I'll do anything.`)
            if (Actor.isInterestedIn(Player) && (Actor.perversion > 60 || Actor.attractionToPlayer > 35)) {
                Punished = false
                Actor.dialogue(`Fine, then follow me back to my place, now!`)
                scene.setBackground("home")
                scene.sex(Actor, Player)
            } else {
                narrative(`Unfortunately, the boss doesn't seem interested in what I was subtly offering.`)
            }
        }


        if (Punished) {
            Actor.dialogue(`You can be sure that this will be reflected very badly in your next performance review. In fact, I wouldn't be so sure you'll still have the job after that review.`)
            Player.jobperformance -= 50
        }
    })
    scene.timeoutPrecise(1000000, "boss_discovers_hourly")
})
module.exports = scene