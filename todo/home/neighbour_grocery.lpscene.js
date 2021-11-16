// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\neighbour_grocery.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'neighbour_grocery'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([11, 17])
    let Actor = scene.getSpecific("Neighbour")
    scene.who(($IF) => {
        Actor = scene.getSpecific("Neighbour")
        $IF(!Actor.isAsexual() && random(0, 100) > Actor.fitness)
    })
    scene.other(($IF) => {
        $IF(Player.isAtHome())
    })


    scene.start(() => {
        let choice = -1
        let ate = false
        let hadSex = false
        let Kissed = false
        Actor.dress()
        Actor.show(2)
        scene.setBackground("street")
        narrative(`I was walking just outside my apartment when I spotted my neighbour <Actor.name> struggling to carry <Actor.his_or_her> grocery shopping back to <Actor.his_or_her> apartment. Should I help?`)
        option([
            {text: `Help <Actor.him_or_her> carry the groceries inside`},
            {text: `Ignore <Actor.him_or_her>`},
        ])
        if (1) {
            narrative(`I really have to go now though, can't help out my neighbour right now. I'm sure <Actor.name> will manage.`)
        } else {
            narrative(`We've all been there ... getting a bit carried away while grocery shopping and ending up with more that you can carry.`)
            Player.dialogue(`Hey <Actor.name>, looks like you need some help there!`)
            Actor.dialogue(`Oh, thank you so much, <Player.name>`)
            Player.karma += 1
            Actor.rapportwithplayer += 1
            scene.setBackgroundCustom("livingroom")
            narrative(`Eventually, we arrive at <Actor.name>'s apartment. I put the grocery bags I carried down on <Actor.his_or_her> kitchen countertop.`)
            Player.dialogue(`Alright, see you later!`)
            Actor.dialogue(`Wait ... do you want to stay and chill for a while? I can cook you something from the ingredients I just bought as a thank you.`)
            option([
                {text: `Sure`},
                {text: `I've got to go. Sorry`},
            ])
            if (0) {
                Player.dialogue(`Sure, I'd love to stay and hang out for a while.`)
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
                        {text: `Say goodbye`},
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
                        }
                    }
                }
            } else {
                Player.dialogue(`Thank you for the offer. But maybe next time, I've got some errand to run right now.`)
                Actor.dialogue(`Alright then, see you later!`)
            }
        }


    })
    scene.timeout(200, "neighbour_grocery")
})
module.exports = scene