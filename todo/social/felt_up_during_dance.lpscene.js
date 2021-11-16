// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\social\felt_up_during_dance.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'felt_up_during_dance'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["Player.dance"])
    scene.where(["nightclub"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(!Player.isWithCompanion() && random(20, 300) < Player.attractiveness)
    })


    scene.start(() => {
        let Actor = scene.getPerson()
        narrative(`I was in my own little world on the dance floor when I suddenly felt someone's hand feeling me up.`)
        option([
            {text: `Pull away`},
            {text: `Keep dancing`},
        ])
        if (0) {
            narrative(`This is so inappropriate. I immediately stopped dancing and moved to another spot on the dancefloor, hopefully free of perverts.`)
        } else {
            Player.perversion += random(0, 0.25)
            narrative(`Well, I won't lie: I'm kinda enjoying this. Ignoring the hand, I kept dancing like nothing was happening.`)
            scene.$random(() => {
                Actor = scene.getPerson()
                Actor = scene.generatePersonTemporary([])
            })
            while (!Actor.isValid() || !Actor.isInterestedIn(Player)) {
                Actor = scene.generatePersonTemporary([])
                Actor.perversion += 30
            }
            Actor.makePermanent()
            Actor.dress()
            Actor.show(2)


            narrative(`Encouraged by my apparent consent, the owner of the groping hand eventually showed <Actor.himself_or_herself>.`)
            scene.option([
                {text: `Grind against <Actor.him_or_her>`, condition: Player.perversion > 10},
                {text: `Leave`},
            ])
            if (0) {
                Player.animatePair(Player, Actor, "Kissing")
                narrative(`<Actor.He_or_She> isn't too bad-looking I guess. I happily danced with <Actor.him_or_her>, very intimately, our bodies were practically caressing against each other.`)
                option([
                    {text: `Fuck <Actor.him_or_her>`},
                    {text: `Stop it there`},
                ])
                if (0) {
                    narrative(`It looks like someone is going to get very lucky tonight ...`)
                    narrative(`I led <Actor.him_or_her> by the hand to the bathroom. We soon started making out in one of the cubicles.`)
                    Player.perversion += random(0, 0.5)
                    scene.sex(Actor, Player)
                    Actor.show(2)


                    if (!Actor.isContactExchanged()) {
                        narrative(`Should I exchange numbers with this stranger I just hooked up with?`)
                        option([
                            {text: `Yes`},
                            {text: `No`},
                        ])
                        if (0) {
                            narrative(`We exchanged numbers and parted ways.`)
                            Player.exchangeContact(Actor)
                        } else {
                            narrative(`Why would I? It was just a fun crazy hookup. I couldn't care less about seeing the <Actor.guy_or_girl> again.`)
                        }
                    }
                } else {
                    narrative(`This is escalating a bit too quickly for my liking. I eventually moved away from <Actor.him_or_her>.`)
                }
            } else {
                narrative(`I think <Actor.he_or_she> has already got <Actor.his_or_her> fill tonight. I moved away.`)
            }
        }


        scene.timeout(1, "felt_up_during_dance")
    })
})
module.exports = scene