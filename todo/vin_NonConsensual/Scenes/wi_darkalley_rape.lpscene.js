// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\wi_darkalley_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'wi_darkalley_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["all", " -home", " -hotel"])
    scene.when([22, 4])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 2 && Player.intelligence < random(0, 100) * random(0, 1) * random(0, 1))
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Actor2 = scene.generatePersonTemporary([])
        let Rape = false
        scene.setBackground("street")
        narrative(`Damn it's dark in here. I shouldn't have gone for that shortcut just to save a few minutes. Too late to regret now - I'll just walk fast and get the hell out of here - I don't feel safe.`)
        Actor = scene.generatePersonTemporary([])
        Actor.dressUniform("Crime")
        Actor.show(2)
        Actor2 = scene.generatePersonTemporary([])
        Actor2.dress()
        Actor2.show(3)


        Actor.dialogue(`Alright, I'll make this quick: hand over your ....`, `Evil`)
        Actor.dialogue(`... Oh, what a surprise to see a beauty like you alone here. It must be my lucky day. I think you can give me something a hell lot better than your money ...`, `Flirty`)
        Actor2.dialogue(`Please, just take my money ... Don't harm me ...`, `Scared`)
        Actor.dialogue(`Thanks for handing over your money so obediently. But you're naive to think I'll let a hottie like you go just like that.`, `Evil`)


        narrative(`Oh no, that poor <Actor2.guy_or_girl> is getting mugged and threatened with rape ...`)
        option([
            {text: `Call the cops`},
            {text: `Run`},
            {text: `Attack`},
            {text: `Peep`},
        ])
        if (0) {
            Player.karma += 2.5
            narrative(`It would be foolish trying to save the <Actor2.guy_or_girl> myself, but I can at least call the cops.`)
            narrative(`A while later ...`)
            narrative(`It's the police siren! The thug was terrified and made a run for it.`)
            Actor.hide()
            narrative(`Three cops arrived at the SCENE, finding the poor <Actor2.guy_or_girl> in all state of undress but yet unharmed. The cops did their job and responded in time.`)
            Rape = false
        } else if (1) {
            Player.karma -= 2.5
            Player.masochist += random(0, 2)
            narrative(`I'd better run away from here before the thug sees me! It's none of my business to try and save the <Actor2.guy_or_girl>.`)
            Rape = false
        } else if (2) {
            Player.masochist -= random(0, 2)
            Player.karma += 5
            Player.animate("martialart")
            Player.moveToPersonStand(Actor, 100)
            Player.dialogue(`You can't get away with this, rapist! Take this!`, `Furious`)
            Actor.dialogue(`You dare sucker-punch me? I'll teach you a lesson for being nosy.`, `Furious`)
            scene.faceEachOther(Actor, Player)
            Actor.animate("martialart")
            narrative(`A fierce fight ensued ...`)
            Player.animate()
            Actor.animate()
            if (Player.martial > Actor.martial || !scene.isModEnabled("vin_NTR")) {
                Rape = false
                Actor.animate("fightlost")
                Actor.dialogue(`Ah!`, `Pain`)
                Player.dialogue(`That should teach you to never ambush innocent people in dark alleys anymore.`, `Angry`)
                Actor.hide()
                Actor2.dialogue(`My hero! You taught that thug a lesson. I don't know what I can do to thank you, honestly.`, `Happy`)
                option([
                    {text: `It's only the right thing to do`},
                    {text: `Ask for <Actor2.his_or_her> number`},
                ])
                if (0) {
                    Player.dialogue(`It's only my citizen's duty. I cannot let criminals like that get away with their horrendous acts of violence.`, `Happy`)
                } else {
                    Player.dialogue(`You know ... I'd love to get to know you more.`, `Happy`)
                    Actor2.dialogue(`Of course, here's my number. I'd love to get to know a strong <Player.gentleman_or_lady> like you better too.`, `Happy`)
                    Actor2.makePermanent()
                    Actor2.attractionToPlayer += random(0, 50)
                    Actor2.rapportwithplayer += random(0, 50)
                    Player.exchangeContact(Actor2)
                }
            } else {
                Player.money -= random(30, 300)
                Rape = true
                Player.animate("fightlost")
                Player.dialogue(`Ah!`, `Pain`)
                Actor.dialogue(`Ha! You really thought you could match me in a fight? I have to say - this just makes me want to fuck <Actor2.his_or_her> brain out even more and make you watch it all, wannabe hero!`, `Evil`)
            }
        } else if (3) {
            Player.karma -= 2.5
            narrative(`My curiosity got the better of me. I really should do something to help, but I decided not to. Instead, I got all excited wanting to watch some forced porn playing out live in front of my eyes.`)
            narrative(`I hid in the corner, allowing me the perfect view of what was going on without being detected by the thug.`)
            Player.perversion += random(0, 2)
        }


        if (Rape) {
            narrative(`Soon, the thug was ripping the poor <Actor2.guy_or_girl>'s clothes off and proceeded to force <Actor.himself_or_herself> upon <Actor.his_or_her> victim.`)
            Actor2.dialogue(`No! Please stop ... I beg you ... Somebody help ...`, `Crying`)
            narrative(`<Actor2.His_or_Her> cries for help went unheard in the dark alley and <Actor2.he_or_she> had no choice but endure it all at the hand of this vile <Actor.man_or_woman>.`)
            scene.filter("Aggressive")
            scene.talkNonConsensual()
            scene.sexNoAffair(Actor, Actor2)
        }
    })
    scene.timeout(500, "wi_darkalley_rape")
})
module.exports = scene