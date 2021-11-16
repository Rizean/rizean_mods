// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\vi_locker_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vi_locker_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["go_to_the_bathroom"])
    scene.where(["sports_centre"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && random(70, 1000) < Player.attractiveness)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Player.strip()
        narrative(`Damn, the locker room is empty today. Let's get this shower over and done with quick. I don't feel particularly safe.`)
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        narrative(`All of a sudden, a stranger grabbed me by the <Player.dick_or_pussy> from behind.`)
        Actor.show(2)
        if (Player.martial > Actor.martial) {
            Actor.dialogue(`Ah!`, `Pain`)
            Player.dialogue(`That should teach you to not sexually assault people in locker rooms!`, `Angry`)
        } else {
            narrative(`The element of surprise was too great. I was overwhelmed before I could even react to the assault.`)
            Player.dialogue(`No! Please stop ... I beg you ... Somebody help ...`, `Crying`)
            narrative(`My cries for help went unheard in the locker room and I had no choice but endure it all at the hand of this vile <Actor.man_or_woman>.`)
            scene.filter("Aggressive")
            scene.talkNonConsensual()
            scene.sexNoAffair(Actor, Player)
        }
    })
    scene.timeout(500, "vi_locker_rape")
})
module.exports = scene