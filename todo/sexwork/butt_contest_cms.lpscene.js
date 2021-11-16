// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\butt_contest_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'butt_contest_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["brothel", " brothel:business"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(!Player.isFemale())
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Actor2 = scene.generatePersonTemporary([])
        let Reward = Actor
        Actor = scene.generatePersonTemporary([])
        while (Actor.isMale()) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor2 = scene.generatePersonTemporary([])
        while (Actor2.isMale()) {
            Actor2 = scene.generatePersonTemporary([])
        }
        narrative(`I came across two prostitutes arguing ..`)
        Actor.dress()
        Actor.show()
        Actor2.dress()
        Actor2.show()
        Actor.dialogue(`I have a tigher asshole!`)
        Actor2.dialogue(`You wish! All my Johns say mine is the tighest!`)
        Actor.dialogue(`Maybe <Player.name> can give each of us a test run and pick a winner?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            Player.dialogue(`It will be my pleasure to be the judge.`)
            scene.filter("Anal")
            narrative(`Let's try <Actor.name>'s ass first.`)
            scene.sex(Player, Actor)
            narrative(`That was pretty tight. But is <Actor2.name>'s even tighter? Only one way to find out.`)
            scene.sex(Player, Actor2)
            Actor2.dialogue(`So what do you say? Whose ass was tighter?`)
            option([
                {text: `<Actor.name>'s`},
                {text: `<Actor2.name>'s`},
            ])
            if (0) {
                Reward = Actor
            } else {
                Reward = Actor2
            }
            Reward.dialogue(`Yes! I knew it. Here's some money I earned earlier as thanks for your impartial judgment!`)
            Player.money += 200
        }
    })
    scene.timeout(500, "butt_contest_cms")


})
module.exports = scene