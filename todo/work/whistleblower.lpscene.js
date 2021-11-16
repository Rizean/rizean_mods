// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\whistleblower.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'whistleblower'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([19, 23])
    let Boss = scene.getSpecific("Boss")
    let Colleague = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Boss = scene.getSpecific("Boss")
        Colleague = scene.getSpecific("Colleague")
        $IF(Boss.perversion > 60 && Boss.isInterestedIn(Colleague) && !Boss.isDating())
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.2 * Player.sneak)
    })


    scene.start(() => {
        scene.setBackground("work")


        narrative(`It's already late in the evening, but the light in my boss's office is still on. This is rather unusual as <Boss.he_or_she> usually goes home at five. Should I sneak around to check out what's going on?`)
        option([
            {text: `Peep on my boss`},
            {text: `I'd rather not`},
        ])
        if (0) {
            Boss.dress()
            Boss.show(2)
            Colleague.dress()
            Colleague.show(3)
            Colleague.dialogue(`Alright, if that is what it takes to get that promotion, then I'll do it ...`, `Sad`)
            Boss.dialogue(`Let's get you undressed then ...`, `Flirty`)
            Player.hide()
            scene.sex(Boss, Colleague)


            Boss.hide()
            Colleague.hide()
            Player.show(0)
            narrative(`What a scandalous SCENE! <Colleague.name> is sleeping with my boss to gain a promotion. What should I do about this information?`)
            option([
                {text: `Report to HR`},
                {text: `Leave them be`},
            ])
            if (0) {
                narrative(`I wrote a detailed report of what I saw and sent it to HR.`)
                Boss.rapportwithplayer -= random(0, 100)
                Colleague.rapportwithplayer -= random(0, 100)
                if (Player.interpersonal > random(0, 100)) {
                    narrative(`As a result of my whistleblowing, both my boss and <Colleague.name> were fired, while I was praised by higher-ups for my courageous act!`)
                    Colleague.removeColleague()
                    Boss = scene.generatePerson()


                    if (random(0, 1) < 0.7) {
                        scene.$random(() => {
                            Boss.blendPreset("workaholic")
                            Boss.blendPreset("workhard_playhard")
                        })
                    }


                    if (random(0, 1) < 0.95) {
                        scene.$random(() => {
                            Boss.blendPreset("fourties")
                            Boss.blendPreset("fifties")
                            Boss.blendPreset("sixties")
                        })
                    }


                    Boss.randomizeFace()
                    Boss.randomizeHairs()


                    Boss.setBoss()
                    Player.jobperformance += random(0, 5)
                } else {
                    narrative(`HR conducted an investigation after I blew the whistle but found no evidence to prove my accusation! Worse still, my boss found out about the identity of me as the whistleblower and now seems to have a personal vendetta against me.`)
                    Player.jobperformance -= random(0, 10)
                }
            } else {
                narrative(`My boss and <Colleague.name> haven't treated me too badly. I shouldn't do something to jeopardize their careers.`)
            }
        } else {
            narrative(`No, I shouldn't do that or risk pissing <Boss.him_or_her> off.`)
        }


    })
    scene.timeout(2000, "whistleblower")


})
module.exports = scene