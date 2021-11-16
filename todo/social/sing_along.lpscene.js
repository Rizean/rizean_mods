// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\social\sing_along.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'sing_along'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -go_to_the_bathroom"])
    scene.where(["nightclub"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 1000) < Player.music)
    })


    scene.start(() => {
        let Actor = scene.generatePerson()
        narrative(`I do consider myself a good singer. The DJ is playing my favorite song, should I sing along and try to impress the crowd a bit?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`Why not? I'm proud of my singing ability and it's time to shine!`)
            if (random(0, 100) < Player.music) {
                narrative(`My effort paid off and the crowd cheered on and showed their appreciation for their local vocal superstar as I became the center of attention.`)
                Player.music += random(0, 0.5)
                Actor = scene.generatePerson()
                Actor.dress()
                Actor.show(2)
                Actor.dialogue(`Wow, you have the voice of an angel. Are you famous?`, `Happy`)
                narrative(`Impressed by my musical talent, <Actor.name> approached me and struck up a conversation. <Actor.He_or_She> seemed okay, should I exchange contacts with <Actor.him_or_her>?`)
                option([
                    {text: `Yes`},
                    {text: `No`},
                ])
                if (0) {
                    narrative(`I exchanged contacts with this new admirer of my voice.`)
                    Player.exchangeContact(Actor)
                } else {
                    narrative(`No way. I literally just met the <Actor.guy_or_girl>.`)
                }
            } else {
                narrative(`My singing ended up simply irritating my fellow club goers.`)
                Player.mood -= random(0, 10)
            }
        } else {
            narrative(`I'd better not show off too much or risk making an idiot of myself.`)
        }


    })
    scene.timeout(1, "sing_along")
})
module.exports = scene