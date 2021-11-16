// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\cleaner_locker.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'cleaner_locker'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_hourly"])
    scene.where(["sports_centre"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 1)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        narrative(`I was cleaning in what I thought was an empty locker room, when suddenly someone stepped out of the shower completely naked.`)
        Actor = scene.generatePersonTemporary([])
        Actor.show(2)
        scene.option([
            {text: `Check <Actor.him_or_her> out`, condition: Player.perversion > 5},
            {text: `Look away`},
        ])
        if (0) {
            narrative(`A peek wouldn't hurt ... People who go to gyms probably enjoy others looking at their bodies anyway.`)
            Player.perversion += random(0, 0.25)
            if (random(50, 125) < Actor.perversion + Actor.attractionToPlayer) {
                Actor.dialogue(`Getting an eyeful, aren't you? You know, there's no-one else here - you can do a lot more than watching.`, `Flirty`)
                scene.option([
                    {text: `Have sex`, condition: scene.isModEnabled("vin_VanillaPorn") && Player.perversion > 30},
                    {text: `Turn <Actor.him_or_her> down.`},
                ])
                if (0) {
                    narrative(`It must be my lucky day!`)
                    scene.sex(Player, Actor)
                    Player.perversion += random(0, 0.5)
                } else {
                    Player.dialogue(`Sorry, I'm flattered by the offer ... but I don't want to lose my job.`, `Sad`)
                }
            } else {
                Actor.dialogue(`Hey! Are you staring at me? Pervert, I'll tell your manager all about this.`, `Angry`)
                Actor.hide()
                narrative(`And just like that, I got a heavy fine and was lucky to keep my job.`)
                Player.money -= random(50, 250)
            }
        } else {
            narrative(`I kept my head down and continued cleaning, trying to stay as professional as I could.`)
        }
    })
    scene.timeout(48, "cleaner_locker")
})
module.exports = scene