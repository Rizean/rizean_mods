// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\neighbour_domestic_violence.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'neighbour_domestic_violence'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Neighbour")
    let SO = Actor.getRelatedPerson("Dating", "Spouses")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Neighbour")
        SO = Actor.getRelatedPerson("Dating", "Spouses")
        $IF((SO.martial - SO.masochist > random(100, 200) && Actor.masochist - Actor.martial > random(50, 100)) || (Actor.martial - Actor.masochist > random(100, 200) && SO.masochist - SO.martial > random(50, 100)))
    })
    scene.other(($IF) => {
        $IF(Player.isAtHome())
    })


    let Perp = SO
    Perp = SO
    let Victim = Actor
    Victim = Actor
    if (Actor.masochist < SO.masochist) {
        Perp = Actor
        Victim = SO
    }


    let SORefer = "<SO.boyfriend_or_girlfriend>"
    SORefer = "<SO.boyfriend_or_girlfriend>"
    let VictimCallPerp = "<Perp.boyfriend_or_girlfriend>"
    VictimCallPerp = "<Perp.boyfriend_or_girlfriend>"
    if (Actor.isMarried()) {
        SORefer = "<SO.husband_or_wife>"
        VictimCallPerp = "<Perp.husband_or_wife>"
    }
    if (Actor.isSameGender("Dating")) {
        SORefer = "partner"
        VictimCallPerp = "partner"
    }


    scene.start(() => {
        SO.dress()
        SO.show(2)
        Actor.dress()
        Actor.show(3)


        narrative(`I was walking towards my apartment when I saw my neighbour <Actor.name> and <Actor.his_or_her> <SORefer> <SO.name>. To my dismay, <Perp.name> was hitting <Victim.name> ...`)
        Perp.dialogue(`You bitch! How dare you text your ex?`, `Furious`)
        Victim.dialogue(`Please stop. It hurts. You're going to kill me. I would never text my ex again ...`, `Crying`)
        narrative(`Surely I must do something!`)
        option([
            {text: `Ignore`},
            {text: `Step in`},
            {text: `Call the cops`},
        ])
        if (0) {
            narrative(`It's their business. Let's not risk getting caught in a crossfire.`)
            Player.masochist += random(0, 0.5)
            Player.karma -= 2.5
        } else {
            if (1) {
                Player.masochist -= random(0, 1)
                Perp.rapportwithplayer -= random(0, 5)
                Perp.attractionToPlayer -= random(0, 5)
                Victim.rapportwithplayer += random(0, 10)
                Victim.attractionToPlayer += random(0, 10)


                Player.dialogue(`<Perp.name>! Stop right there. This is domestic violence!`, `Angry`)
                Player.karma += 2.5
                Perp.dialogue(`It's none of your business. Fuck off or I'll kick your ass too.`, `Angry`)
                Player.animate("martialart")
                Player.moveToPersonStand(Perp, 100)
                Player.dialogue(`No way, if you want to harm <Victim.name> anymore, you'll have to step over my dead body.`, `Angry`)
                scene.faceEachOther(Perp, Player)
                Perp.animate("martialart")
                Perp.dialogue(`So be it! Take this!`, `Furious`)
                Player.animate()
                Perp.animate()
                if (Player.martial > Perp.martial) {
                    Perp.animate("fightlost")
                    narrative(`I dodged <Perp.name>'s punch easily and went in for a counter strike right on <Perp.his_or_her> face, which knocked <Perp.him_or_her> on the ground.`)
                    Player.masochist -= random(0, 1)
                    Player.martial += random(0, 1)
                } else {
                    Player.animate("fightlost")
                    narrative(`Despite my best intention, <Perp.name> was more than a match in a fight and I eventually got knocked off my feet. Thankfully, at least I kept <Perp.him_or_her> busy long enough for others to arrive and eventually control the situation.`)
                    Player.animate()
                    scene.setBackground("hospital")
                    Player.fitness -= random(0, 2)
                    Player.attractiveness -= random(0, 2)
                    Player.energy -= 100
                }


                Perp.hide()
                Victim.dialogue(`That was so brave of you. I don't know how I could ever thank you for saving me.`, `Sad`)
            } else {
                narrative(`I'm not so confident that I can stop <Perp.name> myself, but the least I could do is to call the cops.`)
                Player.karma += 2.5


                Perp.rapportwithplayer -= random(0, 5)
                Perp.attractionToPlayer -= random(0, 5)
                Victim.rapportwithplayer += random(0, 5)
                Victim.attractionToPlayer += random(0, 5)
                Victim.attractiveness -= random(0, 2)
                Victim.fitness -= random(0, 2)


                narrative(`Eventually, the cops arrived and arrested <Perp.name>, but not before <Perp.he_or_she> already did some serious damage on <Victim.name>.`)
                Perp.hide()
                Victim.dialogue(`Thank you for calling the cops. It could have been a lot worse ...`, `Sad`)
            }


            narrative(`Should I advise <Victim.name> to leave <Perp.name>?`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (0) {
                Player.dialogue(`You know, you don't have to live with all these abuses. Domestic violence cannot be tolerated. Leave <Perp.name> as fast as you can!`, `Sad`)
                if (random(0, 100) < Player.interpersonal && Victim.masochist < random(0, 100)) {
                    Victim.dialogue(`You're right ... enough is enough. I need to stand up for myself and not let my life be destroyed by a violent <VictimCallPerp>. I'm kicking <Perp.name> out for good and getting a restraining order.`, `Sad`)
                    Victim.rapportwithplayer += random(0, 5)
                    Victim.attractionToPlayer += random(0, 5)


                    scene.removeNpcRelationship(Victim, Perp)
                    if (Perp.isNeighbour()) {
                        Perp.removeNeighbour()
                    }
                } else {
                    Victim.dialogue(`<Perp.name> isn't so bad. <Perp.He_or_She> just has a bad temper issue. I'm used to it by now ...`, `Sad`)
                    narrative(`Oh well, at least I tried.`)
                }


                if (!Victim.isContactExchanged()) {
                    narrative(`Before I leave, <Victim.name> asked me if <Victim.he_or_she> can call me sometimes. We then exchanged numbers.`)
                    Player.exchangeContact(Victim)
                }
            } else {
                narrative(`I'm no relationship counselor. Better not get involved in other people's business more than I already did.`)
                Player.masochist += random(0, 0.5)
            }
        }


        scene.timeout(500, "neighbour_domestic_violence")
    })
})
module.exports = scene