// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\team_meeting.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'team_meeting'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, actionDuration} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([8, 12])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.005 * (Player.intelligence * actionDuration))
    })


    scene.start(() => {
        let Boss = scene.getSpecific("Boss")
        scene.setBackground("Work")
        Boss = scene.getSpecific("Boss")
        Boss.dress()
        Boss.show(2)


        narrative(`I'm at the weekly team meeting which is boring as usual. There's something on my mind today though: I came up with an idea last night which I thought could improve the team's productivity.`)
        Boss.dialogue(`I think that's everything from the meeting agenda. Before we wrap up, does anyone have any concerns or suggestions to put forward?`, `Happy`)
        option([
            {text: `Stay quiet`},
            {text: `Propose my idea`, condition: Player.interpersonal > 10},
        ])
        if (0) {
            narrative(`I decided to not put forward my idea.`)
        } else {
            Player.dialogue(`(Presented the idea)`, `Excited`)
            if (Player.interpersonal < random(0, 100)) {
                Boss.dialogue(`Sorry, but I don't quite get what you're getting at ...`, `Irritated`)
                narrative(`I blew it, the idea itself might have been good but due to nerves, my presentation of it was barely comprehensible and the team was too confused about the whole thing to really consider its merits.`)
                Player.jobperformance -= random(0, 1)
            } else if (Player.intelligence < random(0, 100) || Boss.rapportwithplayer < 0) {
                Boss.dialogue(`I understand what you're suggesting ... but I'm afraid my experience in this business suggests that it would never work.`, `Irritated`)
                narrative(`My suggestion was rejected outright. Maybe the boss is right - maybe it's just a bad idea that I have become too obsessed with.`)
                Player.jobperformance -= random(0, 1)
            } else {
                Boss.dialogue(`That does sound like a well-considered plan. Worth a try in my book.`, `Happy`)
                narrative(`With that, <Boss.name> consults with the rest of the team, before deciding to go ahead with my idea. This contribution from me will surely not go unnoticed in the next performance review!`)
                Player.jobperformance += random(0, 3)
            }
        }


    })
    scene.timeout(350, "team_meeting")
})
module.exports = scene