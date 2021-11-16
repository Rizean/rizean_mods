// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_visit.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_visit'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["home"])
    scene.when([18, 22])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(random(0, 200) < Dating.perversion + Dating.attractionToPlayer)
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && Player.isAtHome() && Player.datingHasHome())
    })


    scene.start(() => {
        narrative(`I was at home when I heard a knock on the door.`)
        Dating.dress()
        Dating.show(2)
        Dating.dialogue(`Baby, it's me. Can I come in?`, `Happy`)
        option([
            {text: `Invite <Dating.him_or_her> in`},
            {text: `Excuse yourself`},
        ])
        if (0) {
            Player.dialogue(`Of course baby, you're welcome here anytime - my home is your home. I'm coming ...`, `Happy`)
            narrative(`I let <Dating.name> inside the apartment and we proceeded to spend the evening together. It's getting late now, however, and I need to decide my next move.`)
            option([
                {text: `Invite <Dating.him_or_her> to bed`},
                {text: `Ask <Dating.him_or_her> to leave`},
            ])
            if (0) {
                Dating.dialogue(`Of course, how can I turn down someone as sexy as you?`, `Flirty`)
                scene.sex(Player, Dating)
                Dating.show(2)
                Dating.attractionToPlayer += random(0, 2)
                narrative(`After sex, we took a shower together and went to sleep, cozying up to each other all night.`)
            } else {
                Player.dialogue(`Baby, it's been fun. But I'm really tired now and I need to get up early in the morning for work. Do you mind ...`, `Sad`)
                Dating.dialogue(`Of course not, baby. I was planning to head out soon anyway. Have a good night, sweet.`, `Happy`)
            }
        } else {
            Player.dialogue(`Sorry babe, you caught me at a bad time. I'm heading out to something important in a minute or two. Come back tomorrow.`, `Sad`)
            Dating.dialogue(`It's alright, I guess. I'll just come back another day.`, `Sad`)
            Dating.attractionToPlayer -= random(0, 2)
        }


        scene.timeout(24, "dating_visit")
    })
})
module.exports = scene