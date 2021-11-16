// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\fraternity_peep.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'fraternity_peep'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["fraternity"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Fraternity")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Fraternity")
        $IF(!Actor.isDating() && !Actor.isAsexual() && random(50, 300) < Actor.perversion)
    })
    scene.other(($IF) => {
        $IF(Player.isAtHome())
    })


    scene.start(() => {
        let Actor2 = Actor.getRelatedPerson("Dating", "Spouses")


        narrative(`What's that sound? If it is what I think it is, then <Actor.brother_or_sister> <Actor.name> is getting very intimate with a lover. They are moaning very loudly.`)
        option([
            {text: `Ignore`},
            {text: `Complain`, condition: Player.masochist < 50},
            {text: `Peep`},
        ])
        if (0) {
            narrative(`Good for <Actor.him_or_her> I guess. Sex is an essential part of Greek life!`)
        } else if (1) {
            Player.dialogue(`For god's sake, keep it down. I'm trying to study here.`, `Angry`)
            Player.masochist -= random(0, 1)
        } else {
            Player.perversion += random(0, 0.5)
            narrative(`My curiousity got the better of me and I just had to see this ...`)
            Player.karma -= 1
            scene.sneakGame()
            if (random(0, 70) < Player.sneak) {
                narrative(`Luckily, <Actor.name> didn't quite close <Actor.his_or_her> door completely shut - probably too busy with fooling around with <Actor.his_or_her> partner to pay attention to the door. With my sneaking talent, I managed to get a pretty good view of what was going on ...`)
                Actor2 = Actor.getRelatedPerson("Dating", "Spouses")
                if (!Actor2.isValid()) {
                    Actor2 = scene.generatePersonTemporary([])
                    while (!Actor.isInterestedIn(Actor2)) {
                        Actor2 = scene.generatePersonTemporary([])
                    }
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
                    Actor.dialogue(`Of course, my <Player.brother_or_sister>. Come on and join us then, what are you waiting for?`, `Flirty`)
                    scene.sex(Actor, Actor2, Player)
                    Actor.rapportwithplayer += random(0, 10)
                    Actor.attractionToPlayer += random(0, 10)
                    Player.perversion += random(0, 1)
                } else {
                    narrative(`I should get out of here before I get caught.`)
                }
            } else {
                narrative(`Unfortunately for me, their doors were fully closed and all the curtains were pulled down. There's no way I can get a look in ...`)
            }
        }


    })
    scene.timeout(100, "fraternity_peep")
})
module.exports = scene