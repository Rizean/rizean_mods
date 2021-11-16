// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\misc\pickpocket_caught.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'pickpocket_caught'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["pickpocket"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.sneak < random(0, 100) * random(0, 1) * random(0, 1) * random(0, 1))
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Loc = scene.findNearbyBuilding("home")
        Actor = scene.generatePersonTemporary([])
        Actor.dress()
        Actor.show(2)
        Actor.dialogue(`Hey! Stop it right there. What do you think you're doing? Thief!`, `Angry`)
        option([
            {text: `Run`},
        ])
        if (random(0, 200) < Player.fitness + Player.sneak) {
            narrative(`Thankfully, I managed to make my escape before <Actor.he_or_she> could stop me. That was a close call!`)
        } else {
            narrative(`Unfortunately for me, before I could make my escape, I was surrounded by other pedestrians.`)
            Actor.dialogue(`I'll call the cops and let them deal with you.`, `Angry`)
            option([
                {text: `Beg`},
                {text: `Offer sex`, condition: Player.perversion > 30},
                {text: `Accept my fate`},
            ])
            if (0 && random(0, 100) < Player.interpersonal) {
                Player.dialogue(`Please, have mercy, I was desperate. My children were starving. I've never done anything like this before.`, `Crying`)
                Actor.dialogue(`Alright, I guess there was no harm done after all. I'll let you off the hook this time ...`, `Sad`)
            } else if (1 && Actor.perversion + Actor.attractionToPlayer > random(20, 100)) {
                Player.dialogue(`Please, let's go somewhere private - I'll do anything ... anything.`, `Flirty`)
                Actor.dialogue(`You will. Good, then follow me back to my place. And don't even think about running away or trying to steal anything else.`, `Flirty`)
                Loc = scene.findNearbyBuilding("home")
                Player.moveTo(Loc)
                scene.sex(Actor, Player)
            } else {
                narrative(`<Actor.name> ignored everything I said and called the cops, who swiftly arrived and took me back to the police station.`)
                Actor.hide()
                scene.setBackground("police")
                narrative(`I spent a few days in jail, was fined and given a criminal record. I would have a hard time explaining this to my future employers ...`)
                Player.money -= random(50, 500)
                Player.jobexperience -= random(0, 10)
                Player.mood -= 100
                Player.energy -= 100
            }
        }


    })
    scene.timeout(48, "pickpocket_caught")
})
module.exports = scene