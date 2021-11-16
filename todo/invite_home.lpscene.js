// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Interactions\leading_to_scenes\invite_home.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'invite_home'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    let Actor = scene.passedInActor()
    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Subor = false
        let choice = -1
        let ate = false
        let hadSex = false
        let Vanilla = scene.isModEnabled("vin_VanillaRealistic")
        let MyHome = true
        let Kissed = false
        Subor = false
        if (Actor.isEmployee() || (Actor.isColleague() && Player.jobexperience - Actor.jobexperience > 30)) {
            Subor = true
        }


        if (Actor.isDating() || Actor.isRelative() || (random(30, 100) < Player.interpersonal && (Actor.rapportwithplayer > 30 || Actor.attractionToPlayer > 30)) || (Subor && (Actor.rapportwithplayer > 20 || Actor.attractionToPlayer > 20 || Actor.masochist > 20))) {
            Actor.dialogue(`Of course, let's go back to your place and chill.`, `Happy`)
            if (Subor) {
                narrative(`Of course, I can't tell if <Actor.he_or_she> actually wants to spend time with me so privately outside of work or just feels obliged to, fearing that rejecting me could affect <Actor.his_or_her> job. I guess I'll find out soon enough`)
            }
            Player.moveTo("home")
            scene.setBackgroundCustom("livingroom")
            narrative(`We're now inside the apartment.`)
            choice = -1
            ate = false
            hadSex = false
            Vanilla = scene.isModEnabled("vin_VanillaRealistic")
            MyHome = true


            while (choice < 5) {
                Kissed = false
                narrative(`What should I suggest to <Actor.name> that we do?`)
                option([
                    {text: `Chat`},
                    {text: `Eat something together`, condition: !ate},
                    {text: `Watch a movie`},
                    {text: `Drink alcohol`},
                    {text: `Kiss <Actor.him_or_her>`, condition: !hadSex},
                    {text: `Politely ask <Actor.him_or_her> to leave`, condition: MyHome},
                ])
                if (5) {
                    narrative(`We said goodbye and went our ways.`)
                } else {
                    if (0) {
                        narrative(`We simply sat and chat for a while ...`)
                        scene.passTime(0.1, 0.2)
                    } else if (1) {
                        narrative(`We made some quick snacks and enjoyed them together ...`)
                        ate = true
                        scene.passTime(0.2, 0.4)
                    } else if (2) {
                        narrative(`We watched a movie together ...`)
                        scene.passTime(1, 2)
                    } else if (3) {
                        narrative(`We had a drink together ...`)
                        scene.passTime(0.1, 0.2)
                        Player.intoxication += random(0, 10)
                        Actor.intoxication += random(0, 10)
                    } else if (4) {
                        Kissed = true
                    }


                    if (Kissed || (Actor.isInterestedIn(Player) && !hadSex && Actor.attractionToPlayer > random(0, 200))) {
                        Player.animatePair(Player, Actor, "Kissing")
                        Player.dialogue(`...`, `Kiss`)
                        Actor.dialogue(`...`, `Kiss`)
                        if (Actor.isDating()) {
                            narrative(`We kissed. It started slow but soon became more passionate. It was obvious what we both wanted ...`)
                        } else {
                            narrative(`We had a kiss, an awkward one at first, but soon moving towards a more passionate direction.`)
                        }
                        narrative(`Should I let this escalate further?`)
                        scene.option([
                            {text: `Make out`, condition: Vanilla},
                            {text: `Stop`},
                        ])
                        if (0) {
                            if (Actor.isDating() || (Actor.isInterestedIn(Player) && (Actor.isDominantSex(Player) || Actor.attractionToPlayer + Actor.perversion > random(50, 200) || Actor.intoxication > 80))) {
                                narrative(`Our kiss got more and more steamy and soon we were making out, our hands all over each other.`)
                                if (scene.tfGame() && Actor.isMale()) {
                                    narrative(`I'm a man trapped inside a woman's body. I don't think I'm gay, but here I am, about to hook up with my male date.`)
                                }
                                hadSex = true
                                Player.perversion += random(0, 1)
                                scene.sex(Player, Actor)
                                Actor.show(2)
                                narrative(`The sex was amazing. We put our clothes back on afterwards and continued our date.`)
                                scene.passTime(0.2, 0.5)
                            } else {
                                narrative(`Unfortunately for me, <Actor.name> didn't seem interested in letting things escalate any further and pulled away.`)
                            }
                        } else {
                            narrative(`I decided to stop it there and not go any further.`)
                        }
                    } else if (random(0, 100) < 20) {
                        if (Actor.isDating()) {
                            narrative(`After a while, we were both exhausted and went to bed together for the night.`)
                            scene.passTime(4, 8)
                            Player.energy += random(50, 100)
                            narrative(`The next morning ...`)
                            if (MyHome) {
                                Actor.dialogue(`I've gotta go now, honey. Thanks for letting me stay the night. I can't wait to see you again soon!`, `Happy`)
                            } else {
                                Player.dialogue(`I've gotta go now, honey. Thanks for letting me stay the night. I can't wait to see you again soon!`, `Happy`)
                            }
                            Actor.attractionToPlayer += random(0, 1)
                        } else {
                            if (MyHome) {
                                Actor.dialogue(`I've gotta go now. Thank you for inviting me in.`, `Happy`)
                                Player.dialogue(`Alright. Thank you for staying. Goodbye!`, `Happy`)
                            } else {
                                Actor.dialogue(`It has been a great day, but I'm getting quite tired now. Do you mind ...`, `Happy`)
                                narrative(`Getting the message from <Actor.name>, I said goodbye.`)
                            }
                            narrative(`We parted ways.`)
                        }
                        choice = 5
                    }
                }
            }
        } else {
            if (Subor) {
                Actor.dialogue(`Sorry, I don't feel like I should go home with you. It's rather unprofessional, you being my boss after all ...  People may gossip ...`, `Sad`)
            } else {
                Actor.dialogue(`Sorry, I don't feel like I know you enough to go home with you.`, `Sad`)
            }
        }
    })
})
module.exports = scene