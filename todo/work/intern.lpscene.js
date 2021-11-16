// noinspection ES6ConvertVarToLetConst
// path D:\other\LifePlay_4_15_64bit\LifePlay\Content\Modules\vin_Base\Scenes\work\intern.lpscene

const {LPScene} = require('lifeplayjs')

const scene = new LPScene({name: 'intern'}, (scene) => {
    const {Player, none, $WHERE, narrative, option, random, WHEN, choice} = scene

    scene.what(["work"])
    scene.where(["work"])
    scene.when([8, 12])
    scene.who("none")
    scene.other(($IF) => {
        $IF(random(0, 100) < 3 && Player.jobexperience > 20)
    })


    scene.start(() => {
        let Intern = scene.generatePerson()
        let Interested = Intern.isInterestedIn(Player)
        let Success = false
        let Dominant = Intern.isDominantSex(Player)
        scene.setBackground("work")
        narrative(`The company I work for has an unpaid internship program that occasionally puts an undergraduate or postgraduate student in our department for a couple of weeks at a tine, before they are rotated off to another department.`)
        Intern = scene.generatePerson()
        narrative(`I was notified by email to expect a new intern, <Intern.name> <Intern.name_last>, to join the department today. I was asked to be <Intern.his_or_her> mentor for the duration of <Intern.his_or_her> rotation and write <Intern.him_or_her> a performance evaluation after the internship ends.`)
        Intern.blendPreset("twenties")
        Intern.randomizeFace()
        Intern.randomizeHairs()
        Intern.dress()
        Intern.show(2)
        Intern.dialogue(`Hi, I'm <Intern.name>, the new intern. It's a pleasure to meet you.`, `Happy`)
        Player.dialogue(`Nice to meet you too, <Intern.name>. I have heard great things about you from HR.`, `Happy`)
        Interested = Intern.isInterestedIn(Player)


        narrative(`As <Intern.his_or_her> mentor, what sort of things should I get <Intern.name> to do during his internship?`)
        option([
            {text: `Ignore <Intern.him_or_her> and focus on your own work`},
            {text: `Give menial tasks like making coffee and grabbing lunch`},
            {text: `Throw <Intern.him_or_her> in at the deep end`},
            {text: `Delegate important responsibilities and provide guidance`},
        ])
        if (0) {
            narrative(`I didn't care much for this internship program. I'd rather just focus on keeping my own job and getting promotions.`)
            Success = false
            Intern.rapportwithplayer -= random(0, 30)
            if (Interested) {
                Intern.attractionToPlayer -= random(0, 15)
            }
            Player.karma -= 2.5
        } else if (1) {
            narrative(`My own manager bosses around all the time so why should I be any nicer to my own subordinates? I made sure <Intern.he_or_she> knew I was the boss here and ordered <Intern.him_or_her> around running my errands.`)
            Success = false
            Intern.rapportwithplayer -= random(0, 20)
            if (Interested) {
                Intern.attractionToPlayer += random(0, 30) * (Intern.masochist / 100)
            }
        } else if (2) {
            narrative(`Well, <Intern.he_or_she> looks good on paper. Let's throw <Intern.him_or_her> in there without any support and see if <Intern.he_or_she> can swim! It's survival of the fittest in this business.`)
            if (Intern.intelligence + Intern.interpersonal > random(0, 300)) {
                narrative(`And <Intern.name> certainly rose up to the challenge and made some great contributions.`)
                Player.jobperformance += random(0, 5)
                Intern.rapportwithplayer += random(0, 20)
                if (Interested) {
                    Intern.attractionToPlayer += random(0, 10)
                }
                Success = true
            } else {
                narrative(`Not that I should be too surprised but without proper mentoring, <Intern.name> failed miserably in virtually all tasks <Intern.he_or_she> was given. Well, it doesn't look like the <Intern.guy_or_girl> is going to make it in this business ...`)
                Intern.rapportwithplayer -= random(0, 20)
                if (Interested) {
                    Intern.attractionToPlayer -= random(0, 10)
                }
                Success = false
            }
        } else if (3) {
            narrative(`I remember being an intern myself back in college. I'm going to try my best to be a good mentor for the <Intern.boy_or_girl>.`)
            narrative(`I assigned <Intern.name> plenty of responsibilities but also spent a lot of my own time giving <Intern.him_or_her> the knowledge needed to fulfil those. You can only do so many things at once so I did feel my own job performance suffered a bit as a result.`)
            Player.jobperformance -= random(0, 5)
            Intern.rapportwithplayer += random(0, 30)
            if (Interested) {
                Intern.attractionToPlayer += random(0, 20)
            }


            if (Intern.intelligence + Intern.interpersonal > random(0, 150)) {
                narrative(`With my help, <Intern.name> managed to put in an impressive performance. What's more - <Intern.he_or_she> never failed to credit me for <Intern.his_or_her> success whenever praised by my colleagues.`)
                Player.jobperformance += random(0, 5)
                Success = true
            } else {
                narrative(`Despite my best efforts, <Intern.name> turned out to be rather useless and still didn't manage to achieve anything noteworthy during <Intern.his_or_her> time at my department.`)
                Success = false
            }
        }


        Intern.hide()


        narrative(`<Intern.name>'s rotation period at my department is over. Now I just need to write <Intern.him_or_her> a performance review. This can be quite important for the intern's future career prospects.`)
        if (Success) {
            narrative(`Without a doubt, <Intern.name> truly impressed during his time here and everyone else noticed. It would be impossible to write a bad review of <Intern.his_or_her> performance.`)
        } else {
            narrative(`Truthfully, <Intern.name> didn't leave much of an impact at all while <Intern.he_or_she> was here.`)
        }
        narrative(`What sort of performance review should I write for <Intern.name>?`)
        option([
            {text: `Good`},
            {text: `Bad`, condition: !Success},
            {text: `Demand money for a good review`, condition: !Success},
            {text: `Demand sex for a good review`, condition: !Success && Player.isInterestedIn(Intern) && Player.perversion > 30},
        ])
        if (0) {
            narrative(`I decided to write a review full of praises for the young <Intern.lad_or_lass>.`)
            Intern.rapportwithplayer += random(0, 15)
            if (Interested) {
                Intern.attractionToPlayer += random(0, 5)
            }
        } else if (1) {
            narrative(`No point sugar-coating <Intern.his_or_her> poor display. It is what it is. I wrote a review accordingly.`)
            Intern.rapportwithplayer -= random(0, 15)
            if (Interested) {
                Intern.attractionToPlayer += random(0, 10) * Intern.masochist / 100
            }
        } else if (2) {
            narrative(`The poor intern decided to pay the bribe seeing how important this review is for his future career. From my point of view, some extra cash is always good!`)
            Player.money += random(100, 1000)
            Intern.rapportwithplayer -= random(0, 30)
            if (Interested) {
                Intern.attractionToPlayer -= random(0, 20)
            }
        } else if (3) {
            Intern.show(2)
            Dominant = Intern.isDominantSex(Player)
            Intern.rapportwithplayer -= random(0, 30)
            if (Interested) {
                Intern.attractionToPlayer -= random(0, 20)
            }


            if (Interested && ((!Dominant && Intern.attractionToPlayer + Intern.perversion > random(0, 200)) || (Dominant && Intern.attractionToPlayer + Intern.perversion > random(0, 100)))) {
                Intern.dialogue(`I guess for the sake of my future, I have no other choice ...`, `Sad`)
                Player.dialogue(`Meet me outside after work ...`, `Flirty`)
                Player.moveTo("home")
                narrative(`Later that evening ...`)
                Player.perversion += random(0, 2)
                scene.sex(Player, Intern)
                Intern.hide()
                narrative(`Having received what I want, I went ahead and wrote a positive review for the intern. <Intern.He_or_She> earned it!`)
            } else {
                Intern.dialogue(`I'm afraid I won't do that! That's despicable.`, `Angry`)
                if (Intern.intelligence > random(0, 100)) {
                    Intern.dialogue(`In fact, your attempt to blackmail me has just been recorded on my smartphone. I wonder how you're going to keep your job if this is to be sent to HR. Sexual harassment and all that ...`, `Sarcastic`)
                    Player.dialogue(`What? You sneaky <Intern.bastard_or_bitch>! Fine, I know what you want. I'll write you a good review and you'll drop this, okay?`, `Shocked`)
                    Intern.dialogue(`That's the way it should be ...`, `Evil`)
                } else {
                    Player.dialogue(`Fine then, your choice. I'll make sure to write you a terrible review.`, `Evil`)
                }
            }
        }


        scene.timeout(1500, "intern")
    })
})
module.exports = scene