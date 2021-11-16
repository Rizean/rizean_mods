// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\hourly\bartender_spices.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'bartender_spices'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work_hourly"])
    scene.where(["bar", " pub", " nightclub"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 10000) < 1)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Actor2 = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        Actor.dress()
        Actor.show(2)
        Actor.dialogue(`Could I have a gin and tonic please?`, `Happy`)
        Player.dialogue(`Of course. One moment please ...`, `Happy`)
        Actor.hide()
        narrative(`I was preparing the drink when I felt a tap on my shoulder.`)
        Actor2 = scene.generatePersonTemporary([])
        Actor2.dress()
        Actor2.show(2)
        Actor2.dialogue(`Listen ... I'll give you all this cash if you just put this into <Actor.his_or_her> cocktail.`, `Evil`)
        narrative(`The shady <Actor2.man_or_woman> showed me a packet of some mysterious powder, and a whole lot of cash.`)
        option([
            {text: `Take the money`},
            {text: `Decline`},
            {text: `Expose <Actor2.him_or_her>`},
        ])
        if (0) {
            narrative(`This might make me an accomplice in a horrible crime, but I can't turn down that much money ...`)
            Player.karma -= 10
            Player.money += random(100, 1000)
            narrative(`I mixed in the mysterious powder with the gin and tonic and gave it to the <Actor.guy_or_girl>. I tried not to think about the consequences of my action ...`)
        } else if (1) {
            Player.dialogue(`Sorry, I can't do that ...`, `Sad`)
            Player.masochist += random(0, 0.5)
            narrative(`My conscience didn't allow me to do it, but I didn't quite have the courage to expose this shady <Actor2.guy_or_girl> either. For all I care, <Actor2.he_or_she> could be dangerous.`)
            narrative(`I hope that another bartender won't be tempted by the money.`)
        } else {
            Player.karma += 5
            Player.dialogue(`Everyone! We have a date rapist here! This <Actor2.guy_or_woman> tried to spike someone's drink.`, `Furious`)
            Player.masochist -= random(0, 0.5)
            narrative(`The crowd immediately surrounded the shady <Actor2.guy_or_girl>, before the cops arrived and arrested <Actor2.him_or_her>`)
            Actor2.hide()
            Actor.show(2)
            Actor.dialogue(`Oh my god! You saved me. I don't know how to thank you ...`, `Happy`)
            option([
                {text: `Ask for <Actor.his_or_her> number`},
                {text: `Say goodbye`},
            ])
            if (0) {
                Actor.makePermanent()
                Actor.attractionToPlayer += 30
                Actor.rapportwithplayer += 30
                narrative(`<Actor.name> gladly gave <Actor.his_or_her> savior <Actor.his_or_her> number.`)
                Player.exchangeContact(Actor)
            } else {
                Player.dialogue(`It's okay. It's only my duty to prevent harm to our customer.`, `Happy`)
            }
        }


    })
    scene.timeout(1000, "bartender_spices")
})
module.exports = scene