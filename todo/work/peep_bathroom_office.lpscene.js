// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\peep_bathroom_office.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'peep_bathroom_office'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["go_to_the_bathroom"])
    scene.where(["work"])
    scene.when([0, 24])
    let Guy = scene.getSpecific("Colleague")
    let Girl = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Guy = scene.getSpecific("Colleague")
        Girl = scene.getSpecific("Colleague")
        $IF(Guy.isInterestedIn(Girl) && Girl.isInterestedIn(Guy) && Guy.perversion > 50 && Girl.perversion > 50)
    })
    scene.other(($IF) => {
        $IF()
    })


    scene.start(() => {
        scene.setBackground("shower")
        narrative(`I was about to step into my cubicle at the office bathroom when I noticed some moaning from the cubicle next to mine ... Some office couple clearly couldn't wait until they get to a hotel or something and even risk getting fired by doing it at work.`)
        option([
            {text: `Ignore`},
            {text: `Peep`, condition: Player.perversion > 20},
        ])
        if (0) {
            narrative(`There's nothing to see here. I 'did the business' as fast as I could and got the hell out of the bathroom. The couple were too busy fucking to ever notice me coming in and out.`)
        } else {
            Player.perversion += random(0, 0.5)
            narrative(`Live pornography? Hell yeah, sign me up!`)
            Player.karma -= 1
            narrative(`I stood up on top of the toilet seat cover and started peeping at them.`)
            narrative(`Turns out it's my colleagues <Guy.name> and <Girl.name>`)
            scene.sex(Guy, Girl)
            Player.arousal += random(0, 30)
            Guy.show(2)
            Girl.show(3)
            Player.show(0)
            narrative(`That was hot. But it looks like they're already ready for another round ...`)
            option([
                {text: `Offer to join them`},
                {text: `Enough`},
            ])
            if (0) {
                Player.dialogue(`Looks like you guys are having some fun there? Mind if I join?`, `Flirty`)
                if (random(30, 100) < Guy.perversion || random(30, 100) < Guy.attractionToPlayer) {
                    Guy.dialogue(`Come on and join us then, what are you waiting for?`, `Flirty`)
                    scene.sex(Guy, Girl, Player)
                    Player.perversion += random(0, 1)
                } else {
                    Guy.dialogue(`What the fuck are you doing here, peeping Tom? Get out!`, `Angry`)
                }
            } else {
                narrative(`I should get out of here before I get caught.`)
            }
        }


    })
    scene.timeout(500, "peep_bathroom_office")
})
module.exports = scene