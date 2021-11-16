// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\consequences\escape_from_prison.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'escape_from_prison'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        narrative(`Am I sure I want to attempt a prison break?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`My preparations are complete. I'm ready. Just waiting for the right opportunity, it would be suicide attempting a Hollywood prison break.`)
            scene.setBackground("street")
            narrative(`I and a few other inmates were transported out of the prison's guards for some hard labour. This is the perfect opportunity. Today is the day I earn my freedom back.`)
            option([
                {text: `Sneak away`},
            ])
            Player.animate("sneak")
            narrative(`I took advantage of a careless moment of the guards to simply sneak away from the labour site.`)
            scene.sneakGame()
            if (random(30, 1000) < Player.sneak) {
                narrative(`Just a bit more and I'll be out of their sights.`)
                narrative(`That's it. I'm out of sight. Let's get the hell out of here.`)
                narrative(`My prison escape was successful. I'm a free <Player.man_or_woman> again!`)
                Player.endPrison()
            } else {
                narrative(`'<Player.name_last> is escaping! Stop <Player.him_or_her>!'`)
                Player.animate()
                narrative(`Oh no, one of the prison guards noticed me and shouted out for help. One of them even pulled out his gun.`)
                option([
                    {text: `Run!`},
                    {text: `Surrender`},
                ])
                if (0) {
                    Player.dialogue(`You won't catch me alive!`, `Furious`)
                    narrative(`I switched on my gear and ran as fast as humanly possible.`)
                    if (random(30, 500) < Player.fitness) {
                        narrative(`And I did it! The prison guards were long left behind. Usain Bolt would be proud of that run!`)
                        narrative(`My prison escape was close, but ultimately successful. I'm a free <Player.man_or_woman> again!`)
                        Player.endPrison()
                    } else {
                        narrative(`Pow!`)
                        Player.hide()
                        narrative(`A guard fired his gun ... it was a perfect shot, right through my chest.`)
                        scene.followUp("death")
                    }
                } else {
                    Player.animate("fightlost")
                    Player.dialogue(`Please, don't shoot. I surrender!`, `Sad`)
                    narrative(`My prison escape was a complete failure. All it did was to add some time to my sentence. Oh well, at least I keep myself alive to try another day.`)
                    Player.sentence *= 1.15
                }
            }
        }
    })
})
module.exports = scene