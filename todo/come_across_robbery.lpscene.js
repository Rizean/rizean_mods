// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\misc\come_across_robbery.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'come_across_robbery'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion} = scene

    scene.what(["all", " -sleep_hotel", " -nap_hotel"])
    scene.where(["all", " -work", " -home"])
    scene.when([22, 4])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 10)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Victim = scene.generatePersonTemporary([])
        scene.setBackground("street")
        Actor = scene.generatePersonTemporary([])
        Actor.dress()
        Actor.show(2)
        Victim = scene.generatePersonTemporary([])
        Victim.dress()
        Victim.show(3)


        Actor.dialogue(`Give me all your money now! Or I'll kill you.`, `Furious`)
        Victim.dialogue(`Please, don't hurt me. Here, take my money.`, `Scared`)


        if (Player.isWithCompanionCreature()) {
            CurrentCompanion.dialogue(`Wuff! Wuff! Wuff!`)
            CurrentCompanion.martial += random(0, 2)
            narrative(`Before I could even react, <CurrentCompanion.name> dashed forward and bit the thug in the leg.`)
            narrative(`The thug struggled with <CurrentCompanion.name> for a minute or so before giving up and running away.`)
            Actor.hide()
            if (random(0, 100) < CurrentCompanion.martial) {
                narrative(`I didn't realize how good a fighter <CurrentCompanion.name> is. <CurrentCompanion.He_or_She> totally kicked the thug's ass without suffering a single scratch.`)
            } else {
                narrative(`Despite <CurrentCompanion.his_or_her> heroics, the thug managed to get a kick in and <CurrentCompanion.name> suffered a few wounds.`)
                CurrentCompanion.fitness -= random(0, 30)
            }


            Victim.show(2)
            Victim.attractionToPlayer += random(0, 20)
            Victim.rapportwithplayer += random(0, 20)
            Victim.dialogue(`Oh my god, your dog was so brave. I have no idea how I can thank you ...`, `Sad`)
            option([
                {text: `No need for reward`},
                {text: `Ask for <Victim.his_or_her> number`},
                {text: `Ask for sex`, condition: scene.isModEnabled("vin_VanillaPorn") && Player.perversion > 20},
            ])
            if (0) {
                Player.dialogue(`That's okay. I just happened to stumble across and my dog did all the hard work.`, `Happy`)
                Victim.attractionToPlayer += random(0, 5)
                Victim.rapportwithplayer += random(0, 5)
            } else if (1) {
                Player.dialogue(`I would love nothing more than to get your number. I'd quite like to get to know you better.`, `Happy`)
                Victim.dialogue(`Of course!`, `Happy`)
                Player.exchangeContact(Victim)
            } else {
                if (Victim.perversion + Victim.attractionToPlayer > 100) {
                    Victim.dialogue(`You mean ... right here? Oh well, if that's what you want. Your dog is my savior after all.`, `Flirty`)
                    narrative(`Who knows having a ferocious dog could get you laid?`)
                    scene.sex(Player, Victim)
                    Player.perversion += random(0, 0.5)
                } else {
                    Victim.dialogue(`No way! You didn't even save me from a robber, your dog did. I'm not about to give my body away so easily.`, `Angry`)
                    Victim.attractionToPlayer -= random(0, 15)
                    Victim.rapportwithplayer -= random(0, 15)
                }
            }
        } else {
            narrative(`Someone is being robbed! What should I do?`)
            option([
                {text: `Move away`},
                {text: `Attack the robber`},
            ])
            if (0) {
                narrative(`I'd better clear out of here before I become the next victim ...`)
                Player.masochist += random(0, 1)
            } else {
                Victim.makePermanent()
                Player.animate("martialart")
                Player.moveToPersonStand(Actor, 100)
                Player.dialogue(`Hey, stop right there!`, `Furious`)
                Player.karma += 2.5
                Player.masochist -= random(0, 2)
                narrative(`I tackled the robber and we began an intense struggle.`)
                Player.animate()
                Actor.animate()
                if (Player.martial > Actor.martial) {
                    Actor.animate("fightlost")
                    narrative(`After a while, I managed to deliver the final blow to the robber. <Robber.He_or_She> couldn't take it anymore and fell unconscious.`)
                    narrative(`A few minutes later, the police arrived and arrested the badly injured robber.`)
                } else {
                    Player.animate("fightlost")
                    narrative(`Unfortunately for me, the robber was a far better fighter than I was. After a brief struggle, the robber managed to knock me to the ground and then proceeded to kick me mercilessly in the face.`)
                    Actor.hide()
                    narrative(`Thankfully, eventually the police arrived and the robber had to flee the SCENE before <Actor.he_or_she> caused me more damage. I was quickly taken to the hospital.`)
                    Player.attractiveness -= random(0, 5)
                    Player.fitness -= random(0, 10)
                    Player.martial -= random(0, 10)
                    Player.mood -= 100
                    Player.energy -= 100
                    Player.animate()
                    scene.setBackground("hospital")
                }


                Victim.show(2)
                Victim.attractionToPlayer += random(0, 20)
                Victim.rapportwithplayer += random(0, 20)
                Victim.dialogue(`Oh my god, you were so brave. I have no idea how I can thank you ...`, `Sad`)
                option([
                    {text: `No need for reward`},
                    {text: `Ask for <Victim.his_or_her> number`},
                    {text: `Ask for sex`, condition: scene.isModEnabled("vin_VanillaPorn") && Player.perversion > 20},
                ])
                if (0) {
                    Player.dialogue(`That's okay. I only did what was right, not for any rewards.`, `Happy`)
                    Victim.attractionToPlayer += random(0, 5)
                    Victim.rapportwithplayer += random(0, 5)
                    Player.karma += 2.5
                } else if (1) {
                    Player.dialogue(`I would love nothing more than to get your number. I'd quite like to get to know you better.`, `Happy`)
                    Victim.dialogue(`Of course!`, `Happy`)
                    Player.exchangeContact(Victim)
                } else {
                    if (Victim.perversion + Victim.attractionToPlayer > 100) {
                        Victim.dialogue(`You mean ... right here? Oh well, if that's what you want. You're my savior after all.`, `Flirty`)
                        scene.sex(Player, Victim)
                        Player.perversion += random(0, 0.5)
                    } else {
                        Victim.dialogue(`No way! You might have saved me from a robber, but I'm not about to give my body away so easily.`, `Angry`)
                        Victim.attractionToPlayer -= random(0, 15)
                        Victim.rapportwithplayer -= random(0, 15)
                    }
                }
            }
        }


    })
    scene.timeout(500, "come_across_robbery")
})
module.exports = scene