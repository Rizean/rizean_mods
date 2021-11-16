// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\social\invite_to_dance.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'invite_to_dance'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, CurrentCompanion, choice} = scene

    scene.what(["all", " -dance", " -go_to_the_bathroom"])
    scene.where(["nightclub"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 500) < Player.attractiveness + Player.interpersonal && (!Player.isWithCompanion() || !CurrentCompanion.isRelative()))
    })


    scene.start(() => {
        let Actor = Player.getCompanion()
        let DanceAccepted = true
        let Kissed = true
        let choice = 0
        Actor = Player.getCompanion()
        if (!Actor.isValid()) {
            scene.$random(() => {
                Actor = scene.getPerson()
                Actor = scene.generatePerson()
            })
            Actor.dress()
        }
        if (!Actor.isValid()) {
            Actor = scene.generatePerson()
            Actor.dress()
        }
        Actor.show(2)
        if (Actor.isDominantSex(Player) && random(0, 70) < Actor.interpersonal) {
            narrative(`<Actor.name> invited me to the dance floor. Should I?`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (0) {
                DanceAccepted = true
            } else {
                DanceAccepted = false
                narrative(`I decided to turn <Actor.name>'s offer down.`)
            }
        } else {
            if (!Player.isWithCompanion()) {
                narrative(`I found <Actor.name> standing alone near the bar.`)
            }
            narrative(`Should I invite <Actor.name> to dance with me?`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (0) {
                Player.dialogue(`Would you like to join me on the dance floor?`, `Happy`)
                if (Actor.attractionToPlayer > random(0, 20) || Actor.rapportwithplayer > random(0, 20) || random(0, 200) < Player.interpersonal) {
                    Actor.dialogue(`Of course, I'd love to!`, `Happy`)
                    DanceAccepted = true
                } else {
                    Actor.dialogue(`Sorry, I'm not too keen on dancing ...`, `Sad`)
                    DanceAccepted = false
                }
            } else {
                narrative(`I decided not to ask <Actor.him_or_her> to dance.`)
                DanceAccepted = false
            }
        }


        if (DanceAccepted) {
            Actor.show(5)
            narrative(`We walked towards the dance floor and started dancing together.`)
            if (Actor.isInterestedIn(Player)) {
                Actor.attractionToPlayer += Player.dance * random(0, 0.05)
            } else {
                Actor.rapportwithplayer += Player.dance * random(0, 0.05)
            }


            narrative(`Should I make my move?`)
            option([
                {text: `Just dance`},
                {text: `Kiss <Actor.name>`},
            ])
            if (1) {
                if (Actor.attractionToPlayer > random(0, 30) || random(30, 100) < Actor.perversion) {
                    narrative(`<Actor.name> kissed me back and we soon indulged ourselves, making out passionately, right there in the middle of the dance floor. Our hands were all over each other and it was getting very heated indeed!`)
                    Kissed = true
                } else {
                    narrative(`<Actor.name> moved <Actor.his_or_her> head away to avoid my advance. Embarrassed, I had no choice but to go back to dancing normally.`)
                    Kissed = false
                }
            } else {
                if (random(40, 200) < Actor.attractionToPlayer + Actor.perversion || (Actor.isDominantSex(Player) && random(0, 70) < Actor.attractionToPlayer)) {
                    narrative(`All of a sudden, <Actor.name> leaned onto me for a kiss.`)
                    option([
                        {text: `Kiss back`},
                        {text: `Reject <Actor.him_or_her>`},
                    ])
                    if (0) {
                        narrative(`I kissed <Actor.him_or_her> back and we soon indulged ourselves, making out passionately, right there in the middle of the dance floor. Our hands were all over each other and it was getting very heated indeed!`)
                        Kissed = true
                    } else {
                        narrative(`I moved my head away to avoid <Actor.his_or_her> advance. Embarrassed, <Actor.he_or_she> had no choice but to go back to dancing normally.`)
                        Kissed = false
                    }
                } else {
                    Kissed = false
                }
            }


            if (Kissed) {
                narrative(`Should I try to go further?`)
                option([
                    {text: `Stop it there`},
                    {text: `Lead <Actor.name> to the bathroom`, condition: Player.perversion > 40},
                    {text: `Invite <Actor.name> home`},
                ])
                if (!Actor.isDominantSex(Player) && Actor.attractionToPlayer + Actor.perversion < random(50, 200)) {
                    choice = 0
                    narrative(`I whispered into <Actor.name>'s ear, suggesting that we should get intimate, but <Actor.he_or_she> whispered back, saying it was not a good idea.`)
                }
            } else {
                choice = 0
            }


            if (0) {
                narrative(`We finished the rest of the dance without incidents.`)
                if (!Player.isWithCompanion()) {
                    narrative(`Should I continue hanging out with <Actor.name>?`)
                    option([
                        {text: `Yes`},
                        {text: `Dump <Actor.him_or_her>`},
                    ])
                    if (0) {
                        Actor.startDate()
                    }
                }
            } else {
                if (1) {
                    narrative(`I quickly led <Actor.name> by the hand to the nightclub's bathroom. We quickly got inside one of the cubicles and started making out again.`)
                } else {
                    narrative(`We promptly left the nightclub and went back to my place. Once we were inside my bedroom, <Actor.name> practically jumped at me.`)
                    Player.moveTo("Home")
                }
                scene.sex(Player, Actor)
                Actor.attractionToPlayer += random(0, 5)
                Player.perversion += random(0, 0.5)
                Actor.show(2)
                if (!Actor.isContactExchanged()) {
                    Player.perversion += random(0, 0.5)
                    narrative(`I'm such a <Player.manwhore_or_slut> - I just slept with someone whose number I didn't even have! Should I at least ask for <Actor.name>'s number now though?`)
                    option([
                        {text: `Yes`},
                        {text: `No`},
                    ])
                    if (0) {
                        narrative(`We exchanged numbers. Maybe this could become something more serious.`)
                        Player.exchangeContact(Actor)
                    } else {
                        narrative(`I decided not to. I don't want to give <Actor.name> any expectations that this will be anything more than a one-night stand.`)
                    }
                }
            }
        } else if (Player.isWithCompanion()) {
            scene.timeout(2, "invite_to_dance")
        }
    })
})
module.exports = scene