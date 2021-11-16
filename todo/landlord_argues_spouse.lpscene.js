// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Netori\Scenes\landlord_argues_spouse.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'landlord_argues_spouse'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let [Actor0, Actor1] = scene.getRelatedPeople("Spouses", "Dating")
    scene.who(($IF) => {
        Actor0 = scene.getRelatedPeople("Spouses", "Dating")
        $IF(Actor0.isLandlord() && !Actor1.isRelative() && Actor1.isInterestedIn(Player) && random(0, 100) * random(0, 1) > Actor0.interpersonal && Actor1.rapportwithplayer > 0)
    })
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion())
    })


    scene.start(() => {
        Actor0.dress()
        Actor1.dress()
        Actor0.show(2)
        Actor1.show(3)
        Actor0.dialogue(`...`, `Furious`)
        Actor1.dialogue(`...`, `Furious`)
        narrative(`My <Actor0.landlord_or_landlady> is having a fight with <Actor0.his_or_her> <Actor1.husband_or_wife> again ... At this rate, they won't last.`)
        Actor0.dialogue(`Fine, I'm leaving!`, `Furious`)
        Actor0.hide()
        narrative(`And just like that, my <Actor0.landlord_or_landlady> stormed off in anger, leaving <Actor1.name> behind bawling <Actor1.his_or_her> eyes out.`)
        option([
            {text: `Console <Actor1.name>`},
            {text: `Say nothing`},
        ])
        if (0) {
            narrative(`I felt sorry for the poor <Actor1.guy_or_girl>. My <Actor0.landlord_or_landlady> was probably in the wrong here.`)
            narrative(`After some soothing words, I managed to stop <Actor1.name>'s tears, but <Actor1.he_or_she> is now leaning on my shoulder - which isn't the sight I would want my <Actor0.landlord_or_landlady> to come back to ...`)
            Actor1.dialogue(`You would be the perfect <Player.husband_or_wife>.`, `Sad`)
            Player.animatePair(Player, "Actor1", "Kissing")
            Actor1.dialogue(`...`, `Kiss`)
            narrative(`Then all of a sudden, <Actor1.name> kissed me. Things are getting very heated ...`)
            option([
                {text: `Let it happen`},
                {text: `Put an end to this`},
            ])
            if (0) {
                Actor1.attractionToPlayer += random(0, 10)
                narrative(`Looks like <Actor1.name> wants some sweet revenge by sleeping with one of <Actor1.his_or_her> <Actor0.husband_or_wife>'s tenants, and I cannot help but be complicit. My <Actor0.landlord_or_landlady> only has <Actor0.himself_or_herself> to blame.`)
                scene.sex(Player, "Actor1")
                Player.perversion += random(0, 1)
                Player.masochist -= random(0, 5)
            } else {
                narrative(`This has gone way too far. My <Actor0.landlord_or_landlady> would kick me out of the place if <Actor0.he_or_she> comes back to find us like this.`)
            }
        } else {
            narrative(`It's none of my business. All couples have arguments from time to time.`)
        }
    })
    scene.timeout(500, "landlord_argues_spouse")
})
module.exports = scene