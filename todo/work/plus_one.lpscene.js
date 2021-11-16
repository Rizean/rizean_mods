// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\plus_one.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'plus_one'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([17, 20])
    let Colleague1 = scene.getSpecific("Colleague")
    let Colleague2 = scene.getSpecific("Colleague")
    let Colleague3 = scene.getSpecific("Colleague")
    let Colleague4 = scene.getSpecific("Colleague")
    let Colleague5 = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Colleague1 = scene.getSpecific("Colleague")
        Colleague2 = scene.getSpecific("Colleague")
        Colleague3 = scene.getSpecific("Colleague")
        Colleague4 = scene.getSpecific("Colleague")
        Colleague5 = scene.getSpecific("Colleague")
    })
    scene.other(($IF) => {
        $IF(random(0, 100) < 0.05 * Player.interpersonal)
    })


    scene.start(() => {
        scene.setBackground("work")
        Colleague1.dress()
        Colleague2.dress()
        Colleague3.dress()
        Colleague4.dress()
        Colleague5.dress()


        narrative(`There's a 'plus one' company event this evening, where everyone is asked to bring their significant other to the dinner. Not bringing one is basically the same as hanging a 'Single' sign in front of you ...`)
        option([
            {text: `Go alone`},
            {text: `Bring a date`, condition: Player.isDating()},
            {text: `Don't go`},
        ])
        if (0) {
            scene.setBackground("restaurant")
            narrative(`I decided to go alone, expecting plenty of attention from the singles from work.`)
            if (Colleague1.attractionToPlayer > random(0, 25) && !Colleague1.isContactExchanged() && !Colleague1.hasRelationship("Spouses", "Dating")) {
                Colleague1.show(2)
                narrative(`<Colleague1.name> was pleasantly surprised that I was alone and asked for my number?`)
                option([
                    {text: `Yes`},
                    {text: `No`},
                ])
                if (0) {
                    Player.exchangeContact(Colleague1)
                }
            }


            if (Colleague2.attractionToPlayer > random(0, 25) && !Colleague2.isContactExchanged() && !Colleague2.hasRelationship("Spouses", "Dating")) {
                Colleague2.show(2)
                narrative(`<Colleague2.name> was pleasantly surprised that I was alone and asked for my number?`)
                option([
                    {text: `Yes`},
                    {text: `No`},
                ])
                if (0) {
                    Player.exchangeContact(Colleague2)
                }
            }


            if (Colleague3.attractionToPlayer > random(0, 25) && !Colleague3.isContactExchanged() && !Colleague3.hasRelationship("Spouses", "Dating")) {
                Colleague3.show(2)
                narrative(`<Colleague3.name> was pleasantly surprised that I was alone and asked for my number?`)
                option([
                    {text: `Yes`},
                    {text: `No`},
                ])
                if (0) {
                    Player.exchangeContact(Colleague3)
                }
            }


            if (Colleague4.attractionToPlayer > random(0, 25) && !Colleague4.isContactExchanged() && !Colleague4.hasRelationship("Spouses", "Dating")) {
                Colleague4.show(2)
                narrative(`<Colleague4.name> was pleasantly surprised that I was alone and asked for my number?`)
                option([
                    {text: `Yes`},
                    {text: `No`},
                ])
                if (0) {
                    Player.exchangeContact(Colleague4)
                }
            }


            if (Colleague5.attractionToPlayer > random(0, 25) && !Colleague5.isContactExchanged() && !Colleague5.hasRelationship("Spouses", "Dating")) {
                Colleague5.show(2)
                narrative(`<Colleague5.name> was pleasantly surprised that I was alone and asked for my number?`)
                option([
                    {text: `Yes`},
                    {text: `No`},
                ])
                if (0) {
                    Player.exchangeContact(Colleague5)
                }
            }


            narrative(`Eventually, the company dinner ended and we all went home.`)
        } else if (1) {
            scene.setBackground("restaurant")
            narrative(`I took my 'plus one', which sent a clear message to the would-be admirers. The dinner ended up being quite uneventful.`)
        } else {
            narrative(`I found some excuses to not go to the event.`)
        }


    })
    scene.timeout(500, "plus_one")
})
module.exports = scene