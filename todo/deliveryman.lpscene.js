// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\home\deliveryman.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'deliveryman'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, actionDuration} = scene

    let Actor = scene.passedInActor()
    scene.what(["all", " -sleep", " -nap"])
    scene.where(["home"])
    scene.when([8, 20])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.isAtHome() && random(0, 100) < actionDuration)
    })


    scene.start(() => {
        let food = true
        let dish = "pizza"
        let source = "Amazon"
        let Delivery = scene.generatePersonTemporary([])
        let Actor2 = scene.getSpecific("Dating")
        let Dominant = Delivery.isDominantSex(Player)
        let Caught = false
        scene.setBackground("home")
        food = true
        if (scene.forcedTrigger()) {
            narrative(`I made my order and paid with my credit card. All I can do now is wait for the food to arrive.`)
        } else {
            scene.$random(() => {
                food = true
                food = false
            })
        }


        if (food) {
            scene.$random(() => {
                dish = "pizza"
                dish = "Chinese takeaway"
                dish = "curry"
                dish = "kebab"
                dish = "sushi"
            })
        } else {
            scene.$random(() => {
                source = "Amazon"
                source = "Ebay"
                source = "a boutique shop"
                source = "an online store"
            })
        }


        narrative(`My door bell rang ... Must be the delivery person`)
        Delivery = scene.generatePersonTemporary([])
        Delivery.dressUniform("Fast_food")


        Actor2 = scene.getSpecific("Dating")
        narrative(`What should I do?`)
        option([
            {text: `Pick it up myself`},
            {text: `Ask my <Actor2.boyfriend_or_girlfriend> to answer the door instead`, condition: Actor2.isValid()},
        ])
        if (0) {
            Delivery.show(2)


            Delivery.dialogue(`Hi there, is this the home of <Player.Mr_or_Ms> <Player.name_last>?`, `Happy`)
            Player.dialogue(`Yes, that is me.`, `Happy`)
            if (food) {
                Delivery.dialogue(`I've got your <dish> delivery order ...`, `Happy`)
            } else {
                Delivery.dialogue(`I've got your package from <source> ...`, `Happy`)
            }
            narrative(`Ah, just what I was expecting ...`)
            Player.dialogue(`Thank you. I did indeed order them. Took less than I thought they would.`, `Excited`)
            Delivery.dialogue(`Alright, I think that's everything. Have a nice day!`, `Happy`)


            if (Player.isInterestedIn(Delivery)) {
                narrative(`This <Delivery.guy_or_girl> isn't actually too bad-looking. Should I just let <Delivery.him_or_her> leave, or do I have a better plan?`)
                option([
                    {text: `Say goodbye`},
                    {text: `Exchange numbers`, condition: Player.interpersonal > 20},
                    {text: `Invite in for sex`, condition: scene.isModEnabled("vin_VanillaPorn") && Player.perversion > 50},
                ])
                if (0) {
                    narrative(`The delivery <Delivery.guy_or_girl> left and I closed the doors.`)
                } else if (1) {
                    Player.dialogue(`Wait ... Sorry if I'm being weird but I find you quite cute. Perhaps we could exchange numbers and hang out another day?`, `Happy`)
                    if (Delivery.isInterestedIn(Player) && (Delivery.isDominantSex(Player) || Delivery.attractionToPlayer + Delivery.perversion > random(0, 30))) {
                        Delivery.dialogue(`Of course! Let's exchange contacts. It's not often that I make a delivery to someone this nice ...`, `Surprised`)
                        Delivery.makePermanent()
                        Player.exchangeContact(Delivery)
                        narrative(`Having given me <Delivery.his_or_her> number, the delivery <Delivery.guy_or_girl> begged <Delivery.his_or_her> leave.`)
                    } else {
                        Delivery.dialogue(`I'm sorry, but I only met you a few minutes ago. I don't normally exchange numbers with random people I met on the job.`, `Irritated`)
                        narrative(`With that said, the delivery <Delivery.guy_or_girl> begged <Delivery.his_or_her> leave.`)
                    }
                } else {
                    Player.dialogue(`You must be exhausted from going door to door delivering stuffs all day. Why don't you come inside so that I can help you 'relax'?`, `Flirty`)
                    Dominant = Delivery.isDominantSex(Player)
                    if (Delivery.isInterestedIn(Player) && ((Dominant && Delivery.perversion + Delivery.attractionToPlayer > random(0, 50)) || (!Dominant && Delivery.perversion + Delivery.attractionToPlayer > random(0, 100)))) {
                        Delivery.dialogue(`How can I say no? An offer like that rarely comes by ...`, `Flirty`)
                        Player.perversion += random(0, 0.5)
                        scene.sex(Delivery, Player)
                        scene.passTime(0.2, 1)
                        Delivery.show(2)
                        if (Actor.isValid()) {
                            Actor.show()
                            if (random(20, 100) < Actor.perversion && (Actor.isInterestedIn(Delivery) || Actor.isInterestedIn(Player))) {
                                Actor.dialogue(`You guys are having fun, I see?`, `Flirty`)
                                Actor.dialogue(`But it's not fair to have all the fun to yourself, <Player.name>! We ordered the takeaway together after all!`, `Flirty`)
                                scene.sex(Delivery, Player, Actor)
                            } else {
                                Actor.dialogue(`Damn it, <Player.name>. You didn't warn that ordering takeaway with you would involve being forced to watch you fuck the delivery <Delivery.guy_or_girl>!`, `Irritated`)
                                Actor.rapportwithplayer -= 1
                            }
                        } else {
                            Player.dialogue(`Wow, that was something else! You certainly know how to 'deliver' an orgasm.`, `Flirty`)
                            Delivery.dialogue(`You flattered me. In all my time doing this job, I've never had this happen to me before. Let's see each other again, okay?`, `Flirty`)
                        }
                        Delivery.makePermanent()
                        Player.exchangeContact(Delivery)
                        narrative(`Once the sex was over, the delivery <Delivery.guy_or_girl> begged <Delivery.his_or_her> leave, but thankfully not before giving me <Delivery.his_or_her> number.`)
                    } else {
                        Delivery.dialogue(`I'm afraid I can't do that. I would lose my job!`, `Angry`)
                        Player.dialogue(`Fine, it's your loss!`, `Angry`)
                        narrative(`With that said, the delivery <Delivery.guy_or_girl> begged <Delivery.his_or_her> leave.`)
                    }
                }
            }
        } else {
            Actor2.dress()
            Actor2.show()
            Player.dialogue(`Baby, I think there's a delivery. Would you mind picking it up for me?`)
            Actor2.dialogue(`Of course`)
            Actor2.hide()


            if (Actor2.isInterestedIn(Delivery) && (Actor2.perversion - Actor2.attractionToPlayer > 50 || Player.openRelationship())) {
                narrative(`A while later ...`)
                Caught = false
                narrative(`Hmm, why isn't <Actor2.name> back with the delivery yet. What's taking <Actor2.him_or_her> so long?`)
                narrative(`And what's that sound coming out of the living room?`)
                option([
                    {text: `Check it out`},
                    {text: `Just be patient`},
                ])
                if (0) {
                    scene.setBackgroundCustom("livingroom")
                    scene.sex(Delivery, Actor2)
                    narrative(`My <Actor2.boyfriend_or_girlfriend> is fucking the delivery <Delivery.boy_or_girl>.`)
                    option([
                        {text: `Join them`},
                        {text: `Stay quiet and leave`},
                    ])
                    if (0) {
                        Caught = true
                        scene.sex(Delivery, Actor2, Player)
                    }
                }


                if (!Caught) {
                    Actor2.show()
                    Actor2.dialogue(`Here you go. That was free by the way.`)
                    Player.dialogue(`What? Why?`)
                    Actor2.dialogue(`Some promotion run by the restaurant for loyal and nice customers.`)
                    Player.dialogue(`Oh cool then ...`)
                }
            }
        }


        scene.passTime(0.05, 0.2)


        scene.timeout(200, "deliveryman")
    })
})
module.exports = scene