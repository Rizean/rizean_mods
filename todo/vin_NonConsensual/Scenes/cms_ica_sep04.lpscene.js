// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_NonConsensual\Scenes\cms_ica_sep04.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'cms_ica_sep04'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["sports_centre"])
    scene.when([8, 20])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 1 && Player.masochist > 50)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        Actor.dress()
        Actor.show()
        narrative(`I was at the gym's locker room alone and this random <Actor.guy_or_girl> comes in having finished a workout, looks at me and declares:`)
        Actor.dialogue(`You look nice as a post workout snack!`)
        Actor.dialogue(`I'm going to fuck you!`)
        Actor.dialogue(`Your only choices are 'yes' or 'screaming'. I love the screamers!`)
        option([
            {text: `Yes`},
            {text: `Scream`},
            {text: `Fight them`},
        ])
        if (0) {
            scene.sex(Player, Actor)
        } else if (1) {
            narrative(`I screamed out for help!`)
            if (random(0, 100) < 80) {
                narrative(`Unfortunately no-one came to help ...`)
                if (Actor.isFemale() && Player.isMale()) {
                    scene.filter("AggressiveFM")
                } else {
                    scene.filter("Aggressive")
                }
                scene.talkNonConsensual()
                scene.sexNoAffair(Actor, Player)
            } else {
                narrative(`Thankfully, the gym staff came in and saved the day.`)
            }
        } else {
            narrative(`I tried to fight my way out!`)
            if (random(0, 100) > Player.martial) {
                narrative(`Unfortunately <Actor.he_or_she> was too strong for me ...`)
                if (Actor.isFemale() && Player.isMale()) {
                    scene.filter("AggressiveFM")
                } else {
                    scene.filter("Aggressive")
                }
                scene.talkNonConsensual()
                scene.sexNoAffair(Actor, Player)
            } else {
                narrative(`Thankfully, I managed to fight <Actor.him_or_her> off.`)
            }
        }
    })
    scene.timeout(500, "cms_ica_sep04")
})
module.exports = scene