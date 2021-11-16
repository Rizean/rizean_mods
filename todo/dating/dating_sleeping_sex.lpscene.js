// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_sleeping_sex.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_sleeping_sex'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["sleep", " nap"])
    scene.where(["home"])
    scene.when([5, 12])
    let Actor = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Dating")
        $IF(Actor.attractionToPlayer > 0 && !Actor.isSameGender(Player))
    })
    scene.other(($IF) => {
        $IF(Player.isAtDatingHome())
    })


    scene.start(() => {
        Actor.show(2)
        scene.talkNonConsensual()
        scene.filter("Sleeping")
        if (Player.isMale()) {
            Player.closeEyes("true")
            Actor.dialogue(`Baby, you look so cute while you sleep. I couldn't help myself. You wouldn't mind if I fuck you in your sleep, would you?`, `Flirty`)
            narrative(`What is this? Is this a dream?`)
            option([
                {text: `Stay in your 'dream'`},
                {text: `Wake up and stop <Actor.name>`},
            ])
            if (0) {
                narrative(`If this is a dream, I never want to wake up ...`)
                Player.perversion += random(0, 0.25)
                Player.closeEyes("true")
                scene.sex(Player, Actor)
                Player.closeEyes("true")


                Actor.show(2)
                narrative(`Now that the sweet little dream is over, maybe it's time to wake up?`)
                option([
                    {text: `Wake up for round two`},
                    {text: `Get some extra sleep`},
                ])
                if (0) {
                    Player.closeEyes("false")
                    scene.talkNonConsensual()
                    scene.sex(Player, Actor)
                }
            } else {
                Player.closeEyes("false")
                Player.dialogue(`Sorry baby, but I'm not in the mood.`, `Sad`)
            }
        } else {
            Actor.closeEyes("true")
            narrative(`My <Actor.boyfriend_or_girlfriend> is still asleep, but I'm feeling really horny. Should I give <Actor.him_or_her> a morning surprise?`)
            option([
                {text: `Pleasure <Actor.name>`},
                {text: `Let the poor <Actor.man_or_woman> sleep`},
            ])
            if (0) {
                Player.perversion += random(0, 0.5)
                Actor.closeEyes("true")
                scene.sex(Actor, Player)


                Actor.show(2)
                Actor.closeEyes("true")
                if (random(0, 50) < Player.perversion - Player.sneak) {
                    Actor.closeEyes("false")
                    Actor.attractionToPlayer += random(0, 2)
                    Actor.dialogue(`Wow, this is a pleasant surprise: my <Player.boyfriend_or_girlfriend> taking care of my needs even while I'm asleep.`, `Flirty`)
                    option([
                        {text: `Ready for round two?`},
                        {text: `It's getting late. We should get ready.`},
                    ])
                    if (0) {
                        scene.talkNonConsensual()
                        scene.sex(Actor, Player)
                    }
                } else {
                    narrative(`I somehow managed to make <Actor.him_or_her> cum without waking <Actor.him_or_her> up! I can already imagine <Actor.his_or_her> surprise waking up later on.`)
                }
            } else {
                narrative(`Nah, <Actor.he_or_she> needs some rest. We'll do it another time.`)
            }
        }


        scene.timeout(96, "dating_sleeping_sex")
    })
})
module.exports = scene