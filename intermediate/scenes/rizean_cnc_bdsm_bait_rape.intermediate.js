const $IF = (rhs) => {
   //rhs.writeLine(`If ${rhs.expression || rhs}`)
   rhs.write(`If `)
}

module.exports = (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene
    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")
    scene.start(() => {
        const r = random(0, 100, "r")
        scene.$if(r.gt(50), () => {
            narrative("After way to many drinks...")
            let Actor = scene.generatePersonTemporary(['bodybuilder', 'creep'], "Actor")
Actor.likes_vaginal =             random(50, 100)
Actor.fertility =             random(2, 5)
Actor.masochist =             random(-100, -50)
Actor.likes_rough =             random(50, 100)
Actor.likes_anal =             random(50, 100)
Actor.likes_bondage =             random(50, 100)
Actor.prone_to_orgasm =             random(50, 100)
Actor.stock_rapedrug =             random(5, 20)
Actor.stock_condom =             random(5, 20)
Actor.arousal =             random(75, 85)
Actor.attractiontoplayer = scene.float(50, 50, true).add(            random(1, 50))
Actor.rapportwithplayer = scene.float(50, 50, true).add(            random(1, 10))
Actor.rapportwithplayer = scene.float(50, 50, true).add(            random(1, 10))
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
            const perversionScore = Player.perversion.add(Player.masochist, "perversionScore")
            scene.$if(            random(0, 200).lt(perversionScore), () => {
                Actor.dialogue("DAM! You wanted this didn't you? I don't think I've every see someone orgasms that hard before!", 'Surprised')
                Player.dialogue("No, I didn't want this...", 'Embarassed')
                narrative("<Actor.S> slaps me across the face!")
                Actor.dialogue("Don't lie to me! You're a rape baiting slut! Admit it!", 'Surprised')
                narrative("<Actor.S> grabs me by the hair and pushes me down and starts spanking me!")
                Player.dialogue("PLEASE STOP!", 'Pain')
                Actor.dialogue("Tell me what you are, and I'll stop.", 'Evil')
                Player.dialogue("I am a...", 'Embarassed')
                Player.dialogue("SLUT!", 'Embarassed')
                narrative("I'm relieved as <Actor.s> stops spanking me.")
                Player.dialogue("Can I please leave now? I promise I won't tell anyone.", 'Drained')
                Actor.dialogue("I'm not done yet. That was just round one.", 'Evil')
                Player.dialogue("Oh?...", 'Excited')
                scene.$if(perversionScore.gt(100), () => {
                    narrative("A wave of excitement and arousal rolls over me.")
                    scene.$if(Player.arousal.lt(50), () => {
Player.arousal.addEq(                        random(20, 40))
                    }).$endIf()
                    scene.$if(Player.arousal.gt(70), () => {
                        Actor.dialogue("Look at you. Your practically dripping with excitement.", 'Excited')
                        narrative("My cheeks turn red as I look away, but I can't deny what they say.")
                    }).$endIf()
                }).$endIf()
                scene.filter('Anal')
                scene.sexNoAffair([Actor, Player])
            }).$endIf()
Player.energy.subEq(            random(25, 50))
            scene.$if(Player.energy.lt(5), function () {
Player.energy = 5
                narrative("Eventually, I pass out.")
                Player.strip()
                Player.moveTo('home')
            }).$else(function () {
                narrative("I can't believe I'm even considering this, but...")
                option([{text: 'Offer Number', condition: perversionScore.gt(125)}, {text: 'Get dresses and quietly leave'}])
                scene.$if(0, function () {
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
                    Actor.dialogue("Turn around.")
                    Actor.animatePair(Player, 'Hugging')
                    narrative("<Actor.S> slaps me hard on my ass.")
                    Actor.dialogue("One more to remember me by.", 'Grin')
                    narrative("The night finally comes to an end with me passing out on my bed.")
                    Player.animate('na_sleep')
                    scene.passTime(4, 8)
Player.energy.addEq(                    random(50, 100))
                }).$else(function () {
                    narrative("Eventually, <Actor.s> runs out of steam.")
                    Actor.animate('na_sleep')
                    narrative("Quietly as possible, I got dressed in the few pieces of clothing I could find.")
                    Player.dressExcept(['Bottom_Under', 'Top_Under'])
                    Player.moveTo('home')
                }).$endIf()
            }).$endIf()
            scene.timeout(600, "rizean_cnc_bdsm_bait_rape")
        }).$endIf()
    })
}