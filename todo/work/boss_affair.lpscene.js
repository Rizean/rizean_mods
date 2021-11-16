// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\boss_affair.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'boss_affair'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["all"])
    scene.where(["work"])
    scene.when([17, 21])
    let Boss = scene.getSpecific("Boss")
    let Colleague = scene.getSpecific("Colleague")
    scene.who(($IF) => {
        Boss = scene.getSpecific("Boss")
        Colleague = scene.getSpecific("Colleague")
        $IF(Boss.isInterestedIn(Colleague) && Colleague.isInterestedIn(Boss))
    })
    scene.other(($IF) => {
        $IF(!Boss.isDating() && !Colleague.isDating() && (Boss.perversion - Boss.attractionToPlayer) + (Colleague.perversion - Colleague.attractionToPlayer) > random(0, 1500))
    })


    scene.start(() => {
        let New_Boss = scene.generatePerson()
        let Salary = Player.getSalary()
        let NewSalary = Salary * random(1.1, 1.4)
        let SalaryConverted = NewSalary.convertToLocalCurrency("true")
        scene.setBackground("work")
        Boss.dress()
        Colleague.dress()
        narrative(`It's been a long day ... It's time to get off work.`)
        scene.setBackground("street")
        Player.dialogue(`Wait ... is that ...`, `Shocked`)
        Boss.show(2)
        Colleague.show(3)
        narrative(`It's my boss and one of my colleagues walking together from the office. They seem a lot cozier with each other than you would expect from a professional relationship.`)
        option([
            {text: `Follow them`},
            {text: `Leave them be`},
        ])
        if (0) {
            narrative(`Well, that certain piqued my curiosity. I had to follow them and investigate what's going on!`)
            scene.sneakGame()
            if (Player.sneak > random(0, 25)) {
                scene.setBackground("bar")
                narrative(`I managed to follow them to a fancy bar downtown without getting detected. What on earth would my two married colleagues be doing together in a place like this at this time of the evening?`)
                narrative(`Later on ...`)
                narrative(`Here they are, moving yet again, still together and acting very intimate. Should I continue to follow them?`)
                option([
                    {text: `Yes`},
                    {text: `No`},
                ])
                if (0) {
                    scene.sneakGame()
                    if (Player.sneak > random(0, 50)) {
                        scene.setBackground("hotel")
                        narrative(`What a shocker! They took each other to a hotel nearby. The conclusion is obvious: they are clearly having an affair.`)
                        narrative(`Not that such a tale of forbidden love is at all uncommon - people see their workmates more often than their spouses nowadays.`)
                        option([
                            {text: `Take a photo`},
                            {text: `Leave them be`},
                        ])
                        if (0) {
                            scene.sneakGame()
                            if (Player.sneak > random(0, 50)) {
                                narrative(`I managed to snap a shot of <Boss.name> and <Colleague.name> hand in hand walking into the hotel's elevator. As soon as someone sees the picture, they'll know instantly what's going on.`)
                                Boss.hide()
                                Colleague.hide()
                                scene.timeout(1500, "boss_affair")
                                narrative(`The question now is: what am I going to do with this evidence of infidelity on both sides?`)
                                option([
                                    {text: `Delete it`},
                                    {text: `Spread office gossip`},
                                    {text: `Blackmail <Boss.name> into a pay rise`},
                                ])
                                if (0) {
                                    narrative(`I didn't even know why I took the photo. It was none of my business. I decided to delete it before it can bring harm to anyone's career and family.`)
                                } else if (1) {
                                    narrative(`I'm not letting this sensational story get buried. Tomorrow, I'll make sure everyone in the office knows about it.`)
                                    Colleague.rapportwithplayer -= random(0, 100)
                                    Boss.rapportwithplayer -= random(0, 100)
                                    Colleague.attractionToPlayer -= random(0, 100)
                                    Boss.attractionToPlayer -= random(0, 100)
                                    narrative(`Of course I had no idea at the time how such gossip could spread like wildfire and humiliate everyone involved. They both soon found out who the source of the leak was and stopped talking to me unless it was completely necessary.`)
                                    narrative(`Besides, I don't think the company's higher-ups were too impressed with me and my loud mouth. They don't have any legitimate reasons to fire me yet, but I suspect they're looking for one.`)
                                    Player.jobperformance -= random(0, 20)


                                    scene.setBackground("work")
                                    if (random(0, 100) < 50) {
                                        narrative(`One month after the news broke, <Colleague.name> resigned in embarassment. At the same time, <Colleague.he_or_she> was rumoured to be divorcing <Colleague.his_or_her> <Colleague.wife_or_husband>.`)
                                        Colleague.removeColleague()
                                    }


                                    if (random(0, 100) < 20) {
                                        narrative(`My boss didn't last long after that. <Boss.He_or_She> resigned soon afterwards and <Boss.his_or_her> marriage was also destroyed forever.`)
                                        New_Boss = scene.generatePerson()
                                        if (random(0, 1) < 0.7) {
                                            scene.$random(() => {
                                                New_Boss.blendPreset("workaholic")
                                                New_Boss.blendPreset("workhard_playhard")
                                            })
                                        }


                                        if (random(0, 1) < 0.95) {
                                            scene.$random(() => {
                                                New_Boss.blendPreset("fourties")
                                                New_Boss.blendPreset("fifties")
                                                New_Boss.blendPreset("sixties")
                                            })
                                        }


                                        New_Boss.randomizeFace()
                                        New_Boss.randomizeHairs()


                                        New_Boss.dress()
                                        New_Boss.show(2)
                                        New_Boss.dialogue(`Hi everyone, I'm the new Managing Director. I will be taking over from <Boss.Mr_or_Ms> <Boss.name_last>. I'm looking forward to an excellent working relationship with the team.`, `Excited`)
                                        New_Boss.setBoss()
                                    }
                                } else {
                                    narrative(`An idea comes to mind immediately: What a perfect opportunity to get that raise I have been wanting for a while!`)
                                    Colleague.rapportwithplayer -= random(0, 100)
                                    Boss.rapportwithplayer -= random(0, 100)
                                    Colleague.attractionToPlayer -= random(0, 100)
                                    Boss.attractionToPlayer -= random(0, 100)
                                    Player.jobperformance -= random(0, 20)
                                    scene.setBackground("work")
                                    Boss.show(2)
                                    Boss.dialogue(`Fine! You got us. I'll give you what you want. Just keep your mouth shut!`, `Angry`)
                                    Player.karma -= 5
                                    Salary = Player.getSalary()
                                    NewSalary = Salary * random(1.1, 1.4)
                                    SalaryConverted = NewSalary.convertToLocalCurrency("true")
                                    narrative(`I received the raise I wanted at the very next opportunity. My take-home salary after taxes is now up to <SalaryConverted>!`)
                                    NewSalary.setSalary()
                                }
                            } else {
                                narrative(`I tried to get my phone out of my pocket to take a picture but it was too late. The secret lovebirds already went up the elevator, no doubt to spend some very intimate time together.`)
                                narrative(`No-one would believe what I've seen without some photo evidence - I would just sound like one of those tabloid reporters.`)
                            }
                        } else {
                            narrative(`I decided to go home. It's not my place to meddle in my boss's private affairs.`)
                        }
                    } else {
                        narrative(`Damn! They certainly got out of there fast and disappeared into the darkness. I lost track of where they were going ...`)
                    }
                } else {
                    narrative(`Enough of being nosy. It's none of my business. I should just go home.`)
                }
            } else {
                narrative(`I tried to follow them, but I think <Boss.name> noticed me. Obviously suspicious of my intentions, <Boss.name> whispered something into <Colleague.name>'s ears and they soon went their separate ways.`)
            }
        } else {
            narrative(`I shouldn't put my nose in other people's business, especially not that of my boss.`)
        }


        scene.timeout(150, "boss_affair")
    })
})
module.exports = scene