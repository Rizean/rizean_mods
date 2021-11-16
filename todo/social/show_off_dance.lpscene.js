// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\social\show_off_dance.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'show_off_dance'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["Player.dance"])
    scene.where(["nightclub"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 1000) < Player.dance)
    })


    scene.start(() => {
        let Actor = scene.generatePerson()
        narrative(`I do consider myself a good dancer. The DJ is playing my favorite song, should I try and show off some moves?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`Why not? I'm proud of my dancing ability and it's time to shine!`)
            if (random(0, 100) < Player.dance) {
                narrative(`My effort paid off and the crowd cheered on as I became the center of attention, showing off my best moves on the dance floor.`)
                Player.dance += random(0, 0.5)
                Actor = scene.generatePerson()
                Actor.dress()
                Actor.show(2)
                Actor.dialogue(`Wow, you're a good dancer! I've got to give you that.`, `Happy`)
                narrative(`Impressed by my dancing talent, <Actor.name> approached me and struck up a conversation. <Actor.He_or_She> seemed okay, should I exchange contacts with <Actor.him_or_her>?`)
                option([
                    {text: `Yes`},
                    {text: `No`},
                ])
                if (0) {
                    narrative(`I exchanged contacts with this new admirer of my dance moves.`)
                    Player.exchangeContact(Actor)
                } else {
                    narrative(`No way. I literally just met the <Actor.guy_or_girl>.`)
                }
            } else {
                narrative(`My solo dance moves ended up impressing no-one and just looking a bit silly.`)
                Player.mood -= random(0, 10)
            }
        } else {
            narrative(`I'd better not show off too much or risk making an idiot of myself.`)
        }


    })
    scene.timeout(1, "show_off_dance")
})
module.exports = scene