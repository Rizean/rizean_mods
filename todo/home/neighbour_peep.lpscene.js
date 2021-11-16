// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\neighbour_peep.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'neighbour_peep'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Neighbour")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Neighbour")
        $IF(!Actor.isAsexual() && random(50, 500) < Actor.perversion)
    })
    scene.other(($IF) => {
        $IF(Player.isAtHome())
    })


    scene.start(() => {
        let Actor2 = Actor.getRelatedPerson("Dating", "Spouses")


        narrative(`What's that sound? If it is what I think it is, then my neighbour is getting very intimate with a lover. They are moaning very loudly.`)
        option([
            {text: `Ignore`},
            {text: `Complain`, condition: Player.masochist < 50},
            {text: `Peep`},
        ])
        if (0) {
            narrative(`Good for <Actor.him_or_her> I guess. I can't ban my neighbours from sex!`)
        } else if (1) {
            Player.dialogue(`For god sake, keep it down. Do you want the entire building to know what you're up to?`, `Angry`)
            Actor.rapportwithplayer -= random(0, 5)
            Player.masochist -= random(0, 1)
        } else {
            Player.perversion += random(0, 0.5)
            narrative(`My curiousity got the better of me and I just had to see this ...`)
            Player.karma -= 1
            scene.sneakGame()
            if (random(0, 100) < Player.sneak) {
                narrative(`Luckily, my neighbour didn't quite close <Actor.his_or_her> door completely shut - probably too busy with fooling around with <Actor.his_or_her> partner to pay attention to the door. With my sneaking talent, I managed to get a pretty good view of what was going on ...`)
                Actor2 = Actor.getRelatedPerson("Dating", "Spouses")
                if (!Actor2.isValid()) {
                    Actor2 = scene.generatePersonTemporary([])
                    while (!Actor.isInterestedIn(Actor2)) {
                        Actor2 = scene.generatePersonTemporary([])
                    }
                    Actor2.makePermanent()
                    scene.addNpcRelationship("Dating", Actor, Actor2)
                }
                scene.sex(Actor, Actor2)
                Player.arousal += random(0, 30)
                Actor.show(2)
                Actor2.show(3)
                Player.show(0)
                narrative(`That was hot. But it looks like they're already ready for another round ...`)
                option([
                    {text: `Offer to join them`},
                    {text: `Enough`},
                ])
                if (0) {
                    Player.dialogue(`Looks like you guys are having some fun there? Mind if I join?`, `Flirty`)
                    if (random(30, 100) < Actor.rapportwithplayer || random(30, 100) < Actor.attractionToPlayer) {
                        Actor.dialogue(`I didn't realize how much of a pervert my neighbour is ... Come on and join us then, what are you waiting for?`, `Flirty`)
                        scene.sex(Actor, Actor2, Player)
                        Actor.rapportwithplayer += random(0, 10)
                        Actor.attractionToPlayer += random(0, 10)
                        Player.perversion += random(0, 1)
                    } else {
                        Actor.dialogue(`What the fuck are you doing here, peeping Tom? Get out or I'll call the police.`, `Angry`)
                        Actor.rapportwithplayer -= random(0, 3)
                    }
                } else {
                    narrative(`I should get out of here before I get caught.`)
                }
            } else {
                narrative(`Unfortunately for me, their doors were fully closed and all the curtains were pulled down. There's no way I can get a look in ...`)
            }
        }


    })
    scene.timeout(96, "neighbour_peep")
})
module.exports = scene