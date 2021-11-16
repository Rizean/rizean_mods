// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\sexwork\dating_experience.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'dating_experience'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["whore_out_online"])
    scene.where(["sexwork"])
    scene.when([16, 21])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 300) * random(0, 300) * random(0, 300) < Player.attractiveness * Player.attractiveness * Player.interpersonal)
    })


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        Actor = scene.generatePersonTemporary([])
        while (!Actor.isInterestedIn(Player)) {
            Actor = scene.generatePersonTemporary([])
        }
        Actor.dress()
        Actor.show(2)
        narrative(`Someone messaged me on Adultwork, requesting the '<Player.Boyfriend_or_Girlfriend> Experience' service I have been advertising ... <Actor.He_or_She> seemed gentle enough.`)
        option([
            {text: `Turn <Actor.him_or_her> down`},
            {text: `Accept`},
        ])
        if (0) {
            Player.dialogue(`Sorry, but I'm not in town today ...`, `Sad`)
        } else {
            scene.setBackground("restaurant")
            narrative(`Soon enough, we were meeting at a fancy restaurant in town. <Actor.name> was a true <Actor.gentleman_or_lady> and even had some expensive gifts to spoil me ...`)
            narrative(`Of course, we ended up in a hotel room afterwards. Not the usual dirty motel, mind you, but a luxurious hotel suite that <Actor.name> was kind enough to book in advance.`)
            scene.setBackground("home")
            scene.sex(Actor, Player)
            Player.money += random(500, 1000)
            Player.money += Player.pornfame * 10
            Player.perversion += 0.25
            Actor.show(2)
            Player.show(0)
            narrative(`In the morning, <Actor.name> left me a generous envelope.`)


            if (random(0, 100) < Player.interpersonal) {
                Actor.dialogue(`Spending last night with you was a delight. It's been so long since I last had the pleasure of companionship with such a smart and <Player.handsome_or_beautiful> <Player.man_or_woman> like you. You really know how to make a <Actor.man_or_woman> feel special ...`, `Sad`)
                Actor.dialogue(`You know ... you're too smart to be doing this for a living ... I'd love to get to know you more, on a more personal level.`, `Sad`)
                option([
                    {text: `Exchange numbers`},
                    {text: `Stay professional`},
                ])
                if (0) {
                    narrative(`Well, it might have started as just another day in the life of an escort, but <Actor.name> has been a true <Actor.gentleman_or_lady>. Honestly, if I had met <Actor.him_or_her> in a bar or something, I would probably have slept with <Actor.him_or_her> for free anyway.`)
                    narrative(`We agreed to exchange numbers. Maybe <Actor.name> can take me on another date to spoil me again, only this time it won't just be a transaction.`)
                    Actor.makePermanent()
                    Actor.attractionToPlayer += random(0, 50)
                    Player.exchangeContact(Actor)
                } else {
                    Player.dialogue(`Well, I'm glad you enjoyed my service. You know where to find me if you want another night of the <Player.Boyfriend_or_Girlfriend> Experience. I sometimes give discounts to repeat customers`, `Happy`)
                }
            }
        }


    })
    scene.timeout(24, "dating_experience")
})
module.exports = scene