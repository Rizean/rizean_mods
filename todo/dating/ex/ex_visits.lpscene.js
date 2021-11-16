// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\dating\ex\ex_visits.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'ex_visits'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([0, 24])
    let Actor = scene.getSpecific("ExDating")
    scene.who(($IF) => {
        Actor = scene.getSpecific("ExDating")
        $IF(random(30, 300) < Actor.attractionToPlayer)
    })
    scene.other(($IF) => {
        $IF(Player.isAtHome())
    })


    scene.start(() => {
        let choice = -1
        let ate = false
        let hadSex = false
        let Kissed = false
        narrative(`I heard a knock on my door. I wonder who it might be.`)
        Actor.dress()
        Actor.show(2)
        narrative(`It's my ex <Actor.name>!`)


        Actor.dialogue(`Baby, I miss you. I can't get you out of my head. I still love you ...`, `Happy`)
        option([
            {text: `Slam the door`},
            {text: `Invite <Actor.him_or_her> in`},
            {text: `Get a restraining order`},
        ])
        if (0) {
            narrative(`I really don't want to deal with <Actor.him_or_her> right now. I slammed the door shut, making clear my message.`)
            Actor.attractionToPlayer -= random(0, 3)
        } else if (1) {
            Player.dialogue(`Fine ... since you came all the way here, come in then ...`, `Irritated`)
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
                        Player.karma -= 1
                        narrative(`Should I let this escalate further?`)
                        option([
                            {text: `Make out`},
                            {text: `Stop`},
                        ])
                        if (0) {
                            narrative(`Our kiss got more and more steamy and soon we were making out, our hands all over each other.`)
                            hadSex = true
                            Player.perversion += random(0, 1)
                            scene.sex(Player, Actor)
                            Actor.show(2)
                            narrative(`Why did I do that? I let the old flame spark again ...`)
                        } else {
                            narrative(`I decided to stop it there and not go any further.`)
                        }
                    } else if (random(0, 100) < 15) {
                        Actor.dialogue(`I've gotta go now. Thank you for inviting me in.`, `Happy`)
                        narrative(`We parted ways.`)
                        choice = 5
                    }
                }
            }
        } else {
            narrative(`I've had enough of this. This is stalking. I slammed the door shut and immediately went about getting a restraining order.`)
            Actor.attractionToPlayer -= 100
            Player.blockContact(Actor)
        }


    })
    scene.timeout(400, "ex_visits")
})
module.exports = scene