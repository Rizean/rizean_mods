// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\naked_call.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'naked_call'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_from_home"])
    scene.where(["all"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Boss")
    scene.who(($IF) => {
        $IF(Actor = scene.getSpecific("Boss"))
    })
    scene.other("none")


    scene.start(() => {
        narrative(`Oh no, I was so distracted by other things while working from home that lost track of the time. It's one minute till the next video conference call.`)
        narrative(`Now where is the invitation link? Here it is.`)
        narrative(`I'm in. Just in time for the call to start`)
        if (Player.isNaked()) {
            scene.dressFormal()
            Actor.dress()
            scene.secondScreen(Actor)
            Actor.show()
            Actor.dialogue(`Welcome everyone to today's video conference call. Today's agenda includes ...`)
            Actor.dialogue(`What the fuck, <Player.name>? Why are you naked?`)
            narrative(`Oh no! In my hurry to log into the conference call in time, I completely forgot to get dressed.`)
            if (Actor.perversion > 50 || Actor.hadSex()) {
                Actor.dialogue(`Well, since you're already nude, I think we might be able to fit some adult entertainment into the agenda.`)
                Actor.dialogue(`Why don't you start playing with yourself? Spice this boring conference call up a bit`)
                option([
                    {text: `Masturbate for everyone to watch`},
                    {text: `I'll just put on some clothes`},
                ])
                if (0) {
                    scene.filter("Solo")
                    scene.sex(Player)
                    Player.perversion += 1
                    Player.jobperformance += 5
                } else {
                    Player.jobperformance -= 5
                }
            } else {
                Actor.dialogue(`This is the most unprofessional behaviour I've ever seen. Rest assured this will be reflected in your next performance review!`)
                Player.jobperformance -= 5
            }
        } else {
            narrative(`The video conference call went according to plans. I have the technology to thank for being able to work from home so effectively.`)
        }
    })
    scene.timeout(200, "naked_call")
})
module.exports = scene