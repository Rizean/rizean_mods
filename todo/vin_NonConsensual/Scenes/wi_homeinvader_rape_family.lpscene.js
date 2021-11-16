// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\wi_homeinvader_rape_family.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'wi_homeinvader_rape_family'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["sleep", " nap"])
    scene.where(["home"])
    scene.when([22, 4])
    let Actor2 = Player.getRelative()
    scene.who(($IF) => {
        Actor2 = Player.getRelative()
        $IF(Actor2.livesWithPlayer() && random(60, 500) < Actor2.attractiveness)
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
        narrative(`What's going on? Oh no, it sounds like my <Actor2.relationship>'s bedroom has been invaded by a rapist.`)
        option([
            {text: `Stay in bed`},
            {text: `Confront the home invader`},
            {text: `Peep`},
        ])
        if (0) {
            Player.karma -= 5
            Player.masochist += random(0, 1)
            narrative(`I can't risk my life to save my <Actor2.relationship> from the inevitable ... I should just lay here and do nothing and hope that the thug leaves my room alone.`)
            Actor.rapportwithplayer -= random(0, 10)
            narrative(`The screams of my <Actor2.relationship> clearly showed what was going on over there, yet I stayed still, fearful for my own life.`)
            Rape = false
        } else if (1) {
            Actor.show(2)
            Player.karma += 5
            Player.masochist -= random(0, 2)
            Player.animate("martialart")
            Player.moveToPersonStand(Actor, 100)


            narrative(`I rush to my <Actor2.relationship>'s room and jumped on the invader.`)


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
                Actor2.rapportwithplayer += random(0, 10)
                narrative(`We called the cops, who promptly arrested the wannabe rapist.`)
            } else {
                Rape = true
                Player.animate("fightlost")
                Player.dialogue(`Ah!`, `Pain`)
                Actor.dialogue(`Ha! You really thought you could match me in a fight? I have to say - this just makes me want to fuck your <Actor2.relationship> even more and make you watch it all, wannabe hero!`, `Evil`)
            }
        } else {
            Player.karma -= 5
            narrative(`This is so wrong, but instead of wanting to help, something deep inside me wanted to watch my <Actor2.relationship> get violated by a dangerous home invader ...`)
            Player.masochist += random(0, 2)
            Rape = true
        }


        if (Rape) {
            Actor.show(2)
            Actor2.dress()
            Actor2.show(3)
            Actor2.animate("fightLost")
            Actor2.dialogue(`No, please stop ... Somebody help!`, `Crying`)
            narrative(`My <Actor2.relationship>'s struggles against the home invader were futile. <Actor2.He_or_She> had no choice but to endure giving this vile creature pleasure against <Actor2.his_or_her> will ...`)
            scene.filter("Aggressive")
            scene.talkNonConsensual()
            scene.sexNoAffair(Actor, Actor2)
        }
    })
    scene.timeout(1000, "wi_homeinvader_rape_family")
})
module.exports = scene