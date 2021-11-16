// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Interactions\leading_to_scenes\approach_bar_i.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'approach_bar_i'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    let Actor = scene.passedInActor()
    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")




    scene.start(() => {
let ChatContinued = true
let drunk = false
let Kissed = false
            Actor.makePermanent()
            narrative(`I noticed <Actor.name> standing alone by the bar. Should I approach <Actor.him_or_her> and strike up a conversation?`)
            narrative(`Should I?`)
            option([
                {text: `Yes`},
                {text: `No`},
                            ])
            if (0) {
                    narrative(`We started chatting and getting to know each other.`)
                    ChatContinued = true
                    while (ChatContinued) {
                            drunk = false
                            Kissed = false
                            narrative(`I'm with <Actor.name>. What should I do?`)
                            option([
                                {text: `Chat`},
                                {text: `Offer <Actor.him_or_her> a drink`},
                                {text: `Touch <Actor.his_or_her> thigh`},
                                {text: `Kiss <Actor.him_or_her>`},
                            {text: `Exchange numbers`, condition: !Actor.isContactExchanged()},
                                {text: `Excuse myself`},
                                                    ])
                            if (0) {
                                    narrative(`We just chat for a while, learning more about each other.`)
                                    Actor.rapportwithplayer += random(0, 1)
                                    if (Actor.isInterestedIn(Player)) {
                                            Actor.attractionToPlayer += random(0, 1)
                                    }
                            } else if (1) {
                                     Player.money  -= random(2, 10)
                                    narrative(`I offered <Actor.name> a drink and <Actor.he_or_she> happily accepted.`)
                                    drunk = true
                                    Player.intoxication += random(0, 15)
                                    Actor.intoxication += random(0, 15)
                            } else if (2) {
                                    if (Actor.isInterestedIn(Player) && (Actor.isDominantSex(Player) || random(50, 200) < Actor.attractionToPlayer + Actor.perversion || Actor.intoxication > 50)) {
                                            narrative(`<Actor.name> didn't say a word about it but seemed receptive to my sexual advance.`)
                                            Actor.attractionToPlayer += random(0, 2)
                                    } else {
                                            Actor.dialogue(`What are you doing, pervert? Get your hand off me!`, `Angry`)
                                            narrative(`And just like that, <Actor.name> angrily walked away.`)
                                            ChatContinued = false
                                            Actor.attractionToPlayer -= random(0, 20)
                                    }
                            } else if (3) {
                                    Player.animatePair(Player, Actor, "Kissing")
                                    Player.dialogue(`...`, `Kiss`)
                                    if (Actor.attractionToPlayer > random(0, 20) || Actor.intoxication > 70) {
                                            Actor.dialogue(`...`, `Kiss`)
                                            narrative(`<Actor.name> responded in kind and we soon were making out right there by the bar.`)
                                            Kissed = true
                                            Actor.attractionToPlayer += random(0, 2)
                                    } else {
                                            Actor.dialogue(`Sorry, you seem nice and everything but not tonight. I don't know you well enough.`, `Sad`)
                                            Actor.attractionToPlayer -= random(0, 5)
                                    }
                            } else if (4) {
                                    narrative(`We exchanged our numbers so that we could meet again after tonight.`)
                                    Player.exchangeContact(Actor)
                            } else {
                                    narrative(`I made an excuse to get rid of <Actor.name>. I don't want to spend the whole night chatting with <Actor.him_or_her>.`)
                                    ChatContinued = false
                            }


                            if (ChatContinued && choice != 3) {
                                    if (!Kissed) {
                                            if (Actor.isInterestedIn(Player) && (Actor.perversion + Actor.attractionToPlayer > random(150, 200) || Actor.intoxication == 100 || (Actor.isDominantSex(Player) && Actor.perversion + Actor.attractionToPlayer > random(100, 200)))) {
                                                    Player.animatePair(Player, Actor, "Kissing")
                                                    Actor.dialogue(`...`, `Kiss`)
                                                    narrative(`All of a sudden, <Actor.name> leaned in and kissed me on the lips.`)
                                                    option([
                                                        {text: `Kiss <Actor.him_or_her> back`},
                                                        {text: `Reject <Actor.him_or_her>`},
                                                                                                    ])
                                                    if (0) {
                                                            Player.dialogue(`...`, `Kiss`)
                                                            narrative(`I responded in kind and we soon were making out right there by the bar.`)
                                                            Kissed = true
                                                            Actor.attractionToPlayer += random(0, 2)
                                                    } else {
                                                            narrative(`I moved my head away to avoid <Actor.his_or_her> kiss. <Actor.He_or_She> got the message right away.`)
                                                            Actor.attractionToPlayer -= random(0, 5)
                                                    }
                                            } else if (!drunk && ((Actor.isDominantSex(Player) && random(0, 50) < Actor.attractionToPlayer) || random(0, 100) < Actor.attractionToPlayer)) {
                                                    narrative(`<Actor.name> offered me a drink. Should I accept <Actor.his_or_her> offer?`)
                                                    option([
                                                        {text: `Yes`},
                                                        {text: `No`},
                                                                                                    ])
                                                    if (0) {
                                                            Player.intoxication += random(0, 15)
                                                            Actor.intoxication += random(0, 15)
                                                    }
                                            } else if (random(0, 100) < 20 || (random(0, 1) *  Player.interpersonal  < 30 && Actor.attractionToPlayer < random(0, 50) && Actor.rapportwithplayer < random(0, 50))) {
                                                    Actor.dialogue(`It's been fun chatting with you, but I've got to go now.`, `Happy`)
                                                    Player.dialogue(`Okay, enjoy the rest of the night!`, `Happy`)
                                                    ChatContinued = false
                                            }
                                    }


                                    if (Kissed) {
                                            narrative(`Should I suggest to <Actor.name> that we go somewhere private?`)
                                            option([
                                                {text: `Yes`},
                                                {text: `No`},
                                                                                    ])
                                            if (0) {
                                                    if (Actor.isDominantSex(Player) || random(50, 200) < Actor.attractionToPlayer + Actor.perversion || Actor.intoxication > 90) {
                                                            narrative(`I whispered into <Actor.his_or_her> ear about what I was really looking for tonight and <Actor.he_or_she> got the message right away. Soon, we were on our way back to my place.`)
                                                            Player.moveTo("Home")
                                                            scene.setBackground("home")
                                                            narrative(`As soon as we were inside, we just couldn't wait any longer and started peeling each other's clothes off.`)
                                                            scene.sex(Player, Actor)
                                                             Player.perversion  += random(0, 1)
                                                            ChatContinued = false
                                                            Actor.attractionToPlayer += random(0, 5)
                                                    } else {
                                                            Actor.dialogue(`Sorry, but I'm not that easy. I don't sleep with someone I barely know.`, `Sad`)
                                                            Actor.attractionToPlayer -= random(0, 10)
                                                    }
                                            } else {
                                                    narrative(`No, it's too soon for that ...`)
                                            }
                                    }
                            }
                    }
            } else {
                    scene.timeout(1, "approach_at_bar")
            }
    })
})
module.exports = scene