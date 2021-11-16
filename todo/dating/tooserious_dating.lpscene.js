// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\tooserious_dating.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'tooserious_dating'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Dating = scene.getSpecific("Dating")
    scene.who(($IF) => {
        Dating = scene.getSpecific("Dating")
        $IF(Dating.attractionToPlayer > random(70, 100) && Dating.interpersonal < random(0, 100) * random(0, 1) * random(0, 1))
    })
    scene.other(($IF) => {
        $IF(!Player.isPlayerMarried())
    })


    scene.start(() => {
        scene.secondScreenIfHidden(Dating)
        Dating.dress()
        Dating.show(2)


        narrative(`<Dating.name> is totally in love with me, but sometimes <Dating.he_or_she> is just too ... serious. <Dating.He_or_She> constantly mentions marriages and having children, even naming the imaginary children that we would have together!`)
        option([
            {text: `Play along`},
            {text: `Tell <Dating.him_or_her> it's too early`},
        ])
        if (0) {
            narrative(`I like it that <Dating.name> is so serious about me. Besides, if this relationship continues on like this, maybe we will end up going all the way ...`)
            Dating.attractionToPlayer += random(0, 2)
        } else {
            narrative(`I told <Dating.name> that it was too early in our relationship to be thinking about marriages and children.`)
            Dating.attractionToPlayer -= random(0, 2)
        }


        scene.timeout(200, "tooserious_dating")
    })
})
module.exports = scene