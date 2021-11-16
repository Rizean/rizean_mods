// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\colleague_lunch.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'colleague_lunch'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([11, 14])
    let Actor = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Colleague")
        $IF(Player.isInterestedIn(Actor) && Actor.isInterestedIn(Player))
    })
    scene.other(($IF) => {
        $IF()
    })


    scene.start(() => {
        Actor.dress()
        Actor.show()
        narrative(`I'm currently working on a project together with my colleague <Actor.name>.`)
        narrative(`Maybe I should invite <Actor.him_or_her> to go out for lunch today?`)
        option([
            {text: `Invite <Actor.him_or_her> for lunch`},
            {text: `No`},
        ])
        if (0) {
            scene.setBackground("restaurant")
            narrative(`I invited <Actor.name> out to a nearby restaurant for lunch.`)
            option([
                {text: `Stay professional`},
                {text: `Flirt`},
            ])
            if (0) {
                narrative(`Let's only discuss work-related stuff over this lunch.`)
                Actor.rapportwithplayer += 3
            } else {
                narrative(`I took this opportunity to flirt with <Actor.name>, who I've always fancied.`)
                Actor.attractionToPlayer += 3
                if (Actor.attractionToPlayer > 50 || Actor.perversion > 70) {
                    Actor.dialogue(`Look at you! Taking this opportunity to try to get close to and seduce your colleague? You know it's against company policy`)
                    Actor.dialogue(`... But I like it`)
                    Actor.dialogue(`Since you're so into me, why don't we have a bathroom quickie before returning to work. It's only what we both wanted.`)
                    option([
                        {text: `Fuck <Actor.name>`},
                        {text: `I only wanted to flirt ...`},
                    ])
                    if (0) {
                        scene.setBackground("shower")
                        scene.sex(Player, Actor)
                    }
                }
            }
            scene.setBackground("work")
            narrative(`Eventually we headed back to the office.`)
        }
        scene.timeout(200, "colleague_lunch")
    })


})
module.exports = scene