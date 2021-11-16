// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\performance_review.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'performance_review'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, costOfLiving} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([9, 17])
    scene.who("none")
    scene.other("none")


    let Boss = scene.getSpecific("Boss")
    Boss = scene.getSpecific("Boss")
    scene.start(() => {
        let Fired = true
        let OldSalary = Player.getSalary()
        let Salary = 1500 + random(0.25, 2) * Player.jobexperience * 100 * costOfLiving
        let SalaryConverted = Salary.convertToLocalCurrency("true")
        let Bonus = 2 * (Salary - OldSalary)
        let BonusConverted = Bonus.convertToLocalCurrency("true")
        scene.setBackground("work")
        Boss.dress()
        Boss.show(2)


        Boss.dialogue(`<Player.name>, could I see you in my office in 10 minutes please?`, `Attentive`)
        Player.dialogue(`Of course, <Boss.Sir_or_Madam>. I will be with you shortly.`, `Anxious`)
        narrative(`Well, this was all out of the blue ... Is this going to be good news or bad news? Should I be worried?`)
        scene.passTime(0.05, 0.15)


        Boss.dialogue(`Here you are ... Come, take a seat!`, `Happy`)
        narrative(`I took my seat, anxious about what <Boss.Mr_or_Ms> <Boss.name_last> was going to say next.`)
        Boss.dialogue(`The HR guys and I had a meeting recently about staff performances in our department. We reviewed your performance over the past few months ...`, `Happy`)


        if (Player.jobperformance < random(0, 40) && !Boss.isDating()) {
            Boss.dialogue(`I'm afraid to say that your performance has not lived up to expectations ...`, `Angry`)
            Boss.dialogue(`Your services are thereby no longer required. Your employment contract will be terminated with immediate effect ...`, `Annoyed`)
            Fired = true


            narrative(`Oh no! This is the last thing I wanted to hear. I'm getting fired ...`)
            option([
                {text: `Accept your fate`},
                {text: `Ask for a final chance`},
                {text: `Plead`},
            ])
            if (0) {
                Player.dialogue(`I guess I have nothing more to say. I respect the company's decision. Thank you for the opportunity at least.`, `Sad`)
            } else if (1) {
                Player.dialogue(`Please give me another chance. I will show you I have what it takes to succeed at this company!`, `Scared`)
                if (Player.intelligence + Player.jobperformance + Player.interpersonal + Boss.rapportwithplayer > random(0, 300)) {
                    Fired = false
                    Boss.dialogue(`Fine. I know you're not entirely incompetent. We're willing to give you one final chance. You'd better show us everything you've got or we won't be so tolerant next time!`, `Irritated`)
                    Player.dialogue(`Thank you, <Boss.Sir_or_Madam>. I swear I won't let you down this time!`, `Happy`)
                } else {
                    Boss.dialogue(`I'm afraid we have already given you all the opportunities in the world, and quite frankly, you didn't take them.`, `Furious`)
                }
            } else {
                Player.dialogue(`Please don't fire me. This job is everything to me - I don't know where else I can go. Please, I'll do anything ...`, `Crying`)
                if (Boss.isInterestedIn(Player) && Boss.perversion + Boss.attractionToPlayer > random(0, 100)) {
                    Boss.dialogue(`Anything? Are you sure about that?`, `Flirty`)
                    narrative(`The look on <Boss.his_or_her> face said it all. If I were to keep this job, I would have to do an awful lot more for <Boss.him_or_her> than pleading.`)
                    option([
                        {text: `Offer sex`},
                        {text: `Turn <Boss.him_or_her> down`},
                    ])
                    if (0) {
                        Player.dialogue(`Yes, <Boss.Sir_or_Madam>. Anything ...`, `Flirty`)
                        Fired = false
                        if (scene.isModEnabled("vin_VanillaPorn")) {
                            Boss.dialogue(`Let's get down to business then ...`, `Flirty`)
                        } else {
                            Boss.dialogue(`Then I'll let you off the hook this time. But we shall meet outside the office after work today. And no-one will hear a word of this, are we clear?`, `Flirty`)
                            scene.passTime(2, 4)
                            Player.moveTo("Home")
                            scene.setBackground("home")
                            narrative(`Later on ...`)
                            Boss.dialogue(`Here we are. Nice apartment you've got. Now I understand why you were so desperate to keep that job! Shall we ... get to it then?`, `Flirty`)
                        }


                        scene.sex(Boss, Player)
                        Boss.attractionToPlayer += random(0, 2)
                        Player.perversion += random(0, 0.5)
                        Boss.show(2)
                        Boss.dialogue(`That was good. You might not be any good at your job, but you do know a thing or two in bed. I guess I will talk to HR tomorrow and let you keep your job after all.`, `Flirty`)
                        narrative(`I did it. I got to keep my job, by letting my boss fuck me. Let's hope I don't have to continue doing this every performance review ...`)
                    } else {
                        Player.dialogue(`I'm sorry ... I'm not willing to give you what I think you're suggesting!`, `Sad`)
                        Boss.dialogue(`Then don't waste my time!`, `Furious`)
                    }
                } else if (Player.interpersonal + Boss.rapportwithplayer > random(0, 150)) {
                    Boss.dialogue(`Alright then. I don't want to put you or anyone in such a tight spot. You're a nice <Player.guy_or_gal> after all. Consider it a personal favour. But don't you take advantage of my kindness next time!`, `Sad`)
                    Fired = false
                } else {
                    Boss.dialogue(`Don't waste your words anymore. It's no use. A decision has already been made.`, `Irritated`)
                }
            }


            if (Fired) {
                Player.mood -= 100
                Boss.dialogue(`This security staff will escort you to your desk. You shall then quickly pack up your belongings as per the company's rules and leave the building immediately. Your work number will also be disabled within the next hour.`, `Angry`)
                Player.loseJob()
            }


        } else if (Player.jobperformance < random(60, 100)) {
            Boss.dialogue(`Your performance was painfully mediorce ... Not too good or too bad. I know you're capable of more. So try better next time!`, `Irritated`)
            Boss.dialogue(`Alright, there's no need to look so anxious like that! You may go back to your desk.`, `Happy`)
        } else {
            Boss.dialogue(`Your performance was outstanding. We are very happy with your contributions the last few months. Congratulations!`, `Happy`)
            Player.dialogue(`Thank you, <Boss.Sir_or_Madam>. I'm glad I didn't disappoint you and the company.`, `Excited`)


            OldSalary = Player.getSalary()
            Salary = 1500 + random(0.25, 2) * Player.jobexperience * 100 * costOfLiving


            if (Salary > 1.25 * OldSalary) {
                Salary.setSalary()
                SalaryConverted = Salary.convertToLocalCurrency("true")
                Boss.dialogue(`Even more worthy of congratulating is the fact that we're now in a position to offer you a promotion. You should expect details about your new position in an email from HR soon.`, `Excited`)
                Boss.hide()
                scene.passTime(0.5, 1)
                narrative(`A while later ...`)
                narrative(`HR did indeed send me details about the promotion! My calculations show that the new title will also give me an increased salary of about <SalaryConverted> after taxes. Not bad ... not bad at all.`)
            } else if (Salary > 1.05 * OldSalary) {
                Bonus = 2 * (Salary - OldSalary)
                BonusConverted = Bonus.convertToLocalCurrency("true")
                Boss.dialogue(`To reward you for your performance, we would like to offer you a performance bonus of <BonusConverted>. May that motivate you to further achievements with the company in the future!`, `Excited`)
                Player.money += Bonus
                narrative(`Great news! Some cash boost is always good ...`)
            }
        }


    })
    scene.timeout(5000, "performance_review")


})
module.exports = scene