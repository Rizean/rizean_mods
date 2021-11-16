// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\neighbours_argue.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'neighbours_argue'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("Neighbour")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Neighbour")
        $IF(!Actor.isAsexual() && Actor.masochist < random(-100, 0))
    })
    scene.other(($IF) => {
        $IF(Player.isAtHome())
    })


    scene.start(() => {
        let Dating = Actor.getRelatedPerson("Dating", "Spouses")
        let SORefer = "<Dating.boyfriend_or_girlfriend>"
        let choice = -1
        let ate = false
        let hadSex = false
        let Kissed = false
        Dating = Actor.getRelatedPerson("Dating", "Spouses")
        if (!Dating.isValid()) {
            Dating = scene.generatePersonTemporary([])
            while (!Actor.isInterestedIn(Dating)) {
                Dating = scene.generatePersonTemporary([])
            }
            Dating.makePermanent()
            scene.addNpcRelationship(Dating, Actor, Dating)
        }


        SORefer = "<Dating.boyfriend_or_girlfriend>"
        if (Actor.isMarried()) {
            SORefer = "<Dating.husband_or_wife>"
        }
        if (Actor.isSameGender(Dating)) {
            SORefer = "partner"
        }


        Actor.dress()
        Actor.show(2)


        narrative(`I was walking just outside my apartment when I spotted my neighbour <Actor.name> sitting on the stairs, looking quite depressed.`)
        Player.dialogue(`<Actor.name>? What are you doing out here all alone?`, `Surprised`)
        Actor.dialogue(`It's nothing. Don't worry ...`, `Sad`)
        Player.dialogue(`Come on, it's okay. You can tell me.`, `Happy`)
        Actor.dialogue(`It's just that ... my <SORefer> and I, we had an argument again.`, `Sad`)


        option([
            {text: `Wish <Actor.him_or_her> luck`},
            {text: `Invite <Actor.him_or_her> inside`},
        ])
        if (0) {
            Player.dialogue(`Oh no, that's horrible to hear. But these things happen in relationships. I hope you guys will figure it out soon.`, `Sad`)
            Actor.dialogue(`I hope so too ...`, `Sad`)
        } else {
            Player.dialogue(`Oh no, that's horrible to hear. Do you want to come in my apartment and chat for a while? You shouldn't stay here all alone.`, `Sad`)
            Actor.dialogue(`I guess you're right. I don't really know where else to go right now anyway. Thank you!`, `Sad`)
            narrative(`I opened my apartment door and invited <Actor.name> in.`)
            Actor.rapportwithplayer += random(0, 5)
            Actor.attractionToPlayer += random(0, 5)


            choice = -1
            ate = false
            hadSex = false


            while (choice < 5) {
                Kissed = false
                narrative(`What should I suggest to <Actor.name> that we do?`)
                option([
                    {text: `Chat`},
                    {text: `Eat something together`, condition: !ate},
                    {text: `Watch a movie`},
                    {text: `Drink alcohol`},
                    {text: `Kiss <Actor.him_or_her>`, condition: !hadSex},
                    {text: `Politely ask <Actor.him_or_her> to leave`},
                ])
                if (5) {
                    narrative(`We said goodbye and went our ways.`)
                } else {
                    Actor.rapportwithplayer += random(0, 0.5)
                    Actor.attractionToPlayer += random(0, 0.5)
                    if (0) {
                        narrative(`We simply sat and chat for a while ...`)
                    } else if (1) {
                        narrative(`We made some quick snacks and enjoyed them together ...`)
                        ate = true
                    } else if (2) {
                        narrative(`We watched a movie together ...`)
                    } else if (3) {
                        narrative(`We had a drink together ...`)
                        Player.intoxication += random(0, 10)
                        Actor.intoxication += random(0, 10)
                    } else if (4) {
                        Kissed = true
                    }


                    if (Kissed || (!hadSex && Actor.isInterestedIn(Player) && Actor.attractionToPlayer > random(30, 200))) {
                        Player.animatePair(Player, Actor, "Kissing")
                        Player.dialogue(`...`, `Kiss`)
                        Actor.dialogue(`...`, `Kiss`)
                        narrative(`We had a kiss, an awkward one at first, but soon moving towards a more passionate direction.`)
                        narrative(`Should I let this escalate further?`)
                        option([
                            {text: `Make out`},
                            {text: `Stop`},
                        ])
                        if (0) {
                            if (Actor.isInterestedIn(Player) && (Actor.isDominantSex(Player) || Actor.attractionToPlayer + Actor.perversion > random(50, 200) || Actor.intoxication > 80)) {
                                narrative(`Our kiss got more and more steamy and soon we were making out, our hands all over each other.`)
                                hadSex = true
                                Player.perversion += random(0, 1)
                                scene.sex(Player, Actor)
                                Actor.show(2)
                                narrative(`The sex was amazing. We put our clothes back on afterwards and continued our date.`)
                            } else {
                                narrative(`Unfortunately for me, <Actor.name> didn't seem interested in letting things escalate any further and pulled away.`)
                            }
                        } else {
                            narrative(`I decided to stop it there and not go any further.`)
                        }
                    } else if (random(0, 100) < 20) {
                        Actor.dialogue(`I've gotta go now. Thank you for inviting me in.`, `Happy`)
                        Player.dialogue(`Alright. Thank you for staying. Goodbye! Good luck with your <SORefer>.`, `Happy`)
                        narrative(`We parted ways.`)
                        choice = 5
                    }
                }
            }
        }


    })
    scene.timeout(200, "neighbours_argue")
})
module.exports = scene