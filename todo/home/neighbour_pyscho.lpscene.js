// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\neighbour_pyscho.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'neighbour_pyscho'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Neighbour")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Neighbour")
        $IF(Actor.interpersonal < 10 && Actor.martial > 70 && Actor.rapportwithplayer < 5)
    })
    scene.other(($IF) => {
        $IF(Player.isAtHome())
    })


    scene.start(() => {
        let Landlord = scene.getSpecific("Landlord")


        narrative(`I'm starting to think that one of my neighbours, is a psychopath. <Actor.He_or_She> lives alone and doesn't socialize with anyone around. <Actor.He_or_She> would scream angrily like a maniac in the middle of the night and would smash the wall repeatedly if anyone around dares to make a noise. I swear to God: if there's a murder in the building, this <Actor.guy_or_girl> will be the first suspect on everyone's mind.`)
        option([
            {text: `Ignore`},
            {text: `Complain to landlord`},
            {text: `It actually turns me on ...`},
        ])
        if (0) {
            narrative(`Let's not risk pissing this maniac off and just bear <Actor.his_or_her> bullying. <Actor.He_or_She> could be dangerous.`)
            Player.masochist += random(0, 0.5)
            Player.mood -= random(0, 20)
        } else if (1) {
            narrative(`I didn't pay so much rent to live here and be tortured mentally by a psychopath next door. I need to talk to the landlord about this.`)
            Landlord = scene.getSpecific("Landlord")
            Landlord.dress()
            Landlord.show(2)
            Landlord.dialogue(`That's very disturbing. We take the peace of mind of our tenants seriously and will investigate this.`, `Sad`)
            narrative(`A few days later ...`)
            if (random(0, 100) < Player.interpersonal) {
                Landlord.dialogue(`I've asked the other tenants, who all expressed the same concern. Therefore, we have asked <Actor.name> to vacate <Actor.his_or_her> apartment immediately and find somewhere else to live. You can rest easy now ...`, `Happy`)
                Actor.removeNeighbour()
            } else {
                Landlord.dialogue(`Although there were other tenants who complained, we didn't find valid contractual reasons to evict <Actor.name> yet. I did talk to <Actor.him_or_her> though and <Actor.he_or_she> promised to stop this behaviour. Come to me again if it persists.`, `Sad`)
            }
            Player.masochist -= random(0, 1)
            Actor.rapportwithplayer -= random(0, 5)
            Actor.attractionToPlayer -= random(0, 5)
        } else {
            narrative(`To tell the truth ... this psychopathic behaviour kinda turns me on somehow. I just can't resist being dominated, bullied and fucked with mentally.`)
            Player.masochist += random(0, 2)
            Player.arousal += random(0, 40)
        }


        scene.timeout(500, "neighbour_psycho")
    })
})
module.exports = scene