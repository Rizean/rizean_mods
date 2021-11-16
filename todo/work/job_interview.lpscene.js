// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\job_interview.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'job_interview'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, costOfLiving, choice, gameDifficulty} = scene

    scene.what(["none"])
    scene.where(["none"])
    scene.when([0, 24])
    scene.who("none")
    scene.other("none")


    let HadSex = false
    HadSex = false
    scene.start(() => {
        let Difficulty = random(0.25, 2)
        let Salary = 1500 + Difficulty * Player.jobexperience * 100 * costOfLiving
        let SalaryConverted = Salary.convertToLocalCurrency("true")
        let LieOnCV = false
        let Dice = random(0, 0.7)
        let Boss = scene.generatePerson()
        let Performance = 0
        let Flirt = 0
        let Porn = scene.isModEnabled("vin_VanillaPorn")
        let Vanilla = scene.isModEnabled("vin_VanillaRealistic")
        let Interested = Boss.isInterestedIn(Player)
        let Diff_Intel = Boss.intelligence - Player.intelligence
        let Diff_Inter = Boss.interpersonal - Player.interpersonal


        Difficulty = random(0.25, 2)
        Salary = 1500 + Difficulty * Player.jobexperience * 100 * costOfLiving
        SalaryConverted = Salary.convertToLocalCurrency("true")


        narrative(`I discovered a open vacancy at this company for someone with my experience. I calculated that I could take home around <SalaryConverted> per month with this job.`)


        narrative(`Should I apply for this position?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`I spent some time completing application forms and tailoring my CV and cover letter to the job ad. I'm fairly happy with what I currently have. However, I reckon certain 'embellishments' on my application would do well for my success chance.`)
            option([
                {text: `Be honest`},
                {text: `Lie a bit`},
            ])
            if (0) {
                narrative(`I remained honest in everything I wrote and submitted my application`)
                LieOnCV = false
            } else {
                narrative(`I added a few believable lies to make myself look better as a candidate, then submitted my application`)
                LieOnCV = true
            }


            if (LieOnCV) {
                Dice = random(0, 0.7)
            } else {
                Dice = random(0, 1)
            }


            narrative(`A couple of weeks later ...`)
            if (Dice * Difficulty < 0.005 * (Player.intelligence + Player.interpersonal)) {
                Player.dialogue(`Thank you for your call. I'm looking forward to the upcoming interview.`, `Happy`)
                narrative(`I received a call from the HR department, notifying me that my application was successful and inviting me for an interview. I must now prepare for the fateful day.`)
                if (LieOnCV) {
                    narrative(`I can't know for sure, but perhaps my subtle lies on the application did their magic. Not that they don't carry certain risks ...`)
                }


                scene.setBackground("work")
                narrative(`The day of the interview ...`)


                Player.dress()
                narrative(`I hope I'm smartly dressed enough ...`)
                Boss = scene.generatePerson()


                if (random(0, 1) < 0.7) {
                    scene.$random(() => {
                        Boss.blendPreset("workaholic")
                        Boss.blendPreset("workhard_playhard")
                    })
                }


                if (random(0, 1) < 0.95) {
                    scene.$random(() => {
                        Boss.blendPreset("fourties")
                        Boss.blendPreset("fifties")
                        Boss.blendPreset("sixties")
                    })
                }


                Boss.randomizeFace()
                Boss.randomizeHairs()


                Boss.dress()
                Boss.show(2)
                Boss.moveToPerson(Player)


                Boss.dialogue(`I'm the Managing Director, <Boss.name> <Boss.name_last>. It's a pleasure to meet you, <Player.Mr_or_Ms> <Player.name_last>.`, `Happy`)
                Player.dialogue(`The pleasure is all mine, <Boss.Mr_or_Ms> <Boss.name_last>. Please, just <Player.name> is enough.`, `Happy`)
                Boss.dialogue(`Please take a seat ... So, <Player.name>, shall we begin the interview?`, `Happy`)


                Performance = 0
                Flirt = 0
                Porn = scene.isModEnabled("vin_VanillaPorn")
                Vanilla = scene.isModEnabled("vin_VanillaRealistic")
                Interested = Boss.isInterestedIn(Player)


                Diff_Intel = Boss.intelligence - Player.intelligence
                if (Diff_Intel < 0) {
                    Diff_Intel *= -1
                }


                Diff_Inter = Boss.interpersonal - Player.interpersonal
                if (Diff_Inter < 0) {
                    Diff_Inter *= -1
                }


                Boss.dialogue(`First of all, <Player.name>, could you please tell me a bit about yourself?`)
                option([
                    {text: `Focus on your professional and academic achievements`},
                    {text: `Focus on your interests and hobbies`},
                    {text: `Flirt`, condition: Player.perversion > 10},
                ])
                if ((choice == 0 && Diff_Intel * Difficulty < random(0, 90)) || (1 && Diff_Inter * Difficulty < random(0, 90)) || (2 && Interested && (Boss.perversion + Player.attractiveness) > random(0, 200))) {
                    narrative(`<Boss.He_or_She> seemed receptive to my answer.`)
                    Performance += random(0, 2)
                    if (2) {
                        Flirt += 1
                        Player.perversion += 0.01
                    }
                } else {
                    narrative(`My answer didn't seem to impress <Boss.name> at all ...`)
                    Performance -= random(0, 2)
                }


                Boss.dialogue(`Alright, <Player.name>, can you list some of your strengths?`)
                option([
                    {text: `Analytical skills, problem-solving, numeracy skills, IT proficiency`},
                    {text: `Communication skills, teamwork and leadership`},
                    {text: `Flirt`, condition: Player.perversion > 10},
                ])
                if ((0 && Diff_Intel * Difficulty < random(0, 90)) || (1 && Diff_Inter * Difficulty < random(0, 90)) || (2 && Interested && (Boss.perversion + Player.attractiveness) > random(0, 200))) {
                    narrative(`<Boss.He_or_She> seemed receptive to my answer.`)
                    Performance += random(0, 2)
                    if (2) {
                        Flirt += 1
                        Player.perversion += 0.01
                    }
                } else {
                    narrative(`My answer didn't seem to impress <Boss.name> at all ...`)
                    Performance -= random(0, 2)
                }


                Boss.dialogue(`Thank you, <Player.name>. Now, what weaknesses do you have?`)
                option([
                    {text: `I'm a perfectionist.`},
                    {text: `I can be too gentle and find it hard to criticize colleagues.`},
                    {text: `Flirt`, condition: Player.perversion > 10},
                ])
                if ((0 && Diff_Intel * Difficulty < random(0, 90)) || (1 && Diff_Inter * Difficulty < random(0, 90)) || (2 && Interested && (Boss.perversion + Player.attractiveness) > random(0, 200))) {
                    narrative(`<Boss.He_or_She> seemed receptive to my answer.`)
                    Performance += random(0, 2)
                    if (2) {
                        Flirt += 1
                        Player.perversion += 0.01
                    }
                } else {
                    narrative(`My answer didn't seem to impress <Boss.name> at all ...`)
                    Performance -= random(0, 2)
                }


                Boss.dialogue(`What do you know about our company? Why do you want to work here?`)
                option([
                    {text: `Impress <Boss.him_or_her> with your research about the business`},
                    {text: `What attracts me most to this company is its people`},
                    {text: `Flirt`, condition: Player.perversion > 10},
                ])
                if ((0 && Diff_Intel * Difficulty < random(0, 90)) || (1 && Diff_Inter * Difficulty < random(0, 90)) || (2 && Interested && (Boss.perversion + Player.attractiveness) > random(0, 200))) {
                    narrative(`<Boss.He_or_She> seemed receptive to my answer.`)
                    Performance += random(0, 2)
                    if (2) {
                        Flirt += 1
                        Player.perversion += 0.01
                    }
                } else {
                    narrative(`My answer didn't seem to impress <Boss.name> at all ...`)
                    Performance -= random(0, 2)
                }


                Boss.dialogue(`<Player.name>, where do you see yourself five years from now?`)
                option([
                    {text: `Being seen as a specialist in this field`},
                    {text: `Supporting and mentoring new recruits`},
                    {text: `Flirt`, condition: Player.perversion > 10},
                ])
                if ((0 && Diff_Intel * Difficulty < random(0, 90)) || (1 && Diff_Inter * Difficulty < random(0, 90)) || (2 && Interested && (Boss.perversion + Player.attractiveness) > random(0, 200))) {
                    narrative(`<Boss.He_or_She> seemed receptive to my answer.`)
                    Performance += random(0, 2)
                    if (2) {
                        Flirt += 1
                        Player.perversion += 0.01
                    }
                } else {
                    narrative(`My answer didn't seem to impress <Boss.name> at all ...`)
                    Performance -= random(0, 2)
                }


                Boss.dialogue(`I think that's everything from me. Do you have any questions?`)
                option([
                    {text: `Ask about the role`},
                    {text: `Ask about the team`},
                    {text: `Offer my number`, condition: Player.perversion > 20 && Flirt > 0},
                    {text: `Offer sex`, condition: Porn && Player.perversion > 40 && Flirt > 1},
                ])
                if (2) {
                    Player.dialogue(`Please, call me. I would love to meet in a more casual setting ... for your wise 'career advice' and get to know you in a more 'personal' level.`, `Wink`)
                    Player.perversion += 0.05
                    if (Interested && Flirt * (Boss.perversion + Player.attractiveness) > random(0, 200)) {
                        narrative(`Making sure first that no-one else was around, <Boss.he_or_she> sneakily took my number.`)
                        Player.exchangeContact(Boss)
                        Performance += random(0, 5)


                        if (random(0, 100) < Boss.attractionToPlayer + Boss.perversion) {
                            scene.setBackground("home")
                            narrative(`The next morning ...`)
                            scene.secondScreen(Boss)
                            Boss.show()
                            Boss.dialogue(`Hi, it's me, <Boss.name>.`, `Happy`)
                            Player.dialogue(`Of course, <Boss.Mr_or_Ms> <Boss.name_last>. I was expecting your call.`, `Happy`)
                            Boss.dialogue(`Please, just call me <Boss.name>. You know how you mentioned you wanted to meet outside of the office. I know this great bar downtown ...`, `Flirty`)
                            option([
                                {text: `Agree to go on a date`},
                                {text: `Turn <Boss.him_or_her> down`},
                            ])
                            if (1) {
                                Player.dialogue(`I'm afraid I'm busy tonight. Maybe next time ...`, ``)
                                Performance -= random(0, 10)
                                scene.secondScreen()
                                narrative(`I'm not even sure why I did that. Why I gave <Boss.him_or_her> my number only to turn <Boss.him_or_her> down now. This can't be good for my chance of getting the job ...`)
                            } else {
                                Player.dialogue(`Of course, I can't wait to see you there!`, `Wink`)
                                Performance += random(0, 5)
                                scene.secondScreen()
                                scene.setBackground("bar")
                                Player.dress()
                                Boss.dress()


                                narrative(`That night ...`)
                                Boss.show()
                                Boss.attractionToPlayer += 5
                                Player.dialogue(`This is a fancy place in fact. You have a great taste, <Boss.name>!`, `Flirty`)
                                Boss.dialogue(`You flatter me ... How time flies! It's already 2am. Would you mind if I drive you home?`, `Flirty`)
                                Player.dialogue(`That's very nice of you! Let's go.`, `Flirty`)
                                scene.setBackground("street")
                                narrative(`20 minutes later ...`)
                                Boss.dialogue(`So here you are. This is a nice neighborhood to live.`, `Flirty`)
                                narrative(`And <Boss.name> kept the conversation going in the car. It was obvious that <Boss.he_or_she> was expecting something more ...`)
                                option([
                                    {text: `Say goodbye`},
                                    {text: `Kiss <Boss.him_or_her>`},
                                    {text: `Invite <Boss.him_or_her> inside for 'tea'`, condition: Vanilla},
                                ])
                                if (0) {
                                    narrative(`<Boss.name> seemed disappointed but forced a smile to say farewell anyway. After all, I did go on a date with <Boss.him_or_her>, that should be enough to help my chances of getting the job.`)
                                    Performance -= random(0, 5)
                                } else {
                                    if (1) {
                                        Player.animatePair(Player, Boss, "Kissing")
                                        Player.dialogue(`...`, `Kiss`)
                                        Boss.dialogue(`...`, `Kiss`)
                                        narrative(`I leaned in for a kiss, which should make <Boss.name> think twice before picking anyone else for the job. Afterwards, we parted ways.`)
                                        Player.perversion += 0.05
                                    } else {
                                        Player.perversion += 0.2
                                        Performance += random(0, 10)
                                        scene.setBackground("home")
                                        narrative(`Let's not kid ourselves here! We both knew how this night was going to end up. As soon as we were inside, our hands were all over each other and we started passionately making out.`)
                                        if (scene.tfGame() && Boss.isMale()) {
                                            narrative(`When I was a man I used to hold the moral high ground and somewhat looked down on women who use their bodies to get advantages in life. Here I am, offering my body in exchange for a job offer. I'm such a hypocrite after all.`)
                                        }
                                        HadSex = true
                                        scene.sex(Boss, Player)
                                    }
                                }
                            }
                        }
                    } else {
                        Boss.dialogue(`I'm afraid that's very unprofessional. I cannot do that!`, `Irritated`)
                        Performance -= random(0, 10)
                    }
                } else {
                    if ((0 && Diff_Intel * Difficulty < random(0, 90)) || (1 && Diff_Inter * Difficulty < random(0, 90))) {
                        narrative(`<Boss.He_or_She> seemed impressed by my eager questions.`)
                        Performance += random(0, 2)
                    } else {
                        if (3) {
                            narrative(`I started rubbing my hand on <Boss.name>'s inner thigh.`)
                            Player.dialogue(`I want you to know that I'll do anything to get this job ... anything. Especially for such a good-looking hiring manager as yourself.`, `Flirty`)
                            if (scene.tfGame() && Boss.isMale()) {
                                narrative(`When I was a man I used to hold the moral high ground and somewhat looked down on women who use their bodies to get advantages in life. Here I am, offering my body in exchange of a job offer. I'm such a hypocrite after all.`)
                            }
                            Player.perversion += 0.5
                            if (Interested && Flirt * (Boss.perversion + Player.attractiveness) > random(0, 400)) {
                                narrative(`Checking first that no-one else was around, <Boss.he_or_she> sneakily pulled down the window shades and locked the interview room's door. <Boss.He_or_She> then approached me full of lust in <Boss.his_or_her> eyes.`)
                                Performance += random(0, 20)
                                HadSex = true
                                scene.sex(Boss, Player)
                            } else {
                                Boss.dialogue(`What are you doing? That's totally inappropriate. I think this interview has run its course. Goodbye!`, `Angry`)
                                Performance -= random(0, 30)
                            }
                        } else {
                            narrative(`My questions didn't seem to impress <Boss.name> at all ...`)
                            Performance -= random(0, 2)
                        }
                    }
                }


                Boss.hide()
                scene.setBackground("home")
                narrative(`A few days later ...`)
                Player.dress()


                if (Performance > random(0, 5) * Difficulty * gameDifficulty) {
                    Player.dialogue(`Thank you so much for your call. I'm looking forward to starting my first day at your firm.`, `Excited`)
                    narrative(`The HR department called. I got the job! Subject to a reference check, the contract is on its way. I can't wait to start!`)
                    if (!LieOnCV || random(0, 70) < Player.intelligence) {
                        Player.moveJobs()
                        Salary.setSalary()
                        Boss.setBoss()
                        scene.setGlobal(`Plaything`, `0`)
                        Player.mood += 100
                        scene.timeout(5000, "performance_review")
                        scene.setGlobal(`SleepingWithBoss`, `0`)
                    } else {
                        Player.dialogue(`No! No! Please let me explain. This is all a big misunderstanding ...`, `Anxious`)
                        narrative(`Oh no! Their reference check exposed the blatant lies on my application. I would not be signing any contract with them after all ... The best I can hope for is my dishonest reputation doesn't get to other employers.`)
                        Player.mood -= random(0, 40)
                    }
                } else {
                    Player.dialogue(`Thank you for your consideration anyway. I'll be sure to stay updated about the firm's future positions.`, `Sad`)
                    narrative(`The HR department called. I didn't get the job ... My job hunt continues.`)
                    if (HadSex) {
                        narrative(`What a damn fucker that Managing Director is! I can't believe I got taken advantage of - slept with <Boss.him_or_her> and still didn't get the job.`)
                    }
                    Player.mood -= random(0, 30)
                }


            } else {
                Player.dialogue(`Thank you for your time anyway. All the best with finding the right candidate.`, `Sad`)
                narrative(`Oh no! The HR department just called. My application was unsuccessful. I didn't even manage to secure an interview. I must now look for alternative positions elsewhere.`)
                if (!LieOnCV) {
                    narrative(`In hindsight, maybe being so honest wasn't a good idea after all.`)
                }
                Player.mood -= random(0, 10)
            }


        } else {
            narrative(`I decided against applying for this position.`)
        }


    })
})
module.exports = scene