// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\medical\pharma.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'pharma'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    scene.start(() => {
        let Actor = scene.generatePersonTemporary([])
        let Deal = true
        let Salary = Player.getSalary()
        let Actor2 = scene.generatePersonTemporary([])
        let Fuck = true
        narrative(`An often unstated part of being a medical professional is dealing with pharmaceutical companies. Some doctors make a fortune colluding with the drug companies illegally, while others stick to their principle and never prescribe anything their patient doesn't absolutely need.`)
        if (random(0, 100) < 20) {
            narrative(`A sale representative from a drug company is here to present a new drug and wants to meet in your office.`)
            option([
                {text: `I'm not supposed to even meet them`},
                {text: `Hearing them out can't hurt`},
            ])
            if (0) {
                narrative(`If they have something to present, it should be in a proper meeting in front of all the doctors, not this shady.`)
                Player.karma += 1
            } else {
                Actor = scene.generatePersonTemporary([])
                scene.dressFormal()
                Actor.dress()
                Actor.show()
                narrative(`<Actor.name>, the sale rep, certainly wasn't beating around the bush. After all, our discussion is in the privacy of my office. The drug company is offering a generous monthly commission if I start prescribing their new product to patients, even though it hasn't acquired all the necessary approval from health authorities yet.`)
                option([
                    {text: `Do a deal`},
                    {text: `Do a deal, sign off by fucking the sale rep`},
                    {text: `No deal`},
                ])
                if (0) {
                    Deal = true
                    Player.karma -= 0.5
                } else if (1) {
                    Actor.dialogue(`Of course, sleeping with doctors is part of my job description!`)
                    scene.sex(Actor, Player)
                    Deal = true
                    Player.karma -= 0.5
                } else {
                    Deal = false
                    narrative(`No deal, I'll have to stick to my principles.`)
                    Player.karma += 0.5
                }


                if (Deal) {
                    narrative(`The new monthly commission from the drug company has been added to my income.`)
                    Salary = Player.getSalary()
                    Salary += random(500, 2000)
                    Salary.setSalary()
                }
            }
        } else if (1 < 2) {
            narrative(`A drug company is organizing a 'Medical Professional Appreciation Night' at a high-end bar. I've been invited.`)
            narrative(`I heard rumours that place is actually just a cover for a luxury stripclub and brothel.`)
            option([
                {text: `Decline the invitation`},
                {text: `Enjoying some 'entertainment' isn't illegal`},
            ])
            if (0) {
                narrative(`Too shady, they must be up to no good`)
                Player.karma += 1
            } else {
                scene.setBackground("stripclub")
                narrative(`The rumour turned to be true. This place is just a high-end stripclub and brothel, full of doctors and prostitutes that the drug company has already paid for.`)
                Actor2 = scene.generatePersonTemporary([])
                while (!Player.isInterestedIn(Actor2)) {
                    Actor2 = scene.generatePersonTemporary([])
                }
                Actor2.show()
                Actor2.moveToPersonStand(Player)
                narrative(`A prostitute approached me and performed a nude dance.`)
                Actor2.animate("dance")
                Actor2.dialogue(`You can do whatever you want with me ... I'm already paid for my time.`)
                option([
                    {text: `Fuck the prostitute`},
                    {text: `Decline`},
                ])
                if (0) {
                    Fuck = true
                    scene.sex(Player, Actor2)
                } else {
                    Fuck = false
                }


                narrative(`Soon, a sales rep from the drug company approached me. Of course, I expected them to make an appearance at some point, they weren't paying a fortune for high-end prostitutes to the doctors for shit and giggles.`)
                Actor = scene.generatePersonTemporary([])
                scene.dressFormal()
                Actor.dress()
                Actor.show()
                narrative(`<Actor.name>, the sale rep, certainly wasn't beating around the bush. After all, we're in a shady nightclub, not at the hospital. The drug company is offering a generous monthly commission if I start prescribing their new product to patients, even though it hasn't acquired all the necessary approval from health authorities yet.`)
                option([
                    {text: `Do a deal`},
                    {text: `Do a deal, sign off by fucking the sale rep`},
                    {text: `No deal`},
                ])
                if (0) {
                    Deal = true
                    Player.karma -= 0.5
                } else if (1) {
                    Actor.dialogue(`Of course, sleeping with doctors is part of my job description!`)
                    scene.sex(Actor, Player)
                    Deal = true
                    Player.karma -= 0.5
                } else {
                    Deal = false
                    narrative(`No deal, I'll have to stick to my principles.`)
                    Player.karma += 0.5


                    if (Fuck) {
                        Actor.dialogue(`I would suggest that you reconsider, for the sake of your career ...`)
                        Actor.dialogue(`You see, that over there is a camera. What would your boss at the hospital feel about your video fucking a prostitute being all the internet? What if the patients start recognizing you as 'that sex scandal doctor'?`)
                        narrative(`Oh shit ...`)
                        option([
                            {text: `Do a deal`},
                            {text: `Still no deal`},
                        ])
                        if (0) {
                            narrative(`I have no choice ...`)
                            Deal = true
                            Player.karma -= 0.5
                        } else {
                            Deal = false
                            narrative(`Thankfully, the drug company was just bluffing and never actually put the video on the internet. I guess it could have brought down my career but also would have caused an investigation from the health authorities on why a drug company is inviting doctors to a brothel in the first place.`)
                        }
                    }
                }


                if (Deal) {
                    narrative(`The new monthly commission from the drug company has been added to my income.`)
                    Salary = Player.getSalary()
                    Salary += random(500, 2000)
                    Salary.setSalary()
                }
            }
        } else {
            narrative(`Nothing interesting happened while dealing with the drug companies today. These seem to be abiding to the regulations, not doing any shady deals.`)
        }
    })
})
module.exports = scene