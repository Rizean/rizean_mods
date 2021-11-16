// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\social\spiced_drink.lpscene

const {LPScene} = require('LifePlayjs')

const scene = new LPScene({name: 'spiced_drink'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all", " -go_to_the_bathroom"])
    scene.where(["nightclub", " bar"])
    scene.when([0, 24])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 2)
    })


    scene.start(() => {
        let Actor = scene.generatePerson()
        const perversionScore = Player.perversion + Player.masochist

        narrative(`I noticed a creepy guy pouring some suspicious powder into a pretty girl's drink!`)
        option([
            {text: `Ignore`},
            {text: `Stop him`},
            {text: 'Drink it', condition: perversionScore > 100 && Player.isFemale()},
        ])
        if (0) {
            narrative(`It's none of my business. I don't want to get in trouble.`)
            Player.masochist += random(0, 0.5)
            narrative(`Thankfully, the girl didn't end up drinking it and no-one was harmed - I would feel very guilty otherwise.`)
            // todo make it random, and you feel bad or something
        } else if (1) {
            Player.dialogue(`Hey! What the fuck do you think you're doing?`, `Furious`)
            Player.karma += 5
            Player.masochist -= random(0, 0.5)
            narrative(`The guy ran away as soon as I shouted out and exposed his dirty trick - not fast enough for the security guards though ...`)
            Actor = scene.generatePerson()
            Actor.blendPreset("fashion_model_F")
            Actor.randomizeFace()
            Actor.randomizeHairs()
            Actor.dress()
            Actor.show(2)
            Actor.rapportwithplayer += 40
            if (Actor.isInterestedIn(Player)) {
                Actor.attractionToPlayer += random(0, 50)
            }

            Actor.dialogue(`Oh my god! You saved me from that creep. I don't know how to thank you ...`, `Happy`)
            option([
                {text: `Nothing`},
                {text: `Ask for her number`},
            ])
            if (0) {
                Player.karma += 2.5
                Player.dialogue(`Don't worry about it. It's only the right thing to do.`, `Happy`)
            } else {
                narrative(`I suggested that we exchange numbers and hang out another day. Of course, <Actor.name> didn't hesitate to give her number to her savior.`)
                Player.exchangeContact(Actor)
            }
        } else if (2) {
            Player.perversion += random(0, 1)
            Player.masochist += random(0, 1)
            let Actor = scene.generatePersonTemporary(['bodybuilder', 'creep'])
            Actor.likes_vaginal = random(50, 100)
            Actor.fertility = random(2, 5)
            Actor.masochist = random(-100, -50)
            Actor.likes_rough = random(50, 100)
            Actor.likes_anal = random(50, 100)
            Actor.likes_bondage = random(50, 100)
            Actor.prone_to_orgasm = random(50, 100)
            Actor.stock_rapedrug = random(5, 20)
            Actor.stock_condom = random(5, 20)
            Actor.arousal = random(75, 85)
            Actor.attractiontoplayer = 50 + random(1, 50)
            Actor.rapportwithplayer = 50 + random(1, 10)
            Actor.rapportwithplayer = 50 + random(1, 10)
            Actor.dress()
            Actor.show()

            let Girl = scene.generatePersonTemporary(['normal_F'])
            Girl.dress()
            Girl.show()
            narrative("I walk up to the pair and pickup the drink before either of them can say anything.")
            narrative("I look at the creep, giving them a knowing look and smile.")
            Player.dialogue("Bottoms up!", 'Shocked')
            narrative("I down the drink in one go.")
            narrative("It burns all the way down and has a slightly off taste that could have been easily missed.")
            narrative("The creep turns to the girl.")
            Actor.dialogue('Get lost!', 'Evil')
            Girl.dialogue('What the fuck?! Never mind, not my type anyways.', 'Confused')
            narrative("As the girl walks off the creep takes me by my hand and leads me outside.")
            Girl.hide()
            scene.setBackground('street')
            narrative("What ever was in the drink must have been strong as I am already feeling it's effects.")
            Player.intoxication = 100
            Player.stripOne()
            narrative("Starts roughly stripping my cloths off. I don't even try to put up a fight.")
            Player.stripOne()
            narrative("It doesn't take him long.")
            Player.stripOne()
            narrative("To get me nude.")
            Actor.dressExcept(['Bottom_Under', 'Bottom'])
            scene.talkNonConsensual()
            scene.filter('Aggressive')
            scene.sexNoAffair([Actor, Player])
            narrative("As soon as the creep is finished they are nowhere to be seen.")
            Actor.hide()
        }
    })
    scene.timeout(600, "spiced_drink")
})
module.exports = scene