// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\vi_darkalley_gangrape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vi_darkalley_gangrape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["all", " -home", " -hotel"])
    scene.when([22, 4])
    let Actor2 = Player.getCompanion()
    scene.who(($IF) => {
        Actor2 = Player.getCompanion()
        $IF(random(50, 300) < Actor2.attractiveness)
    })
    scene.other(($IF) => {
        $IF(Player.intelligence < random(0, 100) * random(0, 1) * random(0, 1))
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Rape = false
        scene.setBackground("street")
        narrative(`Damn it's dark in here. I shouldn't have gone for that shortcut just to save a few minutes. Too late to regret now - let's just walk fast and get the hell out of here - I don't feel safe.`)
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dressUniform("Crime")
        Actor.show(2)
        Actor.dialogue(`Alright, I'll make this quick: hand over your ....`, `Evil`)
        Actor.dialogue(`... Oh, what a surprise to see two beauties here. It must be my lucky day. I think you two can give me something a hell lot better than money ...`, `Flirty`)
        narrative(`Oh no, I don't like how this is going ...`)
        option([
            {text: `Just take my money`},
            {text: `Run`},
            {text: `Attack`},
        ])
        if (0) {
            Player.animate("fightlost")
            Player.dialogue(`Please, just take my money ... Don't harm us ...`, `Scared`)
            narrative(`I obediently handed over my money, hoping that it would be enough to keep the thug off us.`)
            Player.money -= random(30, 300)
            if (random(0, 100) < Player.interpersonal - Actor.perversion) {
                Actor.dialogue(`Fine, since you're being so compliant, I'll let you go. Don't you dare call the cops!`, `Evil`)
                Rape = false
            } else {
                Actor.dialogue(`Thanks for handing over your money so obediently. But you're naive to think I'll let two hotties like you go just like that.`, `Evil`)
                Rape = true
            }
        } else if (1) {
            Player.masochist += random(0, 2)
            narrative(`I decided to make a run for it!`)
            Actor.hide()
            Actor2.hide()
            narrative(`I did it! The thug was long left behind and I escaped. Phew, that was close.`)
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
            if (Player.martial > Actor.martial) {
                Rape = false
                Actor.animate("fightlost")
                Actor.dialogue(`Ah!`, `Pain`)
                Player.dialogue(`That should teach you to never ambush innocent people in dark alleys anymore.`, `Angry`)
                Actor2.attractionToPlayer += random(0, 5)
                Actor2.rapportwithplayer += random(0, 5)
            } else {
                Player.money -= random(30, 300)
                Rape = true
                Player.animate("fightlost")
                Player.dialogue(`Ah!`, `Pain`)
                Actor.dialogue(`Ha! You really thought you could match me in a fight? I have to say - this just makes me want to fuck you both even more and make you watch each other!`, `Evil`)
            }
        }


        if (Rape) {
            Player.animate("fightlost")
            narrative(`I was tied up in the corner, forced to watch.`)
            narrative(`Soon, the thug was ripping <Actor2.name>'s clothes off and proceeded to force <Actor.himself_or_herself> upon <Actor2.him_or_her>.`)
            Actor2.animate("fightlost")
            Actor2.dialogue(`No! Please stop ... I beg you ... Somebody help ...`, `Crying`)
            narrative(`<Actor2.His_or_Her> cries for help went unheard in the dark alley and <Actor2.he_or_she> had no choice but endure it all at the hand of this vile <Actor.man_or_woman>.`)
            scene.filter("Aggressive")
            scene.talkNonConsensual()
            scene.sexNoAffair(Actor, Actor2)
            Actor2.hide()
            Actor.show(2)
            Actor.dialogue(`Now it's your turn, bitch. Let's see if you can breed as well as your friend did!`, `Evil`)
            scene.filter("Aggressive")
            scene.talkNonConsensual()
            scene.sexNoAffair(Actor, Player)
            Player.mood = 0
        }
    })
    scene.timeout(500, "vi_darkalley_gangrape")
})
module.exports = scene