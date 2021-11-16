// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\porn_shoot_streak.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'porn_shoot_streak'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["all"])
    scene.where(["all", " -work"])
    scene.when([8, 18])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(1, 300) < Player.pornfame && !Player.isAsexual())
    })


    scene.start(() => {
        let Dice = random(1500, 6000)
        let P1C = Dice.convertToLocalCurrency("true")
        let P2 = Dice / 2
        let P2C = P2.convertToLocalCurrency("true")
        let P3 = Dice / 3
        let P3C = P3.convertToLocalCurrency("true")
        let count = 0
        let Actor = scene.generatePersonTemporary([])
        Dice = random(1500, 6000)
        P1C = Dice.convertToLocalCurrency("true")
        P2 = Dice / 2
        P2C = P2.convertToLocalCurrency("true")
        P3 = Dice / 3
        P3C = P3.convertToLocalCurrency("true")
        narrative(`A porn director wants to book me for a SCENE where I walk around naked in public and have sex with any strangers who become interested.`)
        narrative(`This is rather risky both in terms of STDs and in terms of getting arrested for public indecency ...`)
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
                scene.setBackground("pub")
                scene.setBackground("restaurant")
                scene.setBackground("shoes")
                scene.setBackground("sports_centre")
                scene.setBackground("supermarket")
                scene.setBackground("theatre")
            })
            Player.strip()
            narrative(`I removed all my clothes, to the shock of all members of the public there, except the porn crew. Soon though, I can tell some of the more perverted strangers start processing what's going on and considering whether they should participate.`)
            Player.money = Player.money + Dice / choice
            Player.pornfame += 2
            Player.perversion += 1
            count = 0
            while (count < 7) {
                count += 1
                Actor = scene.generatePersonTemporary([])
                if (Player.isInterestedIn(Actor)) {
                    Actor.dress()
                    Actor.show()
                    narrative(`No longer able to hold back <Actor.his_or_her> arousal, a stranger approaches me ...`)
                    scene.sex(Actor, Player)
                }
                Actor.hide()
            }
            narrative(`That's all for the shoot. That was an intense experience, and a very well-paid one at that ...`)
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
                    scene.followUp("porn_shoot_streak")
                }
            }
        }


    })
    scene.timeout(500, "porn_shoot_streak")
})
module.exports = scene