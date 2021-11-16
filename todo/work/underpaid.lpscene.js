// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\underpaid.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'underpaid'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([8, 20])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.1 * Player.jobperformance)
    })


    scene.start(() => {
        let Salary = Player.getSalary()
        let Actor = scene.getSpecific("Boss")
        narrative(`Salaries are supposed to be confidential, but often they are not. I recently found out that one of my colleagues, who has the same title and experience as me, is actually paid quite a bit more than myself.`)
        option([
            {text: `Demand a fair salary`},
            {text: `Maybe not`},
        ])
        if (0) {
            narrative(`I decided to talk to my boss and raise my concern of being unfairly underpaid.`)
            if (random(0, 500) < Player.interpersonal + Player.jobperformance) {
                narrative(`I managed to convince my boss to match my salary with the colleague.`)
                Salary = Player.getSalary()
                Salary *= random(1.1, 1.3)
                Salary.setSalary()
                scene.timeout(5000, "underpaid")
            } else {
                Actor = scene.getSpecific("Boss")
                Actor.dress()
                Actor.show()
                narrative(`The discussion did not go well at all ... Not only did my boss reject my request outright, he was visibly upset.`)
                option([
                    {text: `Offer to sleep with <Actor.him_or_her> for the raise`},
                    {text: `Give up`},
                ])
                if (0) {
                    if (Actor.hadSex() || Actor.attractionToPlayer > 40 || (Actor.perversion > 70 && Actor.isInterestedIn(Player))) {
                        Actor.dialogue(`Fine ... since you're so persistent ...`)
                        scene.sex(Actor, Player)
                        narrative(`I managed to 'convince' my boss to match my salary with the colleague.`)
                        Salary = Player.getSalary()
                        Salary *= random(1.1, 1.3)
                        Salary.setSalary()
                        scene.timeout(5000, "underpaid")
                    } else {
                        Actor.dialogue(`How dare you suggest something like this? Get out of my office!`)
                        Player.jobperformance -= random(0, 10)
                    }
                } else {
                    Player.jobperformance -= random(0, 5)
                }
            }
        } else {
            narrative(`That's not a good idea. Companies don't give in to staff demand for higher salaries that easily. All I would achieve is upsetting my boss.`)
        }


    })
    scene.timeout(500, "underpaid")


})
module.exports = scene