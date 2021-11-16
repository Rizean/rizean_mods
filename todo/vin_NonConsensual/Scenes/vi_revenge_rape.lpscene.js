// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\vi_revenge_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vi_revenge_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["all", " -home", " -hotel"])
    scene.when([22, 4])
    let Actor = scene.getPerson()
    scene.who(($IF) => {
        Actor = scene.getPerson()
        $IF(!Actor.isDating() && !Actor.isRelative() && random(-100, -50) > Actor.rapportwithplayer && random(50, 200) < Actor.perversion && random(-100, -50) > Actor.masochist)
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && random(50, 300) < Player.attractiveness && Player.intelligence < random(0, 100) * random(0, 1) * random(0, 1))
    })


    scene.start(() => {
        let Rape = false
        scene.setBackground("street")
        narrative(`Damn it's dark in here. I shouldn't have gone for that shortcut just to save a few minutes. Too late to regret now - let's just walk fast and get the hell out of here - I don't feel safe.`)
        Actor.dress()
        Actor.show(2)
        Actor.dialogue(`Karma is a bitch, isn't it?`, `Evil`)
        Actor.dialogue(`Tonight you'll pay for what you've done to me. I'm going to fuck you hard until you bleed.`, `Evil`)
        narrative(`Oh no, it's <Actor.name> who I had a big grudge with. I don't like how this is going ...`)
        option([
            {text: `Run`},
            {text: `Attack`},
        ])
        if (0) {
            narrative(`I decided to make a run for it!`)
            if (random(0, 200) < Player.fitness) {
                Actor.hide()
                narrative(`I did it! <Actor.name> was long left behind and I escaped. Phew, that was close.`)
                Rape = false
            } else {
                narrative(`I tried to escape but <Actor.name> was too fast for me and knocked me down to the ground.`)
                Actor.dialogue(`You think you can just run away? You should have saved the energy to endure a hard pounding from me tonight.`, `Evil`)
                Rape = true
            }
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
            if (Player.martial > Actor.martial) {
                Rape = false
                Actor.animate("fightlost")
                Actor.dialogue(`Ah!`, `Pain`)
                Player.dialogue(`That should teach you!`, `Angry`)
            } else {
                Rape = true
                Player.animate("fightlost")
                Player.dialogue(`Ah!`, `Pain`)
                Actor.dialogue(`Ha! You really thought you could match me in a fight? I have to say - this just makes me want to fuck your brains out even more, you'll see how I conquer this wild bitch tonight!`, `Evil`)
            }
        }


        if (Rape) {
            narrative(`Soon, <Actor.he_or_she> was ripping my clothes off and proceeded to force <Actor.himself_or_herself> upon me.`)
            Player.animate("fightlost")
            Player.dialogue(`No! Please stop ... I beg you ... Somebody help ...`, `Crying`)
            if (random(0, 100) < 30) {
                narrative(`All of a sudden, I heard police sirens. <Actor.name> was terrified and made a run for it.`)
                Actor.hide()
                narrative(`Three cops arrived at the SCENE, finding me in all state of undress. Apparently a passerby saw what was happening and called the cops, who responded immediately. Good thing they did, this night could have gone a lot worse.`)
                Player.mood -= random(0, 50)
            } else {
                narrative(`My cries for help went unheard in the dark alley and I had no choice but endure the worst night of my life at the hand of this vile <Actor.man_or_woman>.`)
                scene.filter("Aggressive")
                scene.talkNonConsensual()
                scene.sexNoAffair(Actor, Player)
                Actor.hide()
                Player.mood = 0
            }
        }
    })
    scene.timeout(500, "vi_revenge_rape")
})
module.exports = scene