// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\uni_student\go_greek.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'go_greek'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, costOfLiving} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Fees = 500 * random(0.5, 1) * costOfLiving
        let FeesConverted = Fees.convertToLocalCurrency("true")
        let Actor = scene.generatePersonTemporary([])
        let Actor2 = scene.generatePersonTemporary([])
        let Total = random(10, 25)
        let count = 0
        Fees = 500 * random(0.5, 1) * costOfLiving
        FeesConverted = Fees.convertToLocalCurrency("true")


        if (Player.isStudent()) {
            narrative(`Should I try to join this <Player.fraternity_or_sorority>? The chapter fees work out at around <FeesConverted> per month.`)
            option([
                {text: `Yes`},
                {text: `No`},
            ])
            if (0) {
                narrative(`During rush, I had to attend many of the <Player.fraternity_or_sorority>'s social events and a few interviews. Eventually, I received a bid, which I accepted immediately, beginning my pledge period.`)
                narrative(`The early part of the pledge period was uneventful. I was basically a glorified maid for my <Player.brothers_or_sisters>, cleaning the house, doing their laundry - tiring, yes, but nothing I cannot handle.`)
                narrative(`It's coming towards the end of my pledge period and I was told to prepare for 'Hell Week'. Honestly, I don't like the way that sounds.`)
                option([
                    {text: `Nothing can stop me!`},
                    {text: `Hazing? No way!`},
                ])
                if (0) {
                    narrative(`If that's what it takes to be a member of this <Player.fraternity_or_sorority>, I'll handle anything thrown at me.`)
                    narrative(`My last week of pledge ...`)
                    narrative(`Damn, they weren't kidding about Hell Week. They really put me through all sorts of challenges: sleep deprivation, blindfold, paddling, and of course tons of busy work and forced binge drinking every single day.`)
                    Player.fitness -= random(0, 2.5)
                    Player.attractiveness -= random(0, 1)
                    Player.energy = 0
                    Player.mood = 0
                    Actor = scene.generatePersonTemporary([])
                    while (!Actor.isSameGender(Player)) {
                        Actor = scene.generatePersonTemporary([])
                    }
                    Actor.makePermanent()
                    Actor.age = random(18, 22)
                    Actor.randomizeHairs()
                    Actor.randomizeFace()
                    Actor.setDifferentMajor()
                    Actor.dress()
                    Actor.show(2)
                    Actor.dialogue(`Well done, you definitely have the potential to become one of ours <Player.brothers_or_sisters>. But are you ready for one final challenge, pledge?`, `Evil`)
                    Player.dialogue(`I'm ready for anything, <Player.brother_or_sister>.`, `Surprised`)
                    Actor.dialogue(`Good attitude. So here's your challenge: There's an old ugly homeless crackhead who always sleeps at the bench behind our chapter house. Go out there and fuck <Player.her_or_him>!`, `Happy`)
                    option([
                        {text: `Fine ...`},
                        {text: `Eww!`},
                    ])
                    if (0) {
                        narrative(`Well, I've gone this far ... It's just sex, right?`)
                        Actor.hide()
                        Actor2 = scene.generatePersonTemporary([])
                        while (Actor2.isSameGender(Player)) {
                            Actor2 = scene.generatePersonTemporary([])
                        }
                        Actor2.age = random(60, 80)
                        Actor2.fitness = 0
                        Actor2.muscle = 0
                        Actor2.attractiveness = 0
                        Actor2.randomizeHairs()
                        Actor2.randomizeFace()
                        scene.setBackground("street")
                        Actor2.show(2)
                        narrative(`Damn it ... <Actor2.He_or_She> is even more disgusting than I remember. Oh well, let's get this over and done with ...`)
                        scene.sex(Actor2, Player)
                        Actor2.delete()
                        Player.show(0)


                        scene.setBackground("fraternity")
                        Player.moveFraternity()
                        Fees.setFraternityFees()
                        Actor.show(2)
                        Actor.rapportwithplayer += random(50, 100)
                        Actor.setDifferentMajor()
                        Actor.dialogue(`Well done, my new <Player.brother_or_sister>. I knew you could do it! You deserve to be one of us now.`, `Happy`)
                        narrative(`A massive celebration erupted - I'm now a full member of the <Player.fraternity_or_sorority>. I finally have a chance to be introduced to my <Player.brothers_or_sisters> officially.`)
                        Player.exchangeContact(Actor)
                        Actor.hide()
                        Actor.saveAndDelete()
                        Total = random(10, 25)
                        count = 0
                        while (count < Total) {
                            Actor = scene.generatePersonTemporary([])
                            while (!Actor.isSameGender(Player)) {
                                Actor = scene.generatePersonTemporary([])
                            }
                            Actor.makePermanent()
                            Actor.age = random(18, 22)
                            Actor.randomizeHairs()
                            Actor.randomizeFace()
                            Actor.setDifferentMajor()
                            Actor.rapportwithplayer = 101
                            Actor.dress()
                            Actor.show(2)
                            narrative(`A <Actor.brother_or_sister> approached me.`)
                            Actor.dialogue(`Welcome, my new <Actor.brother_or_sister>, I'm <Actor.name>.`, `Happy`)
                            Player.dialogue(`Nice to meet you, <Actor.brother_or_sister>.`, `Happy`)
                            Player.exchangeContact(Actor)
                            Actor.hide()
                            Actor.saveAndDelete()
                            count += 1
                        }
                        Player.interpersonal *= 1.05
                    } else {
                        Player.dialogue(`Eww, I saw that bum. <Player.She_or_He> is disgusting. No way I'm going anywhere close to <Player.her_or_him>, let alone fuck <Player.her_or_him>.`, `Angry`)
                        Actor.dialogue(`Oh yeah? Then you're not worthy for our <Player.fraternity_or_sorority>. Get the fuck out of here!`, `Angry`)
                        narrative(`That's it. I failed at the last hurdle, but that final dare was just too much ... At least I maintained my integrity.`)
                    }
                } else {
                    narrative(`That sounds like hazing, I'm not going to put myself in danger. I'm out!`)
                }
            }
        } else {
            narrative(`I'm not enrolled on any degree courses at any university. I cannot join a <Player.fraternity_or_sorority> until I do so.`)
        }
    })
})
module.exports = scene