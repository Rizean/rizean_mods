// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\ag_ex_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'ag_ex_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("ExDating")
    scene.who(($IF) => {
        Actor = scene.getSpecific("ExDating")
        $IF(Actor.masochist > 0 && Actor.martial < 50 && random(0, 100) < Player.martial && random(-100, -20) > Player.masochist)
    })
    scene.other("none")


    scene.start(() => {
        Actor.dress()
        Actor.show(2)
        narrative(`I must admit: I'm still not over my ex <Actor.name>. <Actor.He_or_She> is a submissive <Actor.bastard_or_bitch>. Maybe I can pay <Actor.him_or_her> a visit and fuck <Actor.his_or_her> brain out. The whore wouldn't be able to resist opening the door for me.`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            Actor.masochist += random(0, 2)
            Player.dialogue(`Open the door! Open the fucking door, you <Actor.bastard_or_bitch>!`, `Angry`)
            if (random(20, 100) < Actor.masochist) {
                Player.masochist -= random(0, 2)
                narrative(`And just like that, the doors open. I knew it. My dominance never fails to get <Actor.name>'s heart racing and <Actor.his_or_her> brain fucked up and eventually, that alpha dominance gets <Actor.him_or_her> to do whatever I want. I may not be <Actor.his_or_her> <Player.boyfriend_or_girlfriend> anymore, but I never lost control of <Actor.him_or_her>.`)
                Player.karma -= 20
                Player.dialogue(`What took you so fucking long, you whore?`, `Angry`)
                narrative(`She must know what's coming now ...`)
                Player.dialogue(`You deserve a punishment!`, `Angry`)
                narrative(`And just like that, I grabbed <Actor.name> and threw <Actor.him_or_her> into the bed without a care as to whether that might hurt <Actor.him_or_her>. I proceeded to brutally fuck <Actor.him_or_her> right there and then ...`)
                narrative(`<Actor.He_or_She> did open the door for me after all ... Deep inside, <Actor.he_or_she> wanted this!`)
                scene.filter("Aggressive")
                scene.talkNonConsensual()
                scene.sex(Player, Actor)
                Actor.show(2)
            } else {
                narrative(`Damn it, <Actor.name> isn't home or so it seems. Maybe <Actor.he_or_she> is being smart and decides to stay silent and hide in <Actor.his_or_her> room.`)
                narrative(`Could it be possible that my control over <Actor.name> is finally breaking?`)
            }
        } else {
            narrative(`I should just let go.`)
        }
    })
    scene.timeout(500, "ag_ex_rape")
})
module.exports = scene