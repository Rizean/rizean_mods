// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\vi_darkalley_gangrape_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vi_darkalley_gangrape_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["all", " -home", " -hotel"])
    scene.when([22, 4])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.isStraight() && !Player.isWithCompanion() && random(50, 300) < Player.attractiveness && Player.intelligence < random(0, 100) * random(0, 1) * random(0, 1))
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Actor2 = scene.generatePersonTemporary([])
        let Actor3 = scene.generatePersonTemporary([])
        let Rape = false
        scene.setBackground("street")
        narrative(`Damn it's dark in here. I shouldn't have gone for that shortcut just to save a few minutes. Too late to regret now - I'll just walk fast and get the hell out of here - I don't feel safe.`)
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor2 = scene.generatePersonTemporary([])
        while (!Actor2.isSameGender(Actor)) {
            Actor2 = scene.generatePersonTemporary([])
        }
        Actor3 = scene.generatePersonTemporary([])
        while (!Actor3.isSameGender(Actor)) {
            Actor3 = scene.generatePersonTemporary([])
        }
        Actor.dressUniform("Crime")
        Actor.show(2)
        Actor2.dressUniform("Crime")
        Actor2.show()
        Actor3.dressUniform("Crime")
        Actor3.show()
        narrative(`Oh no, I'm surrounded by three shady characters ...`)
        Actor.dialogue(`Alright, I'll make this quick: hand over your ....`, `Evil`)
        Actor2.dialogue(`... Oh, what a surprise to see a beauty like you alone here. It must be my lucky day. I think you can give me something a hell lot better than your <Player.wallet_or_purse> ...`, `Flirty`)
        Actor3.dialogue(`Let's rape <Player.him_or_her> together!`, `Flirty`)
        narrative(`Oh no, I don't like how this is going ...`)
        option([
            {text: `Just take my money`},
            {text: `Run`},
            {text: `Attack`},
        ])
        if (0) {
            Player.animate("fightlost")
            Player.dialogue(`Please, just take my money ... Don't harm me ...`, `Scared`)
            narrative(`I obediently handed over my <Player.wallet_or_purse>, hoping that it would be enough to keep the thug off me.`)
            Player.money -= random(30, 300)
            if (random(0, 100) < Player.interpersonal - Actor.perversion) {
                Actor.dialogue(`Fine, since you're being so compliant, I'll let you go. Don't you dare call the cops!`, `Evil`)
                Rape = false
            } else {
                Actor.dialogue(`Thanks for handing over your money so obediently. But you're naive to think I'll let a hottie like you go just like that.`, `Evil`)
                Rape = true
            }
        } else if (1) {
            narrative(`I decided to make a run for it!`)
            if (random(0, 200) < Player.fitness) {
                Actor.hide()
                narrative(`I did it! The thugs were long left behind and I escaped. Phew, that was close.`)
                Rape = false
            } else {
                Player.money -= random(30, 300)
                narrative(`I tried to escape but the thug was too fast for me and knocked me down to the ground.`)
                Actor.dialogue(`I think you can just run away? You should have saved the energy to endure a hard pounding from me tonight.`, `Evil`)
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
            Player.money -= random(30, 300)
            Rape = true
            Player.animate("fightlost")
            Player.dialogue(`Ah!`, `Pain`)
            Actor.dialogue(`Ha! You really thought you could match me in a fight? I have to say - this just makes us want to fuck your brains out even more, you'll see how we conquer this wild bitch tonight!`, `Evil`)
        }


        if (Rape) {
            Player.animate("fightlost")
            narrative(`Soon, They were ripping my clothes off and proceeded to force themselves upon me.`)
            Player.dialogue(`No! Please stop ... I beg you ... Somebody help ...`, `Crying`)
            if (random(0, 100) < 30) {
                narrative(`All of a sudden, I heard a police siren. The thugs were terrified and made a run for it.`)
                Actor.hide()
                Actor2.hide()
                Actor3.hide()
                narrative(`Three cops arrived at the SCENE, finding me in all state of undress. Apparently a passerby saw what was happening and called the cops, who responded immediately. Good thing they did, this night could have gone a lot worse.`)
                Player.mood -= random(0, 50)
            } else {
                narrative(`My cries for help went unheard in the dark alley and I had no choice but endure the worst night of my life at the hand of the three vile <Actor.men_or_women>.`)
                scene.talkNonConsensual()
                scene.sexNoAffair(Actor, Actor2, Actor3, Player)
                Player.mood = 0
            }
        }
    })
    scene.timeout(500, "vi_darkalley_gangrape_cms")
})
module.exports = scene