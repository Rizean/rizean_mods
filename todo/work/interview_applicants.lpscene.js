// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\interview_applicants.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'interview_applicants'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([7, 11])
    scene.who("none")
    scene.other(($IF) => {
        $IF(Player.jobexperience > 20 && random(0, 100) < 0.01 * (Player.interpersonal + Player.jobexperience))
    })


    scene.start(() => {
        let Candidate = scene.generatePerson()
        let GoodCandidate = true
        scene.setBackground("work")


        narrative(`I've been asked to interview a candidate for the company's graduate scheme. Should I accept this opportunity?`)
        option([
            {text: `Yes`},
            {text: `No`},
        ])
        if (0) {
            narrative(`Why not? It would be an interesting experience.`)
            narrative(`Later on ...`)
            Candidate = scene.generatePerson()
            Candidate.blendPreset("twenties")
            Candidate.dress()
            Candidate.randomizeHairs()
            Candidate.show(2)
            Candidate.dialogue(`It's a pleasure to meet you!`, `Happy`)
            Player.dialogue(`The pleasure is all mine, <Candidate.name>. Shall we begin the interview?`, `Happy`)
            if (Candidate.intelligence + Candidate.interpersonal > random(50, 150)) {
                narrative(`<Candidate.name> put in an impressive performance during the interview, answering all the questions I posed with ease. <Candidate.He_or_She> also seemed like a nice <Candiate.guy_or_gal> too.`)
                GoodCandidate = true
            } else {
                narrative(`<Candidate.name> had a terrible interview, struggling to answer many questions I posed. <Candidate.He_or_She> also didn't seem to be a good fit for the company's organizational culture.`)
                GoodCandidate = false
            }
            narrative(`How should I rate this interview later on to HR?`)
            option([
                {text: `A rejection`},
                {text: `A recommendation`},
                {text: `Demand <Candidate.his_or_her> number for a recommendation`},
            ])
            if (2) {
                Player.dialogue(`I'll be honest with you: you performed very poorly in this interview and will surely get rejected. However, I'm willing to change my mind if you go out with me.`, `Flirty`)
                if ((GoodCandidate && Player.intelligence < random(0, 50)) || Player.intelligence < random(0, 100) || Candidate.attractionToPlayer > random(0, 100)) {
                    Candidate.dialogue(`I guess I have no other options ...`, `Flirty`)
                    narrative(`We exchanged contacts and said goodbye. I came back to the office and stayed true to my words by putting in a recommendation for the hiring of <Candidate.name>.`)
                    if (Candidate.intelligence > random(0, 100)) {
                        narrative(`Soon <Candidate.he_or_she> was hired and joined the company as one of my colleagues.`)
                        Candidate.addColleague()
                        Player.exchangeContact(Candidate)
                    } else {
                        narrative(`Despite the recommendation, mine wasn't the final round of interview and <Candidate.name> ended up still getting rejected. What a shame! I was looking forward to having <Candidate.him_or_her> as my colleague.`)
                        narrative(`Needless to say, after getting rejected, <Candidate.name> also blocked my number.`)
                        Candidate.rapportwithplayer -= random(0, 30)
                    }
                } else {
                    Candidate.dialogue(`Oh, that's not happening. In fact, if everyone at your company is an unprofessional sleazy pervert like you, then I'm not interested in working here anymore. Goodbye!`, `Angry`)
                    Candidate.hide()
                    if (Candidate.intelligence > random(50, 100)) {
                        narrative(`And that wasn't even the end of it. The candidate was a smart cookie - <Candidate.he_or_she> filled a complaint to my company about my indecent proposal and threatened to leak it to the press and sue the company for discrimination and harassment. The company had to settle, losing quite a bit of money in the process.`)
                        if (Player.interpersonal > random(50, 100)) {
                            narrative(`Basically begging for forgiveness from my bosses, I managed to keep my job, but just barely ...`)
                            Player.jobperformance -= random(0, 100)
                        } else {
                            narrative(`Needless to say, I was promptly fired over the incident. Also, my reputation in the industry was forever damaged.`)
                            Player.loseJob()
                            Player.jobexperience -= random(0, 20)
                        }
                    }
                }
            } else {
                Candidate.dialogue(`Thank you for your time. I just want to stress again how much this job means to me.`, `Happy`)
                Player.dialogue(`Thank you for coming. HR should be in touch in a few days.`, `Happy`)
                Candidate.hide()
                if (0) {
                    narrative(`Having ended the interview, I suggested a rejection in my interview report to HR.`)
                } else {
                    narrative(`Having ended the interview, I recommended that <Candidate.name> be hired in my report to HR.`)
                    if (Candidate.intelligence > random(0, 100)) {
                        narrative(`Soon <Candidate.he_or_she> was hired and joined the company as one of my colleagues.`)
                        Candidate.addColleague()
                        if (GoodCandidate) {
                            Candidate.rapportwithplayer += random(0, 30)
                        } else {
                            Candidate.rapportwithplayer += random(0, 50)
                        }
                    } else {
                        narrative(`Despite the recommendation, mine wasn't the final round of interview and <Candidate.name> ended up still getting rejected. What a shame! I was looking forward to having <Candidate.him_or_her> as my colleague.`)
                    }
                }
            }


        } else {
            narrative(`I made some excuses to not do it. It would be a waste of time. They asked one of my colleagues to do it instead.`)
        }


    })
    scene.timeout(500, "interview_applicants")
})
module.exports = scene