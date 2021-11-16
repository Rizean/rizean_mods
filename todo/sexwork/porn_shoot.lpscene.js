// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\porn_shoot.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'porn_shoot'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["all", " -work"])
    scene.when([8, 18])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(1, 150) < Player.pornfame)
    })


    scene.start(() => {
        let Dice = random(500, 2000)
        let P1C = Dice.convertToLocalCurrency("true")
        let P2 = Dice / 2
        let P2C = P2.convertToLocalCurrency("true")
        let P3 = Dice / 3
        let P3C = P3.convertToLocalCurrency("true")
        let Actor = scene.generatePersonTemporary([])
        let DoneBeast = Player.getActorVar("tag_beastporn")
        let Actor2 = scene.generatePersonTemporary([])
        Dice = random(500, 2000)
        P1C = Dice.convertToLocalCurrency("true")
        P2 = Dice / 2
        P2C = P2.convertToLocalCurrency("true")
        P3 = Dice / 3
        P3C = P3.convertToLocalCurrency("true")
        Actor = scene.generatePersonTemporary([])
        while (!Player.isInterestedIn(Actor)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dress()
        Actor.show(2)
        DoneBeast = Player.getActorVar("tag_beastporn")


        if (DoneBeast > 0 && random(0, 100) < 50) {
            narrative(`One of the most famous porn directors was planning to shoot me, but pulled out in the last minute after finding out about me being involved in a bestiality shoot earlier in my career. He didn't think I would fit the glamcore market.`)
        } else {
            narrative(`A porn director wants to book me for a SCENE with <Actor.name> ...`)
            option([
                {text: `Turn down the offer`},
                {text: `Rip the director off (<P1C>)`},
                {text: `Offer a fair price (<P2C>)`},
                {text: `Give the director a bargain (<P3C>)`},
            ])
            if (0) {
                Player.dialogue(`Sorry, but I have a holiday planned on the day of the shoot ...`, `Sad`)
            } else if (3 || random(0, 100) < choice * Player.pornfame) {
                narrative(`The porn director accepted my demands and soon enough we were meeting at the shoot location that we agreed on.`)
                scene.$random(() => {
                    scene.setBackground("home")
                    scene.setBackground("bar")
                    scene.setBackground("hairdresser")
                    scene.setBackground("cafe")
                    scene.setBackground("clothes")
                    scene.setBackground("dentist")
                    scene.setBackground("doctor")
                    scene.setBackground("hotel")
                    scene.setBackground("laundry")
                    scene.setBackground("marketplace")
                    scene.setBackground("musical_instrument")
                    scene.setBackground("nightclub")
                    scene.setBackground("work")
                    scene.setBackground("place_of_worship")
                    scene.setBackground("police")
                    scene.setBackground("prison")
                    scene.setBackground("pub")
                    scene.setBackground("restaurant")
                    scene.setBackground("shoes")
                    scene.setBackground("sports_centre")
                    scene.setBackground("supermarket")
                    scene.setBackground("theatre")
                    scene.setBackground("toilets")
                })
                narrative(`What should I do?`)
                option([
                    {text: `Shoot the SCENE as agreed`},
                    {text: `Invite the porn director to join for a threesome.`},
                ])
                if (0) {
                    scene.sex(Actor, Player)
                } else {
                    Actor2 = scene.generatePersonTemporary([])
                    Actor2.age = random(35, 55)
                    Actor2.randomizeFace()
                    Actor2.randomizeHairs()
                    Actor2.dress()
                    Actor2.show(3)
                    Player.dialogue(`I heard you were quite a star performer back in your day? Why don't you join us, make this a POV threesome video and teach us a thing or two about performing in this industry? It would be quite a honor to star alongside an industry legend.`, `Flirty`)
                    Actor2.dialogue(`It's been a long time since I last performed, but since you insist ...`, `Flirty`)
                    scene.sex(Actor, Actor2, Player)
                }
                Player.money = Player.money + Dice / choice
                Player.pornfame += 0.5
                Player.perversion += 0.25
            } else {
                narrative(`No way, that's way above the market rate for this type of shoots! You have too high an opinion of yourself, honey. You should ask the other pornstars how much they charge.`)
                option([
                    {text: `Say nothing`},
                    {text: `Cheap motherfucker!`},
                ])
                if (1) {
                    if (random(0, 100) < 30) {
                        narrative(`The director got pissed off and tried to hit me`)
                        if (random(0, 100) < Player.martial) {
                            narrative(`Unfortunately for him, I was no pushover and gave him a good spanking.`)
                            narrative(`As things would have it, our little incident went viral in the porn industry media and somehow made me even more popular. I guess no publicity is bad publicity. Besides, other directors will have to think twice now before trying to bully me in the future.`)
                            Player.pornfame += 2
                        } else {
                            narrative(`I tried to stand my ground but ...`)
                            narrative(`Unfortunately for me, he was a powerful man and I got quite seriously hurt.`)
                            narrative(`As things would have it, our little incident went viral in the porn industry media and somehow made me a butt of jokes. No doubt this would affect my future prospects with other directors.`)
                            Player.pornfame -= 2
                        }
                    } else if (random(0, 100) < 50) {
                        narrative(`How dare you? You'll never work for this studio again!`)
                        Player.pornfame -= 1
                    } else {
                        narrative(`Fine, I changed my mind. Let's try negotiating again ...`)
                        scene.followUp("porn_shoot")
                    }
                }
            }
        }


    })
    scene.timeout(48, "porn_shoot")
})
module.exports = scene