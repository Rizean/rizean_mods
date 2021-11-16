// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\pc_slave_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'pc_slave_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["sleep"])
    scene.where(["home"])
    scene.when([22, 4])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(50, 100) < Player.masochist && random(0, 100) < 1 && (Player.isFemale() || Player.isTrans()))
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Napped = true
        let count = 0
        Actor = scene.generatePersonTemporary([])
        while (!Actor.isMale()) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dressUniform("Crime")
        Actor.show()
        Actor.dialogue(`Go with me! Or you will die!`)
        narrative(`Oh no, I'm getting kidnapped by a stranger!`)
        option([
            {text: `Resist`},
            {text: `Give up`},
        ])
        if (0) {
            Player.dialogue(`Help! Help!`, `Crying`)
            if (Player.martial < Actor.martial) {
                narrative(`My resistance was futile unfortunately and soon the kidnapper knocked me out.`)
                Napped = true
            } else {
                narrative(`The kidnapper was in for a surprise, I managed to break free of him and got away. The cops took him away soon after.`)
                Napped = false
            }
        } else {
            narrative(`I don't want to get hurt. Let's just do whatever <Actor.he_or_she> wants me to do.`)
            Napped = true
        }


        if (Napped) {
            scene.setBackground("street")
            narrative(`Pretty soon, I was taken to an abandoned construction site in the middle of nowhere. Looks like it's the kidnapper's lair.`)
            count = 0
            while (count > 0 && count < 10 && random(0, 100) < 15) {
                narrative(`Another day under hostage passed ...`)
                Actor.dialogue(`Wake up. It's time to fuck, sex slave!`, `Evil`)
                option([
                    {text: `Resist`},
                    {text: `Give in and satisfy <Actor.him_or_her> eagerly`},
                ])
                if (0) {
                    scene.filter("Aggressive")
                    scene.talkNonConsensual()
                }
                scene.sexNoAffair(Actor, Player)
                if (random(0, 100) < 15) {
                    Actor.dialogue(`You're my breeding slave. I'd better get pregnant soon or I'll deem you useless and kill you!`)
                    Player.impregnate(Actor)
                }
                scene.passTime(24, 24)
                count += 1
            }
            narrative(`There's loud siren outside! Police sirens!`)
            narrative(`Freeze!`)
            Actor.animate("fightlost")
            narrative(`I saw my kidnapper raise <Actor.his_or_her> hand in the air surrendering to the cops`)
            narrative(`I'm finally saved, but not before enduring the horror under the hands of my kidnapper.`)
        }
    })
    scene.timeout(2000, "pc_slave_cms")
})
module.exports = scene