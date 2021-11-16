// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\neighbour_noise.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'neighbour_noise'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["sleep"])
    scene.where(["home"])
    scene.when([22, 4])
    let Actor = scene.getSpecific("Neighbour")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Neighbour")
        $IF(random(50, 100) < Actor.music)
    })
    scene.other(($IF) => {
        $IF(Player.isAtHome())
    })


    scene.start(() => {


        narrative(`<Actor.name>, my neighbour is playing music loudly again tonight. I can't sleep ...`)
        option([
            {text: `Ignore`},
            {text: `Complain`},
            {text: `Compliment`},
        ])
        if (0) {
            narrative(`Let's not burn any bridges. I will just bear this and try to get to sleep.`)
            Player.masochist += random(0, 0.5)
            Player.energy -= random(0, 20)
        } else if (1) {
            narrative(`This is unacceptable. Does <Actor.name> realize how late it is?`)
            Actor.dress()
            Actor.show(2)
            Player.dialogue(`Could you please turn down the music? I'm trying to get some sleep here.`, `Angry`)
            Actor.dialogue(`Oh sorry, I'll adjust the volume right away.`, `Sad`)
            Player.masochist -= random(0, 0.5)
            Actor.rapportwithplayer -= random(0, 5)
            if (Actor.isInterestedIn(Player)) {
                Actor.attractionToPlayer -= random(0, 5)
            }
        } else {
            Player.energy -= random(0, 20)
            Player.music += random(0, 0.5)
            narrative(`I'm actually quite enjoying the music. Who needs sleep anyway?`)
            Actor.dress()
            Actor.show(2)
            Player.dialogue(`You have great taste in music by the way!`, `Happy`)
            Actor.dialogue(`Oh, thank you!`, `Happy`)
            Actor.rapportwithplayer += random(0, 5)
            if (Actor.isInterestedIn(Player)) {
                Actor.attractionToPlayer += random(0, 5)
            }
        }


        scene.timeout(48, "neighbour_noise")
    })


})
module.exports = scene