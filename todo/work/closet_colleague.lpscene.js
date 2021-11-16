// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\closet_colleague.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'closet_colleague'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([8, 18])
    let Colleague = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague = scene.getSpecific("Colleague")
        $IF(Colleague.interpersonal < random(0, 100) * random(0, 1) * random(0, 1))
    })
    scene.other("none")


    scene.start(() => {
        scene.setBackground("work")
        Colleague.dress()
        Colleague.show(2)


        narrative(`There have been a lot of office gossips recently about <Colleague.name>'s sexual orientation. I feel these rumours are affecting <Colleague.his_or_her> performance.`)
        option([
            {text: `Ignore`},
            {text: `Convince the gossipers to stop`},
            {text: `Join in`},
        ])
        if (0) {
            narrative(`Who cares? I'm here to work. I don't have time for bullshit office gossip.`)
        } else if (1) {
            narrative(`Feeling sorry for <Colleague.name>, I decided to stand up for <Colleague.him_or_her> and explained to the gossipers that <Colleague.name> being gay or straight is none of their business and asked them to stop.`)
            Player.karma += 2.5
            if (Player.interpersonal > random(0, 100)) {
                narrative(`Eventually, the gossipers promised to stop and agreed to respect <Colleague.name>'s personal life from now on.`)
                Colleague.rapportwithplayer += random(0, 10)
                Player.jobperformance += random(0, 0.5)
                if (Colleague.isInterestedIn(Player)) {
                    Colleague.attractionToPlayer += random(0, 5)
                }
                Colleague.dialogue(`Hey <Player.name>, I heard you were the one that put an end to the gossip. I just wanted to say thanks!`, `Happy`)
            } else {
                narrative(`My efforts were in vain however as the gossiping continued.`)
            }
        } else {
            narrative(`I decided to join in and add my own speculations about <Colleague.name>'s sexual orientation. Gossiping is fun!`)
            Player.interpersonal += random(0, 0.5)
            Player.jobperformance -= random(0, 0.5)
            Colleague.rapportwithplayer -= random(0, 10)
            Colleague.attractionToPlayer -= random(0, 5)
            Player.karma -= 2.5
        }


    })
    scene.timeout(1000, "closet_colleague")
})
module.exports = scene