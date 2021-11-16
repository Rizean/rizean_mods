// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\vi_ex_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vi_ex_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("ExDating")
    scene.who(($IF) => {
        Actor = scene.getSpecific("ExDating")
        $IF(random(-100, -50) > Actor.masochist && random(70, 200) < Actor.martial)
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && Player.isAtHome())
    })


    scene.start(() => {
        Actor.dress()
        Actor.show(2)
        Actor.dialogue(`Open the door! Open the fucking door, you <Player.asshole_or_bitch>!`, `Angry`)
        narrative(`Oh no, it's my ex <Actor.name> hammering on at my apartment's door again. <Actor.He_or_She> was a violent and abusive partner - I'm glad I somehow managed to get away from <Actor.him_or_her> in the end.`)
        scene.option([
            {text: `Open the door`, condition: Player.masochist > 0},
            {text: `Hide in my room`, condition: Player.masochist < 50},
        ])
        if (0) {
            Player.masochist += random(0, 2)
            narrative(`I'm an idiot, I know. But something so ... dominant about <Actor.name> never fails to get my heart racing and my brain fucked up and eventually, that alpha dominance gets me to do whatever <Actor.he_or_she> wants. This psycho may not be my <Actor.boyfriend_or_girlfriend> anymore, but <Actor.he_or_she> never lost control of me.`)
            Actor.dialogue(`What took you so fucking long, you whore?`, `Angry`)
            narrative(`I know what's coming now ...`)
            Actor.dialogue(`You deserve a punishment!`, `Angry`)
            narrative(`And just like that, <Actor.he_or_she> grabbed me and threw me into the bed without a care as to whether that might hurt me. <Actor.name> proceeded to brutally rape me right there and then ...`)
            narrative(`Or was it actually rape? I did open the door for him after all ... I must have known what I was getting.`)
            scene.filter("Aggressive")
            scene.talkNonConsensual()
            scene.sex(Actor, Player)
            Actor.show(2)
            Player.mood = 0
        } else {
            narrative(`Maybe I should just stay silent and hide in my room, pretending that I'm not here, until <Actor.he_or_she> gets tired of hammering on the door and leaves.`)
        }
    })
    scene.timeout(500, "vi_ex_rape")
})
module.exports = scene