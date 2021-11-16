module.exports = function dropFlirt_heroSpoils({scene, hero}) {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene
    narrative("I run over to my hero and hug them!")
    hero.dialogue('Hi, my name is <hero.name>.', 'Grin')
    Player.dialogue('Hello, <hero.name>, my name is <Player.name>.', 'Happy')
    Player.dialogue("I don't know how I could every repay you!", 'Happy')
    Player.dialogue("Um...", 'Anxious')

    option([
        {text: "I could use an escort home... wink"},
        {text: "Kiss Goodbye"},
    ])

    if (0) {
        Player.moveTo('home')
        narrative("We arrive safely back at my home.")
        narrative("Should I reward my hero?")
        option([
            {text: "Reward them"},
            {text: "Kiss Goodbye"},
        ])

        if (0) {
            if (hero.isInterestedIn(Player)) {
                while (!Player.isNude()) {
                    Player.stripOne()
                    scene.$random(() => {
                        hero.animatePair(Player, 'hug')
                        hero.animatePair(Player, 'kiss')
                    })
                }
                hero.sex([Player])
                Player.dialogue("We should do this again some times. Here's my number.")
                Player.exchangeContact(hero)
            } else {
                hero.dialogue('Sorry, your not really my type.')
                hero.dialogue('Stay safe, and um you should pick less seedy places to hang out.')
                hero.hide()
                narrative("Dam... after all that I'm left horny and frustrated.")
                Player.sex([])
            }
        } else if (1) {
            Player.animatePair(hero, 'Kiss')
            narrative("The kiss seems to last forever, and our hands start to roam.")
            Player.animatePair(hero, 'Hug')
            narrative("Eventually I pull away from <hero.name>.")
            Player.dialogue("Thank you again for all you have done, I don't know how I will ever repay you.", 'Happy')
            if (hero.isInterestedIn(Player) && hero.masochist < -20) {
                narrative("<hero.name> gives me one of those 'really' looks.")
                hero.dialogue("After all I have done for you tonight, and the way you lead me on.", 'Surprised')
                hero.dialogue("I get it now. Your one of those <Player.guy_or_girl>s who fantasies about being forced?", 'Surprised')
                narrative("Sheepishly, I don't say anything and just look away.")
                hero.dialogue("Fine then. I've never done that before, but I can give it a try.", 'Excited')
                narrative("<hero.name> grabs me and starts pulling my clothes off careful not to rip anything or hurt me.")
                Player.stripOne()
                narrative("There is no way I could resist this <hero.guy_or_girl>, what should I do?")
                option([
                    {text: "Resist anyways"},
                    {text: "Give in"},
                    {text: "Ask them to be a bit rougher"},
                ])

                if (0) {
                    hero.likes_rough += random(1, 5)
                    narrative("I struggle against <hero.name> and only manage to annoy them.")
                    hero.dialogue("Really?", 'Annoyed')
                    hero.dialogue("I guess I have a lot to learn still.", 'Annoyed')
                    hero.dialogue("But I do know how to handle petulant little <Player.boy_or_girl>s.", 'Annoyed')
                    Player.stripOne()
                    narrative("With little effort <hero.name> stripped off my remaining clothing.")
                    Player.strip()
                    narrative("Forced me over his knee...")
                    narrative("...and begin to rain down blows.")
                    narrative("THWACK!")
                    Player.dialogue("Aaaaah!", 'Pain')
                    narrative("WACK!")
                    Player.dialogue("OH!", 'Pain')
                    narrative("KRACKKK!")
                    Player.dialogue("Ieeee!", 'Pain')
                    narrative("SMACK!")
                    Player.dialogue("Oooooo!", 'Pain')
                    Player.dialogue("Please stop now. I'll be a good <Player.boy_or_girl>", 'Pain')
                    hero.dialogue("Hmmm. Will see about that.", 'Grin')
                    narrative("For a beginner <hero.he_or_she> was...")

                    option([
                        {text: "...not half bad."},
                        {text: "...kind of weak."},
                    ])

                    if (0) {
                        narrative("Or maybe I'm more submissive or not quite as tough as I thought I was.")
                        Player.masochist += random(0, 1)
                        Player.likes_rough -= random(0, 1)
                    } else if (1) {
                        narrative("Their blows where quite strong but, <hero.He_or_She> gave in at my first complaint.")
                        narrative("Still not to bad for their first time.")
                        Player.likes_rough += random(0, 1)
                    }

                    hero.likes_rough += random(0, 10)
                    hero.masochist -= random(0, 10)
                    narrative("Without further hesitation...")
                    hero.sexCNC(Player)
                    narrative("Exhausted, I fall asleep.")
                    Player.animate('sleep')
                    hero.animate('sleep')
                    scene.passTime(2, 4)
                    hero.hide()
                    narrative("Latter when I wake up I see that <hero.name> has left but they left me a note with their number.")
                    narrative("Call me. I'm sure we could 'arrange' something next time.")
                    Player.exchangeContact(hero)
                    hero.masochist -= random(5, 20)
                    hero.perversion += random(5, 10)

                } else if (1) {
                    narrative("I to exhausted to struggle against <hero.name> and just give in to them.")
                    while (!Player.isNude()) {
                        Player.stripOne()
                        scene.$random(() => {
                            hero.animatePair(Player, 'hug')
                            hero.animatePair(Player, 'kiss')
                        })
                    }
                    hero.sex([Player])

                    narrative("Without much preamble when we are done.")
                    hero.dialogue("Here's my number. Call me latter.")
                    Player.dialogue("What if I don't want to? You didn't exactly give me a choice.")
                    hero.dialogue("I'm still not giving you a choice.", 'Evil')
                    Player.dialogue("Oh...", 'Excited')
                    Player.exchangeContact(hero)
                    hero.masochist -= random(1, 2)
                    hero.perversion += random(1, 2)
                } else if (2) {
                    hero.likes_rough += random(1, 2)
                    Player.dialogue("Um... could you be a bit rougher? Maybe a little more forceful?", 'Anxious')
                    hero.dialogue("Hmmm. You mean like this?", 'Grin')
                    narrative("<hero.name> grabs me by the hair and pulls me into an embrace.")
                    narrative("<hero.His_or_Her> hands start groping at me roughly mercilessly squeezing my nipples.")
                    narrative("They weren't genital at all with my <Player.dick_or_pussy> using it like their own personal throw away toy.")
                    Player.dialogue("That's a good start.", 'Excited')
                    while (!Player.isNude()) {
                        Player.stripOne()
                        scene.$random(() => {
                            hero.animatePair(Player, 'hug')
                            hero.animatePair(Player, 'kiss')
                        })
                    }
                    hero.sexCNC(Player)

                    narrative("Exhausted, I fall asleep.")
                    Player.animate('sleep')
                    scene.passTime(2, 4)
                    hero.hide()
                    narrative("<hero.name> loaded his number into my phone and left.")
                    Player.exchangeContact(hero)
                    hero.masochist -= random(5, 20)
                    hero.perversion += random(5, 10)
                }

            } else {
                narrative("<hero.name> seems disappointed.")
                hero.dialogue("Take care of yourself <Player.name>. See you around", 'Tired')
            }
        }
    } else if (1) {
        narrative("I lean in and give <hero.name> a kiss.")
        Player.animatePair(hero, 'Kiss')
        Player.dialogue("Here's my number. Give me a call sometimes.")
        Player.exchangeContact(hero)
        hero.hide()
        Player.moveTo('home')
    }

}