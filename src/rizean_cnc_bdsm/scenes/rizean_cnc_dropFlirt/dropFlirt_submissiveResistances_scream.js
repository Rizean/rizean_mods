module.exports = function dropFlirt_submissiveResistances_scream({scene, Target, isWearingBra, isPublic, isWearingUnderwear, willpower, playerPerversionScore, targetWillForce}) {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    if (isPublic) {
        narrative("I started to take in a breath to let out a scream when I felt a sharp pain in my side.")
        Player.dialogue("Ouch!", 'Pain')
        Target.dialogue("Dumb bitch! Do what I say, or you'll be dead before that can get you to the hospital!", 'Evil')

        Target.dialogue("Get up!", 'Anger')
        Player.dialogue("Ok...", 'Scared')
        Target.dialogue("That's, yes <Target.Sir_or_Ma'am> slut!, Do you under stand me?", 'Anger')
        Player.dialogue("Yes. I mean yes <Target.Sir_or_Ma'am>.", 'Scared')
        narrative("Shakily, I get to my feet and <Target.he_or_she> pulls me in close.")

        let loc = scene.findNearbyBuilding('bathroom')
        Player.moveTo(loc)
        narrative("We make our way to the bath room where <Target.he_or_she> push me into a stall and closes the door.")
        Target.dialogue("Scream, and it will be the last thing you ever do.", 'Evil')
        option([
            {text: "I understand, <Target.Sir_or_Ma'am>."},
            {text: "I knew I wouldn't scream. This is what I wanted.", condition: Player.masochist > 75},
            {text: "<Target.Sir_or_Ma'am>, I don't know if I can control myself.", condition: Player.masochist > 90},
        ])

        if (0) {
            Player.masochist += random(0, 2)
            Player.dialogue("What would you like me to do <Target.Sir_or_Ma'am>?", 'Anxious')
            Target.dialogue("Strip!", 'Angry')
            Player.strip()
            narrative("I put on a small show for him, but he doesn't seem to care and only has one thing on his mind.")
            Target.sexCNC(Player)
            let Opportunist = scene.lpMod.getFunction('generateCNCActor')(scene)
            narrative("While we are going at it another <Opportunist.dude_or_chick> walks in just as <Target.he_or_she> finishes with me.")
            Target.dialogue("Hey <Opportunist.budy_or_lady>, you want a go?")
            Opportunist.dialogue("Your kidding right?")
            Target.dialogue("Nope! Just on condition.")
            Opportunist.dialogue("What's that?")
            Target.dialogue("Don't be gentle.", 'Evil')
            Opportunist.dialogue("I think I can handle that.", 'Evil')
            Opportunist.sexCNC(Player)

        } else if (1) {
            Player.masochist += random(0, 1)
            Player.likes_rough += random(0, 1)
            Player.dialogue("<Target.Sir_or_Ma'am> you can do what you want. Just please don't kill me.", 'Scared')
            Target.dialogue("Strip!", 'Angry')
            Player.strip()
            narrative("I quickly do as he asked, and he waste no time taking me to town.")
            Target.sexCNC(Player)
            narrative("They had their way with me and quickly left once they were satisfied.")
            // not sure this really works
            if (Player.arousal > 70) {
                narrative("They had used me but left me wanting more.")
                scene.filter('Solo')
                scene.sex([Player])
            }

            narrative("Panic started to set in when I realized my clothes where missing!")
            narrative("I take a peek out of the stall and see my clothes in the trash.")

            scene.sceneEnd()// fixme!
            Player.strip()
        } else if (2) {
            Player.dialogue("I don't know if I can do that...", 'Anxious')
            Player.dialogue("You should um... Tie my hands and gag me.", 'Anxious')
            Player.masochist += 1
            Player.likes_rough += 1
            Target.dialogue("I see.", 'Surprised')
            Target.dialogue("You for got <Target.Sir_or_Ma'am>.", 'Excited')
            Player.dialogue("Sorry, <Target.Sir_or_Ma'am>.", 'Anxious')
            Target.dialogue("Take off you clothes slut. Then I will help you control yourself and give you the punishment you deserve.", 'Excited')
            Player.dialogue("Yes, <Target.Sir_or_Ma'am>.", 'Excited')
            // #include drop_flirt_strip
            narrative("Once I was done stripping <Target.he_or_she> gagged me.")
            Player.dressBondage('Bdg_Foulard')
            narrative("Then bound my hand behind my back.")
            Player.dressBondage('Bdg_Handcuffs')
            Target.dialogue("Now little slut it's time for your punishment!", 'Excited')
            narrative("I whimpered with excitement.")
            narrative("They push me down, my face mere inches from toilet water.")
            narrative("SMACK! I felt their had come down hard on my butt!")
            Player.dialogue("MMMMM!!!", 'Pain')
            narrative("I felt several more blows!")
            Player.dialogue("MMANM MMM MEMMM!!!", 'Pain')
            Target.dialogue("Oh? What's that you want more?", 'Excited')

            option([
                {text: "Meekly nod my head yes..."},
                {text: "Vigorously, shake my head no, I've reached my breaking point!"},
            ])


            if (0) {
                Player.masochist += 1
                Player.likes_rough += 1
                Target.dialogue("Of course my little slut.", 'Excited')
                narrative([
                    "Blow after blow lands on my butt with a few landing dangerously close to my <Target.dick_or_pussy>.",
                    "Then it happened.",
                    "They landed it directly on my <Target.dick_or_clit>",
                    "The pain surges through my body!",
                ])
                Player.dialogue("MMMMMMMMMMMMMMMMMMMMMMMMM!!!", 'Pain')
                Target.dialogue("Oh, I see you enjoyed that as much as I did!", 'Evil')
                narrative([
                    "They landed another directly on my <Target.dick_or_clit>!",
                    "The pain, once again surges through my body but this time it is quickly overtaken by the most powerful orgasm I have ever felt!",
                    "I lose track of time as it seems like it will never end.",
                    "Slow I start to regain my senses.",
                    "I'm shocked to find I am still extremely aroused!",
                ])
                Player.arousal = 88
                Player.dialogue("Mmmm mmnmmn mmmnm.", 'Pain')
                narrative("They pull my gag down for a moment.")
                Target.dialogue("What is it my little slut?", 'Curious')

            }
            Target.sexCNC(Player)
            scene.lpMod.getFunction('dropFlirt_exchange')({scene, Target, targetWillForce})
        }
    } else { // not isPublic
        Player.dialogue("No! You're wrong.", 'Scared')
        Player.dialogue("I never meant for it to go this far.", 'Scared')
        Target.dialogue("Well it has and there are two ways this can end...", 'Evil')

        option([
            {text: "The easy way"},
            {text: "The hard way"},
        ])

        if (0) {
            Player.dialogue("I'll take the easy way.", 'Scared')
            Target.dialogue("I think you know what to do then.", 'Evil')

            while (!Player.isNude()) {
                Player.stripOne()
                Target.dialogue("Keep going...", 'Evil')
            }
            Target.sexCNC(Player)
        } else if (1) {
            Player.dialogue("I know how this is going to end, but I can't just give into you.", 'Scared')
            narrative("I make a run for it, but <Target.he_or_she> knew what I was planning and I knew they knew.")
            narrative("Some elaborate game we were both playing.")
            narrative("<Target.He_or_She> forced me and started ripping my clothes off with out a care.")
            Player.stripOne()
            Player.animate('knocked_out')
            Player.stripOne()
            narrative("...")
            Player.strip()
            Target.dialogue("Now less have some fun.", 'Evil')
            Target.sexCNC(Player)
        }
    }

    narrative("I hated every last second of it.")
    narrative("I did! I really did!")
    narrative("But that's not what my body said.")
    narrative("As much as I keep trying to convince myself this was a mistake...")

    option([
        {text: "I would do it again without a second though!"},
        {text: "I might do it again"},
        {text: "I would not do it again for a long time if ever."},
        {text: "I would never do it again!"},
    ])

    if (0) {
        Player.dialogue("Um... Hey, you like to do this again sometime?")
        Target.dialogue("Would love to!", 'surprised')
        Player.exchangeContact(Target)
    } else if (1) {
        Player.dialogue("Um... This was more that I had planed on, but maybe we can talk about it sometimes?")
        Target.dialogue("Ok, sure we can do that.", 'surprised')
        Player.exchangeContact(Target)
    } else if (2) {
        Player.dialogue("I'm going to leave now if that's ok?", 'Scared')
        Target.dialogue("Yeah, that sounds like a good idea.")
    } else if (3) {
        narrative("As they are recovering, I slip away as quietly as I can.")
    }

}