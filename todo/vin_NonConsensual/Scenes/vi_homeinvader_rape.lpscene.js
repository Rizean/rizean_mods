// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\vi_homeinvader_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vi_homeinvader_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["sleep", " nap"])
    scene.where(["home"])
    scene.when([22, 4])
    scene.who("none")
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && random(60, 500) < Player.attractiveness && Player.intelligence < random(0, 100) * random(0, 1))
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dressUniform("Crime")
        Actor.show(2)
        Actor.dialogue(`Wake up, whore. And prepare to get fucked!`, `Evil`)
        narrative(`What's going on? Oh no, my bedroom has been invaded by a rapist. <Actor.He_or_She> chose a day when there's no-one else in the apartment too ...`)
        if (Player.martial > Actor.martial) {
            Player.dialogue(`Thug, take this!`, `Angry`)
            Actor.dialogue(`Ah!`, `Pain`)
            narrative(`Thankfully, I managed to react well to the situation and overpower the thug eventually. I then called the cops, who promptly arrested the wannabe rapist.`)
        } else {
            Player.dialogue(`No, please stop ... Somebody help!`, `Crying`)
            narrative(`Unfortunately, the element of surprise was too much and my struggles against the home invader were futile. I have no choice now but to endure giving this vile creature pleasure against my will ...`)
            scene.filter("Aggressive")
            scene.talkNonConsensual()
            scene.sexNoAffair(Actor, Player)
        }
    })
    scene.timeout(1000, "vi_homeinvader_rape")
})
module.exports = scene