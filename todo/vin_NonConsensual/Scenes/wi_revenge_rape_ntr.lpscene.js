// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\wi_revenge_rape_ntr.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'wi_revenge_rape_ntr'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["all", " -home", " -hotel"])
    scene.when([22, 4])
    let Actor2 = Player.getCompanion()
    let Actor = scene.getPerson()
    scene.who(($IF) => {
        Actor2 = Player.getCompanion()
        Actor = scene.getPerson()
        $IF(!Actor.isDating() && !Actor.isRelative() && random(-100, -50) > Actor.rapportwithplayer && random(50, 200) < Actor.perversion && random(-100, -50) > Actor.masochist)
    })
    scene.other(($IF) => {
        $IF(Player.intelligence < random(0, 100) * random(0, 1) * random(0, 1))
    })


    scene.start(() => {
        let Rape = false
        scene.setBackground("street")
        narrative(`Damn it's dark in here. I shouldn't have gone for that shortcut just to save a few minutes. Too late to regret now - let's just walk fast and get the hell out of here - I don't feel safe.`)
        Actor.dress()
        Actor.show(2)
        Actor.dialogue(`Karma is a bitch, isn't it?`, `Evil`)
        Actor.dialogue(`Tonight you'll pay for what you've done to me. I'm going to fuck your friend here hard until <Actor2.he_or_she> bleeds and you're going to have to watch it all.`, `Evil`)
        narrative(`Oh no, it's <Actor.name> who I had a big grudge with. I don't like how this is going ...`)
        option([
            {text: `Run`},
            {text: `Attack`},
        ])
        if (0) {
            Player.karma -= 10
            Player.masochist += random(0, 2)
            narrative(`I decided to make a run for it!`)
            Actor.hide()
            Actor2.hide()
            narrative(`I did it! <Actor.name> was long left behind and I escaped. Phew, that was close.`)
            Rape = false
            narrative(`Unfortunately <Actor2.name> was left behind also ... I can't imagine what horrible things  <Actor2.he_or_she> is enduring right now ... Oh well, better <Actor2.him_or_her> than me!`)
            Actor2.attractionToPlayer -= random(0, 50)
            Actor2.rapportwithplayer -= random(0, 50)
        } else {
            Player.animate("martialart")
            Player.moveToPersonStand(Actor, 100)
            Player.dialogue(`You messed with the wrong <Player.guy_or_girl>! Take this.`, `Furious`)
            scene.faceEachOther(Actor, Player)
            Actor.animate("martialart")
            Actor.dialogue(`You dare sucker-punch me? I'll teach you a lesson.`, `Furious`)
            narrative(`A fierce fight ensued ...`)
            Player.animate()
            Actor.animate()
            if (Player.martial > Actor.martial || !scene.isModEnabled("vin_NTR")) {
                Rape = false
                Actor.animate("fightlost")
                Actor.dialogue(`Ah!`, `Pain`)
                Player.dialogue(`That should teach you!`, `Angry`)
                Actor2.attractionToPlayer += random(0, 5)
                Actor2.rapportwithplayer += random(0, 5)
            } else {
                Rape = true
                Player.animate("fightlost")
                Player.dialogue(`Ah!`, `Pain`)
                Actor.dialogue(`Ha! You really thought you could match me in a fight? I have to say - this just makes me want to fuck <Actor2.his_or_her> brains out even more and make you watch it all, wannabe hero!`, `Evil`)
                Player.mood -= random(0, 100)
            }
        }


        if (Rape) {
            narrative(`Soon, <Actor.name> was ripping the poor <Actor2.guy_or_girl>'s clothes off and proceeded to force <Actor.himself_or_herself> upon <Actor.his_or_her> victim.`)
            Actor2.animate("fightlost")
            Actor2.dialogue(`No! Please stop ... I beg you ... Somebody help ...`, `Crying`)
            narrative(`<Actor2.His_or_Her> cries for help went unheard in the dark alley and <Actor2.he_or_she> had no choice but endure it all at the hand of this vile <Actor.man_or_woman>.`)
            scene.filter("Aggressive")
            scene.talkNonConsensual()
            scene.sexNoAffair(Actor, Actor2)
            Player.mood -= random(0, 100)
        }
    })
    scene.timeout(500, "wi_revenge_rape_ntr")
})
module.exports = scene