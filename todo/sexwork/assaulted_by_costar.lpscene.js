// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\assaulted_by_costar.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'assaulted_by_costar'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["onlyfans", " look_for_porn_shoot"])
    scene.where(["all"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(scene.isModEnabled("vin_NonConsensual") && !Player.isGay())
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Rape = false
        Actor = scene.generatePersonTemporary([])
        while (Actor.isSameGender(Player)) {
            Actor = scene.generatePersonTemporary([])
        }
        narrative(`A pornstar I've never worked with is apparently running <Actor.his_or_her> own niche porn studio. <Actor.He_or_She> wants to meet me in a motel room in quite a remote location for a shoot ... The rate <Actor.he_or_she> is offering to me is twice what the mainstream porn studios usually offer.`)
        option([
            {text: `Sure, niche porn usually pays well`},
            {text: `No way, sounds too dodgy`},
        ])
        if (0) {
            scene.setBackground("home")
            Player.dialogue(`So here's the room ... it's rather disgusting actually ... But the promised pay more than makes up for it. Maybe the niche is all about fucking in disgusting rooms?`)
            Actor.show()
            Actor.dialogue(`Surprise!`)
            narrative(`Suddenly, my supposed co-star / director appeared out of nowhere, butt-naked.`)


            Actor.dialogue(`You're hot but you're so stupid. What are you doing, showing up here all alone? It must be my lucky day, cause I can rape you all night and won't have to pay a single dollar for it`, `Flirty`)
            narrative(`Oh no, I don't like how this is going ...`)
            option([
                {text: `Run`},
                {text: `Attack`},
                {text: `Accept your fate`},
            ])
            if (0) {
                narrative(`I decided to make a run for it!`)
                if (random(0, 200) < Player.fitness) {
                    scene.setBackground("street")
                    Actor.hide()
                    narrative(`I did it! The thug was long left behind and I escaped. Phew, that was close.`)
                    Rape = false
                } else {
                    Player.money -= random(30, 300)
                    narrative(`I tried to escape but the thug was too fast for me and knocked me down to the floor before I could reach the door.`)
                    Actor.dialogue(`I think you can just run away? You should have saved the energy to endure a hard pounding from me tonight.`, `Evil`)
                    Rape = true
                }
            } else if (1) {
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
                    Player.dialogue(`That should teach you to never lure sex workers into danger anymore.`, `Angry`)
                } else {
                    Player.money -= random(30, 300)
                    Rape = true
                    Player.animate("fightlost")
                    Player.dialogue(`Ah!`, `Pain`)
                    Actor.dialogue(`Ha! You really thought you could match me in a fight? I have to say - this just makes me want to fuck your brains out even more, you'll see how I conquer this wild bitch tonight!`, `Evil`)
                }
            } else {
                narrative(`You don't need to be a rocket scientist to understand what will happen to a sex worker lured into a trap ... Might as well let <Actor.him_or_her> have what <Actor.he_or_she> wants and it would be a lot less painful and my life might be spared. Let's just hope <Actor.he_or_she> is not one of those serial killers targeting prostitutes ...`)
                Rape = true
            }


            if (Rape) {
                Player.animate("fightlost")
                narrative(`Soon, <Actor.he_or_she> was ripping my clothes off and proceeded to force <Actor.himself_or_herself> upon me.`)
                if (2) {
                    Player.dialogue(`Please ... you can enjoy my body as much as you want... just don't hurt me ...`, `Crying`)
                } else {
                    Player.dialogue(`No! Please stop ... I beg you ... Somebody help ...`, `Crying`)
                }
                if (random(0, 100) < 30) {
                    narrative(`All of a sudden, I heard a police siren. The thug was terrified and made a run for it.`)
                    Actor.hide()
                    narrative(`Three cops arrived at the SCENE, finding me in all state of undress. Apparently the motel owner heard what was happening and called the cops, who responded immediately. Good thing they did, this night could have gone a lot worse.`)
                    Player.mood -= random(0, 50)
                } else {
                    narrative(`My cries for help went unheard in that disgusting motel room and I had no choice but endure the worst night of my life at the hand of this vile <Actor.man_or_woman>.`)
                    if (Actor.isMale()) {
                        scene.filter("Aggressive")
                    } else {
                        scene.filter("AggressiveFM")
                    }
                    scene.talkNonConsensual()
                    scene.sexNoAffair(Actor, Player)
                    Actor.hide()
                    Player.mood = 0
                }
            }
        }
    })
    scene.timeout(300, "assaulted_by_costar")
})
module.exports = scene