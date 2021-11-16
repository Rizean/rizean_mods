// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\ask_for_promotion.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'ask_for_promotion'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Actor = scene.getSpecific("Boss")
        let Success = false
        let Salary = Player.getSalary()
        if (scene.isTimingOut("ask_for_promotion")) {
            narrative(`It's too early since I last asked for a promotion. I should wait some more time before asking again.`)
            narrative(`(Asking for promotion has a 2-week timeout if failed and 2-month timeout if succeeded)`)
        } else {
            Actor = scene.getSpecific("Boss")
            Actor.dress()
            Actor.show()
            narrative(`I'm starting to feel my current title and salary doesn't match my level of performance and contributions to the company. Maybe I should be direct with the boss and ask for a promotion?`)
            option([
                {text: `Ask for a promotion`},
                {text: `Too risky`},
            ])
            if (0) {
                scene.timeoutPrecise(336, "ask_for_raise")
                Success = false
                narrative(`I decided to talk to my boss and asked for a promotion.`)
                if (random(0, 200) < Actor.rapportwithplayer + Player.jobperformance) {
                    Success = true
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
                            Success = true
                        } else {
                            Actor.dialogue(`How dare you suggest something like this? Get out of my office!`)
                            Player.jobperformance -= random(0, 10)
                        }
                    } else {
                        Player.jobperformance -= random(0, 5)
                    }
                }


                if (Success) {
                    narrative(`I managed to convince my boss to give me a promotion.`)
                    Salary = Player.getSalary()
                    Salary *= random(1.3, 1.5)
                    Salary.setSalary()
                    Player.jobexperience += 20
                    scene.timeoutPrecise(1440, "ask_for_promotion")
                } else {
                    narrative(`In the end, I failed to convince my boss to give me a promotion. I should wait a couple of weeks before even mentioning this issue again.`)
                }
            }
        }
    })


})
module.exports = scene