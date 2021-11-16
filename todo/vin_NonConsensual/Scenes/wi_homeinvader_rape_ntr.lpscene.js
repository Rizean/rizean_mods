// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\wi_homeinvader_rape_ntr.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'wi_homeinvader_rape_ntr'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["sleep", " nap"])
    scene.where(["home"])
    scene.when([22, 4])
    let Actor2 = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Actor2 = scene.getSpecific("Dating")
        $IF(random(60, 500) < Actor2.attractiveness)
    })
    scene.other(($IF) => {
        $IF(scene.isModEnabled("vin_NTR") && Player.intelligence < random(0, 100) * random(0, 1))
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Rape = false
        Actor = scene.generatePersonTemporary([])
        Actor.dressUniform("Crime")
        Actor.show()
        Actor.dialogue(`Wake up, whore. And prepare to get fucked!`, `Evil`)
        Actor.show(2)
        Actor2.dress()
        Actor2.show(3)
        Actor2.dialogue(`Ahhhhhhhhhhhh!`, `Crying`)
        narrative(`What's going on? Oh no, our bedroom has been invaded by a rapist.`)
        option([
            {text: `Run`},
            {text: `Confront the home invader`},
        ])
        if (0) {
            Player.karma -= 10
            Player.masochist += random(0, 2)
            narrative(`I can't risk my life to save my <Actor2.boyfriend_or_girlfriend> from the inevitable ... I decided to make a cowardly run for it, alone.`)
            Actor.attractionToPlayer -= random(0, 50)
            narrative(`The screams of my <Actor2.boyfriend_or_girlfriend> clearly suggested what was going on back there, yet I kept running, fearful for my own life.`)
            Rape = false
            narrative(`I did call the cops afterwards. It was too late. When they arrived, the thug was already gone, leaving my <Actor2.boyfriend_or_girlfriend> well fucked.`)
        } else {
            Player.karma += 2.5
            Player.masochist -= random(0, 2)
            Player.animate("martialart")
            Player.moveToPersonStand(Actor, 100)
            narrative(`No one will violate my <Actor2.boyfriend_or_girlfriend> in front of me. I'd rather die than let that happen. With that thought in mind, I bravely jumped on the invader.`)
            Player.dialogue(`Thug, take this!`, `Angry`)
            scene.faceEachOther(Actor, Player)
            Actor.animate("martialart")
            Actor.dialogue(`How dare you sucker-punch me? I'll teach you a lesson.`, `Angry`)
            narrative(`A fierce fight ensued ...`)
            Player.animate()
            Actor.animate()
            if (Player.martial > Actor.martial) {
                Rape = false
                Actor.animate("fightlost")
                Actor.dialogue(`Ah!`, `Pain`)
                Player.dialogue(`That should teach you to never invade people's home and sexually assault them anymore.`, `Angry`)
                Actor2.attractionToPlayer += random(0, 10)
                narrative(`We called the cops, who promptly arrested the wannabe rapist.`)
            } else {
                Rape = true
                Player.animate("fightlost")
                Player.dialogue(`Ah!`, `Pain`)
                Actor.dialogue(`Ha! You really thought you could match me in a fight? I have to say - this just makes me want to fuck your <Actor2.boyfriend_or_girlfriend> even more and make you watch it all, wannabe hero!`, `Evil`)
            }
        }


        if (Rape) {
            Actor2.dialogue(`No, please stop ... Somebody help!`, `Crying`)
            narrative(`My <Actor2.boyfriend_or_girlfriend>'s struggles against the home invader were futile. <Actor2.He_or_She> had no choice but to endure giving this vile creature pleasure against <Actor2.his_or_her> will ...`)
            scene.filter("Aggressive")
            scene.talkNonConsensual()
            scene.sexNoAffair(Actor, Actor2)
        }
    })
    scene.timeout(1000, "wi_homeinvader_rape_ntr")
})
module.exports = scene