// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\social\dating_app.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_app'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["PC"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 2000) < Player.perversion + Player.intelligence)
    })


    scene.start(() => {
        let count = 0
        let Actor = scene.generatePerson()
        narrative(`I've got some spare time. I could play around on a dating app ...`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            count = 0
            while (count < Player.attractiveness * random(0.01, 0.1)) {
                Actor = scene.generatePerson()
                Actor.dress()
                Actor.show(2)
                narrative(`What should I do?`)
                option([
                    {text: `Swipe right`},
                    {text: `Swipe left`},
                ])
                if (0) {
                    narrative(`Let's hope <Actor.he_or_she> also swipes right.`)
                    narrative(`A while later ...`)
                    if (random(0, 50) < Actor.attractionToPlayer) {
                        narrative(`And ... it's a match. Should I exchange numbers with <Actor.him_or_her> so that we can go on a date?`)
                        option([
                            {text: `Yes`},
                            {text: `No`},
                        ])
                        if (0) {
                            narrative(`We chat for a bit before exchanging contacts hopefully to meet each other offline.`)
                            Player.exchangeContact(Actor)
                        } else {
                            narrative(`On second thought, <Actor.he_or_she> only looked good in that one photo.`)
                        }
                    } else {
                        narrative(`Still nothing ... <Actor.he_or_she> didn't find me attractive then.`)
                    }
                } else {
                    narrative(`Nah, not my type.`)
                }
                Actor.hide()
                count += 1
            }
            narrative(`That's enough mate surfing for today!`)
        } else {
            narrative(`Dating apps are a waste of time. I'd rather go on a date with someone I met in real life.`)
        }


    })
    scene.timeout(48, "dating_app")
})
module.exports = scene