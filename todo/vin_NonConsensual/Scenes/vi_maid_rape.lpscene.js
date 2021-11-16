// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\vi_maid_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vi_maid_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["work_hourly"])
    scene.where(["hotel"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && random(50, 1000) < Player.attractiveness)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Player.dialogue(`Housekeeper!`, `Happy`)
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dress()
        Actor.dialogue(`Coming!`)
        Actor.show(2)
        Actor.dialogue(`Oh, you must be the housekeeper. Come right in!`, `Happy`)
        Player.dialogue(`Thank you. This should only take 15 minutes.`, `Happy`)
        Actor.hide()
        narrative(`I proceeded to clean the room, starting from the bathroom.`)
        narrative(`The moment I stepped out of the bathroom to clean the rest of the room though, I was ambushed and thrown onto the bed ...`)
        Actor.show(2)
        Actor.dialogue(`You won't be the first maid that I've fucked hard!`, `Evil`)
        if (Player.martial > Actor.martial) {
            Actor.dialogue(`Ah!`, `Pain`)
            Player.dialogue(`That should teach you to not sexually assault people!`, `Angry`)
        } else {
            narrative(`The element of surprise was too great. I was overwhelmed before I could even react to the assault.`)
            Player.dialogue(`No! Please stop ... I beg you ... Somebody help ...`, `Crying`)
            narrative(`My cries for help went unheard in the hotel room and I had no choice but endure it all at the hand of this vile <Actor.man_or_woman>.`)
            scene.filter("Aggressive")
            scene.talkNonConsensual()
            scene.sexNoAffair(Actor, Player)
        }
    })
    scene.timeout(500, "vi_maid_rape")


})
module.exports = scene