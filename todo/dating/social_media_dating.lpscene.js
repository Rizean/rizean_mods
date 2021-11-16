// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\social_media_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'social_media_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion} = scene

    scene.what(["take_photos_MULTIPLE"])
    scene.where(["all"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.isWithCompanion() && CurrentCompanion.isDating())
    })


    scene.start(() => {
        let Admirer = scene.getPerson("true")
        let count = 0


        narrative(`Me and my <CurrentCompanion.boyfriend_or_girlfriend> just took a cute photo together. Should I share this on social media?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`I decided to go ahead and share the photo on my social media accounts. This certainly pleases <CurrentCompanion.name> as it clearly reminds my other admirers that I'm taken.`)
            Admirer = scene.getPerson("true")
            count = 0
            while (count < 20 && Admirer.isValid()) {
                if (!Admirer.isDating() && Admirer.attractionToPlayer > 0) {
                    Admirer.attractionToPlayer -= random(0, 2)
                }
                Admirer = scene.getPerson("true")
                count += 1
            }
            CurrentCompanion.attractionToPlayer += random(0, 3)
        } else {
            narrative(`I'm not a big fan of flaunting our relationship online really ...`)
        }


        scene.timeout(48, "social_media_dating")
    })
})
module.exports = scene