// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\crime\invade_a_home.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'invade_a_home'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        scene.setBackground("street")
        narrative(`Should I attempt a home invasion?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        narrative(`That house looks like it's got some valuables inside.`)
        scene.sneakGame()
        if (random(0, 100) < Player.sneak) {
            scene.setBackground("home")
            narrative(`I found a way into the house without getting detected.`)
            Player.karma -= 1
            Actor = scene.generatePersonTemporary([])
            Actor.show(2)
            Actor.closeEyes("true")
            narrative(`The owner is fast asleep. What a shock it will be for <Actor.him_or_her> to wake up to a cleared-out home tomorrow!`)
            option([
                {text: `Grab some valuables quickly and run`},
                {text: `Try to take everything`},
                {text: `The home owner is kinda hot ...`, condition: scene.isModEnabled("vin_NonConsensual")},
            ])
            if (0) {
                narrative(`I grabbed any valuables in sight as quickly as possible and got out of there as soon as I can. Can't risk the home owner waking up.`)
                Player.money += random(100, 250)
            } else if (1) {
                scene.sneakGame()
                if (random(0, 150) < Player.sneak) {
                    narrative(`I took my time to clear out the house of absolutely everything remotely valuable. It should be worth the effort ... and the extra risk.`)
                    Player.money += random(250, 500)
                } else {
                    Actor.closeEyes("false")
                    Actor.dialogue(`What? Who are you? Help!!!! Thief!`, `Surprised`)
                    option([
                        {text: `Run`},
                    ])
                    if (random(0, 100) < Player.fitness) {
                        narrative(`Thankfully, I made a safe escape before the cops arrived. That was close, phew ...`)
                    } else {
                        narrative(`I tried to run, but the cops arrived too quickly and arrested me.`)
                        Player.sentence = 730
                        scene.followUp("imprisoned")
                    }
                }
            } else {
                narrative(`I couldn't help but notice how hot the home owner is ... Maybe it's my lucky day.`)
                option([
                    {text: `Rape <Actor.him_or_her>`},
                    {text: `Just grab some valuables quickly`},
                ])
                if (0) {
                    Player.karma -= 10
                    scene.filter("Aggressive")
                    scene.talkNonConsensual()
                    scene.sexNoAffair(Player, Actor)
                    Actor.hide()
                    scene.sneakGame()
                    if (random(0, 150) < Player.sneak) {
                        narrative(`That was something else. Enjoy waking up tomorrow with a belly full of cum, whore!`)
                        Player.money += random(100, 250)
                    } else {
                        Actor.show(2)
                        Actor.closeEyes("false")
                        Actor.dialogue(`What? Who are you? Help!!!! Rapist!`, `Surprised`)
                        option([
                            {text: `Run`},
                        ])
                        if (random(0, 100) < Player.fitness) {
                            narrative(`Thankfully, I made a safe escape before the cops arrived. That was close, phew ...`)
                        } else {
                            narrative(`I tried to run, but the cops arrived too quickly and arrested me.`)
                            Player.sentence = 2920
                            scene.followUp("imprisoned")
                        }
                    }
                } else {
                    Player.money += random(100, 250)
                }
            }
        } else {
            narrative(`Unfortunately for me, despite my best efforts, I couldn't find a way into the house without alerting the owners, who promptly called the cops.`)
            narrative(`I couldn't risk getting caught. Let's get out of here before the cops arrive.`)
        }


    })
})
module.exports = scene