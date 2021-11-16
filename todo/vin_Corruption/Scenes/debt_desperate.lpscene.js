// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Corruption\Scenes\debt_desperate.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'debt_desperate'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([9, 17])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.money < 300)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        narrative(`I have been living above my means recently and, as a result, ended up with quite a bit of debt.`)
        narrative(`The bank manager just called, trying to arrange a meeting at the bank to come up with a solution for settling my debt.`)
        option([
            {text: `Ignore`},
            {text: `Come and meet with the bank manager`},
        ])
        if (1) {
            scene.setBackground("bank")
            Actor = scene.generatePersonTemporary([])
            Actor.makeInterested(Player)
            Actor.attractionToPlayer = random(30, 50)
            Actor.perversion = random(80, 100)
            scene.dressFormal()
            Actor.dress()
            Actor.show()
            Player.dialogue(`So, based on my current financial situation, what do you think would be my best option?`)
            Actor.dialogue(`I'll be completely frank to you. I have seen this thousands of times before. It never gets better and people would simply get deeper and deeper into debt ...`)
            Actor.dialogue(`What you need is a fresh start, a clean slate, financially ...`)
            Player.dialogue(`What do you mean? You just said most of your past clients ended up further and further into debt, how can I just clear this debt and restart my life?`)
            Actor.dialogue(`You cannot clear the debt yourself ... but for me, it's just a matter of a mouse click ...`)
            Actor.dialogue(`You see ... these past clients, their financial situations were similar to you, but they don't have the same ... assets as you. If you let me use those assets for yours for my own pleasure, I would be quite tempted to clear your debt off the record.`)
            option([
                {text: `Have sex with the bank manager`},
                {text: `Refuse`},
            ])
            if (0) {
                Player.dialogue(`I guess it's not everyday that people as broke as me are given another chance like this ...`)
                scene.sex(Actor, Player)
                narrative(`As promised, the bank manager cleared all the debt from my record. It's a new start for me ...`)
                Player.money = 0
            } else {
                Player.dialogue(`What? No way! I'm not that desperate ...`, `Angry`)
            }
        }
    })
    scene.timeout(300, "debt_desperate")
})
module.exports = scene