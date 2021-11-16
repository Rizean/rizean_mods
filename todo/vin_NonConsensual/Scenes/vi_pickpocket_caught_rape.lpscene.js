// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\vi_pickpocket_caught_rape.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'vi_pickpocket_caught_rape'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["pickpocket"])
    scene.where(["all"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && random(70, 100) < Player.attractiveness && Player.sneak < random(0, 100) * random(0, 1) * random(0, 1))
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dress()
        Actor.show(2)
        Actor.dialogue(`Stop right there, thief! What do you think you're doing?`, `Angry`)
        narrative(`Oh no, I got caught. My owner of the place forced me to go with <Actor.him_or_her> to a storage room with <Actor.him_or_her> where I was bound to a chair.`)
        Player.dialogue(`Please, this is my first time pickpocketing. I was just desperate for some money. Don't call the cops - it'll ruin my future.`, `Crying`)
        Actor.dialogue(`Call the cops? What good does that do to me? Oh no, I have much better use for a pretty thief like you.`, `Evil`)
        Actor.dialogue(`Now, stay still and enjoy it. I'll let you go and won't call the cops if you act like a good <Player.boy_or_girl>.`, `Evil`)
        Player.dialogue(`What are you doing? Get your hands off me, you pervert!`, `Surprised`)
        if (Player.martial * 0.5 > Actor.martial) {
            narrative(`Unfortunately for the perverted owner, even with my hands tied, I was more than a handful for <Actor.him_or_her> to subdue. After a brief struggle, I managed to get away from <Actor.him_or_her> and escaped the place.`)
        } else {
            narrative(`With my hands tied to a chair, I never stood a chance and the perverted owner managed to overcome my struggles easily. Soon, <Actor.he_or_she> was ripping my clothes off and proceeded to force <Actor.himself_or_herself> upon me.`)
            Player.dialogue(`No! Please stop ... Somebody help ...`, `Crying`)
            scene.filter("Aggressive")
            scene.talkNonConsensual()
            scene.sexNoAffair(Actor, Player)
            Actor.show(2)
            Player.mood = 0
            Actor.dialogue(`That was good, bitch. Now, get out of my sight. You pleasured me well - I won't call the cops on your little pickpocketing adventure.`, `Evil`)
        }
    })
    scene.timeout(1000, "vi_pickpocket_caught_rape")
})
module.exports = scene