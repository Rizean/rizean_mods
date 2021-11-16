// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\ask_for_raise.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'ask_for_raise'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Actor = scene.getSpecific("Boss")
        let Salary = Player.getSalary()
        if (scene.isTimingOut("ask_for_raise")) {
            narrative(`It's not a good idea to ask for a raise twice in 3 months.`)
        } else {
            Actor = scene.getSpecific("Boss")
            Actor.dress()
            Actor.show()
            narrative(`I'm starting to feel underpaid for my level of performance and contributions to the company. Maybe I should be direct with the boss and ask for a raise?`)
            option([
                {text: `Ask for a salary raise`},
                {text: `Too risky`},
            ])
            if (0) {
                scene.timeoutPrecise(2190, "ask_for_raise")
                narrative(`I decided to talk to my boss and raise my concern of being unfairly underpaid.`)
                if (random(0, 500) < Player.interpersonal + Player.jobperformance) {
                    narrative(`I managed to convince my boss to increase my salary.`)
                    Salary = Player.getSalary()
                    Salary *= random(1.1, 1.3)
                    Salary.setSalary()
                    scene.timeout(5000, "underpaid")
                    narrative(`This is great news, but should I show my appreciation to the boss even more?`)
                    scene.option([
                        {text: `Thank <Actor.name> with sex`, condition: Actor.isInterestedIn(Player) && (Actor.hadSex() || Actor.perversion > 50 || Actor.attractionToPlayer > 30)},
                        {text: `<Actor.He_or_She> wouldn't be interested anyway`},
                    ])
                    if (0) {
                        scene.sex(Actor, Player)
                    }
                } else {
                    narrative(`The discussion did not go well at all ... Not only did my boss reject my request outright, he was visibly upset.`)
                    option([
                        {text: `Offer to sleep with <Actor.him_or_her> for the raise`},
                        {text: `Give up`},
                    ])
                    if (0) {
                        if (Actor.hadSex() || Actor.attractionToPlayer > 40 || (Actor.perversion > 70 && Actor.isInterestedIn(Player))) {
                            Actor.dialogue(`Fine ... since you're so persistent ...`)
                            scene.sex(Actor, Player)
                            narrative(`I managed to 'convince' my boss to increase my salary.`)
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
            }
        }
    })


})
module.exports = scene