module.exports = function dropFlirt_groupCNC({scene, Target, opportunist0, opportunist1, opportunist2, opportunist3}) {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene
    Player.setNoRedress()

    narrative("As the group moves in on me, I think back to how this night started.")
    narrative("When heading out I though...")
    narrative("maybe I'll find someone to be a little rough...")
    narrative("maybe I'll even find the right person to help me live out a fantasy...")
    narrative("...but this.")

    option([
        {text: "It's time to accept my fate."},
        {text: "Make a break for it."},
    ])

    if (1) {
        narrative("I run for it but <Target.he_or_she> was too fast and caught me.")
        narrative("By instinct I scratch <Target.him_or_her> across the face.")
        narrative("Instantly I know that was a mistake.")
        narrative("<Target.him_or_her> strikes me in the the face.")
        narrative("My vision blurs, and my ear starts ringing.")
        narrative("More blows land on ribs...")
        narrative("...and one more to the gut knocking the wind out of me and dropping me to the floor.")
        Player.animate('KnockedOut')
    }

    narrative("The group moves in on me ripping my clothing off.")
    Player.strip()
    Player.setNoRedress()

    narrative("They proceed to take turns on me.")
    // make sure player energy is not a factor
    Player.energy = 100
    Target.sexCNC(Player)

    if (opportunist0.isValid()) {
        Player.energy = 100
        opportunist0.sexCNC(Player)
    }
    if (opportunist1.isValid()) {
        Player.energy = 100
        opportunist1.sexCNC(Player)
    }
    if (opportunist2.isValid()) {
        Player.energy = 100
        opportunist2.sexCNC(Player)
    }
    if (opportunist3.isValid()) {
        Player.energy = 100
        opportunist3.sexCNC(Player)
    }
    if (opportunist0.isValid() && opportunist1.isValid() && opportunist2.isValid() && opportunist3.isValid()) {
        Player.energy = 100
        Target.sexCNC(Player, opportunist0, opportunist1, opportunist2, opportunist3)
    } else if (opportunist0.isValid() && opportunist1.isValid() && opportunist2.isValid()) {
        Player.energy = 100
        Target.sexCNC(Player, opportunist0, opportunist1, opportunist2)
    } else if (opportunist0.isValid() && opportunist1.isValid()) {
        Player.energy = 100
        Target.sexCNC(Player, opportunist0, opportunist1)
    } else if (opportunist0.isValid()) {
        Player.energy = 100
        Target.sexCNC(Player, opportunist0)
    }

    if (1) {
        narrative("Eventually I pass out.")
        scene.passTime(48, 96)
        scene.setBackground('hospital')
        Player.animate('na_sleep')
        Player.dress('Knit-Onepiece-Dress_1_F')
        Player.arousal = 0
        Player.energy = random(25, 75)
        let bill = random(1000, 3000)
        Player.money -= bill
        narrative("I woke up in the hospital a few days latter.")
        narrative("Everything comes back to me in a flash.")
        narrative("Just thinking about it...")

        option([
            {text: '...makes me very aroused!'},
            {text: "...was an amazing experience, but I'll need some time to recover."},
            {text: '...was an amazing experience, but less not do that again.'},
            {text: '...scares the hell out of me.'},
        ])

        if (0) {
            narrative("I must be insane, but I wouldn't hesitate to do that again.")
            Player.arousal = 20
            Player.likes_rough += random(2, 3)
            Player.masochist += random(2, 3)
            scene.timeout(336, "rizean_cnc_dropFlirt")
        } else if (1) {
            narrative("That was way more that I was hoping, but I just might have to give that another try one day in the very distant future.")
            Player.likes_rough += random(0, 1)
            Player.masochist += random(0, 1)
            scene.timeout(720, "rizean_cnc_dropFlirt")
        } else if (2) {
            narrative("I'm sure I will masturbate to that night many times over the coming months but doubt I will every do that every again.")
            scene.timeout(1344, "rizean_cnc_dropFlirt")
        } else if (3) {
            narrative("That must have been one of the dumbest things I have ever done.")
            narrative("I can only hope there are no other consequences.")
            Player.likes_rough -= random(1, 5)
            Player.masochist -= random(1, 5)
            scene.timeout(8760, "rizean_cnc_dropFlirt")
        }

        scene.passTime(24, 24)
        narrative("A day latter I am released from the hospital and head home.")
        Player.moveTo('Home')
        narrative("Well shit...")
        narrative("There's a bill from the hospital ALREADY! Dam they move fast.")
        const lostMoney = bill.convertToLocalCurrency(true)
        narrative("Between the money that was stolen from me, and the bill I'm out <lostMoney>")
        narrative("Sigh...")
    } else {
        scene.passTime(2, 4)
        narrative("Eventually they finish with me...")
        Player.dress('Towel_1_F')
        narrative("My clothes are nowhere to be seen, but I manage to find a towel to cover my self with.")
        narrative("I make my way home and draw more than a few curious looks.")
        Player.moveTo('home')
        narrative("Thinking back over the events...")

        option([
            {text: '...that was amazing!'},
            {text: "...was totally stupid, and I will never do that again!"},
        ])

        if (0) {
            scene.timeout(336, "rizean_cnc_dropFlirt")
        } else if (1) {
            scene.timeout(8760, "rizean_cnc_dropFlirt")
        }
    }

}