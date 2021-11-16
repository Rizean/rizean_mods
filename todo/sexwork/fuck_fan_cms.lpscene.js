// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\fuck_fan_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'fuck_fan_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([8, 18])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(50, 100) < Player.pornfame)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Actor2 = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        Actor2 = scene.generatePersonTemporary([])
        Actor.show()
        Actor2.show()
        narrative(`By chance, I was approached by a couple. One of them is a huge fan of me as a pornstar ...`)
        Actor.dialogue(`My god, I can't believe I finally meet you my <Player.king_or_goddess> ... I have fantasized about this moment since the first time I saw you in a video ...`)
        narrative(`Wow, this <Actor.guy_or_girl> is a bit cringey ... almost creepy in <Actor.his_or_her> adoration of me ...`)
        narrative(`And <Actor.he_or_she> is saying all of this in front of <Actor2.his_or_her> <Actor2.boyfriend_or_girlfriend> too, who doesn't seem too bothered.`)
        Actor.dialogue(`Honestly, I would give away all my money just to spend one night with you ...`)
        narrative(`Okay, this is going too far ... or is it?`)
        option([
            {text: `Just sign an autograph and leave`},
            {text: `Fuck <Actor.him_or_her>`},
            {text: `I'm more interested in <Actor.his_or_her> <Actor2.boyfriend_or_girlfriend> ...`},
        ])
        if (0) {
            Player.dialogue(`Sorry, I don't do escorts ...`)
        } else if (1) {
            Player.dialogue(`Alright ... since you're such a big fan ...`)
            Actor.dialogue(`Oh my god ... I can't believe this is happening ...`)
            Player.money += 2000
            scene.setBackground("home")
            scene.sex(Actor, Player)
        } else {
            Player.dialogue(`Don't care much for the money ... but wouldn't mind spending some time with your lovely <Actor2.boyfriend_or_girlfriend> here.`)
            Player.dialogue(`You can watch of course ... I'm sure you enjoy watching, don't you?`)
            narrative(`The <Actor2.boyfriend_or_girlfriend> was happy to go along to fulfil the fan's fantasy ...`)
            scene.setBackground("home")
            scene.sex(Player, Actor2)
        }
    })
    scene.timeout(1000, "fuck_fan_cms")
})
module.exports = scene