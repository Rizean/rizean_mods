// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\crime\strip_search_cms.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'strip_search_cms'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["all", " -home", " -prison", " -work"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.isFemale())
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        narrative(`I was going about my day when I was suddenly stopped by a female police officer.`)
        Actor = scene.generatePersonTemporary([])
        while (Actor.isMale()) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dressUniform("Police")
        Actor.show()
        Actor.dialogue(`Excuse me, citizen, that shop owner over there accuses you of shoplifting. You'll have to follow me to the nearest police station for a strip search ...`)
        narrative(`What!? This is ridiculous! I haven't even been inside that damn shop!`)
        option([
            {text: `Agree to the strip search`},
            {text: `Scare her off with my legal rights`},
        ])
        if (0) {
            narrative(`I'm innocent but I don't want to risk being arrested for obstruction of justice ...`)
            scene.setBackground("police")
            narrative(`Back in the police station, the strip search began`)
            scene.filter("Stripsearch")
            scene.sexNoAffair(Actor, Player)
            narrative(`The search found nothing and I was free to go, but did the cop go too far there? The whole thing didn't seem entirely by the books and she seemed to enjoy herself a bit too much touching all my private parts.`)
        } else {
            narrative(`I gave the cop an earful about my rights, clearly demonstrating that I wasn't any easy target to bully.`)
            narrative(`The cop eventually gave in and let me go.`)
        }


    })
    scene.timeout(200, "strip_search_cms")
})
module.exports = scene