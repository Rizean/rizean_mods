// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\social\spiced_drink.lpscene

const {LPScene} = require('Lifeplayjs')

const scene = new LPScene({name: 'rizean_cnc_bdsm_drunk_bait'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        // no way to track if player/actor orgasms
        // if (Player.arousal < 25) {
        //     Player.arousal += random(25, 40)
        // }
        // let preSexArousal = Player.arousal.write('preSexArousal = ')
        // narrative("testing <r>  arousal <preSexArousal>")
        const r = random(0, 100)
        if (r > 50) {
            narrative("After way to many drinks...")
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

            Actor.moveToPerson(Player)
            Actor.dialogue("May, you have had too much to drink again. It's time to go.", 'Annoyed')
            Player.dialogue("But my name is <Player.name>...", 'Confused')
            narrative("<Actor.S> puts <Actor.p> hand on the small of my back and leads me out.")
            Player.dialogue("Where are we going?", 'Confused')
            Actor.dialogue("I'm taking you home of course.", 'Evil')
            Player.dialogue("Oh, ok.", 'Confused')
            scene.setBackground('residential')
            narrative("<Actor.S> slaps me hard on my ass as I walk into the home.")
            Player.dialogue("Ouch! Why did you do that?", 'Shocked')
            narrative("That will teach you to get plastered in a place like that.", 'Evil')
            narrative("<Actor.S> quickly strips off my clothes and binds my hands. I'm to drunk to put up much of a fight.")
            Player.strip()
            Player.dressBondage('Bdg_Handcuffs')
            Player.dialogue("Please... don't...", 'Anxious')
            narrative("<Actor.S> quickly strips down and is no doubt ready!")
            Actor.strip()
            Actor.dialogue("You're not the first dumb slut and won't be the last!", 'Evil')
            scene.talkNonConsensual()
            scene.filter('Aggressive')
            scene.sexNoAffair([Actor, Player])
            const perversionScore = Player.perversion + Player.masochist

            if (random(0, 200) < perversionScore) {
                Actor.dialogue("DAM! You wanted this didn't you? I don't think I've every see someone orgasms that hard before!", 'Surprised')
                Player.dialogue("No, I didn't want this...", 'Embarrassed')
                narrative("<Actor.S> slaps me across the face!")
                Actor.dialogue("Don't lie to me! You're a rape baiting slut! Admit it!", 'Surprised')
                narrative("<Actor.S> grabs me by the hair and pushes me down and starts spanking me!")
                Player.dialogue("PLEASE STOP!", 'Pain')
                Actor.dialogue("Tell me what you are, and I'll stop.", 'Evil')
                Player.dialogue("I am a...", 'Embarrassed')
                Player.dialogue("SLUT!", 'Embarrassed')
                narrative("I'm relieved as <Actor.s> stops spanking me.")
                Player.dialogue("Can I please leave now? I promise I won't tell anyone.", 'Drained')
                Actor.dialogue("I'm not done yet. That was just round one.", 'Evil')
                Player.dialogue("Oh?...", 'Excited')

                if (perversionScore > 100) {
                    narrative("A wave of excitement and arousal rolls over me.")
                    if (Player.arousal < 50) {
                        Player.arousal += random(20, 40)
                    }
                    if (Player.arousal > 70) {
                        Actor.dialogue("Look at you. Your practically dripping with excitement.", 'Excited')
                        narrative("My cheeks turn red as I look away, but I can't deny what they say.")
                    }
                }
                scene.filter('Anal')
                scene.sexNoAffair([Actor, Player])

            }
            Player.energy -= random(25, 50)
            if (Player.energy < 5) {
                Player.energy = 5
                narrative("Eventually, I pass out.")
                Player.strip()
                Player.moveTo('home')
            } else {
                narrative("I can't believe I'm even considering this, but...")
                option([
                    {text: 'Offer Number', condition: perversionScore > 125},
                    {text: 'Get dresses and quietly leave'},
                ])

                if (0) {
                    Actor.makePermanent()
                    Player.dialogue("Um...", 'Anxious')
                    Player.dialogue("Would you like my number?", 'Anxious')
                    narrative("After everything that has happened, I don't think <Actor.he_or_she> expected that.")
                    Actor.dialogue("Well...", 'Surprised')
                    Actor.dialogue("Not usually into repeats.")
                    narrative("<Actor.S> smiles.")
                    Actor.dialogue("But, then again your not my usual type of <Player.boy_or_girl>.")
                    Player.exchangeContact(Actor)
                    Actor.dialogue("Here, let me give you a ride home.")
                    Player.dialogue("Um... have you seen my clothes?")
                    narrative("<Actor.S> smiles.")
                    Actor.dialogue("Just go get in the car before I spank you again.", 'Evil')
                    narrative("Embarrassed, I walk out and get in to the car nude.")
                    Actor.dress()
                    Player.moveTo('home')
                    narrative("A short time latter we arrive at my place.")
                    Actor.animatePair(Player, 'Kissing')
                    narrative("...")
                    // Actor.animatePair(Player, 'RubPussy')
                    Actor.dialogue("Turn around.")
                    Actor.animatePair(Player, 'Hugging')
                    narrative("<Actor.S> slaps me hard on my ass.")
                    Actor.dialogue("One more to remember me by.", 'Grin')
                    narrative("The night finally comes to an end with me passing out on my bed.")
                    Player.animate('na_sleep')
                    scene.passTime(4, 8)
                    Player.energy += random(50, 100)
                } else {
                    narrative("Eventually, <Actor.s> runs out of steam.")
                    Actor.animate('na_sleep')
                    narrative("Quietly as possible, I got dressed in the few pieces of clothing I could find.")
                    Player.dressExcept(['Bottom_Under', 'Top_Under'])
                    Player.moveTo('home')
                }
            }
            scene.timeout(600, "rizean_cnc_bdsm_bait_rape")
        }
    })


})
module.exports = scene