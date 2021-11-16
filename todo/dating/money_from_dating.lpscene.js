// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\money_from_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'money_from_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        $IF(Dating = scene.getSpecific("Dating"))
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && Player.money < 0)
    })


    scene.start(() => {


        narrative(`I have been struggling financially recently. Maybe I should ask <Dating.name> for help?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            Dating.dress()
            Dating.show(2)
            if (random(0, 200) < Dating.intelligence + Dating.interpersonal + Dating.attractionToPlayer) {
                Dating.dialogue(`Of course, baby. Here, I'll transfer the money you need into your account right away. My money is your money!`, `Happy`)
                Player.money += random(500, 3000)
            } else {
                Dating.dialogue(`I'm sorry, baby. I'd love to help you out, but I'm short on money myself ...`, `Sad`)
            }


            if (Player.isDominantSex(Dating)) {
                Dating.attractionToPlayer -= random(0, 10)
            }
        } else {
            narrative(`No, I can't do that. I'm an indepedent <Player.man_or_woman>. I shouldn't have to rely on my <Dating.boyfriend_or_girlfriend> to survive.`)
            Player.karma += 2.5
        }


        scene.timeout(500, "money_from_dating")
    })
})
module.exports = scene