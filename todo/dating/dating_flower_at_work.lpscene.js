// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\dating_flower_at_work.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_flower_at_work'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([9, 15])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(random(10, 200) < Dating.attractionToPlayer)
    })
    scene.other(($IF) => {
        $IF(Dating.isDominantSex(Player) || random(0, 100) < 1)
    })


    scene.start(() => {
        let Colleague = scene.getSpecific("Colleague")
        let count = 0


        narrative(`I was in the middle of my workday when my personal mobile suddenly rang, from an unsaved number.`)
        Player.dialogue(`Hi, it's <Player.name> speaking. Who's calling?`, `Happy`)
        narrative(`It's a call from a flower delivery company. My <Dating.boyfriend_or_girlfriend> <Dating.name> sent me flowers. Should I pick them up?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`I might as well, the flower delivery guy is already here ...`)
            narrative(`After a few minutes, I returned to the office with a bouquet of flowers. With that, I became the center of office gossip for the day. Some <Player.guys_or_girls> were jealous that they never got any gifts sent to work from their significant others. Meanwhile, by sending me flowers at work, <Dating.name> also succeeded in 'sending out the message' to any potentially interested workmates that I'm taken.`)
            Colleague = scene.getSpecific("Colleague")
            count = 0
            while (Colleague.isValid() && count < 10) {
                count += 1
                if (Colleague.isInterestedIn(Player)) {
                    Colleague.attractionToPlayer -= random(0, 5)
                }
                Colleague = scene.getSpecific(Colleague)
            }
        } else {
            narrative(`It's quite inappropriate to return to work with a bouquet of flowers. That would be like asking to be the center of gossip for the day. I decided not to pick the flowers up. This will no doubt upset <Dating.name>.`)
            Dating.attractionToPlayer -= random(0, 5)
        }


        scene.timeout(200, "dating_flower_at_work")
    })


})
module.exports = scene