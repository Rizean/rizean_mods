// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\domestic_violence.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'domestic_violence'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["home"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.isDominantSex(Player) && Dating.attractionToPlayer < -5 && Dating.martial > random(65, 100) && Dating.masochist < -50)
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion())
    })


    scene.start(() => {
        Dating.dress()
        Dating.show(2)
        Dating.dialogue(`What did you say, bitch?`, `Furious`)
        narrative(`<Dating.name> has serious anger management issues which make <Dating.him_or_her> an abusive and violent partner. During <Dating.his_or_her> rages, <Dating.he_or_she> would insult and even hit me mercilessly. I really should put an end to this.`)
        option([
            {text: `Bear it`},
            {text: `Leave <Dating.name>`},
        ])
        if (0) {
            narrative(`I don't know if I'm crazy or just stupid, but somehow I keep on accepting the physical and emotional abuses <Dating.name> brings me. I just couldn't get away from this monster.`)
            Player.masochist += random(0, 2)
            Player.mood -= random(0, 100)
            Player.energy -= random(0, 100)
            Player.fitness -= random(0, 1)
            Player.attractiveness -= random(0, 1)
            Player.interpersonal -= random(0, 1)
            Player.intelligence -= random(0, 1)
        } else {
            narrative(`Enough is enough. I don't want <Dating.him_or_her> in jail but I also don't have to put up with this!`)
            if (Player.isPlayerMarried()) {
                Player.dialogue(`I cannot put up with this abusive marriage any longer ...`, `Crying`)
                narrative(`And just like that, I divorced that abusive <Dating.husband_or_wife> of mine ...`)
                Player.mood -= 100
                Player.divorce()
                Player.loseDating()
                if (Player.isDominantSex(Dating) && Player.money > 1000) {
                    narrative(`Unfortunately for me, the court awarded half of my hard-earned fortune to <Dating.name> ... What a disaster of a marriage that was ...`)
                    Player.money -= Player.money * 0.5
                }
            } else {
                narrative(`I ran away from my abusive <Dating.boyfriend_or_girlfriend>, telling <Dating.him_or_her> it was all over.`)
                Player.loseDating()
                Player.mood -= 50
            }
            Player.blockContact(Dating)
        }


        scene.timeout(250, "domestic_violence")
    })
})
module.exports = scene