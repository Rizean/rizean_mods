// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\vi_bathroom_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vi_bathroom_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["go_to_the_bathroom"])
    scene.where(["nightclub", " bar", " toilets", " community_centre"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && random(70, 1000) < Player.attractiveness)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        narrative(`Damn, this bathroom is so dirty. Worse, no-one else is here. Let's get this over and done with quick. I don't feel particularly safe in this cubicle, whose lock isn't even working.`)
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        narrative(`All of a sudden, a stranger force opened the cubicle door and grabbed me.`)
        Actor.show(2)
        if (Player.martial > Actor.martial) {
            Actor.dialogue(`Ah!`, `Pain`)
            Player.dialogue(`That should teach you to not sexually assault people in public bathrooms!`, `Angry`)
        } else {
            narrative(`The element of surprise was too great. I was overwhelmed before I could even react to the assault.`)
            Player.dialogue(`No! Please stop ... I beg you ... Somebody help ...`, `Crying`)
            narrative(`My cries for help went unheard in the bathroom and I had no choice but endure it all at the hand of this vile <Actor.man_or_woman>.`)
            scene.filter("Aggressive")
            scene.talkNonConsensual()
            scene.sexNoAffair(Actor, Player)
        }
    })
    scene.timeout(500, "vi_bathroom_rape")
})
module.exports = scene