// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\gym\sensual_massage.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'sensual_massage'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["get_a_massage"])
    scene.where(["all"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion())
    })


    scene.start(() => {
        let Actor = scene.generatePerson()


        Actor = scene.generatePerson()
        Actor.dress()
        Actor.show(2)
        narrative(`I decided to go for a massage today to release some stress. I was greeted by my <Actor.masseur_or_masseuse>, <Actor.name>.`)
        narrative(`I stripped down and lied on my stomach with a towel covering my ass and upper thighs.`)
        Player.strip()


        if (Actor.perversion + Actor.attractionToPlayer > random(25, 75)) {
            narrative(`The first portion of the massage went without incidents. However, after a while, <Actor.name> told me that <Actor.he_or_she> noticed how tense my lower body was and asked if <Actor.he_or_she> could pull off the towel to massage my bottom.`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (0) {
                Player.dialogue(`No, I don't mind at all.`, `Happy`)
                narrative(`<Actor.name> quickly took off my towel and started massaging my lower cheeks`)
                option([
                    {text: `Spread my legs`},
                    {text: `Stay still`},
                ])
                if (0 || Actor.perversion + Actor.attractionToPlayer > random(50, 100)) {
                    narrative(`All of a sudden, <Actor.he_or_she> reached down to massage my crotch!`)
                    option([
                        {text: `Storm out`},
                        {text: `Give <Actor.him_or_her> my number`},
                        {text: `Enjoy my 'happy ending'`, condition: scene.isModEnabled("vin_VanillaPorn") && Player.perversion > 50},
                    ])
                    if (0) {
                        Player.dialogue(`Hey pervert, what the fuck do you think you're doing? This isn't a porno!`, `Furious`)
                        narrative(`I stormed off and complained to the manager, threatening them with a rape lawsuit if <Actor.name> wasn't fired immediately.`)
                        Actor.rapportwithplayer -= 100
                        Actor.attractionToPlayer -= 100
                        Player.masochist -= random(0, 1)
                    } else if (1) {
                        narrative(`I enjoyed <Actor.his_or_her> hands feeling me up but didn't want to do something too crazy right there.`)
                        narrative(`Instead, I waited it out until the end of this very sensual massage to give <Actor.name> my personal number. <Actor.He_or_She> was delighted to have it.`)
                        Player.exchangeContact(Actor)
                        Player.perversion += random(0, 0.25)
                    } else {
                        narrative(`It was obvious what the cute <Actor.masseur_or_masseuse> really wanted. And I wanted it too, right here!`)
                        narrative(`<Actor.His_or_Her> stimulating got more and more intense and soon enough, I got up and started making out with the lucky <Actor.masseur_or_masseuse>.`)
                        scene.sex(Actor, Player)
                        Player.perversion += random(0, 1)
                    }
                } else {
                    narrative(`Despite me being completely naked without even a piece of cloth covering my body, <Actor.name> remained completely professional and never tried anything funny for the rest of the massage.`)
                }
            } else {
                narrative(`I told <Actor.him_or_her> that it was not neccessary. <Actor.He_or_She> had no choice but went back to a regular massage with no more daring suggestions.`)
            }
        } else {
            narrative(`<Actor.name> was thoroughly professional and I enjoyed a very relaxing massage.`)
        }


    })
    scene.timeout(48, "sensual_massage")
})
module.exports = scene